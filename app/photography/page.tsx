'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, ChevronLeft, ExternalLink, Sparkles, ArrowUpRight, Filter, Maximize2, X } from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  category: string;
  filterTag: 'portraits' | 'landscapes' | 'sports' | 'street' | 'monochrome';
  description: string;
  imageSrc: string;
  copyright: string;
}

// 50 Authentic Fine Art Photographs by Yarnin Peled (Sourced from 2_instagram Archive)
const YARNIN_AUTHENTIC_50_GALLERY: PhotoItem[] = [
  // 1-11: Core Uploaded Photographs
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

  // 12-50: Authentic Photographs Sourced Directly from Yarnin's Archive
  {
    id: 'photo-12',
    title: 'Tel Aviv Urban Study I',
    category: 'Urban Life & Geometry',
    filterTag: 'street',
    description: 'High-contrast Leica optical perspective capturing architectural shadows along Tel Aviv streets.',
    imageSrc: '/images/gallery/yarnin_authentic_12.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-13',
    title: 'Tel Aviv Urban Study II',
    category: 'Street Photography',
    filterTag: 'street',
    description: 'Candid urban portraiture observing daily rhythms and afternoon light at the promenade.',
    imageSrc: '/images/gallery/yarnin_authentic_13.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-14',
    title: 'Tel Aviv Architecture III',
    category: 'Architectural Shadows',
    filterTag: 'street',
    description: 'Modernist lines, geometric window balconies, and stark sunlit angles.',
    imageSrc: '/images/gallery/yarnin_authentic_14.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-15',
    title: 'Tel Aviv Promenade IV',
    category: 'Urban Light',
    filterTag: 'street',
    description: 'Dynamic composition capturing urban movement along Rothschild and coastal avenues.',
    imageSrc: '/images/gallery/yarnin_authentic_15.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-16',
    title: 'Coastline Light Study V',
    category: 'Seascape & Sky',
    filterTag: 'landscapes',
    description: 'Subtle light reflection across wet sand under shifting Mediterranean cloud cover.',
    imageSrc: '/images/gallery/yarnin_authentic_16.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-17',
    title: 'Coastal Horizon VI',
    category: 'Seascape Photography',
    filterTag: 'landscapes',
    description: 'Minimalist horizon line where sea foam meets the expanse of afternoon light.',
    imageSrc: '/images/gallery/yarnin_authentic_17.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-18',
    title: 'Promenade Perspective VII',
    category: 'Street & Architecture',
    filterTag: 'street',
    description: 'Intimate urban perspective focusing on figures interacting with city geometry.',
    imageSrc: '/images/gallery/yarnin_authentic_18.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-19',
    title: 'Urban Shadows VIII',
    category: 'Monochrome Street',
    filterTag: 'monochrome',
    description: 'High-contrast monochrome framing of architectural silhouettes at midday.',
    imageSrc: '/images/gallery/yarnin_authentic_19.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-20',
    title: 'Rothschild Boulevard IX',
    category: 'Urban Atmosphere',
    filterTag: 'street',
    description: 'Soft dappled sunlight filtering through eucalyptus trees along historic Tel Aviv boulevards.',
    imageSrc: '/images/gallery/yarnin_authentic_20.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-21',
    title: 'Street Scene X',
    category: 'Candid Street',
    filterTag: 'street',
    description: 'Spontaneous candid capture of urban character and expression.',
    imageSrc: '/images/gallery/yarnin_authentic_21.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-22',
    title: 'City Reflections XI',
    category: 'Architectural Media',
    filterTag: 'street',
    description: 'Interplay of glass reflections and structural concrete along urban corridors.',
    imageSrc: '/images/gallery/yarnin_authentic_22.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-23',
    title: 'Sunset Coast XII',
    category: 'Dusk Seascape',
    filterTag: 'landscapes',
    description: 'Warm golden gradient fading across the Mediterranean horizon.',
    imageSrc: '/images/gallery/yarnin_authentic_23.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-24',
    title: 'Port Vista XIII',
    category: 'Coastal Horizons',
    filterTag: 'landscapes',
    description: 'Broad vista of Jaffa port breakwater under high-dynamic-range sunlight.',
    imageSrc: '/images/gallery/yarnin_authentic_24.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-25',
    title: 'Urban Geometry XIV',
    category: 'Street Architecture',
    filterTag: 'street',
    description: 'Geometric perspective of contemporary Bauhaus building facades in Tel Aviv.',
    imageSrc: '/images/gallery/yarnin_authentic_25.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-26',
    title: 'Portraiture Study XV',
    category: 'Fine Art Portraiture',
    filterTag: 'portraits',
    description: 'Fine art portraiture focusing on character, mood, and directional studio light.',
    imageSrc: '/images/gallery/yarnin_authentic_26.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-27',
    title: 'Portraiture Study XVI',
    category: 'Fine Art Portraiture',
    filterTag: 'portraits',
    description: 'Natural light portrait capture emphasizing authenticity and subtle shadow tone.',
    imageSrc: '/images/gallery/yarnin_authentic_27.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-28',
    title: 'Portraiture Study XVII',
    category: 'Monochrome Portrait',
    filterTag: 'portraits',
    description: 'Striking black and white portrait study with strong directional lighting.',
    imageSrc: '/images/gallery/yarnin_authentic_28.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-29',
    title: 'Portraiture Study XVIII',
    category: 'Environmental Portrait',
    filterTag: 'portraits',
    description: 'Artisan in workshop setting framing human focus within creative workspace.',
    imageSrc: '/images/gallery/yarnin_authentic_29.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-30',
    title: 'Portraiture Study XIX',
    category: 'Monochrome Portrait',
    filterTag: 'portraits',
    description: 'High-contrast expressionist study of emotion, gesture, and shadow.',
    imageSrc: '/images/gallery/yarnin_authentic_30.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-31',
    title: 'Portraiture Study XX',
    category: 'Fine Art Portraiture',
    filterTag: 'portraits',
    description: 'Intimate studio portrait capturing quiet reflection and gaze.',
    imageSrc: '/images/gallery/yarnin_authentic_31.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-32',
    title: 'Portraiture Study XXI',
    category: 'Fine Art Portraiture',
    filterTag: 'portraits',
    description: 'Soft window light study exploring portrait depth and texture.',
    imageSrc: '/images/gallery/yarnin_authentic_32.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-33',
    title: 'Portraiture Study XXII',
    category: 'Character Study',
    filterTag: 'portraits',
    description: 'Environmental portraiture focusing on artisan hands and creative tools.',
    imageSrc: '/images/gallery/yarnin_authentic_33.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-34',
    title: 'Portraiture Study XXIII',
    category: 'Monochrome Portrait',
    filterTag: 'portraits',
    description: 'Deep black background contrast emphasizing sculptured facial highlights.',
    imageSrc: '/images/gallery/yarnin_authentic_34.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-35',
    title: 'Portraiture Study XXIV',
    category: 'Studio Portraiture',
    filterTag: 'portraits',
    description: 'Modern fine art portrait with crisp Leica lens resolution and natural skin tones.',
    imageSrc: '/images/gallery/yarnin_authentic_35.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-36',
    title: 'Urban Street Series XXV',
    category: 'Street Life',
    filterTag: 'street',
    description: 'Tel Aviv cafe culture and afternoon sunlight along urban pedestrian plazas.',
    imageSrc: '/images/gallery/yarnin_authentic_36.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-37',
    title: 'Urban Street Series XXVI',
    category: 'Urban Geometry',
    filterTag: 'street',
    description: 'Architectural symmetry framed against bright Mediterranean skies.',
    imageSrc: '/images/gallery/yarnin_authentic_37.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-38',
    title: 'Urban Street Series XXVII',
    category: 'Street Photography',
    filterTag: 'street',
    description: 'Shadow and light play along urban building colonnades.',
    imageSrc: '/images/gallery/yarnin_authentic_38.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-39',
    title: 'Urban Street Series XXVIII',
    category: 'Urban Horizons',
    filterTag: 'street',
    description: 'Long perspective view down coastal avenues at golden hour.',
    imageSrc: '/images/gallery/yarnin_authentic_39.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-40',
    title: 'Urban Street Series XXIX',
    category: 'Street Photography',
    filterTag: 'street',
    description: 'Atmospheric cityscape capture under afternoon sea breeze.',
    imageSrc: '/images/gallery/yarnin_authentic_40.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-41',
    title: 'Coastal Seascape XXX',
    category: 'Natural Horizons',
    filterTag: 'landscapes',
    description: 'Long-exposure coastal waves breaking along rocky shorelines.',
    imageSrc: '/images/gallery/yarnin_authentic_41.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-42',
    title: 'Coastal Seascape XXXI',
    category: 'Dusk Seascape',
    filterTag: 'landscapes',
    description: 'Pastel sunset sky over peaceful waters at Old Jaffa Port.',
    imageSrc: '/images/gallery/yarnin_authentic_42.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-43',
    title: 'Coastal Seascape XXXII',
    category: 'Seascape & Waves',
    filterTag: 'landscapes',
    description: 'Golden sunlight glittering off wave crests under dramatic cloud formations.',
    imageSrc: '/images/gallery/yarnin_authentic_43.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-44',
    title: 'Coastal Seascape XXXIII',
    category: 'Ocean & Coast',
    filterTag: 'landscapes',
    description: 'Serene beach vista with gentle surf and wide open horizon line.',
    imageSrc: '/images/gallery/yarnin_authentic_44.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-45',
    title: 'Monochrome Study XXXIV',
    category: 'Black & White Fine Art',
    filterTag: 'monochrome',
    description: 'High-contrast monochrome landscape exploring texture and geological form.',
    imageSrc: '/images/gallery/yarnin_authentic_45.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-46',
    title: 'Monochrome Study XXXV',
    category: 'Black & White Fine Art',
    filterTag: 'monochrome',
    description: 'Sharp shadow lines and stark light gradient across natural stone.',
    imageSrc: '/images/gallery/yarnin_authentic_46.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-47',
    title: 'Monochrome Study XXXVI',
    category: 'Black & White Fine Art',
    filterTag: 'monochrome',
    description: 'Abstract monochrome perspective of natural and structural patterns.',
    imageSrc: '/images/gallery/yarnin_authentic_47.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-48',
    title: 'Monochrome Study XXXVII',
    category: 'Black & White Fine Art',
    filterTag: 'monochrome',
    description: 'Atmospheric fog and mountain mist captured in deep monochrome tones.',
    imageSrc: '/images/gallery/yarnin_authentic_48.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-49',
    title: 'Sports & Motion XXXVIII',
    category: 'Track Cycling & Speed',
    filterTag: 'sports',
    description: 'Velodrome track action shot capturing speed and determination.',
    imageSrc: '/images/gallery/yarnin_authentic_49.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-50',
    title: 'Sports & Motion XXXIX',
    category: 'Sports Action',
    filterTag: 'sports',
    description: 'Athlete in motion during national championship competition.',
    imageSrc: '/images/gallery/yarnin_authentic_50.jpg',
    copyright: '© Yarnin Peled',
  },
];

export default function PhotographyPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = YARNIN_AUTHENTIC_50_GALLERY.filter((p) => {
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
              <span>Full 50-Photo Authentic Collection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold hero-headline">
              Fine Art & Photography Gallery
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Expansive 50-photo collection of 100% authentic fine art photographs by <span className="font-bold text-zinc-900 dark:text-white">Yarnin Peled</span>—sourced directly from his personal photography archives (featuring portraiture, urban Tel Aviv street photography, coastal landscapes, sports, and monochrome studies). Visit <span className="font-bold text-purple-600 dark:text-purple-400">yarninpeled.com</span> for complete exhibitions (94+ works).
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
              { id: 'all', label: 'All Authentic Works (50)' },
              { id: 'portraits', label: 'Portraits' },
              { id: 'street', label: 'Urban & Street Life' },
              { id: 'landscapes', label: 'Landscapes & Seascapes' },
              { id: 'sports', label: 'Sports & Cycling' },
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

        {/* Authentic 50-Photo Gallery Grid */}
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
