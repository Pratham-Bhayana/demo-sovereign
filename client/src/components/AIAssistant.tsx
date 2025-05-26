// src/components/AIAssistant.tsx
import React, { useState } from 'react';
import { getAIReply } from '@/utils/openai';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ from: 'user' | 'ai'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const aiReply = await getAIReply(input);
    setMessages([...newMessages, { from: 'ai', text: aiReply }]);
    setLoading(false);
  };

  return (
    <div>
      {/* Floating Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
          title="AI Assistant"
        >
          🤖
        </button>
      </div>

      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 w-80 h-96 bg-white rounded-lg shadow-lg p-4 z-50 border border-gray-300 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">AI Assistant</h2>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black">
              ✖️
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 mb-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded ${
                  msg.from === 'user' ? 'bg-blue-100 text-right ml-8' : 'bg-gray-100 text-left mr-8'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <p className="text-gray-400">Typing...</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="w-full p-2 border border-gray-300 rounded mb-1 text-sm"
            />
            <button
              onClick={sendMessage}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1 rounded text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
