import { NextResponse } from 'next/server';
import { saveContactMessage } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contactInfo, subject, message } = body;

    if (!name || !contactInfo || !message) {
      return NextResponse.json(
        { error: 'Zəhmət olmasa bütün tələb olunan xanaları doldurun' },
        { status: 400 }
      );
    }

    const saved = await saveContactMessage({
      name,
      contactInfo,
      subject: subject || '',
      message,
    });

    return NextResponse.json({ success: true, message: 'Mesaj qeydə alındı', id: saved.id });
  } catch (err) {
    console.error('Contact submit error:', err);
    return NextResponse.json({ error: 'Xəta baş verdi' }, { status: 500 });
  }
}
