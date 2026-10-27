import { Post, Project, YouTubeVideo } from '@/types';

export const initialProjects: Project[] = [
  {
    id: '1',
    slug: 'saf-2025-vex-v5-robotexnika',
    title: 'SAF 2025 VEX V5 Robotexnika Çempionatı',
    tagline: 'SAF 2025 - Qızıl Medal (Robotexnika)',
    description: "2025-ci ilin iyun ayında keçirilən STEAM Azerbaijan Festivalında (SAF 2025) 'Zeta Team' komandası ilə birlikdə VEX V5 Robotexnika kateqoriyasında 1-ci yeri qazandıq və qızıl medala layiq görüldük.",
    fullDetails: `2025-ci ilin iyun ayında keçirilən STEAM Azerbaijan Festivalında (SAF 2025) 'Zeta Team' komandası ilə birlikdə VEX V5 Robotexnika kateqoriyasında iştirak etdik. Mühəndislik və proqramlaşdırma bacarıqlarımızı birləşdirərək yarışmada 1-ci yeri qazandıq və qızıl medala layiq görüldük. Bu layihə robotların avtonom idarəetməsi və mexaniki dizaynı sahəsindəki təcrübəmin əsas göstəricilərindən biridir.

### Mühəndislik və Avtonom İdarəetmə Təfərrüatları:
- **Avtonom Trayektoriya Alqoritmləri**: Sensorlarla qapalı tsikldə PID tənzimləyicisi vasitəsilə robotun sahədəki koordinasiyası ən yüksək dəqiqliklə təmin edildi.
- **Mexaniki Optimizasiya**: Şassinin çəki balansı, intellektual ötürücü qutusu və sürətli manipulyator sistemi 0.05 saniyəlik cavab müddəti ilə kalibrasiya olundu.
- **Komanda Rəhbərliyi & Zeta Team**: Strategiyanın qurulması, xətaların anında diaqnostikası və ən yüksək xal toplayaraq festivalın qızıl medalının əldə olunması.`,
    category: 'Robotexnika & Hakaton',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://steam.edu.az',
    achievements: 'SAF 2025 1-ci Yer & Qızıl Medal - Zeta Team',
    metrics: [
      { label: 'Festival Nəticəsi', value: '1-ci Yer' },
      { label: 'Medal', value: 'Qızıl Medal' },
      { label: 'Komanda', value: 'Zeta Team' },
    ],
    techStack: ['VEX V5 C++', 'Avtonom PID', 'Mexatronika', 'Sensor Fusion', 'Embedded Systems'],
    featured: true,
    createdAt: '2025-06-20T10:00:00.000Z',
    updatedAt: '2025-06-20T10:00:00.000Z',
  },
  {
    id: '2',
    slug: 'bondify-social-platform',
    title: 'Bondify - Telegram Mini App və Veb Platforma',
    tagline: 'Bondify - Rəqəmsal Sosial Platforma',
    description: 'Real vaxt rejimində işləyən sosial kəşf platforması. Tətbiq həm veb, həm də Telegram Mini App kimi fəaliyyət göstərir. Xüsusi coin iqtisadiyyatı, Telegram Stars və dual age modes inteqrasiyası.',
    fullDetails: `Bondify (Bondify.az / @BondifyAppBot) real vaxt rejimində işləyən sosial kəşf platformasıdır. Tətbiq həm veb, həm də Telegram Mini App kimi fəaliyyət göstərir. Platformaya xüsusi coin iqtisadiyyatı, Telegram Stars inteqrasiyası və Adsgram vasitəsilə mükafatlandırılmış reklam (rewarded ads) sistemləri qurmuşam. Həmçinin, istifadəçi təhlükəsizliyini təmin etmək üçün tətbiqdə ikili yaş rejimi (dual age modes) mövcuddur.

### Platformanın Əsas Funksionallıqları:
- **Telegram Mini App & Web Sync**: TMA SDK ilə Telegram sessiyasının dərhal avtorizasiyası və veb brauzerlə sinxronlaşdırılmış profillər.
- **Daxili İqtisadiyyat & Telegram Stars**: İstifadəçilərin qarşılıqlı əlaqəsi üçün rəqəmsal coin sistemi və Telegram Stars ilə rəsmi ödəniş axını.
- **Adsgram Mükafatlandırma Sistemi**: İstifadəçilərin tətbiqdaxili fəallığını stimullaşdıran rewarded video modulları.
- **İkili Yaş Rejimi (Dual Age Modes)**: Təhlükəsizliyi qorumaq məqsədilə fərqli yaş qrupları üçün tamamilə təcrid olunmuş və qorunan mühit.`,
    category: 'Sosial Platforma & TMA',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://bondify.az',
    githubUrl: 'https://t.me/BondifyAppBot',
    achievements: 'Telegram Stars, Coin İqtisadiyyatı & Adsgram',
    metrics: [
      { label: 'Ekosistem', value: 'Web + TMA' },
      { label: 'İnteqrasiya', value: 'Telegram Stars' },
      { label: 'Təhlükəsizlik', value: 'Dual Age Mode' },
    ],
    techStack: ['Next.js 16', 'TypeScript', 'Telegram Mini Apps', 'Tailwind CSS', 'Adsgram', 'Node.js'],
    featured: true,
    createdAt: '2026-01-15T12:00:00.000Z',
    updatedAt: '2026-01-15T12:00:00.000Z',
  },
  {
    id: '3',
    slug: 'reqemsal-magazalarin-idareedilmesi',
    title: 'Rəqəmsal Mağazaların İdarəedilməsi',
    tagline: 'E-ticarət və Qlobal Satış',
    description: 'Rəqəmsal bazarda aktiv e-ticarət vitrinlərinin (Electrolify.com) qurulması və idarə edilməsi, Meta Ads və TikTok Ads ilə qlobal kütləyə çıxış və mentorluq.',
    fullDetails: `Rəqəmsal bazarda aktiv e-ticarət fəaliyyəti göstərirəm. Xüsusilə Electrolify.com kimi rəqəmsal vitrinlərin (storefront) qurulması və idarə edilməsini həyata keçirirəm. Meta Ads və TikTok Ads kimi reklam platformalarından istifadə edərək məhsulların qlobal bazarda hədəf kütləyə çatdırılmasını təmin edirəm. Eyni zamanda, e-ticarətə başlamaq istəyənlər üçün mentorluq dəstəyi də göstərirəm.

### Strategiya və Qlobal Marketinq Arxitekturası:
- **Müasir Vitrin İnşası (Electrolify.com)**: Yüksək konversiyalı, ultra-sürətli və mobil yönümlü storefront dizaynı.
- **Performans Marketinqi (Meta & TikTok Ads)**: Dəqiq auditoriya hədəfləməsi, A/B testləri və ROAS göstəricilərinin optimallaşdırılması.
- **Qlobal Logistika və Rəqəmsal İdarəetmə**: Beynəlxalq təchizat zəncirinin avtomatlaşdırılmış idarəsi və analitika lövhələri.
- **Mentorluq və Konsaltinq**: Rəqəmsal satışa yeni qədəm qoyan gənclər və sahibkarlar üçün praktiki bələdçilik.`,
    category: 'E-ticarət & Qlobal Marketinq',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67e557224f?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://electrolify.com',
    achievements: 'Electrolify.com Vitrini & Qlobal Mentorluq',
    metrics: [
      { label: 'Platforma', value: 'Electrolify' },
      { label: 'Reklam Kanalları', value: 'Meta & TikTok' },
      { label: 'Fəaliyyət', value: 'Qlobal Satış' },
    ],
    techStack: ['Next.js Storefront', 'Meta Ads Manager', 'TikTok Ads Pixel', 'Analitika', 'Conversion Rate Opt'],
    featured: true,
    createdAt: '2025-11-20T14:00:00.000Z',
    updatedAt: '2025-11-20T14:00:00.000Z',
  },
  {
    id: '4',
    slug: 'fermerim-az-transporttech',
    title: 'Fermerim.az və TransportTech Qalibiyyəti',
    tagline: 'Aqrotex və Hakaton Uğurları',
    description: "Kənd təsərrüfatının rəqəmsallaşdırılması: Mənim Heyvanım, Pinaqro və Fermerim.az. 2026 TransportTech hakatonunda 1-ci yer (4444 AZN mükafat) və ADAU 'Düşün Və Yarat' Hakatonunda 2-ci yer.",
    fullDetails: `Kənd təsərrüfatının rəqəmsallaşdırılması yönündə süni intellekt əsaslı platformalar inkişaf etdirirəm. Mənim Heyvanım, Pinaqro və Fermerim.az bu ekosistemin bir parçasıdır. Bu istiqamətdəki fəaliyyətimizlə 2026-cı ilin oktyabrında keçirilən 'TransportTech' AgTech hakatonunda 1-ci yeri tutaraq 4444 AZN mükafat qazandıq. Həmçinin, ADAU 'Düşün Və Yarat' Hakatonunda Fermerim.az layihəsi ilə tələbə komandasına mentorluq edərək 2-ci yerə layiq görüldük.

### Ekosistem və Hakaton Uğurları:
- **Aqrotex Ekosistemi**: Mənim Heyvanım, Pinaqro və Fermerim.az platformaları ilə fermerlərə resurs planlaması, torpaq analizi və məhsul monitorinqi təqdim edilir.
- **TransportTech Qələbəsi (Oktyabr 2026)**: AgTech və logistika kateqoriyasında münsiflərin yekdil qərarı ilə 1-ci yer və 4444 AZN baş mükafat qazanıldı.
- **ADAU 'Düşün Və Yarat' Hakatonu**: Tələbə proqramçılarına mentorluq edərək Fermerim.az konseptini 2-ci yer mükafatçısına çevirdik.`,
    category: 'Aqrotex & Hakaton Zəfərləri',
    imageUrl: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80',
    liveUrl: 'https://fermerim.az',
    achievements: 'TransportTech 1-ci Yer (4444 AZN) & ADAU 2-ci Yer',
    metrics: [
      { label: 'TransportTech', value: '1-ci Yer (4444 AZN)' },
      { label: 'ADAU Hakatonu', value: '2-ci Yer (Mentor)' },
      { label: 'Sistem', value: 'Fermerim / Pinaqro' },
    ],
    techStack: ['AgriTech AI', 'Next.js App Router', 'Python Analitika', 'Geo-Spatial Data', 'IoT Sensorlar'],
    featured: true,
    createdAt: '2026-10-15T15:30:00.000Z',
    updatedAt: '2026-10-15T15:30:00.000Z',
  },
];

