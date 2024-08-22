import React, {useEffect, useRef, useState} from 'react'
import {TConversationContext} from "./context.type"
import {RowDatum} from "../../utils/rowDataum"
import {fields} from "../../utils/fields"
import { RowData } from '../../interfaces'
import _ from "lodash"

import {ConversationPublic, MessageCreate, MessagePublic} from "../../interfaces"

import {conversations} from "../../datastore/mock-data-store"


/**
 * Context for managing conversation state and operations.
 */
const ConversationContext = React.createContext({})
ConversationContext.displayName = 'ConversationContext'


/**
 * Provider component for conversation context.
 * 
 * @param props - The props for the provider component, including children elements.
 */
type ConversationContextProviderProps = {
  children: React.ReactNode;
}
const ConversationContextProvider: React.FC<ConversationContextProviderProps> = ({ children }) => {
  const [conversationPublic, setConversationPublic] = useState<ConversationPublic>(conversations[0]); // Load your CSV data here
 

  /**
   * Sends a message and updates the conversation state.
   * 
   * @param msgCreateObj - The message to send.
   * 
   * Optimistically updates the conversation state with the new message,
   * then sends the message to the server. If the server responds with an error,
   * the optimistic message is removed from the state.
   */
  const sendMessage = async (msgCreateObj: MessageCreate) => {
    const tempId = Date.now();
  
    // Optimistically add the message to the state
    setConversationPublic((state: ConversationPublic) => {
      const newMessage: MessagePublic = {
        id: tempId,
        content: msgCreateObj.content,
        conversation_id: state?.id ?? 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        role: "user", // or any role you are assigning
        message_context: msgCreateObj.message_context || {},
      };
  
      if (state) {
        return {
          ...state,
          messages: [...(state.messages ?? []), newMessage],
        };
      } else {
        return {
          name: 'New Conversation',
          id: 1,
          messages: [newMessage],
        };
      }
    });
  
    try {
      // Send the message to the server
      const response = await fetch('/api/createMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(msgCreateObj),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
  
      const messagePublic: MessagePublic = await response.json();
  
      // Update the state with the server response
      setConversationPublic((state) => {        
        return {
            ...state,
            messages: [...(state.messages ?? []), messagePublic],
          }

      });
  
    } catch (error) {
      console.error("Failed to send message:", error);
  
      // Optionally, handle the error by removing the optimistic message or showing an error to the user
      setConversationPublic((state) => ({
        ...state,
        messages: state.messages?.filter(msg => msg.id !== tempId),
      }));
    }
  };
  

  const contextObject: TConversationContext = {
    conversationPublic: conversationPublic,
    sendMessage,
  }
  return (
    <ConversationContext.Provider value={contextObject}>
      {children}
    </ConversationContext.Provider>
  )
}



/**
 * Hook to use conversation context.
 * 
 * @returns The context value.
 * @throws Will throw an error if used outside of a ConversationContextProvider.
 */
const useConversationContext =
  (): any => {
    const context = React.useContext(ConversationContext)
    if (context === undefined) {
      throw new Error(
        'useConversationContext must be used within a <ConversationContext />',
      )
    }

    return context as TConversationContext
  }

export {ConversationContextProvider, useConversationContext}
