import { getAllPosts, getAllProjects, getAllVideos } from '@/lib/db';
import Hero from '@/components/Hero';
import AteshStudioSection from '@/components/AteshStudioSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import YouTubeSection from '@/components/YouTubeSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';

export default async function HomePage() {
  const [posts, projects, videos] = await Promise.all([
    getAllPosts(),
    getAllProjects(),
    getAllVideos(),
  ]);

  return (
    <>
      <Hero />
      <AteshStudioSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <YouTubeSection videos={videos} />
      <BlogSection posts={posts} />
      <ContactSection />
    </>
  );
}
