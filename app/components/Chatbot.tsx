"use client";  // Mark this as a client component
import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import axios from 'axios';
import styled from 'styled-components';

const Chatbot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const response = await axios.post('/api/message', { content: input });
    setMessages([...messages, input, response.data.message]);
    setInput('');
  };

  return (
    <Container>
      <ChatWindow>
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} content={msg} />
        ))}
      </ChatWindow>
      <ChatText>
        <ChatInputContainer>
          <ChatInput 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Type a message..."
          />
          <ChatButton onClick={sendMessage}>↑</ChatButton>
        </ChatInputContainer> 
      </ChatText>
    </Container>
  );
};

export default Chatbot;


const Container = styled.div`
  display: flex;
  height: 100%;
  background:#1f2936 ;
  flex-direction: column;
`;

const ChatWindow = styled.div`
 flex: 1
`;

const ChatInputContainer = styled.div`
   display: flex;
   width: 100%;
`

const ChatText = styled.div`
display: flex;
color: #333;
`;

const ChatInput = styled.input`
flex:1;
padding: 10px;
`;

const ChatButton = styled.button`
color: #fff;
width: 44px;
height: 44px;
display:flex;
align-items: center;
justify-content: center;
background: #3f1ca2;
`;


const ResizableTableView = styled.div`
  flex: 4;
  border-right: 1px solid #ccc;
  resize: horizontal;
  overflow: auto;
`;

const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
