// app/api/createMessage/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { MessageCreate, MessagePublic } from '../../interfaces';
import { getConversationById, addMessage, getMessages} from '../../datastore/mock-data-store';
import {sleep} from "../../utils/sleep"

export async function POST(req: NextRequest) {
  const { conversation_id, content, message_context }: MessageCreate = await req.json();

  const newMessage: MessagePublic = {
    id: Date.now(), // Use current timestamp as a unique ID
    content,
    role: 'user',
    conversation_id: conversation_id || 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    message_context: message_context || {},
  };

  addMessage(newMessage);

  // Mock LLM response
  const llmResponse: MessagePublic = {
    ...newMessage,
    id: Date.now() + 1,
    content: `Response to: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ${content}`,
    role: 'assistant',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  addMessage(llmResponse);

  await sleep(1000)

  return NextResponse.json(llmResponse);
}
