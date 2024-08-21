import React from 'react';
import { FaRegCopy } from 'react-icons/fa';

interface ChatMessageProps {
  content: string;
  role: 'user' | 'assistant';
}

const ChatMessage = ({ content, role }: ChatMessageProps) => {
    console.log("role",role, role === 'user')
  const userStyles = "bg-gray-700 text-white rounded-lg p-3 max-w-xs self-end";
  const botStyles = "bg-blue-800 text-white rounded-lg p-3 max-w-xs self-start";

  const handleCopyClick = () => {
    navigator.clipboard.writeText(content);
    alert('Message copied to clipboard');
  };
  
  return (
    <div className={`chat-message ${role === 'user' ? userStyles : botStyles} m-2 relative`}>
      {content}
      <FaRegCopy
    className="absolute -right-10 bottom-1 cursor-pointer text-white hover:text-gray-400"
    onClick={handleCopyClick}
  />
    </div>
   
  );
};

export default ChatMessage;
