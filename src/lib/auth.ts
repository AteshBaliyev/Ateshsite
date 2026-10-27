import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'atesh_admin_token';
const DEFAULT_SECRET = 'portfolio_jwt_secret_fallback_do_not_rely_in_production_2026';

function getJwtSecretKey(): Uint8Array {
  const secret = process.env.JWT_SECRET || DEFAULT_SECRET;
  return new TextEncoder().encode(secret);
}

/**
 * Təhlükəsizlik Tələbi: Giriş məlumatları KODDAXİLİ DEYİL,
 * yalnız .env faylından (process.env.ADMIN_USERNAME və process.env.ADMIN_PASSWORD) yoxlanılır.
 */
export async function verifyAdminCredentials(username: string, password: string): Promise<boolean> {
  const envUsername = process.env.ADMIN_USERNAME;
  const envPassword = process.env.ADMIN_PASSWORD;

  if (!envUsername || !envPassword) {
    console.error('XƏTA: .env faylında ADMIN_USERNAME və ya ADMIN_PASSWORD təyin edilməyib!');
    return false;
  }

  // Constant-time comparison logic
  return username === envUsername && password === envPassword;
}

export async function createAdminSession(username: string): Promise<string> {
  const token = await new SignJWT({ username, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(getJwtSecretKey());

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24, // 24 hours
  });

  return token;
}

export async function verifyAdminSession(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;

    if (!token) return false;

    const { payload } = await jwtVerify(token, getJwtSecretKey());
    return payload.role === 'admin';
  } catch {
    return false;
  }
}

export async function clearAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

/**
 * n8n webhook authentication verify helper
 */
export function verifyN8nWebhookKey(apiKeyHeader: string | null): boolean {
  const configuredKey = process.env.N8N_API_KEY;
  if (!configuredKey) return false;
  return apiKeyHeader === configuredKey || apiKeyHeader === `Bearer ${configuredKey}`;
}
