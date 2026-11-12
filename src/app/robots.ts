import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url;

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/privacy',
          '/terms',
          '/data-deletion',
          '/llms.txt',
          '/app-ads.txt',
          '/bloq',
          '/projects',
        ],
        disallow: ['/admin', '/api/admin', '/api/webhook'],
      },
      {
        userAgent: [
          'Google-adstxt',
          'Mediapartners-Google',
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai',
          'Omgilibot',
          'FacebookBot',
        ],
        allow: [
          '/',
          '/privacy',
          '/terms',
          '/data-deletion',
          '/llms.txt',
          '/app-ads.txt',
          '/bloq',
          '/projects',
        ],
        disallow: ['/admin', '/api/admin'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
