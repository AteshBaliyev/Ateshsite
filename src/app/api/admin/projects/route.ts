import { NextResponse } from 'next/server';
import { verifyAdminSession } from '@/lib/auth';
import { getAllProjects, saveProject, deleteProject } from '@/lib/db';

export async function GET() {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: 'İcazə verilmədi' }, { status: 401 });
  }

  const projects = await getAllProjects();
  return NextResponse.json(projects);
}

export async function POST(request: Request) {
  const isAuth = await verifyAdminSession();
  if (!isAuth) {
    return NextResponse.json({ error: 'İcazə verilmədi' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const {
      id,
      title,
      slug,
      tagline,
      description,
      fullDetails,
      category,
      imageUrl,
      liveUrl,
      githubUrl,
      achievements,
      techStack,
      metrics,
      featured,
    } = body;

    if (!title || !slug) {
      return NextResponse.json({ error: 'Başlıq və slug mütləqdir' }, { status: 400 });
    }

    const saved = await saveProject({
      id,
      title,
      slug: slug.trim().toLowerCase().replace(/\s+/g, '-'),
      tagline: tagline || '',
      description: description || '',
      fullDetails: fullDetails || description || '',
      category: category || 'Süni İntellekt & Sistem',
      imageUrl: imageUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      liveUrl: liveUrl || '',
      githubUrl: githubUrl || '',
      achievements: achievements || '',
      metrics: Array.isArray(metrics) ? metrics : [],
      techStack: Array.isArray(techStack) ? techStack : (techStack ? String(techStack).split(',').map((t) => t.trim()) : []),
      featured: Boolean(featured),
    });

    return NextResponse.json({ success: true, project: saved });
  } catch (err) {
    console.error('Project save error:', err);
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

  const deleted = await deleteProject(id);
  return NextResponse.json({ success: deleted });
}
