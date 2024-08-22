"use client";  // Mark this as a client component
import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import axios from 'axios';
import styled from 'styled-components';
import { useConversationContext } from '../contexts/ConversationContext'
import { useDataTableContext } from '../contexts/DataTableContext';
import {MessagePublic} from "../interfaces"

const Chatbot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const { conversationPublic, sendMessage } = useConversationContext()
  const { selectedTableData } = useDataTableContext()


  const sendMessageHandler = () => {
    if(selectedTableData){
      sendMessage({
        conversation_id: conversationPublic.id,
        content: input,
        message_context: selectedTableData
      })
      setInput("")
    }
    
  }
  return (
    <Container>
      <ChatWindow>
        {conversationPublic?.messages?.map((msg: MessagePublic) => (
          <ChatMessage key={msg.id} content={msg.content} role={msg.role || ''} />
        ))}
      </ChatWindow>
      <ChatText>
        <ChatInputContainer>
          <ChatInput
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a79..."
            onKeyUp={(e)=>{
              if(e.code==="Enter"){
                sendMessageHandler()
              }
            }}
          />
          <ChatButton onClick={sendMessageHandler}>↑</ChatButton>
        </ChatInputContainer>
      </ChatText>
    </Container>
  );
};

export default Chatbot;


const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const ChatWindow = styled.div`
display: flex;
flex-direction: column;
 flex: 1
`;

const ChatInputContainer = styled.div`
  //  display: flex;
   width: 100%;
   position: relative;
   width: 100%
`

const ChatText = styled.div`
display: flex;
color: #333;
`;

const ChatInput = styled.input`
width: 100%;
padding: 16px 40px 16px 10px;
background: #1c1b26;
color: #fff;
`;

const ChatButton = styled.button`
color: #fff;
width: 38px;
height: 38px;
position: absolute;
top:10px;
right: 20px;
display:flex;
align-items: center;
justify-content: center;
background: #3f1ca2;
border-radius: 5px;
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
