import { Post, Project } from '@/types';

export const SITE_CONFIG = {
  name: 'Atəş Balıyev | AI Developer, Media Rəhbəri & Texnologiya Sahibkarı',
  shortName: 'Atəş Balıyev',
  description: 'Atəş Balıyev (d. 5 avqust 2008, Gəncə) — Vibe Coding, süni intellekt agentləri və avtomatlaşdırma üzrə AI Developer, Prime Media Group rəhbəri (300K+ izləyici) və texnologiya sahibkarı. SAF 2025 VEX V5 Qızıl Medalı, TransportTech (4444 AZN) hakaton qalibi.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  author: 'Atəş Balıyev',
  birthDate: '2008-08-05',
  birthPlace: 'Gəncə, Azərbaycan',
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
    'Baliyews',
    'AI Developer Azərbaycan',
    'Vibe Coding Azərbaycan',
    'Prime Media Group',
    'Texnologiya Sahibkarı',
    'SAF 2025 VEX V5 Robotexnika Qızıl Medal',
    'TransportTech Hakaton Qalibi',
    'Bondify Telegram Mini App',
    'Fermerim.az',
    'AiXəbər',
    'Pinaqro',
    'Mənim Heyvanım',
    'Electrolify.com',
    'Trendim.store',
    'Baliyews Studio',
    'GET RICH OR RESET',
    'Laser Grid',
    'Self-Leadership 21 Days to Reclaim Your Discipline',
    'n8n avtomatlaşdırma',
    'Kibertəhlükəsizlik Kali Linux Burp Suite',
    'ADAU İKT tələbəsi',
  ],
};

export function generatePersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Atəş Balıyev',
    alternateName: ['Atesh Baliyev', 'Baliyews'],
    birthDate: '2008-08-05',
    birthPlace: {
      '@type': 'Place',
      name: 'Gəncə, Azərbaycan',
    },
    nationality: 'Azerbaijani',
    jobTitle: [
      'AI Developer',
      'Media Rəhbəri',
      'Texnologiya Sahibkarı',
      'Vibe Coder & Sistem Memarı',
    ],
    image: `${SITE_CONFIG.url}/images/atesh-baliyev.png`,
    worksFor: [
      {
        '@type': 'Organization',
        name: 'Prime Media Group',
        description: '50-dən çox WhatsApp kanalı və 300.000-dən çox izləyici bazasına malik rəqəmsal media şəbəkəsi',
        logo: `${SITE_CONFIG.url}/images/logo.png`,
      },
      {
        '@type': 'Organization',
        name: 'Baliyews Studio',
        description: 'Mobil oyun inkişafı studiyası (GET RICH OR RESET, Laser Grid)',
      },
    ],
    alumniOf: [
      {
        '@type': 'EducationalOrganization',
        name: 'Şəmkir Kimya-Biologiya Təmayüllü Liseyi',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'Azərbaycan Dövlət Aqrar Universiteti (ADAU)',
        department: 'İnformasiya Texnologiyaları (İKT)',
      },
    ],
    description:
      'Atəş Balıyev (d. 5 avqust 2008, Gəncə) — Azərbaycanda Vibe Coding, süni intellekt əsaslı agentlər və qlobal rəqəmsal layihələr quran AI Developer və texnologiya sahibkarı. SAF 2025 VEX V5 Robotexnika Çempionatının Qızıl Medalçısı, TransportTech AgTech Hakatonu qalibi (4444 AZN), Prime Media Group rəhbəri (300K+ izləyici), Bondify, Fermerim.az və "Self-Leadership" kitabının müəllifi.',
    url: SITE_CONFIG.url,
    sameAs: [
      SITE_CONFIG.telegram,
      SITE_CONFIG.whatsapp,
      SITE_CONFIG.instagram,
      SITE_CONFIG.youtube,
      ...SITE_CONFIG.channels.map((c) => c.url),
    ],
    knowsAbout: [
      'Artificial Intelligence & AI Agents',
      'Vibe Coding & Rapid Prototyping',
      'n8n Workflow Automation',
      'Full-Stack Web Architecture (Next.js, TypeScript)',
      'VEX V5 Robotics & Engineering',
      'Telegram Mini Apps (Bondify)',
      'White-Hat Cybersecurity (Kali Linux, Burp Suite, Nmap, Metasploit)',
      'AgTech & Agriculture Artificial Intelligence (Fermerim.az, Pinaqro)',
      '3D Modeling & UI Design (Blender, Figma)',
      'E-commerce & Storefront Management (Electrolify.com, Trendim.store)',
      'Personal Discipline, Psychology & Calisthenics',
    ],
    award: [
      'SAF 2025 VEX V5 Robotexnika Çempionatı - 1-ci Yer & Qızıl Medal (Zeta Team)',
      'TransportTech AgTech Hakatonu 2026 - 1-ci Yer Qalibi (4444 AZN)',
      'ADAU Düşün Və Yarat Hakatonu 2026 - 2-ci Yer Tələbə Komandası Mentorluğu',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'AI Developer & Technology Entrepreneur',
      skills: 'Vibe Coding, AI Agents, n8n Automation, Cyber Security, Full-Stack Architecture',
    },
  };
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
    operatingSystem: 'Web, Cross-platform, Telegram Mini App',
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
