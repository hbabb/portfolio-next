/**
 * Result interface for spam checks
 */
interface SpamCheckResult {
  isSpam: boolean;
  reason?: string;
  confidence?: number;
}

/**
 * Common spam words to check against
 */
export const spamWords = [
  // Existing words
  'casino', 'viagra', 'cialis', 'loan', 'forex', 'bitcoin', 'crypto',
  'investment opportunity', 'make money fast', 'winner', 'lottery',
  'prince', 'inheritance', 'buy now', 'discount', 'free offer',
  'wire transfer', 'western union', 'moneygram', 'paypal transfer',
  'bank account', 'banking details', 'account number',
  'pharmacy', 'prescription', 'medication', 'pills', 'diet pills',
  'password', 'login', 'account access', 'security code', 'verify account',
  'congratulations', 'you\'ve won', 'selected winner', 'lucky recipient',
  'get rich', 'earn from home', 'work from home', 'make money online',
  // Additional crypto/blockchain terms
  'ethereum', 'wallet', 'blockchain', 'nft', 'defi', 'mining', 'token',
  // Additional scam-related terms
  'urgent', 'hurry', 'limited time', 'act now', 'immediately', 'instant',
  'guaranteed return', 'investment return', 'no risk', 'risk-free',
  'million dollars', 'billion dollars', 'lottery winner', 'inheritance claim'
];

/**
 * Regular expressions for detecting spam patterns
 */
export const spamPatterns = [
  // Existing patterns
  /https?:\/\/[^\s]+\.(ru|cn|tk|top|xyz|pw|cc|racing|date|stream)/i,
  /(\.ru|\.cn|\.tk|\.top|\.xyz|\.pw|\.cc|\.racing|\.date|\.stream)\/?$/i,
  /@.*@/,
  /[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}@/,
  /\d{8,}/,
  /[A-Z0-9]{10,}/,
  /\b(buy|sell|earn).{0,20}(bitcoin|crypto)/i,
  /\b(investment).{0,20}(opportunity|profit)/i,
  /\b(free|discount).{0,20}(offer|trial)/i,
  /\b(work|earn|make money).{0,20}(from home|online)/i,
  /\b(limited|special).{0,20}(time|offer)/i,
  /\b(verify|confirm).{0,20}(account|identity)/i,
  /[!?$]{3,}/,
  /[A-Z\s]{20,}/,
  /<[^>]*>/,
  /javascript:/i,
  /on\w+\s*=/i,
  // Additional patterns
  /(.{10,})\1{2,}/,  // Repeated text
  /(https?:\/\/[^\s]+){3,}/g,  // Excessive URLs
  /[\u2800-\u28FF\u3164\u1160-\u11A7]/,  // Unicode abuse
  /[\u200B-\u200F\u202A-\u202E\uFEFF]/,  // Invisible text
  /(?:(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4})){2,}/,  // Multiple phone numbers
  /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}){2,}/,  // Multiple emails
  /[^\x00-\x7F]{10,}/,  // Excessive non-ASCII
  /\b(urgent|hurry|limited time|act now|immediately|instant)\b/gi,  // Urgency terms
  /\b(investment|profit|earn|income|dollars|money|cash).{0,20}(guaranteed|quick|fast|easy|online)\b/gi  // Money scam terms
];

/**
 * Enhanced spam detection function
 */
export const checkForSpam = (content: string): SpamCheckResult => {
  let spamScore = 0;
  const reasons: string[] = [];

  // Check for spam words
  const foundSpamWords = spamWords.filter(word => 
    content.toLowerCase().includes(word.toLowerCase())
  );
  
  if (foundSpamWords.length > 0) {
    spamScore += foundSpamWords.length * 20;
    reasons.push('Suspicious keywords detected');
  }

  // Check for spam patterns
  for (const pattern of spamPatterns) {
    if (pattern.test(content)) {
      spamScore += 25;
      reasons.push('Suspicious pattern detected');
      break;
    }
  }

  // Check for excessive special characters
  const specialCharsCount = (content.match(/[!?$%^&*()]/g) || []).length;
  if (specialCharsCount > content.length * 0.2) {
    spamScore += 15;
    reasons.push('Excessive special characters');
  }

  // Check for repeated words
  const words = content.toLowerCase().split(/\s+/);
  const uniqueWords = new Set(words);
  if (words.length > 10 && uniqueWords.size < words.length * 0.5) {
    spamScore += 20;
    reasons.push('Excessive word repetition');
  }

  // Check text velocity (suspicious if too many long words or repetitive patterns)
  const avgWordLength = words.join('').length / words.length;
  if (avgWordLength > 15) {
    spamScore += 15;
    reasons.push('Suspicious text pattern');
  }

  return {
    isSpam: spamScore >= 50,
    reason: reasons.join('; '),
    confidence: spamScore
  };
};