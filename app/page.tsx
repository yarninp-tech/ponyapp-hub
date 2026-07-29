'use client';

import React from 'react';
import Link from 'next/link';
import {
  BrainCircuit,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Camera,
  Layers,
  BookOpen,
  User,
  Mail,
  Linkedin,
  Phone,
  UserCheck,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/articlesData';
import { PROJECTS_DATA } from '@/lib/projectsData';

export default function HomePage() {
  const featuredArticle = ARTICLES_DATA[0];
  const liveApp = PROJECTS_DATA.find((p) => p.isLive) || PROJECTS_DATA[0];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden transition-colors duration-300">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-3/4 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Hero Banner */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-16 z-10 relative text-center max-w-4xl">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span className="font-extrabold text-white">Yarnin Peled</span>
            <span className="text-slate-400">| Product, Technology & Enterprise AI Innovations</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
              Yarnin Peled
            </span>
            <br />
            <span className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Personal Innovation Portal
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Welcome to <span className="text-indigo-400 font-semibold">ponyapp.net</span>. Explore dedicated pages for enterprise AI articles, web applications, engineering case studies, and fine art photography by <span className="text-white font-extrabold">Yarnin Peled</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/articles"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/25 transform hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore AI Articles</span>
            </Link>

            <Link
              href="/apps"
              className="flex items-center gap-2 glass-panel hover:bg-slate-800 text-slate-200 font-medium py-3.5 px-5 rounded-xl border border-slate-700 transition-all"
            >
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Explore Applications</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Multi-Page Teaser Grid (Promotions to pages) */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-10 border-t border-slate-900">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Portal Navigation & Sections</h2>
          <p className="text-xs text-slate-400">Discover dedicated pages across AI publications, software apps, creative media, and contact details.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Teaser 1: Enterprise AI Articles Page */}
          <div className="glass-card p-8 rounded-3xl border border-indigo-500/30 bg-slate-900/50 flex flex-col justify-between space-y-6 hover:border-indigo-500/60 transition-all hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-indigo-300 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800">
                  {ARTICLES_DATA.length} Articles
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  Enterprise AI Insights
                </h3>
                <p className="text-xs text-indigo-400 font-medium mt-1">
                  Published research & operational AI strategy
                </p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Deep-dive articles on autonomous AI agents, practical enterprise economics, CFO task automation, and change management.
                </p>
              </div>

              {/* Sample Teaser Highlight */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                <span className="text-[10px] text-slate-500 uppercase font-semibold">Latest Article</span>
                <p className="font-bold text-slate-200 line-clamp-1">{featuredArticle.title}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <Link
                href="/articles"
                className="w-full flex items-center justify-between bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-200 border border-indigo-500/30 font-semibold py-3 px-5 rounded-xl transition-all text-xs"
              >
                <span>Go to Enterprise AI Articles Page</span>
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </Link>
            </div>
          </div>

          {/* Teaser 2: Applications & Projects Page */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 bg-slate-900/50 flex flex-col justify-between space-y-6 hover:border-indigo-500/60 transition-all hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-400">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
                  Live & Upcoming Apps
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                  Ecosystem Applications
                </h3>
                <p className="text-xs text-indigo-400 font-medium mt-1">
                  Web apps & engineering case studies
                </p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Interactive platforms including <span className="text-white font-semibold">brain-room</span> (AI collaborative brainstorming), inventory intelligence, and shift schedulers.
                </p>
              </div>

              {/* Sample Teaser Highlight */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-emerald-400 uppercase font-semibold">Live App</span>
                  <p className="font-bold text-slate-200">{liveApp.title}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500" />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <Link
                href="/apps"
                className="w-full flex items-center justify-between bg-violet-600/20 hover:bg-violet-600/30 text-violet-200 border border-violet-500/30 font-semibold py-3 px-5 rounded-xl transition-all text-xs"
              >
                <span>Go to Applications & Projects Page</span>
                <ArrowRight className="w-4 h-4 text-violet-400" />
              </Link>
            </div>
          </div>

          {/* Teaser 3: Photography Showcase Page */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 bg-slate-900/50 flex flex-col justify-between space-y-6 hover:border-purple-500/60 transition-all hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <Camera className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-purple-300 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800">
                  yarninpeled.com
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  Photography Showcase
                </h3>
                <p className="text-xs text-purple-400 font-medium mt-1">
                  Fine art, landscape & architecture
                </p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Curated visual storytelling and sample galleries from personal photography portfolio <span className="text-purple-300 font-semibold">yarninpeled.com</span>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-purple-200">Urban & Architecture</div>
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-purple-200">Landscape & Nature</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <Link
                href="/photography"
                className="w-full flex items-center justify-between bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 border border-purple-500/30 font-semibold py-3 px-5 rounded-xl transition-all text-xs"
              >
                <span>Go to Photography Gallery Page</span>
                <ArrowRight className="w-4 h-4 text-purple-400" />
              </Link>
            </div>
          </div>

          {/* Teaser 4: About & Leadership Page */}
          <div className="glass-card p-8 rounded-3xl border border-white/10 bg-slate-900/50 flex flex-col justify-between space-y-6 hover:border-indigo-500/60 transition-all hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <UserCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-semibold text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800">
                  Background & Bio
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  About Yarnin Peled
                </h3>
                <p className="text-xs text-indigo-400 font-medium mt-1">
                  IT leadership, IMBA Candidate & Product Philosophy
                </p>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Head of IT & Technology Projects at National Sport Center Tel Aviv | IMBA Candidate at Bar-Ilan University.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-1">
                <p className="font-semibold text-white">Product Philosophy:</p>
                <p className="text-[11px] text-slate-400">Building intuitive software that simplifies complex enterprise workflows.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <Link
                href="/about"
                className="w-full flex items-center justify-between bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-200 border border-emerald-500/30 font-semibold py-3 px-5 rounded-xl transition-all text-xs"
              >
                <span>Go to About Yarnin Peled Page</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </div>
        </div>

        {/* Teaser 5: Direct Contact Section Card */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>Direct Inquiries</span>
            </div>
            <h3 className="text-3xl font-extrabold text-white">Contact & Professional Channels</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Reach out directly for enterprise AI strategy consulting, technology project leadership, software engineering, or photography inquiries.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <a href="mailto:yarninp@gmail.com" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>yarninp@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/yarnin-peled" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/25 text-sm flex-shrink-0"
          >
            <span>Open Contact & Form Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
