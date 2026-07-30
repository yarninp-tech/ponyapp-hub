'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, ChevronLeft, ArrowUpRight, Maximize2, X, Sparkles, Layers, Filter, Grid } from 'lucide-react';
import photoManifest from '@/public/images/site_gallery/manifest.json';
import categoryConfig from '@/public/images/site_gallery/categories.json';

interface PhotoItem {
  id: string;
  originalName: string;
  filename: string;
  src: string;
  title: string;
  category: string;
}

interface CategoryConfig {
  id: string;
  label: string;
}

export default function PhotographyPage() {
  const photos: PhotoItem[] = photoManifest as PhotoItem[];
  const categories: CategoryConfig[] = categoryConfig as CategoryConfig[];

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [displayCount, setDisplayCount] = useState<number>(24);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  // Dynamic Category Tabs from categories.json
  const CATEGORY_TABS = [
    { id: 'all', label: 'All Master Works' },
    ...categories.map((c) => ({ id: c.id, label: c.label })),
  ];

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
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white uppercase tracking-wider transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Journey Home</span>
          </Link>
        </div>

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
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                    selectedCategory === tab.id ? 'bg-white/20 text-white' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Row 2: Batch Screening Quantity Toggle (24, 48, All 94) */}
          <div className="flex items-center justify-between pt-2 text-xs font-bold">
            <div className="flex items-center gap-2">
              <Grid className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-zinc-500 uppercase tracking-wider">Screening Batch:</span>
              <div className="flex items-center gap-1.5 bg-zinc-200/60 dark:bg-zinc-900 p-1 rounded-xl">
                {[24, 48, 94].map((count) => (
                  <button
                    key={count}
                    onClick={() => setDisplayCount(count)}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      displayCount === count
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                    }`}
                  >
                    {count === 94 ? 'All 94' : `${count}`}
                  </button>
                ))}
              </div>
            </div>

            <span className="text-zinc-500">
              Showing {visiblePhotos.length} of {filteredPhotos.length} Photographs
            </span>
          </div>
        </div>

        {/* 94-Photo Master Grid (Clean Display: No Copyright Tag Overlay & No Raw File Names) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visiblePhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-md cursor-pointer editorial-card hover:border-purple-500/50 transition-all hover:-translate-y-1"
            >
              <Image
                src={photo.src}
                alt={`Fine Art Photography by Yarnin Peled - ${photo.category}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Subtle Ambient Hover Overlay with Expand Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
                <div className="flex items-center justify-between text-white text-xs font-bold">
                  <span className="capitalize text-purple-300 font-mono text-[11px] tracking-wider">
                    {categories.find((c) => c.id === photo.category)?.label || photo.category}
                  </span>
                  <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-fade-in">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full max-w-5xl h-[80vh] flex flex-col items-center justify-center space-y-4">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedPhoto.src}
                  alt={`Fine Art Photography by Yarnin Peled`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="flex items-center justify-between w-full text-white text-xs font-bold px-4">
                <span className="text-zinc-400 capitalize">
                  Category: <span className="text-purple-400 font-semibold">{categories.find((c) => c.id === selectedPhoto.category)?.label || selectedPhoto.category}</span>
                </span>
                <span className="text-zinc-500 font-mono">Fine Art Portfolio • Yarnin Peled</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
