// app/api/createMessage/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { MessageCreate, MessagePublic } from '../../interfaces';

let messageIdCounter = 1;
const messages: MessagePublic[] = [];

export async function POST(req: NextRequest) {
    const { conversation_id, content, message_context }: MessageCreate = await req.json();

    // Create a new message
    const newMessage: MessagePublic = {
        id: messageIdCounter++,
        content,
        role: 'user',
        conversation_id: conversation_id || 1, // Default conversation_id if not provided
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        message_context: message_context || {},
    };

    // Store the message
    messages.push(newMessage);

    // Mock LLM response
    const llmResponse: MessagePublic = {
        ...newMessage,
        id: messageIdCounter++,
        content: `Response to: ${content}`,
        role: 'assistant',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    };

    messages.push(llmResponse);

    return NextResponse.json(llmResponse);
}
