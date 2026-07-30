import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { manifest, categories } = body;

    if (!manifest || !Array.isArray(manifest)) {
      return NextResponse.json({ error: 'Invalid manifest array' }, { status: 400 });
    }

    // Path to public/images/site_gallery/manifest.json
    const manifestPath = path.join(process.cwd(), 'public', 'images', 'site_gallery', 'manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf-8');

    // If categories are provided, save category config
    if (categories && Array.isArray(categories)) {
      const categoriesPath = path.join(process.cwd(), 'public', 'images', 'site_gallery', 'categories.json');
      fs.writeFileSync(categoriesPath, JSON.stringify(categories, null, 2), 'utf-8');
    }

    return NextResponse.json({ success: true, message: 'Gallery manifest successfully updated on disk!' });
  } catch (error: any) {
    console.error('Failed to save gallery manifest:', error);
    return NextResponse.json({ error: error.message || 'Failed to save manifest' }, { status: 500 });
  }
}
