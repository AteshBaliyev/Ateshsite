export type Locale = 'en' | 'az' | 'ru';

export interface TranslationSchema {
  meta: {
    siteTitle: string;
    siteDescription: string;
  };
  nav: {
    home: string;
    studio: string;
    about: string;
    projects: string;
    videos: string;
    blog: string;
    contact: string;
    whatsapp: string;
    telegram: string;
    instagram: string;
    tagline: string;
  };
  hero: {
    typewriterPre: string;
    typewriterName: string;
    subtitles: readonly string[] | string[];
    bio: string;
    badgeRobotics: string;
    badgeHackathon: string;
    badgeStudio: string;
    ctaStudio: string;
    ctaProjects: string;
    ctaWhatsApp: string;
    ctaTelegram: string;
    ctaInstagram: string;
    metrics: {
      safTitle: string;
      safValue: string;
      safDesc: string;
      ttTitle: string;
      ttValue: string;
      ttDesc: string;
      socialTitle: string;
      socialValue: string;
      socialDesc: string;
      ecomTitle: string;
      ecomValue: string;
      ecomDesc: string;
    };
  };
  studio: {
    badge: string;
    title: string;
    descriptionAz: string;
    descriptionEn: string;
    devEntityTitle: string;
    devEntityName: string;
    devEntityStatus: string;
    leadTitle: string;
    leadName: string;
    leadSubtitle: string;
    emailTitle: string;
    appSecTitle: string;
    appSecStatus: string;
    viewPrivacyPolicy: string;
    dataDeletionSla: string;
    appsTitle: string;
    appsSubtitle: string;
    exploreApp: string;
    liveWeb: string;
    playStoreStatus: string;
    taglineBondify: string;
    taglineE5cape: string;
    taglineTelebeX: string;
    taglineGames: string;
  };
  about: {
    badge: string;
    title: string;
    bioIntro: string;
    bioVibe: string;
    cardStudioTitle: string;
    cardStudioDesc: string;
    cardHackathonTitle: string;
    cardHackathonDesc: string;
    toggleShowBio: string;
    toggleHideBio: string;
    officialProfile: string;
    location: string;
    highSchool: string;
    mediaGroup: string;
    robotics: string;
    appSec: string;
    fullBioTitle: string;
    eduTitle: string;
    eduText: string;
    venturesTitle: string;
    venturesList: readonly string[] | string[];
    appSecTitle: string;
    appSecText: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    all: string;
    robotics: string;
    social: string;
    ecommerce: string;
    agtech: string;
    viewDetails: string;
    achievements: string;
    techStack: string;
  };
  youtube: {
    badge: string;
    title: string;
    subtitle: string;
    subscribe: string;
    views: string;
    subscribers: string;
    published: string;
  };
  blog: {
    badge: string;
    title: string;
    subtitle: string;
    readArticle: string;
    minRead: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    contactInfoLabel: string;
    contactInfoPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successTitle: string;
    successDesc: string;
    officialEmailTitle: string;
    officialEmailNote: string;
    telegramTitle: string;
    telegramNote: string;
    whatsappTitle: string;
    whatsappNote: string;
    instagramTitle: string;
    instagramNote: string;
  };
  footer: {
    description: string;
    officialEmail: string;
    rights: string;
    privacyPolicy: string;
    termsOfService: string;
    dataDeletion: string;
    securityVerified: string;
  };
  speedDial: {
    openLabel: string;
    closeLabel: string;
    instagram: string;
    whatsapp: string;
    telegram: string;
  };
}

