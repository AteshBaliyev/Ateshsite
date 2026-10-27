-- =========================================================================
-- ATƏŞ BALIYEV PORTFOLIO PLATFORM - SUPABASE / POSTGRESQL DATABASE SCHEMA
-- =========================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. BLOG POSTS TABLE
CREATE TABLE IF NOT EXISTS posts (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::TEXT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    excerpt TEXT NOT NULL,
    content TEXT NOT NULL,
    cover_image TEXT NOT NULL,
    category TEXT NOT NULL,
    tags TEXT[] NOT NULL DEFAULT '{}',
    read_time TEXT NOT NULL DEFAULT '5 dəq',
    published BOOLEAN NOT NULL DEFAULT true,
    views INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. PROJECTS TABLE
CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::TEXT,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    tagline TEXT NOT NULL,
    description TEXT NOT NULL,
    full_details TEXT NOT NULL,
    category TEXT NOT NULL,
    image_url TEXT NOT NULL,
    live_url TEXT,
    github_url TEXT,
    achievements TEXT,
    metrics JSONB DEFAULT '{}'::jsonb,
    tech_stack TEXT[] NOT NULL DEFAULT '{}',
    featured BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. YOUTUBE VIDEOS TABLE (AzMoney, The Systemic Mind)
CREATE TABLE IF NOT EXISTS youtube_videos (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::TEXT,
    video_id TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    channel_name TEXT NOT NULL, -- 'AzMoney' | 'The Systemic Mind'
    channel_url TEXT NOT NULL,
    thumbnail_url TEXT NOT NULL,
    description TEXT,
    views_display TEXT DEFAULT '1.2K baxış',
    published_date TEXT DEFAULT '2026',
    order_index INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. CONTACT INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS contact_messages (
    id TEXT PRIMARY KEY DEFAULT uuid_generate_v4()::TEXT,
    name TEXT NOT NULL,
    contact_info TEXT NOT NULL, -- Email, WhatsApp, Telegram
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- INDEXES FOR MAXIMUM QUERY SPEED & AI ENGINE PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_category ON posts(category);
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_youtube_channel ON youtube_videos(channel_name);
