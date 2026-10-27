export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  readTime: string;
  published: boolean;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fullDetails: string;
  category: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  achievements?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  techStack: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface YouTubeVideo {
  id: string;
  videoId: string;
  title: string;
  channelName: string;
  channelUrl: string;
  thumbnailUrl: string;
  description: string;
  viewsDisplay: string;
  publishedDate: string;
  orderIndex: number;
}

export interface ContactMessage {
  id: string;
  name: string;
  contactInfo: string;
  subject?: string;
  message: string;
  createdAt: string;
}

export interface DatabaseData {
  posts: Post[];
  projects: Project[];
  videos: YouTubeVideo[];
  messages: ContactMessage[];
}