export const initialPosts: Post[] = [
  {
    id: 'post-1',
    slug: 'ai-agentleri-ve-n8n-avtomatlasdirma',
    title: 'Süni İntellekt Agentləri və n8n ilə Tam Avtomatlaşdırılmış Sistemlərin Qurulması',
    excerpt: 'Mürəkkəb biznes və informasiya axınlarını insan müdaxiləsi olmadan idarə edən avtonom AI agentlərinin yaradılması prosesi.',
    content: `Müasir proqram təminatı inkişafında ən böyük sıçrayış passiv botlardan aktiv qərarverici AI agentlərinə keçiddir. 
Süni intellekt agenti təkcə verilən suala cavab vermir; o, məqsədi dərk edir, plan qurur, alətləri (tools) işə salır və nəticəni yoxlayır.

### n8n və LLM İnteqrasiyasının Gücü
Açıq mənbəli avtomatlaşdırma sistemi olan n8n, LLM modelləri ilə API dünyası arasında mükəmməl bir körpü rolunu oynayır:
1. **Webhook qəbulu**: İstənilən platformadan gələn hadisələri dərhal emal edir.
2. **Kontekstin formalaşdırılması**: Vektor bazalarından semantik axtarışla lazımi bilikləri toplayır.
3. **Agentin qərarvermə mərhələsi**: Agent hansı addımı atmalı olduğunu təyin edir.

Prime Media Group olaraq qurduğumuz sistemlərdə bu yanaşma insan əməyini 80%-dən çox optimallaşdırır və xətaları sıfıra endirir.`,
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    category: 'Süni İntellekt',
    tags: ['AI Agents', 'n8n', 'Automation', 'Python', 'Next.js'],
    readTime: '6 dəqiqə',
    published: true,
    views: 1420,
    createdAt: '2026-03-20T11:00:00.000Z',
    updatedAt: '2026-03-20T11:00:00.000Z',
  },
  {
    id: 'post-2',
    slug: 'the-systemic-mind-murekkeb-sistemlerin-arhitekturasi',
    title: 'The Systemic Mind: Mürəkkəb Texnoloji Problemlərin Sistem Düşüncəsi ilə Həlli',
    excerpt: 'Kod yazmaqdan əvvəl sistemi anlamaq: komponentlər arasındakı əlaqələr və dayanıqlı arxitektura qurmağın prinsipləri.',
    content: `Bir çox developerlər problemin yalnız zahiri əlamətləri ilə mübarizə aparır, halbuki əsl həll sistemin strukturundadır. "The Systemic Mind" fəlsəfəsi mürəkkəb layihələrə vahid orqanizm kimi baxmağı tələb edir.

### Sistem Düşüncəsinin 3 Qızıl Qaydası
- **Əlaqələrin xəritələnməsi**: Tək-tək funksiyalara deyil, məlumatın sistem boyu necə axdığına fokuslanın.
- **Geri əlaqə dövrələri (Feedback Loops)**: Hər bir daxilolmanın hansı reaksiyaya səbəb olduğunu qabaqcadan hesablayın.
- **Davamlılıq (Resilience)**: Bir modul dayandıqda bütün platformanın çökməsinin qarşısını alan arxitektura qurun.`,
    coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    category: 'Sistem Düşüncəsi',
    tags: ['Systemic Mind', 'Architecture', 'Strategy', 'Development'],
    readTime: '8 dəqiqə',
    published: true,
    views: 980,
    createdAt: '2026-03-10T16:20:00.000Z',
    updatedAt: '2026-03-10T16:20:00.000Z',
  },
  {
    id: 'post-3',
    slug: 'nextjs-app-router-ve-ai-seo-optimallashdirilmasi',
    title: 'Next.js App Router və AI SEO: Perplexity və ChatGPT üçün Saytınızı Necə İndeksləməli?',
    excerpt: 'Klassik Google SEO-dan süni intellekt axtarış sistemlərinə (GEO / AI SEO) keçid: JSON-LD, semantik tag-lər və llms.txt sirləri.',
    content: `İnternet axtarışı kökündən dəyişir. İndi istifadəçilər təkcə linklərə klikləmir, Perplexity, ChatGPT Search və Gemini kimi süni intellekt mühərriklərindən birbaşa sintez olunmuş cavablar alırlar.

### AI Engine-lər Sizin Saytınızı Necə Oxuyur?
1. **JSON-LD Schema Markup**: Robotlar üçün ən dəqiq mənbə strukturlu məlumatdır.
2. **Semantik HTML Arxitekturası**: Kontekstin itməməsi üçün səliqəli teqlər.
3. **llms.txt**: Saytınızın kök kataloqunda LLM-lər üçün xüsusi konspekt təqdim etmək sizin süni intellekt cavablarında mənbə kimi göstərilmə ehtimalınızı dəfələrlə artırır.`,
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    category: 'SEO & Rəqəmsal İnkişaf',
    tags: ['AI SEO', 'Next.js', 'Perplexity', 'JSON-LD', 'App Router'],
    readTime: '7 dəqiqə',
    published: true,
    views: 1850,
    createdAt: '2026-02-28T13:45:00.000Z',
    updatedAt: '2026-02-28T13:45:00.000Z',
  },
  {
    id: 'post-4',
    slug: 'hakaton-qelebesi-ideyadan-48-saatda-mehsula',
    title: 'Hakaton Qələbəsi: İdeyadan 48 Saatda Qalib Layihəyə (TransportTech & SAF 2025)',
    excerpt: 'Gərgin yarış mühitində MVP hazırlamaq, komandanı idarə etmək və münsiflər qarşısında qüsursuz çıxış etməyin praktik formulu.',
    content: `Hakatonlar yalnız kod yazmaq yarışı deyil, məhdud zamanda ən kəskin problemi ən zərif mühəndisliklə həll etmək sənətidir.
TransportTech hakatonunda qazandığımız 1-ci yer (4444 AZN) və SAF 2025 VEX V5 qızıl medalı bizə bir neçə təkzibolunmaz dərsi öyrətdi:

- **İlk 4 saat yalnız problemə həsr olunmalıdır**: Həllə tələsməyin. Əsas ağrılı nöqtəni dəqiqləşdirin.
- **İşləyən MVP hər şeydən üstündür**: Təqdimatda slayddan çox, real işləyən prototip danışmalıdır.
- **Metrikalar və səmərəlilik modeli**: Texnologiya yalnız o vaxt qiymətləndirilir ki, real cəmiyyətə və ya sənayeyə ölçülə bilən xeyir verir.`,
    coverImage: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    category: 'Hakaton & İnnovasiya',
    tags: ['Hackathons', 'TransportTech', 'SAF 2025', 'Startup', 'MVP'],
    readTime: '5 dəqiqə',
    published: true,
    views: 1640,
    createdAt: '2026-02-14T18:00:00.000Z',
    updatedAt: '2026-02-14T18:00:00.000Z',
  },
];

