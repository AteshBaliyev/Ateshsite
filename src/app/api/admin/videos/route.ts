import { NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/auth';
import { getAllVideos, saveVideo, deleteVideo } from '@/lib/db';

export async function GET() {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: 'İcazə verilmədi' }, { status: 401 });
  }

  const videos = await getAllVideos();
  return NextResponse.json(videos);
}

export async function POST(request: Request) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: 'İcazə verilmədi' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, videoId, title, channelName, description, viewsDisplay, thumbnailUrl, publishedDate } = body;

    if (!videoId || !title) {
      return NextResponse.json({ error: 'Video ID və Başlıq mütləqdir' }, { status: 400 });
    }

    const channel = channelName === 'The Systemic Mind' ? 'The Systemic Mind' : 'AzMoney';
    const channelUrl = channel === 'The Systemic Mind'
      ? 'https://www.youtube.com/@TheSystemicMind'
      : 'https://www.youtube.com/@AzMoney';

    const saved = await saveVideo({
      id,
      videoId: videoId.trim(),
      title,
      channelName: channel,
      channelUrl,
      thumbnailUrl: thumbnailUrl || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
      description: description || '',
      viewsDisplay: viewsDisplay || '1K+ baxış',
      publishedDate: publishedDate || '2026',
      orderIndex: 0,
    });

    return NextResponse.json({ success: true, video: saved });
  } catch (err) {
    console.error('Video save error:', err);
    return NextResponse.json({ error: 'Xəta baş verdi' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: 'İcazə verilmədi' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID qeyd edilməyib' }, { status: 400 });
  }

  const deleted = await deleteVideo(id);
  return NextResponse.json({ success: deleted });
}
