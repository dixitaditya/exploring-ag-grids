"use client";
import React, { useState } from 'react';
import ChatMessage from '../ChatMessage';
import {Container,ChatWindow,ChatText,ChatInputContainer,ChatInput,ChatButton } from "./style.styled"

import { useConversationContext } from '../../contexts/ConversationContext'
import { useDataTableContext } from '../../contexts/DataTableContext';
import {MessagePublic} from "../../interfaces"

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


