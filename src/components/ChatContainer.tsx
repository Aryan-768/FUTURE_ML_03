import React, { useState, useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';
import { ChatInput } from './ChatInput';
import { ChatHeader } from './ChatHeader';
import { QuickActions } from './QuickActions';
import { FollowUpActions } from './FollowUpActions';
import { SupportTicketModal } from './SupportTicketModal';
import { WelcomeMessage } from './WelcomeMessage';
import { Message, ChatState } from '../types/chat';
import { getBotResponse, generateTicketId, simulateTypingDelay } from '../utils/botLogic';

export function ChatContainer() {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isTyping: false,
    conversationStarted: false
  });
  
  const [lastBotResponse, setLastBotResponse] = useState<string[]>([]);
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const [currentTicketId, setCurrentTicketId] = useState('');
  const [animatingMessageId, setAnimatingMessageId] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages, chatState.isTyping]);

  const startConversation = () => {
    setChatState(prev => ({ ...prev, conversationStarted: true }));
    
    // Add welcome message from bot
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: "Hello! I'm your customer support assistant. I'm here to help you 24/7 with any questions about orders, shipping, returns, and more. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      category: 'greeting'
    };
    
    setTimeout(() => {
      setChatState(prev => ({
        ...prev,
        messages: [welcomeMessage]
      }));
      setAnimatingMessageId(welcomeMessage.id);
      setTimeout(() => setAnimatingMessageId(null), 500);
    }, 500);
  };

  const addMessage = (text: string, sender: 'user' | 'bot', category?: string): Message => {
    const message: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      text,
      sender,
      timestamp: new Date(),
      category
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, message]
    }));

    if (sender === 'bot') {
      setAnimatingMessageId(message.id);
      setTimeout(() => setAnimatingMessageId(null), 500);
    }

    return message;
  };

  const handleSendMessage = (text: string) => {
    // Add user message
    addMessage(text, 'user');
    
    // Show typing indicator
    setChatState(prev => ({ ...prev, isTyping: true }));
    
    // Get bot response
    const botResponse = getBotResponse(text);
    const typingDelay = simulateTypingDelay(botResponse.text);
    
    setTimeout(() => {
      setChatState(prev => ({ ...prev, isTyping: false }));
      
      // Handle support ticket creation
      if (botResponse.actionType === 'support_ticket') {
        const ticketId = generateTicketId();
        setCurrentTicketId(ticketId);
        addMessage(botResponse.text, 'bot', botResponse.category);
        
        setTimeout(() => {
          setIsTicketModalOpen(true);
        }, 1000);
      } else {
        addMessage(botResponse.text, 'bot', botResponse.category);
      }
      
      // Set follow-up actions
      setLastBotResponse(botResponse.followUp || []);
    }, typingDelay);
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
  };

  const handleFollowUpClick = (suggestion: string) => {
    handleSendMessage(suggestion);
    setLastBotResponse([]);
  };

  const showQuickActions = chatState.conversationStarted && 
    chatState.messages.length === 1 && 
    !chatState.isTyping && 
    lastBotResponse.length === 0;

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto bg-white shadow-xl">
      <ChatHeader />
      
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto bg-gray-50"
      >
        {!chatState.conversationStarted ? (
          <WelcomeMessage onGetStarted={startConversation} />
        ) : (
          <div className="p-4">
            {chatState.messages.map((message) => (
              <ChatMessage 
                key={message.id} 
                message={message}
                isAnimating={animatingMessageId === message.id}
              />
            ))}
            
            {chatState.isTyping && <TypingIndicator />}
            
            <FollowUpActions 
              suggestions={lastBotResponse}
              onSuggestionClick={handleFollowUpClick}
            />
            
            <QuickActions 
              onActionClick={handleQuickAction}
              isVisible={showQuickActions}
            />
            
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      {chatState.conversationStarted && (
        <ChatInput 
          onSendMessage={handleSendMessage}
          disabled={chatState.isTyping}
        />
      )}
      
      <SupportTicketModal 
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
        ticketId={currentTicketId}
      />
    </div>
  );
}