import React from 'react';

const ChatMessage = ({ content }: { content: string }) => (
  <div className="chat-message">
    {content}
  </div>
);

export default ChatMessage;