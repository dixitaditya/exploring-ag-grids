// lib/dataStore.ts

import { MessagePublic, ConversationPublic } from '../interfaces';

let messageIdCounter = 1;
let conversationIdCounter = 1;

const messages: MessagePublic[] = [];
const conversations: ConversationPublic[] = [
  {
    name: 'Default Conversation',
    id: conversationIdCounter++, // Start with a default conversation
    messages: [],
  },
];

export const addMessage = (message: MessagePublic) => {
  messages.push(message);

  const conversation = conversations.find(conv => conv.id === message.conversation_id);
  if (conversation) {
    conversation.messages?.push(message);
  }
};

export const getMessages = () => messages;
export const getConversationById = (id: number) =>
  conversations.find(conv => conv.id === id);
export const getAllConversations = () => conversations;
