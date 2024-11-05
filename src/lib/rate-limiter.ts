import { RateLimiterMemory } from 'rate-limiter-flexible';

/**
 * Rate limiters for different types of requests
 */
export const rateLimiters = {
  // General form submissions
  submission: new RateLimiterMemory({
    points: 3,         // 3 attempts
    duration: 3600,    // per hour
  }),
  
  // Failed attempts tracking
  failedAttempts: new RateLimiterMemory({
    points: 5,         // 5 attempts
    duration: 86400,   // per day
  }),
  
  // Spam prevention
  spamPrevention: new RateLimiterMemory({
    points: 1,         // 1 attempt
    duration: 86400,   // per day
    blockDuration: 86400, // block for a day
  }),

  // Burst prevention
  burstPrevention: new RateLimiterMemory({
    points: 10,        // 10 attempts
    duration: 60,      // per minute
  })
};