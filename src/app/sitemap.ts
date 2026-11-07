import { MetadataRoute } from 'next';
import { getAllPosts, getAllProjects } from '@/lib/db';
import { SITE_CONFIG } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  const baseUrl = SITE_CONFIG.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#atesh-studio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/#haqqimda`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#layiheler`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/data-deletion`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/bloq`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/#youtube`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#elaqe`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/bloq/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.createdAt),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(project.updatedAt || project.createdAt),
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...postRoutes, ...projectRoutes];
}