export const initialVideos: YouTubeVideo[] = [
  {
    id: 'yt-1',
    videoId: '8YGORHzSjQ4',
    title: 'Telegram Bot Yaradaraq Nə Qədər Pul Qazandım? 💰 | Program Yaradaraq Gəlir Qazanmaq 🚀',
    channelName: '@thebaliyev',
    channelUrl: 'https://www.youtube.com/@TheBaliyev',
    thumbnailUrl: 'https://i.ytimg.com/vi/8YGORHzSjQ4/hqdefault.jpg',
    description: 'Bu videoda Telegram bot yaradaraq necə pul qazandığımı addım-addım göstərirəm. Heç bir mürəkkəb sistemə ehtiyac olmadan Telegram bot yaratmaq, onu monetizasiya etmək və proqramlaşdırma ilə gəlir əldə etmək.',
    viewsDisplay: '350+ baxış',
    publishedDate: '04 Oktyabr 2026',
    orderIndex: 1,
  },
  {
    id: 'yt-2',
    videoId: 'l8R9Fb9Sob4',
    title: 'WHATSAPP KANALINDAN PUL QAZANMAQ OLAR? 😱 0-DAN 1000 TAKİBÇİYƏ! Kanal Reklamı Necə Olur?',
    channelName: '@thebaliyev',
    channelUrl: 'https://www.youtube.com/@TheBaliyev',
    thumbnailUrl: 'https://i.ytimg.com/vi/l8R9Fb9Sob4/hqdefault.jpg',
    description: 'WhatsApp kanalı necə açılır? 0-dan WhatsApp kanalı yaradaraq 1 gündə 1000+ takipçi toplamaq mümkündürmü və WhatsApp kanalından reklamla pul qazanmaq olar?',
    viewsDisplay: '336+ baxış',
    publishedDate: '28 Sentyabr 2026',
    orderIndex: 2,
  },
  {
    id: 'yt-3',
    videoId: 'CNJo0PmSHMg',
    title: 'FBI-nin Həbs Etdiyi Milyarder — Andrew Tate Pulu Necə Qazandı?(Sərvət Strategiyaları)',
    channelName: '@thebaliyev',
    channelUrl: 'https://www.youtube.com/@TheBaliyev',
    thumbnailUrl: 'https://i.ytimg.com/vi/CNJo0PmSHMg/hqdefault.jpg',
    description: 'Andrew Tate pulu necə qazandı və tətbiq etdiyi sərvət strategiyaları nələrdir? Bu videoda FBI-nin həbs etdiyi milyarder Andrew Tate-in biznes imperiyasını və sərvət modellərini təhlil edirik.',
    viewsDisplay: '1.1K+ baxış',
    publishedDate: '12 Noyabr 2025',
    orderIndex: 3,
  },
  {
    id: 'yt-4',
    videoId: 'vpDgMnHi4vE',
    title: 'İnternetdən Passiv Pul Qazanmaq 2026 | Ən Yaxşı 5 Passiv Gəlir Yolu (Sərmayesiz) 💰',
    channelName: '@thebaliyev',
    channelUrl: 'https://www.youtube.com/@TheBaliyev',
    thumbnailUrl: 'https://i.ytimg.com/vi/vpDgMnHi4vE/hqdefault.jpg',
    description: '2026-cı ildə internetdən gəlir əldə etmək üçün ən yaxşı 5 passiv gəlir modeli. Sərmayə qoymadan, rəqəmsal bacarıqlarla dayanıqlı gəlir mənbələri yaratmağın praktik yolları.',
    viewsDisplay: '1.8K+ baxış',
    publishedDate: '22 Oktyabr 2025',
    orderIndex: 4,
  },
];
