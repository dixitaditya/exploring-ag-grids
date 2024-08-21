import React, {useEffect, useRef, useState} from 'react'
import {TConversationContext} from "./context.type"
import {RowDatum} from "../../utils/rowDataum"
import {fields} from "../../utils/fields"
import { RowData } from '../../interfaces'
import _ from "lodash"

import {ConversationPublic, MessageCreate, MessagePublic} from "../../interfaces"


const ConversationContext = React.createContext({})
ConversationContext.displayName = 'ConversationContext'


const dummyChat = {
    "name": "Default Conversation",
    "id": 1,
    "messages": [
    ]
}

const ConversationContextProvider: React.FC = ({ children }) => {
  const [conversationPublic, setConversationPublic] = useState<ConversationPublic | undefined>(dummyChat); // Load your CSV data here
 

  const fetchTableData = () => {
    // setRowData(RowDatum) // from dummy, can be relaced with axios
    // setColumnsDefs(fields)
    // return RowDatum
  }


  const sendMessage = async (msgCreateObj: MessageCreate) => {
    const tempId = Date.now();
  
    // Optimistically add the message to the state
    setConversationPublic((state) => {
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
          messages: [...state.messages, newMessage],
        };
      } else {
        // Handle the case where state is undefined, initializing a new conversation object
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
        // const messageIndex = state.messages.findIndex(msg => msg.id === tempId);
        
        return {
            ...state,
            messages: [...state.messages, messagePublic],
          }

      });
  
    } catch (error) {
      console.error("Failed to send message:", error);
  
      // Optionally, handle the error by removing the optimistic message or showing an error to the user
      setConversationPublic((state) => ({
        ...state,
        messages: state.messages.filter(msg => msg.id !== tempId),
      }));
    }
  
    console.log("conversationPublic======>", conversationPublic);
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