export const translations: Record<Locale, TranslationSchema> = {
  en: {
    meta: {
      siteTitle: 'Atəş Balıyev (Atesh Baliyev) | Atesh Studio & AI Developer',
      siteDescription:
        'Atesh Baliyev — AI Developer, Founder of Atesh Studio, and Head of Prime Media Group. Mobile apps (Bondify, TələbəX), 3D games (E5cape), and autonomous AI systems.',
    },
    nav: {
      home: 'Home',
      studio: 'Atesh Studio',
      about: 'About Me',
      projects: 'Projects',
      videos: 'Videos',
      blog: 'Blog',
      contact: 'Contact',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      instagram: 'Instagram',
      tagline: 'Atesh Studio • AI Systems',
    },
    hero: {
      typewriterPre: 'I am ',
      typewriterName: 'Atəş Balıyev',
      subtitles: [
        'Founder of Atesh Studio.',
        'Building Intelligent AI Systems.',
        'Head of Prime Media Group.',
        'SAF 2025 Robotics Gold Medalist.',
        'Engineering Next-Gen Mobile Apps & Games.',
      ],
      bio: 'IT student, founder of Atesh Studio, head of Prime Media Group, and software engineer architecting complex digital systems with autonomous AI agents, intelligent algorithms, and modern mobile/web technologies.',
      badgeRobotics: 'SAF 2025 Gold Medal',
      badgeHackathon: 'TransportTech 1st Place (4444 AZN)',
      badgeStudio: 'Atesh Studio Founder',
      ctaStudio: 'Atesh Studio (Apps & Games)',
      ctaProjects: 'Explore All Projects',
      ctaWhatsApp: 'Chat on WhatsApp',
      ctaTelegram: 'Telegram',
      ctaInstagram: 'Instagram',
      metrics: {
        safTitle: 'SAF 2025',
        safValue: 'Gold Medal',
        safDesc: 'VEX V5 Robotics Championship',
        ttTitle: 'TransportTech',
        ttValue: '1st Place',
        ttDesc: '4444 AZN AgTech Hackathon Winner',
        socialTitle: 'Social Platform',
        socialValue: 'Bondify',
        socialDesc: 'TMA & Coin Economy Architecture',
        ecomTitle: 'E-Commerce',
        ecomValue: 'Electrolify',
        ecomDesc: 'Global Storefronts & Ads Funnels',
      },
    },
    studio: {
      badge: 'Google Play Official Developer Portal',
      title: 'Atesh Studio — Next-Level Mobile Apps & Games',
      descriptionAz:
        'Atesh Studio is a premier software and game development studio founded by Atesh Baliyev. Focused on high-performance Android applications, hyper-casual games, and full Google Play Store compliance.',
      descriptionEn:
        'Official Google Play Console entity & digital studio engineering Telegram Mini Apps (Bondify), e-commerce platforms (Trendim.store), student networks (TələbəX), and mobile games (GlowSnake.io, Laser Grid).',
      devEntityTitle: 'Developer Entity',
      devEntityName: 'Atesh Studio',
      devEntityStatus: 'Google Play Console Ready',
      leadTitle: 'Founder & Lead Developer',
      leadName: 'Atəş Balıyev',
      leadSubtitle: '(Atesh Baliyev)',
      emailTitle: 'Official Support Email',
      appSecTitle: 'Compliance & AppSec',
      appSecStatus: 'Full Data Safety Compliance',
      viewPrivacyPolicy: 'Atesh Studio Privacy Policy',
      dataDeletionSla: 'Data Deletion Form & SLA (7 Days)',
      appsTitle: 'Flagship Mobile Ecosystem & Games',
      appsSubtitle: 'Interactive catalog of consumer applications and mobile games under the Atesh Studio umbrella.',
      exploreApp: 'Explore Application',
      liveWeb: 'Live Web / Telegram',
      playStoreStatus: 'Google Play Data Safety Compliant',
      taglineBondify: 'Global Social Discovery, Dating & Real-Time Connection Platform',
      taglineE5cape: '3D Cyber-Neon Endless Arcade Runner Game',
      taglineTelebeX: 'Interactive Campus Network & Student Social Community',
      taglineGames: 'Hyper-Casual Reflex & Laser Puzzle Arcade Games',
    },
    about: {
      badge: 'Engineering Philosophy & Mission',
      title: 'Turning Artificial Intelligence & Mobile Ideas into Working Products.',
      bioIntro:
        'I am Atəş Balıyev (Atesh Baliyev), born August 5, 2008 in Ganja, Azerbaijan. Founder of Atesh Studio, AI Developer, and Head of Prime Media Group.',
      bioVibe:
        'Instead of traditional line-by-line manual coding, I utilize Vibe Coding, autonomous AI agent pipelines, and modern full-stack architectures. This enables rapid deployment of complex mobile apps and cloud systems, end-to-end automation, and maximum SEO / GEO discoverability.',
      cardStudioTitle: 'Atesh Studio & Mobile Engineering',
      cardStudioDesc: 'Bondify, E5cape, TələbəX, and arcade games built in full compliance with Google Play Developer standards.',
      cardHackathonTitle: 'Hackathons & Championships',
      cardHackathonDesc: 'SAF 2025 VEX V5 Robotics Gold Medal & 1st place at TransportTech AgTech (4444 AZN prize).',
      toggleShowBio: 'View Full Biography & Knowledge Graph',
      toggleHideBio: 'Collapse Full Biography',
      officialProfile: 'Official Profile',
      location: 'Ganja / Baku, Azerbaijan',
      highSchool: 'Graduate of Shamkir Chemistry-Biology Lyceum; studying IT at ADAU.',
      mediaGroup: 'Prime Media Group: 50+ WhatsApp channels, 300K+ active follower network.',
      robotics: 'SAF 2025 Zeta Team VEX V5 Robotics Champion.',
      appSec: 'Application Security Architecture (AppSec) & Google Play Data Safety.',
      fullBioTitle: 'Atəş Balıyev — Complete Biography & AI Profile',
      eduTitle: 'Academic Background & Innovation Path',
      eduText:
        'Graduated from Shamkir Chemistry-Biology Focused Lyceum. Currently pursuing Information Technology (IT) at the Azerbaijan State Agricultural University (ADAU). Combining formal STEM grounding with cutting-edge software development.',
      venturesTitle: 'Digital Ecosystem & Studio Ventures',
      venturesList: [
        'Atesh Studio: Mobile applications (Bondify, TələbəX) and games (E5cape, GET RICH OR RESET, Laser Grid).',
        'Prime Media Group: Digital publishing network reaching over 300,000 active subscribers.',
        'E-Commerce: Global digital storefronts (Electrolify.com) driven by targeted Meta & TikTok Ads.',
        'AgTech & AI: Fermerim.az, Pinaqro, and TransportTech 1st place championship platform.',
      ],
      appSecTitle: 'Application Security (AppSec) & Privacy',
      appSecText:
        'Designing secure REST APIs, role-based access control, cryptographic user data protection, and strict compliance with Google Play Store Data Safety & COPPA requirements.',
    },
    projects: {
      badge: 'AI Systems & Web Ecosystems',
      title: 'Web Platforms, Hackathons & Milestones',
      subtitle: 'Fermerim.az (AgTech), SAF 2025 Robotics Gold Medal, TransportTech (4444 AZN), AiXəbər, and global stores.',
      all: 'All Projects',
      robotics: 'Robotics',
      social: 'Social & TMA',
      ecommerce: 'E-Commerce',
      agtech: 'AgTech & Hackathon',
      viewDetails: 'View Project Details',
      achievements: 'Key Achievements',
      techStack: 'Tech Stack',
    },
    youtube: {
      badge: 'Official YouTube Channels',
      title: 'Automated Media & Engineering Content',
      subtitle: 'Educational tutorials, AI systems analysis, and technology strategies across our YouTube network.',
      subscribe: 'Subscribe on YouTube',
      views: 'views',
      subscribers: 'Subscribers',
      published: 'Published',
    },
    blog: {
      badge: 'Engineering Articles & Insights',
      title: 'Deep-Dives on AI, Architecture & Systems',
      subtitle: 'Articles on Vibe Coding, n8n workflows, Next.js optimization, and hackathon execution.',
      readArticle: 'Read Full Article',
      minRead: 'min read',
    },
    contact: {
      badge: 'Direct Collaboration',
      title: 'Let’s Build Something Exceptional Together',
      subtitle: 'Have a project, investment, mobile app idea, or business inquiry? Reach out directly.',
      formTitle: 'Send a Direct Message',
      formSubtitle: 'Messages are delivered directly to my private communication channel and answered promptly.',
      nameLabel: 'Your Full Name *',
      namePlaceholder: 'e.g. John Doe',
      contactInfoLabel: 'Contact Information (Email, Phone, or Telegram) *',
      contactInfoPlaceholder: 'e.g. john@example.com or +994 50...',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'e.g. Mobile App / Robotics / AI Collaboration',
      messageLabel: 'Your Message *',
      messagePlaceholder: 'Briefly describe your project or inquiry...',
      sendButton: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Received!',
      successDesc: 'Thank you for reaching out. I will get back to you shortly.',
      officialEmailTitle: 'Official Email Contact',
      officialEmailNote: 'Official support and developer business inquiries.',
      telegramTitle: 'Instant Telegram',
      telegramNote: 'Direct founder messaging on Telegram: @Baliyews',
      whatsappTitle: 'Direct WhatsApp',
      whatsappNote: 'Quick chat with Atesh Baliyev: +994 55 642 25 45',
      instagramTitle: 'Official Instagram',
      instagramNote: 'Behind-the-scenes & daily tech updates: @atesh_baliyev',
    },
    footer: {
      description:
        'AI Developer, Founder of Atesh Studio, and Head of Prime Media Group. Google Play mobile apps (Bondify, TələbəX), 3D games (E5cape), SAF 2025 Gold Medalist, and TransportTech Hackathon Winner.',
      officialEmail: 'Official Developer Contact:',
      rights: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      dataDeletion: 'Data Deletion SLA',
      securityVerified: 'Google Play Verified Developer',
    },
    speedDial: {
      openLabel: 'Direct Contact Options',
      closeLabel: 'Close Menu',
      instagram: 'Instagram: @atesh_baliyev',
      whatsapp: 'Chat on WhatsApp',
      telegram: 'Telegram: @Baliyews',
    },
  },

  az: {
    meta: {
      siteTitle: 'Atəş Balıyev (Atesh Baliyev) | Atesh Studio & AI Developer',
      siteDescription:
        'Atəş Balıyev (Atesh Baliyev) — AI Developer, Prime Media Group təsisçisi və Atesh Studio-nun qurucusu. Mobil tətbiqlər (Bondify, TələbəX), oyunlar (E5cape) və süni intellekt sistemləri.',
    },
    nav: {
      home: 'Ana Səhifə',
      studio: 'Atesh Studio',
      about: 'Mənim Haqqımda',
      projects: 'Layihələr',
      videos: 'Videolarım',
      blog: 'Bloq',
      contact: 'Əlaqə',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      instagram: 'Instagram',
      tagline: 'Atesh Studio • AI Systems',
    },
    hero: {
      typewriterPre: 'Mən ',
      typewriterName: 'Atəş Balıyev',
      subtitles: [
        'Atesh Studio Qurucusuyam.',
        'Süni İntellektlə Sistemlər Qururam.',
        'Prime Media Group Rəhbəriyəm.',
        'SAF 2025 Qızıl Medalçısıyam.',
        'Mobil Tətbiq & Oyunlar İnşa Edirəm.',
      ],
      bio: 'İKT tələbəsi, Atesh Studio qurucusu, Prime Media Group rəhbəri və mürəkkəb sistemləri intellektual alqoritmlər, avtonom AI agentləri və modern mobil/veb arxitekturası ilə inşa edən proqram mühəndisiyəm.',
      badgeRobotics: 'SAF 2025 Qızıl Medal',
      badgeHackathon: 'TransportTech 1-ci Yer (4444 AZN)',
      badgeStudio: 'Atesh Studio Qurucusu',
      ctaStudio: 'Atesh Studio (Apps & Games)',
      ctaProjects: 'Bütün Layihələrə Bax',
      ctaWhatsApp: 'WhatsApp ilə Yaz',
      ctaTelegram: 'Telegram',
      ctaInstagram: 'Instagram',
      metrics: {
        safTitle: 'SAF 2025',
        safValue: 'Qızıl Medal',
        safDesc: 'VEX V5 Robotexnika Çempionatı',
        ttTitle: 'TransportTech',
        ttValue: '1-ci Yer',
        ttDesc: '4444 AZN Hakaton Qələbəsi',
        socialTitle: 'Sosial Platforma',
        socialValue: 'Bondify',
        socialDesc: 'TMA & Coin İqtisadiyyatı',
        ecomTitle: 'E-ticarət',
        ecomValue: 'Electrolify',
        ecomDesc: 'Qlobal Vitrinlər & Reklamlar',
      },
    },
    studio: {
      badge: 'Google Play Rəsmi Developer Portalı',
      title: 'Atesh Studio — Next-Level Mobile Apps & Games',
      descriptionAz:
        'Atesh Studio — Atəş Balıyev tərəfindən təsis edilmiş, yüksək performanslı mobil tətbiqlər, rəqəmsal sosial platformalar və mobil oyunlar hazırlayan innovativ proqram təminatı studiyasıdır.',
      descriptionEn:
        'Official Google Play Console entity & digital studio engineering Telegram Mini Apps (Bondify), e-commerce platforms (Trendim.store), student networks (TələbəX), and mobile games (GlowSnake.io, Laser Grid).',
      devEntityTitle: 'Developer Entity',
      devEntityName: 'Atesh Studio',
      devEntityStatus: 'Google Play Console Hazır',
      leadTitle: 'Qurucu & Baş Mühəndis',
      leadName: 'Atəş Balıyev',
      leadSubtitle: '(Atesh Baliyev)',
      emailTitle: 'Rəsmi Dəstək E-poçtu',
      appSecTitle: 'Təhlükəsizlik & AppSec',
      appSecStatus: 'Google Play Data Safety Uyğunluğu',
      viewPrivacyPolicy: 'Atesh Studio Gizlilik Siyasəti',
      dataDeletionSla: 'Məlumatların Silinməsi Formu (7 Gün)',
      appsTitle: 'Əsas Mobil Ekosistem və Oyunlar',
      appsSubtitle: 'Atesh Studio çətiri altında hazırlanan rəsmi mobil tətbiqlər və oyun layihələri.',
      exploreApp: 'Tətbiqi Kəşf Et',
      liveWeb: 'Canlı Veb / Telegram',
      playStoreStatus: 'Google Play Data Safety Uyğun',
      taglineBondify: 'Qlobal Sosial Kəşf və Tanışlıq Platforması',
      taglineE5cape: '3D Kiber-Neon Sonsuz Qaçış Arkada Mobil Oyunu',
      taglineTelebeX: 'Tələbə Şəbəkəsi və Kampus Həyatı Platforması',
      taglineGames: 'Hiper-təsadüfi və Arkada Mobil Oyun Layihələri',
    },
    about: {
      badge: 'Proqramlaşdırma Fəlsəfəm və Missiyam',
      title: 'Süni İntellekt və Mobil Sistemləri İşləyən Məhsullara Çevirirəm.',
      bioIntro:
        'Mən Atəş Balıyev. 5 avqust 2008-ci ildə Gəncə şəhərində anadan olmuşam. Atesh Studio mobil tətbiq və oyun studiyasının qurucusu, AI Developer və Prime Media Group rəhbəriyəm.',
      bioVibe:
        'Mən ənənəvi "sıfırdan sətir-sətir kod yazmaq" metodologiyası ilə deyil, Vibe Coding, qabaqcıl AI agentləri və modern alətlər vasitəsilə kompleks mobil və veb sistemlər qururam. Bu yanaşma mənə mürəkkəb ideyaları ən qısa müddətdə işlək rəqəmsal məhsullara çevirmək, avtomatlaşdırılmış iş axınları ilə prosesləri idarə etmək və SEO / GEO üçün tam optimallaşdırılmış platformalar yaratmaq imkanı verir.',
      cardStudioTitle: 'Atesh Studio & Mobil İnnovasiya',
      cardStudioDesc: 'Bondify, E5cape, TələbəX və arkada oyun layihələri ilə Google Play standartlarına tam uyğun mobil ekosistemlər.',
      cardHackathonTitle: 'Hakatonlar & Qızıl Medallar',
      cardHackathonDesc: 'SAF 2025 VEX V5 Robotexnika Qızıl Medalı və TransportTech AgTech (4444 AZN) hakatonunda 1-ci yer.',
      toggleShowBio: 'Ətraflı Bioqrafiya və Studiya Məlumatını Göstər',
      toggleHideBio: 'Ətraflı Məlumatı Yığcamlaşdır',
      officialProfile: 'Rəsmi Profil',
      location: 'Gəncə / Bakı, Azərbaycan',
      highSchool: 'Şəmkir KBT Liseyi məzunu, hazırda ADAU-da İKT təhsili.',
      mediaGroup: 'Prime Media Group: 50+ WhatsApp kanalı, 300.000+ aktiv izləyici.',
      robotics: 'SAF 2025 Zeta Team VEX V5 Robotexnika Çempionu.',
      appSec: 'Tətbiq Təhlükəsizliyi (AppSec) və Google Play Data Safety.',
      fullBioTitle: 'Atəş Balıyev — Tam Bioqrafiya və Studiya Profili',
      eduTitle: 'Təhsil və Mühəndislik Yolu',
      eduText:
        'Şəmkir Kimya-Biologiya Təmayüllü Liseyini bitirdikdən sonra hazırda Azərbaycan Dövlət Aqrar Universitetində (ADAU) İnformasiya Texnologiyaları (İKT) ixtisası üzrə təhsil alıram.',
      venturesTitle: 'Rəqəmsal Ekosistem və Layihələr',
      venturesList: [
        'Atesh Studio: Mobil tətbiqlər (Bondify, TələbəX) və 3D oyunlar (E5cape, GET RICH OR RESET, Laser Grid).',
        'Prime Media Group: 50-dən çox WhatsApp kanalı və 300.000-dən artıq aktiv izləyici şəbəkəsi.',
        'Rəqəmsal Ticarət: Meta və TikTok reklamları ilə qlobal bazara hədəflənən Electrolify.com vitrini.',
        'Aqrotex və Süni İntellekt: Fermerim.az və TransportTech hakatonunda 1-ci yer qazanan intellektual sistem.',
      ],
      appSecTitle: 'Tətbiq Təhlükəsizliyi (AppSec) və Məlumatların Qorunması',
      appSecText:
        'Tətbiq Təhlükəsizliyi Arxitekturası (AppSec) üzrə Google Play Data Safety və məlumatların şifrələnməsi tələblərinə tam uyğun sistemlər hazırlayıram.',
    },
    projects: {
      badge: 'AI Sistemləri və Veb Ekosistemlər',
      title: 'Veb Platformaları, Hakatonlar və Nailiyyətlər',
      subtitle: 'Fermerim.az (AgTech), SAF 2025 VEX V5 Qızıl Medal, TransportTech (4444 AZN), AiXəbər və qlobal e-ticarət vitrinləri.',
      all: 'Bütün Layihələr',
      robotics: 'Robotexnika',
      social: 'Sosial & TMA',
      ecommerce: 'E-ticarət',
      agtech: 'Aqrotex & Hakaton',
      viewDetails: 'Layihənin Detallarına Bax',
      achievements: 'Əsas Uğurlar',
      techStack: 'Texnologiyalar',
    },
    youtube: {
      badge: 'Rəsmi YouTube Kanalları',
      title: 'Rəsmi Videolarım & Avtomatlaşdırılmış Media',
      subtitle: 'Süni intellekt, mürəkkəb sistemlərin arxitekturası və texnologiya üzrə YouTube məzmunlarımız.',
      subscribe: 'YouTube-da Abunə Ol',
      views: 'baxış',
      subscribers: 'Abunəçi',
      published: 'Paylaşılma',
    },
    blog: {
      badge: 'Məqalələr və Analizlər',
      title: 'Süni İntellekt, Memarlıq və Sistem Mühəndisliyi',
      subtitle: 'Vibe Coding, n8n iş axınları, Next.js və texnoloji arxitektura üzrə peşəkar məqalələr.',
      readArticle: 'Məqaləni Oxu',
      minRead: 'dəq oxuma',
    },
    contact: {
      badge: 'Birbaşa Əməkdaşlıq',
      title: 'Gəlin Birlikdə Yeni Zirvələr Fəth Edək',
      subtitle: 'Layihəniz, mobil tətbiq ideyanız və ya biznes təklifiniz üçün birbaşa əlaqə saxlayın.',
      formTitle: 'Mesajınızı Buradan Göndərin',
      formSubtitle: 'Form vasitəsilə göndərilən hər müraciət birbaşa sistemimə qeyd olunur və qısa zamanda cavablandırılır.',
      nameLabel: 'Adınız və Soyadınız *',
      namePlaceholder: 'Məs: Əli Məmmədov',
      contactInfoLabel: 'Əlaqə Məlumatınız (Email, Nömrə və ya Telegram) *',
      contactInfoPlaceholder: 'Məs: mail@example.com və ya +994 50...',
      subjectLabel: 'Mövzu',
      subjectPlaceholder: 'Məs: Mobil Tətbiq / Robotexnika / Əməkdaşlıq',
      messageLabel: 'Mesajınız *',
      messagePlaceholder: 'Layihəniz və ya təklifiniz haqqında qısa məlumat qeyd edin...',
      sendButton: 'Mesajı Göndər',
      sending: 'Göndərilir...',
      successTitle: 'Mesajınız Uğurla Qəbul Edildi!',
      successDesc: 'Təşəkkür edirəm. Müraciətiniz qısa zamanda cavablandırılacaqdır.',
      officialEmailTitle: 'Rəsmi E-poçt Əlaqəsi',
      officialEmailNote: 'Rəsmi tərtibatçı və biznes sorğuları üçün.',
      telegramTitle: 'Sürətli Telegram',
      telegramNote: 'Atəş Balıyev birbaşa Telegram kanalı: @Baliyews',
      whatsappTitle: 'Birbaşa WhatsApp',
      whatsappNote: 'Tez və operativ əlaqə: +994 55 642 25 45',
      instagramTitle: 'Rəsmi Instagram',
      instagramNote: 'Gündəlik texnologiya xəbərləri: @atesh_baliyev',
    },
    footer: {
      description:
        'AI Developer, Atesh Studio qurucusu və Prime Media Group rəhbəri. Google Play mobil tətbiqləri (Bondify, TələbəX), 3D oyunlar (E5cape), SAF 2025 Qızıl Medal və TransportTech hakaton qalibi.',
      officialEmail: 'Rəsmi Tərtibatçı Əlaqəsi:',
      rights: 'Bütün hüquqlar qorunur.',
      privacyPolicy: 'Məxfilik Siyasəti (Privacy Policy)',
      termsOfService: 'İstifadə Şərtləri (Terms of Service)',
      dataDeletion: 'Məlumatların Silinməsi (Data Deletion SLA)',
      securityVerified: 'Google Play Təsdiqlənmiş Tərtibatçı',
    },
    speedDial: {
      openLabel: 'Birbaşa Əlaqə Kanalları',
      closeLabel: 'Menyunu Bağla',
      instagram: 'Instagram: @atesh_baliyev',
      whatsapp: 'WhatsApp ilə Əlaqə',
      telegram: 'Telegram: @Baliyews',
    },
  },

  ru: {
    meta: {
      siteTitle: 'Атеш Балыев (Atesh Baliyev) | Atesh Studio & AI Developer',
      siteDescription:
        'Атеш Балыев (Atesh Baliyev) — разработчик искусственного интеллекта, основатель Atesh Studio и руководитель Prime Media Group. Мобильные приложения (Bondify, TələbəX), 3D-игры (E5cape) и системы ИИ.',
    },
    nav: {
      home: 'Главная',
      studio: 'Atesh Studio',
      about: 'Обо Мне',
      projects: 'Проекты',
      videos: 'Видео',
      blog: 'Блог',
      contact: 'Контакты',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      instagram: 'Instagram',
      tagline: 'Atesh Studio • AI Systems',
    },
    hero: {
      typewriterPre: 'Я — ',
      typewriterName: 'Атеш Балыев',
      subtitles: [
        'Основатель Atesh Studio.',
        'Создаю системы на базе ИИ.',
        'Руководитель Prime Media Group.',
        'Золотой медалист SAF 2025 по робототехнике.',
        'Разрабатываю мобильные приложения и игры нового поколения.',
      ],
      bio: 'Студент факультета ИКТ, основатель Atesh Studio, руководитель Prime Media Group и инженер-программист, создающий сложные цифровые экосистемы с помощью автономных ИИ-агентов, интеллектуальных алгоритмов и современной мобильной/веб-архитектуры.',
      badgeRobotics: 'SAF 2025 Золотая Медаль',
      badgeHackathon: '1-е место TransportTech (4444 AZN)',
      badgeStudio: 'Основатель Atesh Studio',
      ctaStudio: 'Atesh Studio (Приложения и Игры)',
      ctaProjects: 'Смотреть Все Проекты',
      ctaWhatsApp: 'Написать в WhatsApp',
      ctaTelegram: 'Telegram',
      ctaInstagram: 'Instagram',
      metrics: {
        safTitle: 'SAF 2025',
        safValue: 'Золото',
        safDesc: 'Чемпионат по робототехнике VEX V5',
        ttTitle: 'TransportTech',
        ttValue: '1-е Место',
        ttDesc: 'Победитель AgTech хакатона (4444 AZN)',
        socialTitle: 'Социальная Сеть',
        socialValue: 'Bondify',
        socialDesc: 'Telegram Mini App и Coin-экономика',
        ecomTitle: 'E-Commerce',
        ecomValue: 'Electrolify',
        ecomDesc: 'Глобальные витрины и реклама',
      },
    },
    studio: {
      badge: 'Официальный портал разработчика Google Play',
      title: 'Atesh Studio — Мобильные Приложения и Игры Нового Поколения',
      descriptionAz:
        'Atesh Studio — инновационная студия разработки программного обеспечения и игр, основанная Атешем Балыевым. Специализируется на высокопроизводительных приложениях для Android и полном соответствии требованиям Google Play.',
      descriptionEn:
        'Official Google Play Console entity & digital studio engineering Telegram Mini Apps (Bondify), e-commerce platforms (Trendim.store), student networks (TələbəX), and mobile games (GlowSnake.io, Laser Grid).',
      devEntityTitle: 'Организация Разработчика',
      devEntityName: 'Atesh Studio',
      devEntityStatus: 'Готовность к Google Play Console',
      leadTitle: 'Основатель и Главный Инженер',
      leadName: 'Атеш Балыев',
      leadSubtitle: '(Atesh Baliyev)',
      emailTitle: 'Официальная Почта Поддержки',
      appSecTitle: 'Безопасность и AppSec',
      appSecStatus: 'Полное соответствие Google Play Data Safety',
      viewPrivacyPolicy: 'Политика Конфиденциальности Atesh Studio',
      dataDeletionSla: 'Форма Удаления Данных (7 Дней)',
      appsTitle: 'Флагманская Мобильная Экосистема и Игры',
      appsSubtitle: 'Официальный каталог пользовательских приложений и мобильных игр под брендом Atesh Studio.',
      exploreApp: 'Открыть Приложение',
      liveWeb: 'Веб / Telegram',
      playStoreStatus: 'Соответствует стандартам безопасности Google Play',
      taglineBondify: 'Глобальная Платформа Социальных Знакомств и Общения',
      taglineE5cape: '3D Кибер-Неоновый Бесконечный Аркадный Раннер',
      taglineTelebeX: 'Интерактивная Студенческая Сеть и Сообщество',
      taglineGames: 'Гиперказуальные Рефлекс-Аркады и Лазерные Головоломки',
    },
    about: {
      badge: 'Философия Разработки и Миссия',
      title: 'Превращаю Искусственный Интеллект в Работающие Продукты.',
      bioIntro:
        'Я Атеш Балыев (Atesh Baliyev), родился 5 августа 2008 года в городе Гянджа, Азербайджан. Основатель студии мобильных приложений и игр Atesh Studio, AI Developer и руководитель Prime Media Group.',
      bioVibe:
        'Вместо традиционного построчного написания кода я использую методологию Vibe Coding, автономных ИИ-агентов и современные инструменты автоматизации. Этот подход позволяет в кратчайшие сроки воплощать сложные идеи в функциональные цифровые продукты, автоматизировать рабочие процессы и создавать платформы, полностью оптимизированные для SEO и GEO.',
      cardStudioTitle: 'Atesh Studio и Мобильные Инновации',
      cardStudioDesc: 'Bondify, E5cape, TələbəX и аркадные игры, созданные в полном соответствии со стандартами Google Play.',
      cardHackathonTitle: 'Хакатоны и Золотые Медали',
      cardHackathonDesc: 'Золотая медаль VEX V5 по робототехнике SAF 2025 и 1-е место на AgTech хакатоне TransportTech (4444 AZN).',
      toggleShowBio: 'Показать Полную Биографию и Профиль',
      toggleHideBio: 'Свернуть Подробную Информацию',
      officialProfile: 'Официальный Профиль',
      location: 'Гянджа / Баку, Азербайджан',
      highSchool: 'Выпускник Шамкирского химико-биологического лицея; студент ИКТ в АГАУ.',
      mediaGroup: 'Prime Media Group: более 50 каналов WhatsApp и 300 000+ подписчиков.',
      robotics: 'Чемпион VEX V5 по робототехнике SAF 2025 (Zeta Team).',
      appSec: 'Архитектура безопасности приложений (AppSec) и Google Play Data Safety.',
      fullBioTitle: 'Атеш Балыев — Полная Биография и Профиль Студии',
      eduTitle: 'Образование и Инженерный Путь',
      eduText:
        'Окончил Шамкирский лицей с уклоном в химию и биологию. В настоящее время изучаю информационные технологии (ИКТ) в Азербайджанском государственном аграрном университете (АГАУ).',
      venturesTitle: 'Цифровая Экосистема и Проекты',
      venturesList: [
        'Atesh Studio: Мобильные приложения (Bondify, TələbəX) и 3D-игры (E5cape, GET RICH OR RESET, Laser Grid).',
        'Prime Media Group: Сеть из более чем 50 каналов WhatsApp с аудиторией свыше 300 000 активных пользователей.',
        'Электронная коммерция: Глобальные витрины Electrolify.com с целевой рекламой в Meta и TikTok Ads.',
        'Агротехнологии и ИИ: Fermerim.az и победа на хакатоне TransportTech с наградой 4444 AZN.',
      ],
      appSecTitle: 'Безопасность Приложений (AppSec) и Защита Данных',
      appSecText:
        'Проектирую защищенные системы в строгом соответствии с требованиями Google Play Data Safety и протоколами сквозного шифрования данных пользователей.',
    },
    projects: {
      badge: 'Системы ИИ и Веб-Экосистемы',
      title: 'Веб-Платформы, Хакатоны и Достижения',
      subtitle: 'Fermerim.az (AgTech), Золотая медаль SAF 2025 VEX V5, TransportTech (4444 AZN), AiXəbər и международные витрины.',
      all: 'Все Проекты',
      robotics: 'Робототехника',
      social: 'Социальные & TMA',
      ecommerce: 'Электронная Коммерция',
      agtech: 'Агротех & Хакатоны',
      viewDetails: 'Подробнее о Проекте',
      achievements: 'Ключевые Достижения',
      techStack: 'Стек Технологий',
    },
    youtube: {
      badge: 'Официальные YouTube Каналы',
      title: 'Видеоконтент и Автоматизированные Медиа',
      subtitle: 'Обучающие видео, аналитика систем искусственного интеллекта и технологические инсайты.',
      subscribe: 'Подписаться на YouTube',
      views: 'просмотров',
      subscribers: 'Подписчиков',
      published: 'Дата публикации',
    },
    blog: {
      badge: 'Статьи и Аналитика',
      title: 'Искусственный Интеллект, Архитектура и Инженерия',
      subtitle: 'Профессиональные материалы по Vibe Coding, рабочим процессам n8n, Next.js и хакатонам.',
      readArticle: 'Читать Статью',
      minRead: 'мин чтения',
    },
    contact: {
      badge: 'Сотрудничество',
      title: 'Давайте Создадим Что-то Впечатляющее Вместе',
      subtitle: 'Есть идея проекта, мобильного приложения или предложение о партнерстве? Напишите мне.',
      formTitle: 'Отправить Сообщение',
      formSubtitle: 'Каждое обращение поступает напрямую в мою рабочую систему и оперативно обрабатывается.',
      nameLabel: 'Ваше Имя и Фамилия *',
      namePlaceholder: 'Например: Иван Иванов',
      contactInfoLabel: 'Контактные Данные (Email, Телефон или Telegram) *',
      contactInfoPlaceholder: 'Например: mail@example.com или +994 50...',
      subjectLabel: 'Тема',
      subjectPlaceholder: 'Например: Мобильное приложение / ИИ / Партнерство',
      messageLabel: 'Ваше Сообщение *',
      messagePlaceholder: 'Кратко опишите ваш проект или предложение...',
      sendButton: 'Отправить Сообщение',
      sending: 'Отправка...',
      successTitle: 'Сообщение Успешно Принято!',
      successDesc: 'Спасибо за обращение. Я свяжусь с вами в ближайшее время.',
      officialEmailTitle: 'Официальная Почта',
      officialEmailNote: 'Для официальных запросов и делового сотрудничества.',
      telegramTitle: 'Быстрый Telegram',
      telegramNote: 'Прямая связь в Telegram: @Baliyews',
      whatsappTitle: 'Прямой WhatsApp',
      whatsappNote: 'Быстрая связь в WhatsApp: +994 55 642 25 45',
      instagramTitle: 'Официальный Instagram',
      instagramNote: 'Технологические обновления и новости: @atesh_baliyev',
    },
    footer: {
      description:
        'AI Developer, основатель Atesh Studio и руководитель Prime Media Group. Мобильные приложения Google Play (Bondify, TələbəX), 3D-игры (E5cape), золотой медалист SAF 2025 и победитель хакатона TransportTech.',
      officialEmail: 'Официальный Контакт Разработчика:',
      rights: 'Все права защищены.',
      privacyPolicy: 'Политика Конфиденциальности',
      termsOfService: 'Условия Использования',
      dataDeletion: 'Регламент Удаления Данных (7 Дней)',
      securityVerified: 'Верифицированный Разработчик Google Play',
    },
    speedDial: {
      openLabel: 'Каналы Прямой Связи',
      closeLabel: 'Закрыть Меню',
      instagram: 'Instagram: @atesh_baliyev',
      whatsapp: 'Написать в WhatsApp',
      telegram: 'Telegram: @Baliyews',
    },
  },
};
