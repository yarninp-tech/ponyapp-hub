'use client';

import React from 'react';
import Link from 'next/link';
import { User, Sparkles, ChevronLeft, Mail, ExternalLink, Code2, Layers } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Hub</span>
        </Link>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-white">About Yarnin Peled</h1>
              <p className="text-xs text-indigo-400 font-mono">Product & Technology Architect</p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-6">
            <p>
              I build web products, full-stack applications, and AI integrations designed for speed, clarity, and exceptional user experience.
            </p>
            <p>
              <strong>Pony App (`ponyapp.net`)</strong> serves as the central hub for my product ecosystem—including real-time collaborative platforms like <span className="text-indigo-400 font-medium">brain-room</span>, specialized utility suites, and tech case studies.
            </p>
            <p>
              Beyond software engineering, I am a passionate photographer. My visual work spans architecture, fine art, and landscape photography, showcased at <a href="https://yarninpeled.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline font-medium">yarninpeled.com</a>.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 px-5 rounded-xl text-xs transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href="https://yarninpeled.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover:bg-slate-800 text-slate-200 font-medium py-2.5 px-5 rounded-xl text-xs border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <span>Visit Photography Portfolio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
