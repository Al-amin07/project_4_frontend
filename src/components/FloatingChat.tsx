import React, { useState, useRef, useEffect, FormEvent, ChangeEvent } from 'react';
import { ChatBubbleLeftIcon, XMarkIcon, PaperAirplaneIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

// --- Types Definition ---
type Sender = 'User' | 'AI';

interface Message {
  sender: Sender;
  text: string;
  id: number;
}
// --- End Types Definition ---

// The URL for your custom backend API server
const BACKEND_API_URL = 'http://localhost:3001/chat'; 

const initialMessages: Message[] = [
  { sender: 'AI', text: "Hello! I'm your type-safe AI assistant. Ask me anything!", id: Date.now() }
];

const FloatingChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const toggleChatbox = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
        setMessages(initialMessages);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };
  
  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    
    // Type check: ensures inputMessage is not just whitespace
    if (inputMessage.trim() === '' || isLoading) return;

    const userMessage: string = inputMessage.trim();
    const newUserMessage: Message = { sender: 'User', text: userMessage, id: Date.now() };

    setMessages(prev => [...prev, newUserMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // API Call to your backend server
      const response = await fetch(BACKEND_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // TypeScript ensures we are sending the expected format
        body: JSON.stringify({ prompt: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`Backend API error: ${response.status} ${response.statusText}`);
      }

      // We expect the backend to return an object with a 'response' key
      interface BackendResponse {
        response: string;
      }
      
      const data: BackendResponse = await response.json();
      const aiResponseText: string = data.response; 
      
      const newAiMessage: Message = { sender: 'AI', text: aiResponseText, id: Date.now() + 1 };
      setMessages(prev => [...prev, newAiMessage]);

    } catch (error: any) {
      console.error("Error communicating with backend:", error);
      const errorMessage: string = error instanceof Error ? error.message : "An unknown error occurred.";
      const errorMsg: Message = { sender: 'AI', text: `Sorry, an error occurred: ${errorMessage}`, id: Date.now() + 1 };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Helper Component with typed props
  const MessageBubble: React.FC<Pick<Message, 'sender' | 'text'>> = ({ sender, text }) => (
    <div className={`flex ${sender === 'User' ? 'justify-end' : 'justify-start'}`}>
      <div 
        className={`max-w-[75%] px-3 py-2 rounded-xl text-sm shadow-md 
          ${sender === 'User' 
            ? 'bg-blue-500 text-white rounded-br-none' 
            : 'bg-gray-200 text-gray-800 rounded-tl-none'
          }`
        }
      >
        {text}
      </div>
    </div>
  );

  return (
    <div className="fixed bottom-4 right-4 z-50">
      
      {/* 1. The Chatbox Container */}
      <div
        className={`
          absolute bottom-full right-0 mb-4 w-80 max-w-xs h-96 bg-white 
          rounded-xl shadow-2xl transition-all duration-500 ease-in-out transform 
          overflow-hidden flex flex-col
          
          ${isOpen 
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-0 pointer-events-none'
          }
        `}
      >
        {/* Chatbox Header */}
        <div className="p-4 bg-blue-600 text-white text-lg font-bold flex justify-between items-center shadow-md">
          <p>Server-Powered AI</p>
          <button onClick={toggleChatbox} className="text-white hover:text-blue-200 p-1 rounded-full transition" aria-label="Close Chat"><XMarkIcon className="w-5 h-5" /></button>
        </div>

        {/* Chatbox Body */}
        <div className="flex-grow p-4 space-y-3 overflow-y-auto bg-gray-50">
          {/* TypeScript ensures msg is of type Message */}
          {messages.map(msg => (<MessageBubble key={msg.id} sender={msg.sender} text={msg.text} />))}
          
          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-800 rounded-xl rounded-tl-none px-3 py-2 text-sm shadow-md flex items-center">
                <ArrowPathIcon className="w-4 h-4 mr-2 animate-spin text-blue-500" />
                Thinking...
              </div>
            </div>
          )}
          
          <div ref={chatEndRef} />
        </div>

        {/* Chatbox Input Field */}
        <form onSubmit={sendMessage} className="p-3 border-t border-gray-200 flex">
          <input
            type="text"
            placeholder={isLoading ? "Waiting for response..." : "Type a message..."}
            value={inputMessage}
            onChange={handleInputChange}
            className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`p-3 text-white rounded-r-lg transition duration-150 ${
                inputMessage.trim() === '' || isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={inputMessage.trim() === '' || isLoading}
            aria-label="Send Message"
          >
            <PaperAirplaneIcon className="w-5 h-5 transform rotate-45 -mt-1" />
          </button>
        </form>
      </div>

      {/* 2. The Floating Icon Button */}
      <button
        onClick={toggleChatbox}
        className={`
          p-4 text-white rounded-full shadow-xl transition-all duration-300 ease-in-out 
          focus:outline-none focus:ring-4 focus:ring-offset-2
          
          ${isOpen 
            ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500 rotate-90'
            : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
          }
        `}
        aria-label={isOpen ? "Close Chat" : "Open Chat"}
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <ChatBubbleLeftIcon className="w-6 h-6" />
        )}
      </button>

    </div>
  );
};

export default FloatingChat;