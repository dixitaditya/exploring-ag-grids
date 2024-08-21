import { ColDef } from 'ag-grid-community';

export interface RowData {
    name: string;
    country: string;
    language: string;
    games: number;
    gameName: string;
    bankBalance: number;
  }

  


export interface CustomColDef extends ColDef {
  headerName?: string;
  valueFormatter?: (params: any) => string;
}


export interface ConversationPublic {
    name: string;               // The name of the conversation.
    id: number;                 // A unique identifier for the conversation.
    messages?: Array<MessagePublic>;  // An optional array of messages in this conversation.
  }

  export interface MessageContextPayload {
    tabular_data?: string;      // Optional JSON string representing tabular data related to the message.
  }


  export interface MessageCreate {
    conversation_id?: number;   // Optional ID of the conversation to which the message belongs.
    content: string;            // The content of the message.
    message_context?: MessageContextPayload; // Optional context for the message, which can include additional data.
  }

  export interface MessagePublic {
    created_at?: string;        // Optional timestamp for when the message was created.
    updated_at?: string;        // Optional timestamp for when the message was last updated.
    content: string;            // The content of the message.
    role?: string;              // Optional role associated with the message (e.g., user, bot).
    conversation_id?: number;   // Optional ID of the conversation this message is part of.
    id: number;                 // A unique identifier for the message.
    message_context: MessageContextPayload; // The context for the message, including additional data if any.
  }
  
  
  
  