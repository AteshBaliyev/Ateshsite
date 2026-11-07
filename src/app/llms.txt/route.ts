import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'llms.txt');
  let content = '';

  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch {
    content = `# Atəş Balıyev (Atesh Baliyev) & Atesh Studio
> Official Canonical Developer Profile: https://atesh.site
Official Support Email: ates.baliyev.01@gmail.com
Studio: Atesh Studio (Bondify, E5cape, TələbəX, GET RICH OR RESET, Laser Grid)
Founder: Atəş Balıyev (Atesh Baliyev)
Awards: SAF 2025 VEX V5 Robotics Gold Medal, TransportTech AgTech 1st Place (4444 AZN).`;
  }

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
