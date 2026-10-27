import fs from 'fs';
import path from 'path';
import { DatabaseData, Post, Project, YouTubeVideo, ContactMessage } from '@/types';
import { initialPosts, initialProjects, initialVideos } from '@/data/initialData';

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_FILE_PATH = path.join(DATA_DIR, 'database.json');

// Ensure data folder and file exists with initial data
function ensureDb(): DatabaseData {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    if (!fs.existsSync(DB_FILE_PATH)) {
      const initial: DatabaseData = {
        posts: initialPosts,
        projects: initialProjects,
        videos: initialVideos,
        messages: [],
      };
      fs.writeFileSync(DB_FILE_PATH, JSON.stringify(initial, null, 2), 'utf-8');
      return initial;
    }

    const raw = fs.readFileSync(DB_FILE_PATH, 'utf-8');
    const parsed = JSON.parse(raw) as DatabaseData;
    return parsed;
  } catch (error) {
    console.error('Error reading database file, returning default memory data:', error);
    return {
      posts: initialPosts,
      projects: initialProjects,
      videos: initialVideos,
      messages: [],
    };
  }
}

function writeDb(data: DatabaseData): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    // Atomic write via temp file
    const tempFile = `${DB_FILE_PATH}.${Date.now()}.tmp`;
    fs.writeFileSync(tempFile, JSON.stringify(data, null, 2), 'utf-8');
    fs.renameSync(tempFile, DB_FILE_PATH);
  } catch (error) {
    console.error('Error writing to database file:', error);
  }
}

// POSTS OPERATIONS
export async function getAllPosts(): Promise<Post[]> {
  const db = ensureDb();
  return db.posts.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const db = ensureDb();
  const post = db.posts.find((p) => p.slug === slug);
  return post || null;
}

export async function savePost(post: Omit<Post, 'id' | 'createdAt' | 'updatedAt'> & { id?: string }): Promise<Post> {
  const db = ensureDb();
  const now = new Date().toISOString();

  if (post.id) {
    // Update existing
    const index = db.posts.findIndex((p) => p.id === post.id);
    if (index !== -1) {
      const updated: Post = {
        ...db.posts[index],
        ...post,
        id: post.id,
        updatedAt: now,
      };
      db.posts[index] = updated;
      writeDb(db);
      return updated;
    }
  }

  // Create new
  const newPost: Post = {
    ...post,
    id: `post-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    views: 0,
    createdAt: now,
    updatedAt: now,
  };

  db.posts.unshift(newPost);
  writeDb(db);
  return newPost;
}

export async function deletePost(id: string): Promise<boolean> {
  const db = ensureDb();
  const initialLength = db.posts.length;
  db.posts = db.posts.filter((p) => p.id !== id);
  if (db.posts.length !== initialLength) {
    writeDb(db);
    return true;
  }
  return false;
}

// PROJECTS OPERATIONS
export async function getAllProjects(): Promise<Project[]> {
  const db = ensureDb();
  return db.projects.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const db = ensureDb();
  const proj = db.projects.find((p) => p.slug === slug || p.id === slug);
  return proj || null;
}

export async function getProjectById(idOrSlug: string): Promise<Project | null> {
  const db = ensureDb();
  const proj = db.projects.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
  return proj || null;
}

export async function saveProject(
  project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'> & { id?: string }
): Promise<Project> {
  const db = ensureDb();
  const now = new Date().toISOString();

  if (project.id) {
    const index = db.projects.findIndex((p) => p.id === project.id);
    if (index !== -1) {
      const updated: Project = {
        ...db.projects[index],
        ...project,
        id: project.id,
        updatedAt: now,
      };
      db.projects[index] = updated;
      writeDb(db);
      return updated;
    }
  }

  const newProject: Project = {
    ...project,
    id: `proj-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    createdAt: now,
    updatedAt: now,
  };

  db.projects.unshift(newProject);
  writeDb(db);
  return newProject;
}

export async function deleteProject(id: string): Promise<boolean> {
  const db = ensureDb();
  const initialLength = db.projects.length;
  db.projects = db.projects.filter((p) => p.id !== id);
  if (db.projects.length !== initialLength) {
    writeDb(db);
    return true;
  }
  return false;
}

// YOUTUBE VIDEOS OPERATIONS
export async function getAllVideos(): Promise<YouTubeVideo[]> {
  const db = ensureDb();
  return db.videos.sort((a, b) => (a.orderIndex || 0) - (b.orderIndex || 0));
}

export async function saveVideo(
  video: Omit<YouTubeVideo, 'id'> & { id?: string }
): Promise<YouTubeVideo> {
  const db = ensureDb();

  if (video.id) {
    const index = db.videos.findIndex((v) => v.id === video.id);
    if (index !== -1) {
      const updated: YouTubeVideo = {
        ...db.videos[index],
        ...video,
        id: video.id,
      };
      db.videos[index] = updated;
      writeDb(db);
      return updated;
    }
  }

  const newVideo: YouTubeVideo = {
    ...video,
    id: `yt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
  };

  db.videos.push(newVideo);
  writeDb(db);
  return newVideo;
}

export async function deleteVideo(id: string): Promise<boolean> {
  const db = ensureDb();
  const initialLength = db.videos.length;
  db.videos = db.videos.filter((v) => v.id !== id);
  if (db.videos.length !== initialLength) {
    writeDb(db);
    return true;
  }
  return false;
}

// CONTACT MESSAGES
export async function saveContactMessage(
  msg: Omit<ContactMessage, 'id' | 'createdAt'>
): Promise<ContactMessage> {
  const db = ensureDb();
  const newMsg: ContactMessage = {
    ...msg,
    id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
  };

  db.messages.unshift(newMsg);
  writeDb(db);
  return newMsg;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  const db = ensureDb();
  return db.messages;
}
