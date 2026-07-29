'use client';

import React from 'react';
import Link from 'next/link';
import { Camera, ExternalLink, ChevronLeft, Sparkles, Image as ImageIcon } from 'lucide-react';

const SAMPLE_PHOTOS = [
  {
    id: '1',
    title: 'Urban Architecture & Light',
    category: 'Architecture',
    description: 'Minimalist geometry and interplay of light on modern structures.',
    color: 'from-indigo-900/60 to-slate-900',
  },
  {
    id: '2',
    title: 'Serene Landscapes & Horizons',
    category: 'Landscape',
    description: 'Natural contours and dramatic atmospheric shifts.',
    color: 'from-purple-900/60 to-slate-900',
  },
  {
    id: '3',
    title: 'Fine Art & Abstract Media',
    category: 'Fine Art',
    description: 'Visual storytelling through texture, shadow, and frame composition.',
    color: 'from-blue-900/60 to-slate-900',
  },
];

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Hub</span>
        </Link>

        {/* Hero Header */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <Camera className="w-3.5 h-3.5 text-purple-400" />
              <span>Personal Photography Showcase</span>
            </div>
            <h1 className="text-4xl font-extrabold text-white">
              Visual Storytelling & Photography
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed">
              Explore my full fine art, architectural, and landscape photography portfolio hosted at <span className="text-purple-300 font-semibold">yarninpeled.com</span>.
            </p>
            <div className="pt-2">
              <a
                href="https://yarninpeled.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-purple-600/25"
              >
                <span>Visit Full Portfolio at yarninpeled.com</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Photo Gallery Samples */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-purple-400" />
            Curated Sample Galleries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAMPLE_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-purple-500/50 transition-all hover:-translate-y-1 group"
              >
                <div className={`h-48 bg-gradient-to-b ${photo.color} p-6 flex flex-col justify-end relative`}>
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-slate-900/80 px-2.5 py-1 rounded-full text-purple-300 w-fit mb-2 border border-purple-500/30">
                    {photo.category}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                    {photo.title}
                  </h3>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {photo.description}
                  </p>
                  <a
                    href="https://yarninpeled.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-purple-300"
                  >
                    <span>View gallery on yarninpeled.com</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
