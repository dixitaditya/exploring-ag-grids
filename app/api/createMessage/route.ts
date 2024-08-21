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
    content: `Response to: ${content}`,
    role: 'assistant',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  addMessage(llmResponse);

  await sleep(1000)

  return NextResponse.json(llmResponse);
}
