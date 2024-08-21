// utils/api.ts

export const createMessage = async (message: MessageCreate): Promise<MessagePublic> => {
    return {
      id: Date.now(),
      content: `Echo: ${message.content}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      conversation_id: message.conversation_id,
      message_context: message.message_context,
    };
  };
  
  export const readConversation = async (conversationId: string): Promise<ConversationPublic> => {
    return {
      id: parseInt(conversationId),
      name: 'Demo Conversation',
      messages: [],
    };
  };


  export interface MessageContextPayload {
    tabular_data?: string;  // Optional field for additional context or data related to the message
  }
  
  export interface MessageCreate {
    conversation_id?: number;  // Optional ID of the conversation this message belongs to
    content: string;           // The content of the message
    message_context?: MessageContextPayload; // Optional additional context for the message
  }
  