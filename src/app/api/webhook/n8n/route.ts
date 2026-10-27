import { NextResponse } from 'next/server';
import { verifyN8nWebhookKey } from '@/lib/auth';
import { savePost, saveVideo, saveProject } from '@/lib/db';

export async function POST(request: Request) {
  const apiKeyHeader = request.headers.get('x-n8n-api-key') || request.headers.get('authorization');

  if (!verifyN8nWebhookKey(apiKeyHeader)) {
    return NextResponse.json(
      { error: 'Təsdiqlənməmiş n8n sorğusu (Yanlış və ya çatışmayan API açarı)' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { type, data } = body;

    if (!type || !data) {
      return NextResponse.json(
        { error: "'type' ('post' | 'video' | 'project') və 'data' obyektləri tələb olunur" },
        { status: 400 }
      );
    }

    if (type === 'post') {
      const saved = await savePost(data);
      return NextResponse.json({ success: true, type: 'post', result: saved });
    }

    if (type === 'video') {
      const saved = await saveVideo(data);
      return NextResponse.json({ success: true, type: 'video', result: saved });
    }

    if (type === 'project') {
      const saved = await saveProject(data);
      return NextResponse.json({ success: true, type: 'project', result: saved });
    }

    return NextResponse.json({ error: 'Naməlum n8n əməliyyat növü' }, { status: 400 });
  } catch (error) {
    console.error('n8n Webhook Error:', error);
    return NextResponse.json({ error: 'Daxili emal xətası' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const apiKeyHeader = request.headers.get('x-n8n-api-key') || request.headers.get('authorization');
  const isAuth = verifyN8nWebhookKey(apiKeyHeader);

  return NextResponse.json({
    status: 'online',
    automation: 'n8n Webhook Integration Active',
    authenticated: isAuth,
    supportedTypes: ['post', 'video', 'project'],
    instructions: 'Send POST requests with header x-n8n-api-key or Authorization Bearer header matching N8N_API_KEY.',
  });
}
