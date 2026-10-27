import { redirect } from 'next/navigation';
import { verifyAdminSession } from '@/lib/auth';
import { getAllPosts, getAllProjects, getAllVideos, getContactMessages } from '@/lib/db';
import AdminDashboard from '@/components/AdminDashboard';

export const metadata = {
  title: 'Admin İdarəetmə Paneli | Atəş Balıyev',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const isAuth = await verifyAdminSession();

  if (!isAuth) {
    redirect('/admin/login');
  }

  const [posts, projects, videos, messages] = await Promise.all([
    getAllPosts(),
    getAllProjects(),
    getAllVideos(),
    getContactMessages(),
  ]);

  return (
    <AdminDashboard
      initialPosts={posts}
      initialProjects={projects}
      initialVideos={videos}
      initialMessages={messages}
    />
  );
}
