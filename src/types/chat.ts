export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  category?: string;
}

export interface BotResponse {
  text: string;
  category?: string;
  followUp?: string[];
  actionType?: 'faq' | 'support_ticket' | 'greeting' | 'fallback';
}

export interface ChatState {
  messages: Message[];
  isTyping: boolean;
  userName?: string;
  conversationStarted: boolean;
}