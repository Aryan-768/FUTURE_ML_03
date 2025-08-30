import React from 'react';
import { ChatContainer } from './components/ChatContainer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto py-4 px-4">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Customer Support Center</h1>
          <p className="text-gray-600">Get instant help with your questions and concerns</p>
        </div>
        
        <ChatContainer />
      </div>
    </div>
  );
}

export default App;