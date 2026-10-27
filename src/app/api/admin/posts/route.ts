import { NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/auth';
import { getAllPosts, savePost, deletePost } from '@/lib/db';

export async function GET() {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: 'İcazə verilmədi' }, { status: 401 });
  }

  const posts = await getAllPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: 'İcazə verilmədi' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { title, slug, excerpt, content, coverImage, category, tags, readTime, published, id } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: 'Başlıq, slug və məzmun mütləqdir' },
        { status: 400 }
      );
    }

    const saved = await savePost({
      id,
      title,
      slug: slug.trim().toLowerCase().replace(/\s+/g, '-'),
      excerpt: excerpt || '',
      content,
      coverImage: coverImage || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      category: category || 'Süni İntellekt',
      tags: Array.isArray(tags) ? tags : (tags ? String(tags).split(',').map((t) => t.trim()) : ['AI']),
      readTime: readTime || '5 dəqiqə',
      published: published !== false,
      views: 0,
    });

    return NextResponse.json({ success: true, post: saved });
  } catch (err) {
    console.error('Post saving error:', err);
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

  const deleted = await deletePost(id);
  return NextResponse.json({ success: deleted });
}
