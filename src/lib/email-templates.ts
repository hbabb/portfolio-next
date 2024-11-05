interface EmailTemplateData {
  name: string;
  email: string;
  message: string;
  location: string;
 }
 
 export const getContactEmailTemplate = ({ name, email, message, location }: EmailTemplateData): string => `
 <!DOCTYPE html>
 <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: #FF9C00;
        color: black;
        padding: 20px;
        border-radius: 5px 5px 0 0;
      }
      .content {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 0 0 5px 5px;
      }
      .metadata {
        background: #eee;
        padding: 10px;
        margin-top: 20px;
        border-radius: 5px;
        font-size: 0.9em;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 0.8em;
        color: #666;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
      <div class="metadata">
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
      </div>
    </div>
    <div class="footer">
      <p>This message was sent via your portfolio contact form.</p>
    </div>
  </body>
 </html>
 `;
 
 export const getAutoReplyTemplate = (name: string): string => `
 <!DOCTYPE html>
 <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background: #FF9C00;
        color: black;
        padding: 20px;
        border-radius: 5px 5px 0 0;
      }
      .content {
        background: #f9f9f9;
        padding: 20px;
        border-radius: 0 0 5px 5px;
      }
      .footer {
        text-align: center;
        margin-top: 20px;
        font-size: 0.8em;
        color: #666;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <h2>Thank You for Your Message</h2>
    </div>
    <div class="content">
      <p>Dear ${name},</p>
      <p>Thank you for reaching out. I have received your message and will respond as soon as possible.</p>
      <p>Please note that while I strive to respond to all inquiries within 24-48 hours, response times may vary depending on current workload.</p>
      <p>Best regards,<br>Heath Babb</p>
    </div>
    <div class="footer">
      <p>This is an automated response. Please do not reply to this email.</p>
    </div>
  </body>
 </html>
 `;