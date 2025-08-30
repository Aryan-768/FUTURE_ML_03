import React from 'react';
import { Package, RotateCcw, Truck, CreditCard, MessageCircle, Wrench } from 'lucide-react';

interface QuickActionsProps {
  onActionClick: (action: string) => void;
  isVisible: boolean;
}

const quickActionItems = [
  { text: "Check order status", icon: Package, keyword: "order status" },
  { text: "Return an item", icon: RotateCcw, keyword: "return policy" },
  { text: "Shipping info", icon: Truck, keyword: "shipping time" },
  { text: "Payment help", icon: CreditCard, keyword: "payment methods" },
  { text: "Talk to human", icon: MessageCircle, keyword: "human agent" },
  { text: "Technical support", icon: Wrench, keyword: "website not working" }
];

export function QuickActions({ onActionClick, isVisible }: QuickActionsProps) {
  if (!isVisible) return null;

  return (
    <div className="mb-4 animate-fade-in">
      <p className="text-sm text-gray-600 mb-3 px-1">Quick actions:</p>
      <div className="grid grid-cols-2 gap-2">
        {quickActionItems.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              onClick={() => onActionClick(action.keyword)}
              className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-left text-sm"
            >
              <Icon className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span className="text-gray-700">{action.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}