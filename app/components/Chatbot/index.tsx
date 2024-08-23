"use client";
import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from '../ChatMessage';
import {Container,ChatWindow,ChatText,ChatInputContainer,ChatInput,ChatButton } from "./style.styled"

import { useConversationContext } from '../../contexts/ConversationContext'
import { useDataTableContext } from '../../contexts/DataTableContext';
import {MessagePublic} from "../../interfaces"


type TChatContainerRef = {
  current: HTMLDivElement | null
}
const Chatbot = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const chatContainerRef: TChatContainerRef = useRef(null);

  const { conversationPublic, sendMessage } = useConversationContext()
  const { selectedTableData } = useDataTableContext()


  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

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

  useEffect(()=>{
    // UX improvement
    scrollToBottom()
  },[conversationPublic])


  return (
    <Container>
      <ChatWindow ref={chatContainerRef}>
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


