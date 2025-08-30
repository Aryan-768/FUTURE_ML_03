import { BotResponse } from '../types/chat';

export const botResponses: Record<string, BotResponse> = {
  // Greetings
  hello: {
    text: "Hello! I'm your customer support assistant. How can I help you today?",
    category: "greeting",
    actionType: "greeting",
    followUp: ["Check order status", "Return policy", "Shipping information", "Talk to human agent"]
  },
  hi: {
    text: "Hi there! Welcome to our support center. What can I assist you with?",
    category: "greeting",
    actionType: "greeting",
    followUp: ["Order help", "Product questions", "Account issues", "Technical support"]
  },

  // Order related
  "order status": {
    text: "To check your order status, please provide your order number. You can find it in your confirmation email or account dashboard. Orders typically update within 2-4 hours of placement.",
    category: "orders",
    actionType: "faq"
  },
  "where is my order": {
    text: "I can help you track your order! Please share your order number (starts with #ORD). You can also check your order status in the 'My Orders' section of your account.",
    category: "orders",
    actionType: "faq"
  },
  "cancel order": {
    text: "Orders can be cancelled within 1 hour of placement. After that, they enter our fulfillment process. Would you like me to create a cancellation request for your order?",
    category: "orders",
    actionType: "faq",
    followUp: ["Yes, cancel my order", "Check if I can still cancel", "Modify my order instead"]
  },

  // Shipping
  "shipping time": {
    text: "Our standard shipping takes 3-5 business days. Express shipping (1-2 days) and overnight options are available at checkout. Free shipping on orders over $50!",
    category: "shipping",
    actionType: "faq"
  },
  "shipping cost": {
    text: "Shipping costs vary by location and speed:\n• Standard (3-5 days): $4.99\n• Express (1-2 days): $9.99\n• Overnight: $19.99\n• FREE on orders $50+",
    category: "shipping",
    actionType: "faq"
  },
  "international shipping": {
    text: "We ship to over 50 countries! International shipping takes 7-14 business days and costs $15-25 depending on destination. Customs fees may apply.",
    category: "shipping",
    actionType: "faq"
  },

  // Returns
  "return policy": {
    text: "We offer 30-day returns on most items! Items must be unused and in original packaging. Start your return in the 'My Orders' section or I can help you begin the process.",
    category: "returns",
    actionType: "faq",
    followUp: ["Start a return", "Check return status", "Return without receipt"]
  },
  "refund": {
    text: "Refunds are processed within 3-5 business days after we receive your return. You'll get an email confirmation when your refund is issued. Would you like to check a refund status?",
    category: "returns",
    actionType: "faq"
  },

  // Account
  "forgot password": {
    text: "No problem! Click 'Forgot Password' on the login page and enter your email. You'll receive a reset link within 5 minutes. Check your spam folder if you don't see it.",
    category: "account",
    actionType: "faq"
  },
  "update address": {
    text: "You can update your address in Account Settings > Shipping Addresses. Changes apply to future orders. For pending orders, contact us immediately to update the address.",
    category: "account",
    actionType: "faq"
  },

  // Products
  "product question": {
    text: "I'd be happy to help with product questions! You can find detailed specifications, reviews, and size guides on each product page. What specific product are you asking about?",
    category: "products",
    actionType: "faq"
  },
  "size guide": {
    text: "Size guides are available on each product page under the 'Size Guide' tab. We also offer free size exchanges within 30 days if the fit isn't right!",
    category: "products",
    actionType: "faq"
  },

  // Payment
  "payment methods": {
    text: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and Buy Now Pay Later options like Klarna and Afterpay. All payments are secure and encrypted.",
    category: "payment",
    actionType: "faq"
  },
  "payment failed": {
    text: "Payment failures can happen due to insufficient funds, expired cards, or bank security measures. Please try a different card or contact your bank. Need help with a specific payment issue?",
    category: "payment",
    actionType: "faq"
  },

  // Technical
  "website not working": {
    text: "Sorry you're experiencing technical issues! Try clearing your browser cache, disabling ad blockers, or using a different browser. If problems persist, I'll create a technical support ticket for you.",
    category: "technical",
    actionType: "faq"
  },
  "app not working": {
    text: "For app issues, try force-closing and reopening the app, checking for updates, or restarting your device. What specific problem are you experiencing?",
    category: "technical",
    actionType: "faq"
  }
};

export const fallbackResponses = [
  "I'm not sure about that specific question, but I'd be happy to connect you with a human agent who can help! Would you like me to create a support ticket?",
  "That's a great question! While I don't have that specific information, I can get you connected with our specialized support team who can provide detailed assistance.",
  "I want to make sure you get the most accurate information. Let me connect you with one of our expert agents who can help with your specific situation.",
  "I don't have the exact answer to that question, but our human support team definitely can help! Should I create a support ticket for you?"
];

export const quickActions = [
  "Check order status",
  "Return an item", 
  "Shipping information",
  "Payment help",
  "Talk to human agent",
  "Technical support"
];