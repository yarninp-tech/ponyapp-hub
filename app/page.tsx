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
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
  Building2,
  ShieldCheck,
  Cpu,
} from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/articlesData';
import { PROJECTS_DATA } from '@/lib/projectsData';

export default function HomePage() {
  const featuredArticle = ARTICLES_DATA[0];
  const liveApp = PROJECTS_DATA.find((p) => p.isLive) || PROJECTS_DATA[0];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative overflow-hidden transition-colors duration-300">
      {/* Background Accent Glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 1. Hero Section - Executive Portfolio Spotlight */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-12 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold shadow-sm">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-pulse" />
            <span>Executive Portfolio & Technology Innovation Hub</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="brand-gradient">Yarnin Peled</span>
            <br />
            <span className="text-slate-800 dark:text-slate-200 text-2xl sm:text-4xl font-bold mt-1 block">
              Senior Technology Projects & Operations Leader
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Head of IT & Technology Projects at <span className="font-semibold text-slate-900 dark:text-white">National Sport Center Tel Aviv</span> | <span className="font-semibold text-slate-900 dark:text-white">IMBA Candidate</span> at Bar-Ilan University. Specializing in digital transformation, multi-million ILS tech roadmaps, and AI agent deployment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/articles"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/20 transform hover:-translate-y-0.5 text-sm"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read AI Strategy Articles</span>
            </Link>

            <Link
              href="/apps"
              className="flex items-center gap-2 glass-panel hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold py-3.5 px-6 rounded-xl border border-slate-300 dark:border-slate-700 transition-all text-sm"
            >
              <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Explore Ecosystem Apps</span>
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-2 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-xl transition-all text-sm"
            >
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span>About & Leadership CV</span>
            </Link>
          </div>

          {/* Quick Contact Ribbon */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400 font-semibold border-t border-slate-200 dark:border-slate-800/80 max-w-xl mx-auto">
            <a href="tel:0547918818" className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-emerald-400 transition-colors">
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>054-7918818</span>
            </a>
            <span>•</span>
            <a href="mailto:yarninp@gmail.com" className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>yarninp@gmail.com</span>
            </a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/yarnin-peled" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Executive Bio & Metrics Card (About Me directly on Main Page) */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-indigo-200 dark:border-indigo-500/30 bg-white dark:bg-slate-900/80 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                <UserCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>About Yarnin Peled</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Technology Leadership & Operational Excellence
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                With extensive experience directing multi-million budget technological roadmaps, energy-efficiency IoT command centers, and AI agent architectures, I bridge strategic vision with high-ROI execution.
              </p>
            </div>

            <Link
              href="/about"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-5 rounded-xl transition-all shadow-md text-xs flex-shrink-0"
            >
              <span>View Full Leadership CV</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">10M+ ILS</span>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium block mt-0.5">Budget Managed</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">20-25%</span>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium block mt-0.5">OPEX Energy Savings</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">AI Agents</span>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium block mt-0.5">Deployment Specialist</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-center">
              <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">IMBA</span>
              <span className="text-xs text-slate-600 dark:text-slate-400 font-medium block mt-0.5">Bar-Ilan University</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Multi-Page Promotional Portals */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Portal Navigation & Sections</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">Explore dedicated pages across enterprise AI publications, software apps, photography, and contact options.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Portal 1: Enterprise AI Articles */}
          <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-col justify-between space-y-6 hover:border-indigo-500 transition-all hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-950 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                  {ARTICLES_DATA.length} Articles Published
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  Enterprise AI Strategy & Research
                </h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                  Published research on AI agents & executive leadership
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  Deep-dive articles examining the practical economics of AI, autonomous agent workflows as alternatives to legacy software, and CFO task automation.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">Featured Paper</span>
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 line-clamp-1">{featuredArticle.title}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <Link
                href="/articles"
                className="w-full flex items-center justify-between bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-5 rounded-xl transition-all text-xs shadow-md"
              >
                <span>Go to Enterprise AI Articles Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Portal 2: Applications & Projects */}
          <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-col justify-between space-y-6 hover:border-violet-500 transition-all hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-600/20 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Live Platform
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                  Ecosystem Applications & Case Studies
                </h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                  Web apps & engineering case studies hosted on ponyapp.net
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  Interactive applications including <span className="font-semibold text-slate-900 dark:text-white">brain-room</span> (Real-Time AI Collaborative Brainstorming Platform), inventory systems, and shift schedulers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Featured App</span>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">{liveApp.title}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <Link
                href="/apps"
                className="w-full flex items-center justify-between bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3.5 px-5 rounded-xl transition-all text-xs shadow-md"
              >
                <span>Go to Applications & Projects Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Portal 3: Photography Portfolio */}
          <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-col justify-between space-y-6 hover:border-purple-500 transition-all hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <Camera className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800">
                  yarninpeled.com
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                  Photography & Fine Art
                </h3>
                <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold mt-1">
                  Landscape, architecture & visual storytelling
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  Curated photography galleries showcasing fine art, urban architecture, and visual storytelling from personal portfolio site <span className="font-semibold text-purple-600 dark:text-purple-300">yarninpeled.com</span>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs font-semibold">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-purple-700 dark:text-purple-300">Urban & Architecture</div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-purple-700 dark:text-purple-300">Landscape & Nature</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <Link
                href="/photography"
                className="w-full flex items-center justify-between bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3.5 px-5 rounded-xl transition-all text-xs shadow-md"
              >
                <span>Go to Photography Showcase Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Portal 4: Contact & Inquiries */}
          <div className="glass-card p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 flex flex-col justify-between space-y-6 hover:border-emerald-500 transition-all hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Direct Contact
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-300 transition-colors">
                  Contact & Direct Channels
                </h3>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                  Enterprise AI consulting & technology leadership
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  Available for enterprise digital transformation, AI strategy, technology project leadership, and consulting inquiries.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>Cell: 054-7918818</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>yarninp@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
              <Link
                href="/contact"
                className="w-full flex items-center justify-between bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-5 rounded-xl transition-all text-xs shadow-md"
              >
                <span>Open Contact & Form Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
