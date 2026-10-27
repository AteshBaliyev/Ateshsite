'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Post, Project, YouTubeVideo, ContactMessage } from '@/types';
import {
  FileText,
  FolderGit2,
  MessageSquare,
  LogOut,
  Plus,
  Trash2,
  Edit,
  ExternalLink,
  Shield,
  Bot,
  CheckCircle,
  Code
} from 'lucide-react';
import { YouTubeIcon } from '@/components/Icons';

interface AdminDashboardProps {
  initialPosts: Post[];
  initialProjects: Project[];
  initialVideos: YouTubeVideo[];
  initialMessages: ContactMessage[];
}

export default function AdminDashboard({
  initialPosts,
  initialProjects,
  initialVideos,
  initialMessages,
}: AdminDashboardProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'posts' | 'projects' | 'videos' | 'messages' | 'automation'>('posts');

  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [videos, setVideos] = useState<YouTubeVideo[]>(initialVideos);
  const [messages] = useState<ContactMessage[]>(initialMessages);

  // Modal states
  const [postModalOpen, setPostModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Partial<Post> | null>(null);

  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Partial<Project> | null>(null);

  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Partial<YouTubeVideo> | null>(null);

  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  const showNotice = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 4000);
  };

  // LOGOUT
  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  // POST CRUD
  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost?.title || !editingPost?.slug) return;
    setLoading(true);

    try {
      const res = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingPost),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      if (editingPost.id) {
        setPosts(posts.map((p) => (p.id === data.post.id ? data.post : p)));
        showNotice('Post uğurla yeniləndi!');
      } else {
        setPosts([data.post, ...posts]);
        showNotice('Yeni post uğurla əlavə edildi!');
      }

      setPostModalOpen(false);
      setEditingPost(null);
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Xəta baş verdi');
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Bu postu silmək istədiyinizdən əminsiniz?')) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/posts?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setPosts(posts.filter((p) => p.id !== id));
        showNotice('Post silindi!');
      }
    } catch {
      alert('Silinmə zamanı xəta baş verdi');
    } finally {
      setLoading(false);
    }
  };

  // PROJECT CRUD
  const handleSaveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject?.title || !editingProject?.slug) return;
    setLoading(true);

    try {
      const res = await fetch('/api/admin/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingProject),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      if (editingProject.id) {
        setProjects(projects.map((p) => (p.id === data.project.id ? data.project : p)));
        showNotice('Layihə uğurla yeniləndi!');
      } else {
        setProjects([data.project, ...projects]);
        showNotice('Yeni layihə əlavə edildi!');
      }

      setProjectModalOpen(false);
      setEditingProject(null);
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Xəta baş verdi');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm('Bu layihəni silmək istədiyinizdən əminsiniz?')) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/projects?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setProjects(projects.filter((p) => p.id !== id));
        showNotice('Layihə silindi!');
      }
    } catch {
      alert('Silinmə zamanı xəta baş verdi');
    } finally {
      setLoading(false);
    }
  };

  // VIDEO CRUD
  const handleSaveVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingVideo?.videoId || !editingVideo?.title) return;
    setLoading(true);

    try {
      const res = await fetch('/api/admin/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingVideo),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      if (editingVideo.id) {
        setVideos(videos.map((v) => (v.id === data.video.id ? data.video : v)));
        showNotice('Video uğurla yeniləndi!');
      } else {
        setVideos([data.video, ...videos]);
        showNotice('Yeni video əlavə edildi!');
      }

      setVideoModalOpen(false);
      setEditingVideo(null);
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Xəta baş verdi');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteVideo = async (id: string) => {
    if (!confirm('Bu videonu silmək istədiyinizdən əminsiniz?')) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/admin/videos?id=${id}`, { method: 'DELETE' });
      if (res.ok) {
        setVideos(videos.filter((v) => v.id !== id));
        showNotice('Video silindi!');
      }
    } catch {
      alert('Silinmə zamanı xəta baş verdi');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07080d] text-slate-200">
      {/* Top Admin Bar */}
      <header className="border-b border-amber-500/20 bg-[#0c0e18]/90 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden border border-amber-500/40 p-0.5 bg-black/60 shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Atesh Site Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-base font-bold text-white flex items-center gap-1.5">
                  Atəş Balıyev Admin Paneli
                  <Shield className="w-3.5 h-3.5 text-amber-400" />
                </h1>
                <p className="text-[11px] text-amber-400/80">Təhlükəsiz Məlumat İdarəetmə Mərkəzi</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/"
                target="_blank"
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/20 hover:bg-amber-500/20 transition"
              >
                <span>Sayta Bax</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-950/40 text-red-400 border border-red-500/30 hover:bg-red-900/50 transition"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Çıxış</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Admin Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {notice && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-2 animate-fadeIn">
            <CheckCircle className="w-5 h-5 shrink-0" />
            <span>{notice}</span>
          </div>
        )}

        {/* Dashboard Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="card-luxury p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Məqalələr</span>
              <FileText className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-bold text-white">{posts.length}</div>
          </div>

          <div className="card-luxury p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Layihələr</span>
              <FolderGit2 className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-bold text-white">{projects.length}</div>
          </div>

          <div className="card-luxury p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>YouTube Videoları</span>
              <YouTubeIcon className="w-4 h-4 text-red-400" />
            </div>
            <div className="text-2xl font-bold text-white">{videos.length}</div>
          </div>

          <div className="card-luxury p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
              <span>Müraciətlər</span>
              <MessageSquare className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-bold text-white">{messages.length}</div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition shrink-0 ${
              activeTab === 'posts'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Bloq Postları ({posts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition shrink-0 ${
              activeTab === 'projects'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <FolderGit2 className="w-4 h-4" />
            <span>Layihələr & Qələbələr ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition shrink-0 ${
              activeTab === 'videos'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <YouTubeIcon className="w-4 h-4" />
            <span>YouTube Kanalları ({videos.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition shrink-0 ${
              activeTab === 'messages'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Müraciətlər ({messages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('automation')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition shrink-0 ${
              activeTab === 'automation'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <Bot className="w-4 h-4" />
            <span>n8n Avtomatlaşdırma</span>
          </button>
        </div>

        {/* TAB 1: POSTS */}
        {activeTab === 'posts' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Bloq Məqalələri</h2>
              <button
                onClick={() => {
                  setEditingPost({
                    title: '',
                    slug: '',
                    excerpt: '',
                    content: '',
                    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
                    category: 'Süni İntellekt',
                    tags: ['AI', 'Automation'],
                    readTime: '5 dəqiqə',
                    published: true,
                  });
                  setPostModalOpen(true);
                }}
                className="gold-button px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Yeni Məqalə Əlavə Et</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="card-luxury p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="badge-gold text-[10px] px-2 py-0.5 rounded-full font-bold">
                        {post.category}
                      </span>
                      <span className="text-[11px] text-slate-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-white text-base">{post.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-1">{post.excerpt}</p>
                    <p className="text-[10px] text-amber-400/80">Slug: /bloq/{post.slug}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        setEditingPost(post);
                        setPostModalOpen(true);
                      }}
                      className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-amber-400 hover:bg-slate-700 transition"
                      title="Redaktə et"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="p-2 rounded-lg bg-red-950/40 text-red-400 border border-red-500/30 hover:bg-red-900/50 transition"
                      title="Sil"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: PROJECTS */}
        {activeTab === 'projects' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Layihələr & Hakatonlar</h2>
              <button
                onClick={() => {
                  setEditingProject({
                    title: '',
                    slug: '',
                    tagline: '',
                    category: 'Süni İntellekt & Sistem',
                    description: '',
                    fullDetails: '',
                    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
                    liveUrl: '',
                    githubUrl: '',
                    achievements: '',
                    techStack: ['Next.js', 'Python', 'AI'],
                    featured: true,
                  });
                  setProjectModalOpen(true);
                }}
                className="gold-button px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Yeni Layihə Əlavə Et</span>
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="card-luxury p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="badge-gold text-[10px] px-2 py-0.5 rounded-full font-bold">
                        {proj.category}
                      </span>
                      {proj.achievements && (
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full">
                          ★ {proj.achievements}
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-white text-base">{proj.title}</h3>
                    <p className="text-xs text-amber-400/90 font-medium">{proj.tagline}</p>
                    <p className="text-xs text-slate-400 line-clamp-1">{proj.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {proj.techStack.map((t, idx) => (
                        <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        setEditingProject(proj);
                        setProjectModalOpen(true);
                      }}
                      className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-amber-400 hover:bg-slate-700 transition"
                      title="Redaktə et"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="p-2 rounded-lg bg-red-950/40 text-red-400 border border-red-500/30 hover:bg-red-900/50 transition"
                      title="Sil"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: VIDEOS */}
        {activeTab === 'videos' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">YouTube Qalereyası (AzMoney & The Systemic Mind)</h2>
              <button
                onClick={() => {
                  setEditingVideo({
                    videoId: '',
                    title: '',
                    channelName: 'AzMoney',
                    description: '',
                    viewsDisplay: '10K baxış',
                    publishedDate: '2026',
                  });
                  setVideoModalOpen(true);
                }}
                className="gold-button px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                <span>Yeni Video Əlavə Et</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((vid) => (
                <div key={vid.id} className="card-luxury p-4 flex flex-col justify-between">
                  <div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded shadow ${
                      vid.channelName === 'AzMoney' ? 'bg-amber-500 text-black' : 'bg-cyan-600 text-white'
                    }`}>
                      {vid.channelName}
                    </span>
                    <h3 className="font-bold text-white text-sm mt-2 line-clamp-2">{vid.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2">{vid.description}</p>
                    <p className="text-[11px] text-amber-400/80 mt-2">ID: {vid.videoId} • {vid.viewsDisplay}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                    <a
                      href={`https://www.youtube.com/watch?v=${vid.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
                    >
                      <span>İzlə</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingVideo(vid);
                          setVideoModalOpen(true);
                        }}
                        className="p-1.5 rounded-lg bg-slate-800 text-slate-200 hover:text-amber-400"
                      >
                        <Edit className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteVideo(vid.id)}
                        className="p-1.5 rounded-lg bg-red-950/40 text-red-400 border border-red-500/30 hover:bg-red-900/50"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: MESSAGES */}
        {activeTab === 'messages' && (
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Saytdan Daxil Olan Müraciətlər</h2>
            {messages.length === 0 ? (
              <div className="card-luxury p-8 text-center text-slate-400 text-sm">
                Hələ heç bir əlaqə müraciəti qeydə alınmayıb.
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((m) => (
                  <div key={m.id} className="card-luxury p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white text-base">{m.name}</h3>
                      <span className="text-[11px] text-slate-400">
                        {new Date(m.createdAt).toLocaleString('az-AZ')}
                      </span>
                    </div>
                    <div className="text-xs text-amber-400 font-semibold">
                      Əlaqə: {m.contactInfo} {m.subject && `• Mövzu: ${m.subject}`}
                    </div>
                    <p className="text-sm text-slate-300 bg-[#070910] p-3 rounded-lg border border-slate-800">
                      {m.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* TAB 5: AUTOMATION & N8N */}
        {activeTab === 'automation' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <Bot className="w-5 h-5 text-amber-400" />
                n8n Webhook və Avtomatlaşdırma İnterfeysi
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Saytınız n8n, Zapier və ya xüsusi süni intellekt botları ilə tam inteqrasiyaya hazırdır.
              </p>
            </div>

            <div className="card-luxury p-6 space-y-4">
              <h3 className="font-bold text-white text-sm flex items-center gap-2">
                <Code className="w-4 h-4 text-amber-400" />
                Aktiv Webhook Endpoint
              </h3>
              <div className="p-3 rounded-xl bg-black/60 border border-slate-800 text-xs font-mono text-amber-300">
                POST /api/webhook/n8n
              </div>

              <div className="text-xs text-slate-300 space-y-2">
                <p>
                  <strong>Tələb olunan Təhlükəsizlik Header-i:</strong>
                </p>
                <code className="block p-2 rounded bg-slate-900 text-slate-300 font-mono text-[11px]">
                  x-n8n-api-key: [process.env.N8N_API_KEY]
                </code>
              </div>

              <div className="text-xs text-slate-300 space-y-2">
                <p>
                  <strong>Nümunə Avtomatik Post Göndərmə Gövdəsi (JSON):</strong>
                </p>
                <pre className="p-3 rounded-xl bg-slate-950 text-slate-300 font-mono text-[11px] overflow-x-auto border border-slate-800">
{`{
  "type": "post",
  "data": {
    "title": "Avtomatik AI Bloq Yazısı",
    "slug": "avtomatik-ai-bloq-yazisi",
    "excerpt": "n8n tərəfindən avtomatik generasiya edilmiş məqalə.",
    "content": "Buraya məqalə mətni daxil edilir...",
    "coverImage": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
    "category": "Süni İntellekt",
    "tags": ["AI", "Automation"],
    "readTime": "4 dəqiqə"
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* POST MODAL */}
      {postModalOpen && editingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#0c0e18] border border-amber-500/30 rounded-2xl p-6 shadow-2xl my-8">
            <h3 className="text-lg font-bold text-white mb-4">
              {editingPost.id ? 'Məqaləni Redaktə Et' : 'Yeni Məqalə Əlavə Et'}
            </h3>

            <form onSubmit={handleSavePost} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Başlıq *</label>
                <input
                  type="text"
                  required
                  value={editingPost.title || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Slug *</label>
                  <input
                    type="text"
                    required
                    value={editingPost.slug || ''}
                    onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Kateqoriya</label>
                  <input
                    type="text"
                    value={editingPost.category || ''}
                    onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Şəkil URL</label>
                <input
                  type="text"
                  value={editingPost.coverImage || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, coverImage: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Qısa Xülasə</label>
                <textarea
                  rows={2}
                  value={editingPost.excerpt || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Məzmun (Markdown/Mətn) *</label>
                <textarea
                  rows={6}
                  required
                  value={editingPost.content || ''}
                  onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm font-mono"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setPostModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Ləğv et
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="gold-button px-5 py-2.5 rounded-xl text-xs font-bold"
                >
                  Yadda Saxla
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PROJECT MODAL */}
      {projectModalOpen && editingProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-[#0c0e18] border border-amber-500/30 rounded-2xl p-6 shadow-2xl my-8">
            <h3 className="text-lg font-bold text-white mb-4">
              {editingProject.id ? 'Layihəni Redaktə Et' : 'Yeni Layihə Əlavə Et'}
            </h3>

            <form onSubmit={handleSaveProject} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Layihə Adı *</label>
                  <input
                    type="text"
                    required
                    value={editingProject.title || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Slug *</label>
                  <input
                    type="text"
                    required
                    value={editingProject.slug || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, slug: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Tagline (Qısa Şüar)</label>
                <input
                  type="text"
                  value={editingProject.tagline || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, tagline: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Kateqoriya</label>
                  <input
                    type="text"
                    value={editingProject.category || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Nailiyyət / Hakaton Statusu</label>
                  <input
                    type="text"
                    value={editingProject.achievements || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, achievements: e.target.value })}
                    placeholder="Məs: 1-ci Yer Qalibi"
                    className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Şəkil URL</label>
                <input
                  type="text"
                  value={editingProject.imageUrl || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, imageUrl: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Canlı Link</label>
                  <input
                    type="text"
                    value={editingProject.liveUrl || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, liveUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">GitHub Linki</label>
                  <input
                    type="text"
                    value={editingProject.githubUrl || ''}
                    onChange={(e) => setEditingProject({ ...editingProject, githubUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Təsvir</label>
                <textarea
                  rows={2}
                  value={editingProject.description || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Geniş Məlumat</label>
                <textarea
                  rows={4}
                  value={editingProject.fullDetails || ''}
                  onChange={(e) => setEditingProject({ ...editingProject, fullDetails: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm font-mono"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setProjectModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Ləğv et
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="gold-button px-5 py-2.5 rounded-xl text-xs font-bold"
                >
                  Yadda Saxla
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* VIDEO MODAL */}
      {videoModalOpen && editingVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-lg bg-[#0c0e18] border border-amber-500/30 rounded-2xl p-6 shadow-2xl my-8">
            <h3 className="text-lg font-bold text-white mb-4">
              {editingVideo.id ? 'Videonu Redaktə Et' : 'Yeni YouTube Video Əlavə Et'}
            </h3>

            <form onSubmit={handleSaveVideo} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Kanal *</label>
                <select
                  value={editingVideo.channelName || 'AzMoney'}
                  onChange={(e) => setEditingVideo({ ...editingVideo, channelName: e.target.value as 'AzMoney' | 'The Systemic Mind' })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                >
                  <option value="AzMoney">AzMoney</option>
                  <option value="The Systemic Mind">The Systemic Mind</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">YouTube Video ID *</label>
                <input
                  type="text"
                  required
                  placeholder="Məs: dQw4w9WgXcQ"
                  value={editingVideo.videoId || ''}
                  onChange={(e) => setEditingVideo({ ...editingVideo, videoId: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Video Başlığı *</label>
                <input
                  type="text"
                  required
                  value={editingVideo.title || ''}
                  onChange={(e) => setEditingVideo({ ...editingVideo, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Baxış Göstəricisi</label>
                <input
                  type="text"
                  placeholder="Məs: 15.4K baxış"
                  value={editingVideo.viewsDisplay || ''}
                  onChange={(e) => setEditingVideo({ ...editingVideo, viewsDisplay: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Təsvir</label>
                <textarea
                  rows={2}
                  value={editingVideo.description || ''}
                  onChange={(e) => setEditingVideo({ ...editingVideo, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#090b14] border border-slate-700 text-white text-sm"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Ləğv et
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="gold-button px-5 py-2.5 rounded-xl text-xs font-bold"
                >
                  Yadda Saxla
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
