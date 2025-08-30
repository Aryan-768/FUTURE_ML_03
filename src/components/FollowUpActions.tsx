import React from 'react';

interface FollowUpActionsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

export function FollowUpActions({ suggestions, onSuggestionClick }: FollowUpActionsProps) {
  if (!suggestions.length) return null;

  return (
    <div className="mb-4 animate-fade-in">
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSuggestionClick(suggestion)}
            className="inline-flex items-center px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded-full border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 hover:scale-105"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}