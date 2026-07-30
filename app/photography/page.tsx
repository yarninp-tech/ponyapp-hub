'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, ChevronLeft, ExternalLink, Sparkles, ArrowUpRight, Filter, Maximize2, X } from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  category: string;
  filterTag: 'portraits' | 'landscapes' | 'sports' | 'monochrome';
  description: string;
  imageSrc: string;
  copyright: string;
}

// Authentic Fine Art Photography Collection by Yarnin Peled
const YARNIN_AUTHENTIC_GALLERY: PhotoItem[] = [
  {
    id: 'photo-1',
    title: 'Expressionist Portrait in B&W',
    category: 'Fine Art Portraiture',
    filterTag: 'portraits',
    description: 'High-contrast monochrome studio portrait capturing spontaneous expression, gesture, and playfulness.',
    imageSrc: '/images/yarnin_portrait_wink.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-2',
    title: 'The Artisan Craftsman',
    category: 'Environmental B&W Portraiture',
    filterTag: 'portraits',
    description: 'Intimate environmental portrait of a craftsman in his workshop, emphasizing texture, lighting, and focus.',
    imageSrc: '/images/yarnin_artisan_portrait.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-3',
    title: 'Golden Sea Waves & Jaffa Horizon',
    category: 'Seascape & Coastal Light',
    filterTag: 'landscapes',
    description: 'Dynamic long-exposure seascape capturing foam, golden sea spray, and the historic Jaffa skyline under dramatic storm clouds.',
    imageSrc: '/images/yarnin_sea_waves.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-4',
    title: 'Tel Aviv Sunset Carousel & Boardwalk',
    category: 'Urban Dusk Silhouette',
    filterTag: 'landscapes',
    description: 'Promenade silhouette featuring illuminated streetlamps and a carousel set against a rich pastel gradient sunset.',
    imageSrc: '/images/yarnin_carousel_sunset.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-5',
    title: 'PONY Cycling & UCI World Championships',
    category: 'Sporting Action & Apparel',
    filterTag: 'sports',
    description: 'Swiss track cyclist wearing race number 140 under the Tel Aviv Olympic Velodrome space-frame roof structure.',
    imageSrc: '/images/yarnin_pony_cycling.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-6',
    title: 'Olympic Velodrome Banked Track',
    category: 'Sports & Architectural Geometry',
    filterTag: 'sports',
    description: 'High-contrast monochrome perspective of the 45-degree wooden banked curve during official UCI competition.',
    imageSrc: '/images/yarnin_velodrome_track.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-7',
    title: 'Golden Anemones in Sunset Light',
    category: 'Fine Art Macrophotography',
    filterTag: 'landscapes',
    description: 'Intimate fine art study of wild anemones bathed in golden hour backlight bokeh.',
    imageSrc: '/images/yarnin_anemone.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-8',
    title: 'Mountain Summit Path in Monochrome',
    category: 'High-Contrast B&W Landscape',
    filterTag: 'monochrome',
    description: 'Monochrome study of high-altitude mountain trails, dramatic cloud textures, and piercing sunlight.',
    imageSrc: '/images/yarnin_bw_mountain.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-9',
    title: 'Sunflowers under Storm Sky',
    category: 'Flora & Ominous Weather',
    filterTag: 'landscapes',
    description: 'High-dynamic-range photograph of golden sunflower fields set against ominous grey storm clouds.',
    imageSrc: '/images/yarnin_sunflowers.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-10',
    title: 'Desert Canyon Valley & Boulder',
    category: 'Geological B&W Photography',
    filterTag: 'monochrome',
    description: 'Expansive black and white desert canyon landscape capturing rock formations and ancient erosion.',
    imageSrc: '/images/yarnin_bw_desert.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-11',
    title: 'Eucalyptus Forest Stream & Cliff',
    category: 'Natural Waterways',
    filterTag: 'landscapes',
    description: 'Waterfall stream flowing over limestone cliffs amidst ancient eucalyptus tree roots.',
    imageSrc: '/images/yarnin_forest_stream.jpg',
    copyright: '© Yarnin Peled',
  },
];

export default function PhotographyPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = YARNIN_AUTHENTIC_GALLERY.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.filterTag === activeFilter;
  });

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
              <span>Authentic Original Photography Collection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold hero-headline">
              Fine Art & Photography Gallery
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Authentic fine-art collection featuring portraiture, monochrome landscapes, dusk silhouettes, sports photography, and natural waterways by <span className="font-bold text-zinc-900 dark:text-white">Yarnin Peled</span>. Visit <span className="font-bold text-purple-600 dark:text-purple-400">yarninpeled.com</span> for complete portfolio exhibitions.
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

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 uppercase tracking-wider mr-2">
              <Filter className="w-4 h-4" />
              <span>Filter ({filteredPhotos.length} Photos):</span>
            </div>
            {[
              { id: 'all', label: 'All Authentic Works' },
              { id: 'portraits', label: 'Portraits' },
              { id: 'landscapes', label: 'Landscapes & Seascapes' },
              { id: 'sports', label: 'Sports & Velodrome' },
              { id: 'monochrome', label: 'Monochrome Studies' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'editorial-card text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-semibold text-zinc-500">
            Showing <strong className="text-zinc-900 dark:text-white">{filteredPhotos.length}</strong> Authentic Fine Art Photographs
          </span>
        </div>

        {/* Authentic Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="editorial-card rounded-3xl overflow-hidden shadow-xl group hover:border-purple-500/50 transition-all hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative h-80 w-full overflow-hidden bg-zinc-900">
                <Image
                  src={photo.imageSrc}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono text-amber-300">
                  {photo.copyright}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md p-2 rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 block">
                  {photo.category}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 transition-all">
            <div className="relative max-w-5xl w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 space-y-6 p-6 md:p-8">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-6 right-6 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-[65vh] w-full rounded-2xl overflow-hidden bg-black">
                <Image
                  src={selectedPhoto.imageSrc}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-2">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                    {selectedPhoto.category} • {selectedPhoto.copyright}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{selectedPhoto.title}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">{selectedPhoto.description}</p>
                </div>

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
