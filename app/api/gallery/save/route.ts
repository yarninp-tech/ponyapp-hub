import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { manifest, categories, passcode } = body;

    // Simple security passcode check (default: yarnin2026 or 0547918818)
    const VALID_PASSCODES = ['yarnin2026', '0547918818', 'ponyapp2026', '1234'];
    if (!passcode || !VALID_PASSCODES.includes(passcode)) {
      return NextResponse.json({ error: 'Unauthorized: Invalid admin passcode' }, { status: 401 });
    }

    if (!manifest || !Array.isArray(manifest)) {
      return NextResponse.json({ error: 'Invalid manifest array' }, { status: 400 });
    }

    // Path to public/images/site_gallery/manifest.json
    const manifestPath = path.join(process.cwd(), 'public', 'images', 'site_gallery', 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');

    // Save categories if provided
    if (categories && Array.isArray(categories)) {
      const categoriesPath = path.join(process.cwd(), 'public', 'images', 'site_gallery', 'categories.json');
      fs.writeFileSync(categoriesPath, JSON.stringify(categories, null, 2), 'utf-8');
    }

    return NextResponse.json({ success: true, message: 'Gallery manifest successfully saved!' });
  } catch (error: any) {
    console.error('Failed to save gallery manifest:', error);
    return NextResponse.json({ error: error.message || 'Failed to save manifest' }, { status: 500 });
  }
}
