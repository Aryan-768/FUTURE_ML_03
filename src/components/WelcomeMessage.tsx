import React from 'react';
import { Sparkles } from 'lucide-react';

interface WelcomeMessageProps {
  onGetStarted: () => void;
}

export function WelcomeMessage({ onGetStarted }: WelcomeMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 space-y-6">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
        <Sparkles className="w-8 h-8 text-white" />
      </div>
      
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-800">Welcome to Support!</h2>
        <p className="text-gray-600 max-w-sm">
          I'm here to help you 24/7 with any questions about orders, shipping, returns, and more.
        </p>
      </div>
      
      <button
        onClick={onGetStarted}
        className="bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
      >
        Start Conversation
      </button>
    </div>
  );
}