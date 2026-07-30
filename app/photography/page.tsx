'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, ChevronLeft, ExternalLink, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  copyright: string;
}

const YARNIN_PHOTOS: PhotoItem[] = [
  {
    id: 'anemone',
    title: 'Golden Anemones in Sunset Light',
    category: 'Fine Art Macrophotography',
    description: 'Intimate fine art study of wild anemones bathed in golden hour backlight bokeh.',
    imageSrc: '/images/yarnin_anemone.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'mountain-summit',
    title: 'Mountain Summit Path in Monochrome',
    category: 'High-Contrast B&W Landscape',
    description: 'Monochrome study of high-altitude mountain trails, dramatic cloud textures, and piercing sunlight.',
    imageSrc: '/images/yarnin_bw_mountain.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'desert-canyon',
    title: 'Desert Canyon Valley & Boulder',
    category: 'Geological B&W Photography',
    description: 'Expansive black and white desert canyon landscape capturing rock formations and ancient erosion.',
    imageSrc: '/images/yarnin_bw_desert.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'sunflowers-storm',
    title: 'Sunflowers under Storm Sky',
    category: 'Dramatic Flora & Weather',
    description: 'High-dynamic-range photograph of golden sunflower fields set against ominous grey storm clouds.',
    imageSrc: '/images/yarnin_sunflowers.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'forest-stream',
    title: 'Eucalyptus Forest Stream & Cliff',
    category: 'Natural Waterways',
    description: 'Waterfall stream flowing over limestone cliffs amidst ancient eucalyptus tree roots.',
    imageSrc: '/images/yarnin_forest_stream.jpg',
    copyright: '© Yarnin Peled',
  },
];

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white uppercase tracking-wider transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Journey Home</span>
        </Link>

        {/* Header */}
        <div className="editorial-card p-8 md:p-12 rounded-3xl space-y-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-bold">
              <Camera className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Original Photography Showcase</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold hero-headline">
              Fine Art & Landscape Photography
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Curated fine art, monochrome landscapes, and visual storytelling by <span className="font-bold text-zinc-900 dark:text-white">Yarnin Peled</span>. Visit the official portfolio at <span className="font-bold text-purple-600 dark:text-purple-400">yarninpeled.com</span> for full collection exhibitions.
            </p>
          </div>

          <a
            href="https://yarninpeled.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-7 rounded-2xl transition-all shadow-lg text-xs flex-shrink-0"
          >
            <span>Visit yarninpeled.com</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Gallery Grid of Yarnin's Authentic Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {YARNIN_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              className="editorial-card rounded-3xl overflow-hidden shadow-xl group hover:border-purple-500/50 transition-all hover:-translate-y-1 flex flex-col justify-between"
            >
              <div className="relative h-72 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={photo.imageSrc}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono text-amber-300">
                  {photo.copyright}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block">
                  {photo.category}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{photo.title}</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
