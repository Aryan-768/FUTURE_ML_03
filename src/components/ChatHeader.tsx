import React from 'react';
import { MessageCircle, Clock, CheckCircle } from 'lucide-react';

interface ChatHeaderProps {
  isOnline?: boolean;
  responseTime?: string;
}

export function ChatHeader({ isOnline = true, responseTime = "Usually replies in a few seconds" }: ChatHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
          <MessageCircle className="w-5 h-5 text-white" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">Customer Support</h3>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            {isOnline ? (
              <>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Online now</span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Away</span>
              </>
            )}
            <span>•</span>
            <Clock className="w-3 h-3" />
            <span>{responseTime}</span>
          </div>
        </div>
        
        <div className="text-right">
          <div className="flex items-center gap-1 text-xs text-green-600">
            <CheckCircle className="w-3 h-3" />
            <span>Secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}