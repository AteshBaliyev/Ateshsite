import { Metadata } from 'next';
import { getAllPosts } from '@/lib/db';
import BlogSection from '@/components/BlogSection';
import { SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Bloq & Texnoloji Məqalələr',
  description: 'Atəş Balıyevdən süni intellekt agentləri, n8n avtomatlaşdırması, sistem düşüncəsi və AI SEO haqqında dərin analitik məqalələr.',
  openGraph: {
    title: 'Bloq & Texnoloji Məqalələr | Atəş Balıyev',
    description: 'Süni intellekt agentləri, n8n avtomatlaşdırması, sistem düşüncəsi və AI SEO analizləri.',
    url: `${SITE_CONFIG.url}/bloq`,
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="pt-6">
      <BlogSection posts={posts} isStandalonePage={true} />
    </div>
  );
}
