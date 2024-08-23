import React from 'react';
import { FaRegCopy } from 'react-icons/fa';
import {userStyles, botStyles} from './style.tailwind'
import {ChatMessageProps} from "./type"


const ChatMessage = ({ content, role }: ChatMessageProps) => {


  const handleCopyClick = () => {
    navigator.clipboard.writeText(content);
  };
  
  return (
    <div className={`chat-message ${role === 'user' ? userStyles : botStyles} m-2 relative`}>
      {content}
      {role === 'assistant' && <FaRegCopy
    className="absolute -right-6 bottom-1 cursor-pointer text-gray-500 hover:text-gray-400"
    onClick={handleCopyClick}
  />}
    </div>
   
  );
};

export default ChatMessage;
