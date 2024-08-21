// app/api/readConversation/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { getConversationById } from '../../datastore/mock-data-store';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const conversationId = searchParams.get('conversationId');

  if (!conversationId) {
    return NextResponse.json({ error: 'Conversation ID is required' }, { status: 400 });
  }

  const conversation = getConversationById(parseInt(conversationId));

  if (conversation) {
    return NextResponse.json(conversation);
  } else {
    return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
  }
}
