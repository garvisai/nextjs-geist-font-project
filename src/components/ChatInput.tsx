"use client";

import React, { useState, KeyboardEvent } from 'react';

interface ChatInputProps {
  onSendMessage?: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage?.(message);
      setMessage('');
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSendMessage();
    }} className="flex items-center p-4">
      <div className="relative flex-grow">
        <textarea
          rows={1}
          className="w-full py-3 px-4 pr-12 rounded-lg bg-[#40414F] text-white placeholder-gray-400 focus:outline-none resize-none"
          placeholder="Send a message..."
          value={message}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          style={{ minHeight: '44px', maxHeight: '200px' }}
        />
        <button
          type="submit"
          className="absolute right-2 bottom-2 p-2 text-gray-400 hover:text-white transition-colors"
          disabled={!message.trim()}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
