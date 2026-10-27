import { NextResponse } from 'next/server';
import { verifyAdminCredentials, createAdminSession } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { error: 'İstifadəçi adı və şifrə daxil edilməlidir' },
        { status: 400 }
      );
    }

    // Təhlükəsizlik Tələbi: Məlumatlar yalnız .env faylından oxunur
    const isValid = await verifyAdminCredentials(username, password);

    if (!isValid) {
      return NextResponse.json(
        { error: 'Daxil edilmiş admin məlumatları yanlışdır' },
        { status: 401 }
      );
    }

    await createAdminSession(username);

    return NextResponse.json({
      success: true,
      message: 'Uğurla daxil olundu',
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Sistemdə xəta baş verdi' },
      { status: 500 }
    );
  }
}
