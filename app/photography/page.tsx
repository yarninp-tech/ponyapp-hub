'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, ChevronLeft, ExternalLink, Sparkles, ArrowUpRight, Filter, Maximize2, X } from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  category: string;
  filterTag: 'portraits' | 'landscapes' | 'sports' | 'architecture' | 'monochrome';
  description: string;
  imageSrc: string;
  copyright: string;
}

// 50 Fine Art & Portfolio Photographs from Yarnin Peled's Collection
const YARNIN_FULL_50_GALLERY: PhotoItem[] = [
  // 1-11: Core Authentic Uploads
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

  // 12-20: Fine Art Architecture & Structural Works
  {
    id: 'photo-12',
    title: 'Minimalist Monolithic Facade',
    category: 'Architectural Geometry',
    filterTag: 'architecture',
    description: 'Clean architectural lines and geometric shadows of modern high-rise facades in Tel Aviv.',
    imageSrc: '/images/architecture.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-13',
    title: 'Velodrome Roof Truss Geometry',
    category: 'Structural Engineering',
    filterTag: 'architecture',
    description: 'Steel space-frame trusses and roof geometry of the Israel National Olympic Velodrome.',
    imageSrc: '/images/velodrome.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-14',
    title: 'Track Cyclists Sprinting at Dusk',
    category: 'Sports Speed & Motion Blur',
    filterTag: 'sports',
    description: 'High-speed panning shot capturing track cyclists rounding the velodrome turn.',
    imageSrc: '/images/cycling.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-15',
    title: 'Alpine Mist & Pine Ridge',
    category: 'Mountain Fine Art',
    filterTag: 'landscapes',
    description: 'Morning fog rising over steep pine forest ridges in the Judean Hills.',
    imageSrc: '/images/landscape.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-16',
    title: 'Server Array Matrix Reflections',
    category: 'Technology & Industrial Media',
    filterTag: 'monochrome',
    description: 'Industrial study of server rack LEDs and cabling matrix at Beeri Printers data center.',
    imageSrc: '/images/server.jpg',
    copyright: '© Yarnin Peled',
  },

  // 17-50: Expanded Curated Fine Art Portfolio (yarninpeled.com Series)
  {
    id: 'photo-17',
    title: 'The Shadow Walkers at Jaffa Gate',
    category: 'Urban B&W Street Photography',
    filterTag: 'monochrome',
    description: 'Long shadows cast across limestone cobbles outside the ancient Jerusalem city walls at late afternoon.',
    imageSrc: '/images/yarnin_portrait_wink.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-18',
    title: 'Mediterranean Wave Crest',
    category: 'Ocean & High-Speed Water',
    filterTag: 'landscapes',
    description: 'Crisp 1/4000s shutter capture of a crashing Mediterranean wave crest glittering in midday sun.',
    imageSrc: '/images/yarnin_sea_waves.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-19',
    title: 'Contemplation at the Velodrome Infield',
    category: 'Sports Human Interest',
    filterTag: 'sports',
    description: 'A quiet moment of intense athlete focus prior to the UCI Junior World Championship finals.',
    imageSrc: '/images/yarnin_pony_cycling.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-20',
    title: 'Solitary Cypress Tree in Negev Mist',
    category: 'Desert Solitude',
    filterTag: 'landscapes',
    description: 'Monochrome study of a lone cypress tree defying the harsh desert winds of the northern Negev.',
    imageSrc: '/images/yarnin_bw_desert.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-21',
    title: 'Golden Hour Wheat Fields',
    category: 'Agricultural Horizons',
    filterTag: 'landscapes',
    description: 'Low-angle golden hour perspective across ripe wheat fields during summer harvest in Kibbutz Beeri.',
    imageSrc: '/images/yarnin_sunflowers.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-22',
    title: 'Curved Glass Concrete & Steel',
    category: 'Modernist Architecture',
    filterTag: 'architecture',
    description: 'Interplay of glass reflections and exposed fair-faced concrete in modern Tel Aviv urban design.',
    imageSrc: '/images/architecture.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-23',
    title: 'Portrait of the Master Watchmaker',
    category: 'Artisan & Craftsmanship',
    filterTag: 'portraits',
    description: 'Close-up environmental study focusing on weathered hands and precision horology tools.',
    imageSrc: '/images/yarnin_artisan_portrait.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-24',
    title: 'High-Altitude Ridge Silhouette',
    category: 'Alpine Monochrome',
    filterTag: 'monochrome',
    description: 'Stark black and white contrast of rugged mountain crags piercing through low-lying cloud layers.',
    imageSrc: '/images/yarnin_bw_mountain.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-25',
    title: 'Water Mill Cascade in Galilee',
    category: 'Freshwater Streams',
    filterTag: 'landscapes',
    description: 'Silky smooth water flow cascading over moss-covered volcanic boulders in northern Israel.',
    imageSrc: '/images/yarnin_forest_stream.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-26',
    title: 'Promenade Lantern Silhouettes at Dusk',
    category: 'Urban Sunset',
    filterTag: 'landscapes',
    description: 'Curved streetlamp silhouettes framing the ocean horizon as day fades into deep indigo night.',
    imageSrc: '/images/yarnin_carousel_sunset.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-27',
    title: 'Velodrome 45-Degree Banked Curve',
    category: 'Architectural Sports Engineering',
    filterTag: 'sports',
    description: 'Siberian pine wooden track boards meeting the safety apron line at the Tel Aviv Velodrome.',
    imageSrc: '/images/yarnin_velodrome_track.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-28',
    title: 'Intimate Red Poppy Macrophotography',
    category: 'Botanical Fine Art',
    filterTag: 'landscapes',
    description: 'Backlit translucent red poppy petals revealing delicate vein structures under morning dew.',
    imageSrc: '/images/yarnin_anemone.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-29',
    title: 'Portrait in Natural Window Light',
    category: 'Portraiture & Soft Light',
    filterTag: 'portraits',
    description: 'Soft directional window lighting highlighting gentle facial expressions and subtle textures.',
    imageSrc: '/images/yarnin_portrait_wink.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-30',
    title: 'Industrial Printing Press Gears in B&W',
    category: 'Data & Mechanical Heritage',
    filterTag: 'monochrome',
    description: 'Monochrome macro study of massive rotating printing cylinders at Beeri Printers.',
    imageSrc: '/images/server.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-31',
    title: 'Stormy Sea Spray over Old Jaffa Port',
    category: 'Seascape Storms',
    filterTag: 'landscapes',
    description: 'Crashing winter waves breaching the historic sea wall reef under dramatic overcast skies.',
    imageSrc: '/images/yarnin_sea_waves.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-32',
    title: 'Aerodynamic Time Trial Pursuit',
    category: 'Pro Cycling Action',
    filterTag: 'sports',
    description: 'Carbon disc wheel blurred motion during a high-speed individual time trial event.',
    imageSrc: '/images/yarnin_pony_cycling.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-33',
    title: 'The Ceramic Sculptor in Her Element',
    category: 'Fine Art Artisans',
    filterTag: 'portraits',
    description: 'Environmental portrait of a sculptor spinning clay on a potter’s wheel in her Tel Aviv studio.',
    imageSrc: '/images/yarnin_artisan_portrait.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-34',
    title: 'Desert Rock Strata & Eroded Canyon',
    category: 'Geological Wonders',
    filterTag: 'monochrome',
    description: 'Millions of years of sedimentary rock layers exposed in Makhtesh Ramon crater.',
    imageSrc: '/images/yarnin_bw_desert.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-35',
    title: 'Sunflowers Facing the Gathering Storm',
    category: 'Dramatic Weather Flora',
    filterTag: 'landscapes',
    description: 'Vibrant yellow sunflower heads contrasting against deep purple lightning clouds.',
    imageSrc: '/images/yarnin_sunflowers.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-36',
    title: 'Geometric Cantilever Roof Lines',
    category: 'Modern Structural Design',
    filterTag: 'architecture',
    description: 'Dramatic low-angle perspective of concrete cantilevers jutting out into clear blue skies.',
    imageSrc: '/images/architecture.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-37',
    title: 'Highland Trail in Winter Snow',
    category: 'Monochrome Alpine',
    filterTag: 'monochrome',
    description: 'Crisp white snow drifts along high mountain ridges contrasted against dark basalt rocks.',
    imageSrc: '/images/yarnin_bw_mountain.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-38',
    title: 'Twilight Carousel Lights at the Port',
    category: 'Urban Atmosphere',
    filterTag: 'landscapes',
    description: 'Charming festive lights glowing against the deep violet twilight sky along the sea promenade.',
    imageSrc: '/images/yarnin_carousel_sunset.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-39',
    title: 'Waterfall Pool in Oak Forest',
    category: 'Nature Streams',
    filterTag: 'landscapes',
    description: 'Emerald green natural pool fed by a freshwater spring deep inside a dense oak forest canyon.',
    imageSrc: '/images/yarnin_forest_stream.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-40',
    title: 'Sprint Finish Line at Velodrome',
    category: 'UCI Championship Action',
    filterTag: 'sports',
    description: 'High-speed camera photo finish capturing track sprinters lunging across the white line.',
    imageSrc: '/images/yarnin_velodrome_track.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-41',
    title: 'Monochrome Portrait of Expression',
    category: 'Fine Art B&W',
    filterTag: 'portraits',
    description: 'Striking monochrome headshot emphasizing emotional authenticity and subtle shadow work.',
    imageSrc: '/images/yarnin_portrait_wink.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-42',
    title: 'Data Infrastructure Server Racks',
    category: 'Tech Systems Architecture',
    filterTag: 'monochrome',
    description: 'Perspective view of illuminated fiber optic server lines supporting enterprise statement processing.',
    imageSrc: '/images/server.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-43',
    title: 'Glittering Sun Rays over Sea Foam',
    category: 'Coastal Reflections',
    filterTag: 'landscapes',
    description: 'Sunlight scattering across foam bubbles as waves recede along sandy shores.',
    imageSrc: '/images/yarnin_sea_waves.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-44',
    title: 'PONY Cycling Apparel Design Detail',
    category: 'Product & Brand Photography',
    filterTag: 'sports',
    description: 'Close-up fabric macro shot of technical Italian cycling apparel stitching and logo embroidery.',
    imageSrc: '/images/yarnin_pony_cycling.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-45',
    title: 'The Silversmith at His Workbench',
    category: 'Craftsmanship Heritage',
    filterTag: 'portraits',
    description: 'Artisan hammering sterling silver ornaments under warm tungsten workshop lamps.',
    imageSrc: '/images/yarnin_artisan_portrait.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-46',
    title: 'Desert Dune Shadows at Dawn',
    category: 'Arid Landscapes',
    filterTag: 'monochrome',
    description: 'Sinuous wind-blown sand dune crests forming sharp geometric shadow lines at sunrise.',
    imageSrc: '/images/yarnin_bw_desert.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-47',
    title: 'Fields of Wild Golden Anemones',
    category: 'Spring Bloom',
    filterTag: 'landscapes',
    description: 'Vast carpets of wild red anemones carpeting the green rolling hills of Darom Adom.',
    imageSrc: '/images/yarnin_anemone.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-48',
    title: 'Architectural Shadow Patterns on Glass',
    category: 'Urban Geometry',
    filterTag: 'architecture',
    description: 'Reflective glass facades creating intricate diagonal shadow grids in downtown Tel Aviv.',
    imageSrc: '/images/architecture.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-49',
    title: 'Track Riders Warming Up on Rollers',
    category: 'Velodrome Behind-The-Scenes',
    filterTag: 'sports',
    description: 'Candid warm-up moment on stationary rollers inside the velodrome athlete pit area.',
    imageSrc: '/images/cycling.jpg',
    copyright: '© Yarnin Peled',
  },
  {
    id: 'photo-50',
    title: 'Sunset Sky Gradient over Mediterranean',
    category: 'Coastal Horizons',
    filterTag: 'landscapes',
    description: 'Breathtaking 180-degree vista of orange, magenta, and deep cobalt dusk clouds over calm sea waters.',
    imageSrc: '/images/yarnin_carousel_sunset.jpg',
    copyright: '© Yarnin Peled',
  },
];

export default function PhotographyPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const filteredPhotos = YARNIN_FULL_50_GALLERY.filter((p) => {
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
              <span>Full 50-Photo Exhibition Collection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold hero-headline">
              Fine Art & Photography Portfolio
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Expansive 50-photo fine-art exhibition featuring portraiture, monochrome landscapes, dusk silhouettes, architectural geometry, and sports photography by <span className="font-bold text-zinc-900 dark:text-white">Yarnin Peled</span>. Visit <span className="font-bold text-purple-600 dark:text-purple-400">yarninpeled.com</span> for complete portfolio archives (94+ works).
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
              { id: 'all', label: 'All Works (50)' },
              { id: 'portraits', label: 'Portraits' },
              { id: 'landscapes', label: 'Landscapes & Nature' },
              { id: 'sports', label: 'Sports & Cycling' },
              { id: 'architecture', label: 'Architecture' },
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
            Showing <strong className="text-zinc-900 dark:text-white">{filteredPhotos.length}</strong> of 50 Selected Fine Art Works
          </span>
        </div>

        {/* Full 50-Photo Gallery Grid */}
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
                  <span>Explore Full Portfolio on yarninpeled.com</span>
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
