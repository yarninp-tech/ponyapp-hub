'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
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
  ArrowUpRight,
} from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/articlesData';
import { PROJECTS_DATA } from '@/lib/projectsData';

export default function HomePage() {
  const featuredArticle = ARTICLES_DATA[0];
  const liveApp = PROJECTS_DATA.find((p) => p.isLive) || PROJECTS_DATA[0];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 relative overflow-hidden transition-colors duration-500">
      {/* Ambient Radial Gradient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* 1. Asymmetric Hero & Executive Portfolio Intro */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Oversized Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full editorial-card border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold shadow-sm">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-pulse" />
              <span>Executive Portfolio & Technology Innovation Hub</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.05]">
                <span className="hero-headline block">Yarnin Peled</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-zinc-800 dark:text-zinc-200 leading-snug">
                Senior Technology Projects & Operations Leader
              </p>
            </div>

            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Head of IT & Technology Projects at <span className="font-bold text-zinc-900 dark:text-white">National Sport Center Tel Aviv</span> | <span className="font-bold text-zinc-900 dark:text-white">IMBA Candidate</span> at Bar-Ilan University. Specializing in digital transformation, multi-million ILS tech roadmaps, and AI agent architecture.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/articles"
                className="flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-7 rounded-2xl transition-all shadow-xl shadow-indigo-600/25 transform hover:-translate-y-0.5 text-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>Read AI Strategy Research</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/apps"
                className="flex items-center gap-2.5 editorial-card hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold py-4 px-6 rounded-2xl transition-all text-sm"
              >
                <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Explore Ecosystem Apps</span>
              </Link>

              <Link
                href="/about"
                className="flex items-center gap-2 bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 text-white font-bold py-4 px-6 rounded-2xl transition-all text-sm"
              >
                <UserCheck className="w-4 h-4 text-emerald-400" />
                <span>About & Leadership CV</span>
              </Link>
            </div>

            {/* Quick Contact Ribbon */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs font-bold text-zinc-700 dark:text-zinc-300 border-t border-zinc-200 dark:border-zinc-800">
              <a href="tel:0547918818" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-emerald-400 transition-colors">
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>054-7918818</span>
              </a>
              <span>•</span>
              <a href="mailto:yarninp@gmail.com" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>yarninp@gmail.com</span>
              </a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/yarnin-peled" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Floating Executive Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="editorial-card p-6 rounded-3xl space-y-2 animate-float">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">10M+ ILS</span>
              <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 block">Multi-Year Tech Budgets Managed</span>
            </div>

            <div className="editorial-card p-6 rounded-3xl space-y-2 animate-float-delayed">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">20-25%</span>
              <span className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 block">Annual OPEX Energy Reduction</span>
            </div>

            <div className="editorial-card p-6 rounded-3xl space-y-2 animate-float-delayed sm:col-span-2">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                  <Cpu className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950 px-3 py-1 rounded-full border border-purple-200 dark:border-purple-800">
                  Published Author
                </span>
              </div>
              <span className="text-2xl font-extrabold text-zinc-900 dark:text-white block pt-1">Enterprise AI & Autonomous Agents</span>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Practitioner of high-ROI agentic workflows as strategic alternatives to capital-intensive legacy software procurement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Executive Bio Spotlight (About Me) */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="editorial-card p-8 md:p-12 rounded-3xl space-y-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                <UserCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Executive Leadership & Background</span>
              </div>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                About Yarnin Peled
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Senior Technology & Operations Leader with a practitioner's command of digital transformation, custom CRM implementation, Cloud/SaaS migration, and global supply chain management.
              </p>
            </div>

            <Link
              href="/about"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md text-xs flex-shrink-0"
            >
              <span>View Executive Leadership CV</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="editorial-inner p-5 rounded-2xl space-y-1.5">
              <span className="text-[11px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">Current Role</span>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Head of IT & Technology Projects</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">National Sport Center Tel Aviv</p>
            </div>

            <div className="editorial-inner p-5 rounded-2xl space-y-1.5">
              <span className="text-[11px] font-extrabold text-purple-600 dark:text-purple-400 uppercase tracking-wider block">Graduate Education</span>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">International MBA (IMBA)</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">Bar-Ilan University (2025–Present)</p>
            </div>

            <div className="editorial-inner p-5 rounded-2xl space-y-1.5">
              <span className="text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">Undergraduate Degree</span>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white">B.A. in IT Systems Management</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">Hadassah Academic College (2025)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Immersive Photography Showcase Spotlight (yarninpeled.com) */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="editorial-card p-8 md:p-12 rounded-3xl space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-bold">
                <Camera className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span>Creative Media & Fine Art</span>
              </div>
              <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
                Photography Portfolio Showcase
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Explore curated visual storytelling, architectural geometry, and landscape photography from personal photography portfolio <span className="font-bold text-purple-600 dark:text-purple-400">yarninpeled.com</span>.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/photography"
                className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md"
              >
                View Sample Gallery
              </Link>
              <a
                href="https://yarninpeled.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 flex items-center gap-1.5"
              >
                <span>yarninpeled.com</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Photo Showcase Cards with Real Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="relative h-64 rounded-2xl overflow-hidden group shadow-lg">
              <Image
                src="/images/architecture.jpg"
                alt="Architecture Photography by Yarnin Peled"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-purple-300 uppercase tracking-widest">Fine Art Architecture</span>
                <h3 className="text-lg font-bold text-white">Urban Geometry & Structural Storytelling</h3>
              </div>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden group shadow-lg">
              <Image
                src="/images/landscape.jpg"
                alt="Landscape Photography by Yarnin Peled"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Landscape & Nature</span>
                <h3 className="text-lg font-bold text-white">Misty Horizons & Alpine Water Reflections</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Multi-Page Promotional Portals */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">Portal Navigation & Publications</h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">Discover dedicated pages across AI research, software apps, and direct contact options.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Portal 1: Enterprise AI Articles */}
          <div className="editorial-card p-8 rounded-3xl flex flex-col justify-between space-y-6 hover:border-indigo-500 transition-all hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-950 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                  {ARTICLES_DATA.length} Papers Published
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  Enterprise AI Strategy Research
                </h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mt-1">
                  Published research on AI agents & executive leadership
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
                  Deep-dive articles examining practical enterprise AI economics, agentic workflows as alternatives to legacy software, and CFO task automation.
                </p>
              </div>

              <div className="editorial-inner p-4 rounded-2xl space-y-1">
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider">Featured Paper</span>
                <p className="text-xs font-bold text-zinc-900 dark:text-slate-100 line-clamp-1">{featuredArticle.title}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <Link
                href="/articles"
                className="w-full flex items-center justify-between bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-5 rounded-2xl transition-all text-xs shadow-md"
              >
                <span>Go to Enterprise AI Articles Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Portal 2: Applications & Case Studies */}
          <div className="editorial-card p-8 rounded-3xl flex flex-col justify-between space-y-6 hover:border-violet-500 transition-all hover:-translate-y-1 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                  Live Platform
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
                  Ecosystem Applications & Case Studies
                </h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mt-1">
                  Web apps & engineering case studies hosted on ponyapp.net
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-3 leading-relaxed">
                  Interactive applications including <span className="font-bold text-zinc-900 dark:text-white">brain-room</span> (Real-Time AI Collaborative Brainstorming Platform), inventory systems, and shift schedulers.
                </p>
              </div>

              <div className="editorial-inner p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Live App</span>
                  <p className="text-xs font-bold text-zinc-900 dark:text-slate-100">{liveApp.title}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400" />
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <Link
                href="/apps"
                className="w-full flex items-center justify-between bg-violet-600 hover:bg-violet-700 text-white font-bold py-3.5 px-5 rounded-2xl transition-all text-xs shadow-md"
              >
                <span>Go to Applications & Projects Page</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Banner */}
        <div className="editorial-card p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
              <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Direct Engagement</span>
            </div>
            <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-white">Contact & Professional Channels</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Reach out directly for enterprise AI strategy consulting, technology project leadership, software engineering, or photography inquiries.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold">
              <a href="tel:0547918818" className="text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                <span>054-7918818</span>
              </a>
              <a href="mailto:yarninp@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>yarninp@gmail.com</span>
              </a>
            </div>
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-7 rounded-2xl transition-all shadow-lg text-xs flex-shrink-0"
          >
            <span>Open Contact & Inquiry Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
