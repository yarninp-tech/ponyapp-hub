'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, ChevronLeft, ArrowUpRight, Maximize2, X, Sparkles, Layers, Filter, Grid } from 'lucide-react';
import photoManifest from '@/public/images/site_gallery/manifest.json';

interface PhotoItem {
  id: string;
  originalName: string;
  filename: string;
  src: string;
  title: string;
  category: 'portraits' | 'street' | 'seascapes' | 'landscapes' | 'architecture' | 'monochrome';
}

const CATEGORY_TABS = [
  { id: 'all', label: 'All Master Works' },
  { id: 'portraits', label: 'Portraits & People' },
  { id: 'street', label: 'Urban & Street Life' },
  { id: 'seascapes', label: 'Seascapes & Coastal Light' },
  { id: 'landscapes', label: 'Landscapes & Nature' },
  { id: 'architecture', label: 'Architecture & Structures' },
  { id: 'monochrome', label: 'Monochrome Studies' },
];

export default function PhotographyPage() {
  const photos: PhotoItem[] = photoManifest as PhotoItem[];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [displayCount, setDisplayCount] = useState<number>(24);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  // Filter photos by selected subject gallery
  const filteredPhotos = photos.filter((p) => {
    if (selectedCategory === 'all') return true;
    return p.category === selectedCategory;
  });

  // Apply batch screening count (24, 48, or All)
  const visiblePhotos = filteredPhotos.slice(0, displayCount);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Back Navigation Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white uppercase tracking-wider transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Journey Home</span>
        </Link>

        {/* Hero Header */}
        <div className="editorial-card p-8 md:p-12 rounded-3xl space-y-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-bold">
              <Camera className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Official 94-Photo Master Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold hero-headline">
              Fine Art Photography Galleries
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Curated fine art photography collection by <span className="font-bold text-zinc-900 dark:text-white">Yarnin Peled</span>. Filter by subject or select screening quantity below. Visit <span className="font-bold text-purple-600 dark:text-purple-400">yarninpeled.com</span> for official exhibitions.
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

        {/* Subject Gallery Screening & Filter Bar */}
        <div className="space-y-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
          {/* Row 1: Subject Gallery Selector */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 uppercase tracking-wider mr-2">
              <Filter className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Gallery Subject:</span>
            </div>
            {CATEGORY_TABS.map((tab) => {
              const count = tab.id === 'all' ? photos.length : photos.filter((p) => p.category === tab.id).length;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setSelectedCategory(tab.id);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    selectedCategory === tab.id
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'editorial-card text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    selectedCategory === tab.id ? 'bg-white/20 text-white' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Row 2: Screening Batch View Selector (24, 48, 94) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-400">
              <Grid className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>
                Showing <strong className="text-zinc-900 dark:text-white">{visiblePhotos.length}</strong> of{' '}
                <strong className="text-zinc-900 dark:text-white">{filteredPhotos.length}</strong> Works in Selected Subject
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider mr-1">Screening:</span>
              <button
                onClick={() => setDisplayCount(24)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  displayCount === 24 ? 'bg-purple-600 text-white shadow' : 'editorial-card text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                24 Works
              </button>
              <button
                onClick={() => setDisplayCount(48)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  displayCount === 48 ? 'bg-purple-600 text-white shadow' : 'editorial-card text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                48 Works
              </button>
              <button
                onClick={() => setDisplayCount(photos.length)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  displayCount >= photos.length ? 'bg-purple-600 text-white shadow' : 'editorial-card text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                All 94 Works
              </button>
            </div>
          </div>
        </div>

        {/* Clean Responsive Gallery Grid (No Top-Right Tags, No Raw Filenames) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="editorial-card rounded-3xl overflow-hidden shadow-xl group hover:border-purple-500/50 transition-all hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-88 sm:h-96 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={photo.src}
                  alt={`Fine Art Artwork ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md p-2.5 rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-4 px-6 flex items-center justify-between border-t border-zinc-200/50 dark:border-zinc-800/50">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Artwork #{index + 1}
                </span>
                <span className="text-xs font-mono font-bold text-zinc-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button if displaying a subset */}
        {displayCount < filteredPhotos.length && (
          <div className="text-center pt-8">
            <button
              onClick={() => setDisplayCount(filteredPhotos.length)}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-xl text-xs inline-flex items-center gap-2"
            >
              <Layers className="w-4 h-4" />
              <span>Show All {filteredPhotos.length} Artworks in this Subject</span>
            </button>
          </div>
        )}

        {/* Fullscreen Lightbox Zoom Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 transition-all">
            <div className="relative max-w-5xl w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 space-y-6 p-6 md:p-8">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[72vh] w-full rounded-2xl overflow-hidden bg-black">
                <Image
                  src={selectedPhoto.src}
                  alt="Fine Art Artwork"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">
                  Yarnin Peled Master Photography Collection
                </span>
                <a
                  href="https://yarninpeled.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-2xl text-xs transition-all flex-shrink-0 shadow-lg"
                >
                  <span>Explore Portfolio on yarninpeled.com</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
