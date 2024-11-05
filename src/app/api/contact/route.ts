import { getAutoReplyTemplate, getContactEmailTemplate } from '@/lib/email-templates';
import { validateEmail } from '@/lib/email-verification';
import { rateLimiters } from '@/lib/rate-limiter';
import { checkForSpam } from '@/lib/spam-detection';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Content limits
const CONTENT_LIMITS = {
  name: { min: 2, max: 100 },
  email: { min: 5, max: 254 },
  message: { min: 10, max: 5000 }
};

export async function POST(req: Request) {
  let ip = 'unknown';
  let userAgent = 'unknown';
  
  try {
    const forwardedFor = req.headers.get('x-forwarded-for');
    ip = forwardedFor ? forwardedFor.split(',')[0] : 'unknown';
    userAgent = req.headers.get('user-agent') || 'unknown';

    try {
      await rateLimiters.burstPrevention.consume(ip);
      await rateLimiters.submission.consume(ip);
    } catch {
      console.warn(`Rate limit exceeded for ${ip} (${userAgent})`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const rawData = await req.json();
    const { phoneNumber, website } = rawData;

    // Honeypot check
    if (phoneNumber || website) {
      console.warn(`Honeypot triggered from ${ip}`);
      await rateLimiters.spamPrevention.penalty(ip);
      return NextResponse.json({ success: false });
    }

    // Sanitize and validate content length
    const sanitizedData = {
      name: rawData.name.replace(/[\u0000-\u001F\u007F-\u009F\u200B-\u200D\uFEFF]/g, '').trim(),
      email: rawData.email.trim().toLowerCase(),
      message: rawData.message.replace(/[\u0000-\u001F\u007F-\u009F\u200B-\u200D\uFEFF]/g, '').trim()
    };

    // Check content limits
    for (const [field, value] of Object.entries(sanitizedData)) {
      const limits = CONTENT_LIMITS[field as keyof typeof CONTENT_LIMITS];
      if (limits && (value.length < limits.min || value.length > limits.max)) {
        return NextResponse.json(
          { error: `${field} must be between ${limits.min} and ${limits.max} characters` },
          { status: 400 }
        );
      }
    }

    const emailValidation = validateEmail(sanitizedData.email);
    if (!emailValidation.isValid) {
      console.warn(`Invalid email attempt from ${ip}: ${emailValidation.reason}`);
      await rateLimiters.failedAttempts.consume(ip);
      return NextResponse.json(
        { error: emailValidation.reason },
        { status: 400 }
      );
    }

    const messageSpamCheck = checkForSpam(sanitizedData.message);
    const nameSpamCheck = checkForSpam(sanitizedData.name);
    
    if (messageSpamCheck.isSpam || nameSpamCheck.isSpam) {
      console.warn(`Spam detected from ${ip}`);
      await rateLimiters.spamPrevention.penalty(ip);
      return NextResponse.json(
        { error: 'Message contains invalid content' },
        { status: 400 }
      );
    }

    const { error: notificationError } = await resend.emails.send({
      from: 'Heath Babb <noreply@heath-babb.tech>',
      to: ['info@heath-babb.tech'],
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      html: getContactEmailTemplate({ 
        ...sanitizedData,
        location: 'Unknown' // Simplified to remove GeoIP dependency
      })
    });

    if (notificationError) {
      console.error(`Failed to send notification for ${ip}:`, notificationError);
      throw new Error('Failed to send notification');
    }

    const { error: autoReplyError } = await resend.emails.send({
      from: 'Heath Babb <noreply@heath-babb.tech>',
      to: [sanitizedData.email],
      subject: 'Thank You for Your Message',
      html: getAutoReplyTemplate(sanitizedData.name)
    });

    if (autoReplyError) {
      console.error(`Auto-reply failed for ${sanitizedData.email} (${ip}):`, autoReplyError);
    }

    console.info(`Successfully processed contact form from ${ip}`);
    return NextResponse.json({
      message: 'Message sent successfully'
    });

  } catch (error) {
    console.error(`Error processing contact form from ${ip}:`, error);
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    );
  }
}