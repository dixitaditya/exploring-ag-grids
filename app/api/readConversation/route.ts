// app/api/readConversation/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { ConversationPublic } from '../../interfaces';

const conversations: ConversationPublic[] = [
    {
        name: 'Default Conversation',
        id: 1,
        messages: [], // This would normally contain message data
    },
];

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const conversationId = searchParams.get('conversationId');

    if (!conversationId) {
        return NextResponse.json({ error: 'Conversation ID is required' }, { status: 400 });
    }

    const conversation = conversations.find(conv => conv.id === parseInt(conversationId));

    if (conversation) {
        return NextResponse.json(conversation);
    } else {
        return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
    }
}
