import { botResponses, fallbackResponses } from '../data/botResponses';
import { BotResponse } from '../types/chat';

export function getBotResponse(userMessage: string): BotResponse {
  const message = userMessage.toLowerCase().trim();
  
  // Check for exact matches first
  if (botResponses[message]) {
    return botResponses[message];
  }
  
  // Check for partial matches using keywords
  const keywords = Object.keys(botResponses);
  const matchedKeyword = keywords.find(keyword => 
    message.includes(keyword) || keyword.split(' ').some(word => message.includes(word))
  );
  
  if (matchedKeyword) {
    return botResponses[matchedKeyword];
  }
  
  // Special patterns
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return botResponses.hello;
  }
  
  if (message.includes('order') && (message.includes('where') || message.includes('status') || message.includes('track'))) {
    return botResponses["order status"];
  }
  
  if (message.includes('return') || message.includes('refund')) {
    return botResponses["return policy"];
  }
  
  if (message.includes('ship') && (message.includes('cost') || message.includes('price') || message.includes('fee'))) {
    return botResponses["shipping cost"];
  }
  
  if (message.includes('ship') && (message.includes('time') || message.includes('long') || message.includes('fast'))) {
    return botResponses["shipping time"];
  }
  
  // Support ticket triggers
  if (message.includes('human') || message.includes('agent') || message.includes('representative') || message.includes('person')) {
    return {
      text: "I'll connect you with a human agent right away! Creating a support ticket now...",
      actionType: "support_ticket",
      category: "escalation"
    };
  }
  
  // Fallback response
  const randomFallback = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
  return {
    text: randomFallback,
    actionType: "fallback",
    category: "unknown"
  };
}

export function generateTicketId(): string {
  return `SUP-${Date.now().toString().slice(-6)}-${Math.random().toString(36).substr(2, 3).toUpperCase()}`;
}

export function simulateTypingDelay(text: string): number {
  // Simulate realistic typing speed (30-50 WPM)
  const words = text.split(' ').length;
  const baseDelay = Math.max(800, words * 100);
  return Math.min(baseDelay, 3000); // Cap at 3 seconds
}