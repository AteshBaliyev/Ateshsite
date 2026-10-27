import { getAllPosts, getAllProjects, getAllVideos } from '@/lib/db';
import { generatePersonJsonLd, generateWebSiteJsonLd, generateVideoJsonLd } from '@/lib/seo';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import YouTubeSection from '@/components/YouTubeSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import JsonLd from '@/components/JsonLd';

export default async function HomePage() {
  const [posts, projects, videos] = await Promise.all([
    getAllPosts(),
    getAllProjects(),
    getAllVideos(),
  ]);

  const personJsonLd = generatePersonJsonLd();
  const websiteJsonLd = generateWebSiteJsonLd();
  const videosJsonLd = videos.map(generateVideoJsonLd);

  return (
    <>
      {/* Global AI SEO & Structured Data */}
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <JsonLd data={videosJsonLd} />

      <Hero />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <YouTubeSection videos={videos} />
      <BlogSection posts={posts} />
      <ContactSection />
    </>
  );
}
