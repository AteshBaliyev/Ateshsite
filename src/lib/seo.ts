import { Post, Project } from '@/types';

export const SITE_CONFIG = {
  name: 'Atəş Balıyev (Atesh Baliyev) | Atesh Studio & AI Developer',
  shortName: 'Atəş Balıyev (Atesh Baliyev)',
  description:
    'Atəş Balıyev (Atesh Baliyev) — AI Developer, Prime Media Group təsisçisi və Atesh Studio-nun qurucusu. Mobil tətbiqlər (Bondify, TələbəX), oyunlar (E5cape) və süni intellekt sistemləri.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://atesh.site',
  author: 'Atəş Balıyev (Atesh Baliyev)',
  email: 'ates.baliyev.01@gmail.com',
  developerStudio: 'Atesh Studio',
  birthDate: '2008-08-05',
  birthPlace: 'Ganja, Azerbaijan',
  education: [
    'Şəmkir Kimya-Biologiya Təmayüllü Liseyi',
    'Azərbaycan Dövlət Aqrar Universiteti (ADAU) — İnformasiya Texnologiyaları (İKT)',
  ],
  telegram: 'https://t.me/Baliyews',
  whatsapp: 'https://wa.me/994556422545',
  instagram: 'https://instagram.com/atesh_baliyev?igsh=MXNseDRyeGNwZzZpNw==',
  youtube: 'https://youtube.com/@thebaliyev?si=qSM7KyDCpWuq_xsb',
  channels: [
    { name: '@thebaliyev', url: 'https://youtube.com/@thebaliyev?si=qSM7KyDCpWuq_xsb' },
    { name: 'AzMoney', url: 'https://www.youtube.com/@AzMoney' },
    { name: 'The Systemic Mind', url: 'https://www.youtube.com/@TheSystemicMind' },
  ],
  keywords: [
    'Atəş Balıyev',
    'Atesh Baliyev',
    'Atesh Studio',
    'AI Developer',
    'Mobile App Developer',
    'Google Play Developer Atesh Studio',
    'Bondify',
    'E5cape',
    'TələbəX',
    'Prime Media Group',
    'Vibe Coding',
    'SAF 2025 VEX V5 Robotexnika Qızıl Medal',
    'TransportTech Hakaton Qalibi',
    'Fermerim.az',
    'AiXəbər',
    'GET RICH OR RESET',
    'Laser Grid',
    'AppSec Architecture',
    'Full-Stack Developer Azerbaijan',
    'ADAU İKT',
  ],
};

/**
 * Unified JSON-LD Knowledge Graph combining Person, Atesh Studio, Prime Media Group, and WebSite
 */
export function generateCompositeJsonLd() {
  const baseUrl = SITE_CONFIG.url;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${baseUrl}/#person`,
        name: 'Atəş Balıyev',
        alternateName: ['Atesh Baliyev', 'Baliyews'],
        birthDate: '2008-08-05',
        birthPlace: {
          '@type': 'Place',
          name: 'Ganja, Azerbaijan',
        },
        nationality: 'Azerbaijani',
        jobTitle: 'AI Developer & Founder of Atesh Studio',
        email: SITE_CONFIG.email,
        url: baseUrl,
        image: `${baseUrl}/images/atesh-baliyev.png`,
        sameAs: [
          SITE_CONFIG.telegram,
          SITE_CONFIG.whatsapp,
          SITE_CONFIG.instagram,
          SITE_CONFIG.youtube,
          ...SITE_CONFIG.channels.map((c) => c.url),
        ],
        alumniOf: [
          {
            '@type': 'CollegeOrUniversity',
            name: 'Azərbaycan Dövlət Aqrar Universiteti (ADAU)',
            department: 'İnformasiya Texnologiyaları (İKT)',
          },
          {
            '@type': 'EducationalOrganization',
            name: 'Şəmkir Kimya-Biologiya Təmayüllü Liseyi',
          },
        ],
        worksFor: [
          {
            '@type': 'Organization',
            '@id': `${baseUrl}/#atesh-studio`,
            name: 'Atesh Studio',
          },
          {
            '@type': 'Organization',
            '@id': `${baseUrl}/#prime-media-group`,
            name: 'Prime Media Group',
          },
        ],
        knowsAbout: [
          'Mobile Application Development (Android, React Native, Flutter, Expo)',
          'Mobile Game Development (Godot, Three.js, C#)',
          'Artificial Intelligence & Autonomous AI Agents',
          'Application Security Architecture (AppSec) & Data Protection',
          'Vibe Coding & Rapid Prototyping',
          'VEX V5 Robotics & Autonomous Engineering',
          'Full-Stack Web Architecture (Next.js 16, TypeScript, Node.js)',
          'Telegram Mini Apps (Bondify)',
        ],
        award: [
          'SAF 2025 VEX V5 Robotexnika Çempionatı - 1-ci Yer & Qızıl Medal (Zeta Team)',
          'TransportTech AgTech Hakatonu 2026 - 1-ci Yer Qalibi (4444 AZN)',
          'ADAU Düşün Və Yarat Hakatonu 2026 - 2-ci Yer Tələbə Komandası Mentorluğu',
        ],
      },
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#atesh-studio`,
        name: 'Atesh Studio',
        alternateName: 'Atesh Games & Mobile Studio',
        url: `${baseUrl}/#atesh-studio`,
        logo: `${baseUrl}/images/logo.png`,
        email: SITE_CONFIG.email,
        founder: {
          '@id': `${baseUrl}/#person`,
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ganja',
          addressCountry: 'Azerbaijan',
        },
        description:
          'Mobile application and game development studio founded by Atesh Baliyev. Official developer portal for Google Play Store applications including Bondify, E5cape, and TələbəX.',
      },
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#prime-media-group`,
        name: 'Prime Media Group',
        url: baseUrl,
        founder: {
          '@id': `${baseUrl}/#person`,
        },
        description:
          '50-dən çox WhatsApp kanalı və 300.000-dən artıq izləyici bazasına malik rəqəmsal media şəbəkəsi.',
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: {
          '@id': `${baseUrl}/#person`,
        },
        inLanguage: ['az', 'en'],
      },
    ],
  };
}

export function generatePersonJsonLd() {
  return generateCompositeJsonLd();
}

export function generateWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    author: {
      '@type': 'Person',
      name: 'Atəş Balıyev',
    },
    inLanguage: 'az',
  };
}

export function generateArticleJsonLd(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: 'Atəş Balıyev',
      url: SITE_CONFIG.url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Prime Media Group',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.url}/bloq/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };
}

export function generateProjectJsonLd(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.title,
    headline: project.tagline,
    description: project.description,
    applicationCategory: project.category,
    image: project.imageUrl,
    url: project.liveUrl || `${SITE_CONFIG.url}/projects/${project.id}`,
    author: {
      '@type': 'Person',
      name: 'Atəş Balıyev',
    },
    operatingSystem: 'Android, Web, Cross-platform',
  };
}

export function generateVideoJsonLd(video: {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedDate: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: [video.thumbnailUrl],
    contentUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
    embedUrl: `https://www.youtube.com/embed/${video.videoId}`,
    author: {
      '@type': 'Person',
      name: 'Atəş Balıyev',
    },
  };
}
