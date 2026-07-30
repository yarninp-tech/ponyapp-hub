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
  Workflow,
  Globe,
  Database,
  Play,
  Terminal,
  BarChart3,
  Compass,
  Milestone,
} from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/articlesData';
import { PROJECTS_DATA } from '@/lib/projectsData';

export default function HomePage() {
  const featuredArticle = ARTICLES_DATA[0];
  const liveApp = PROJECTS_DATA.find((p) => p.isLive) || PROJECTS_DATA[0];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 relative overflow-hidden transition-colors duration-500">
      {/* Background Accent Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* 1. Journey Hero Header */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full editorial-card border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold shadow-sm">
            <Compass className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-spin-slow" />
            <span>Interactive Journey: Connecting Systems, Code & Creative Art</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.05]">
            <span className="hero-headline block">Yarnin Peled</span>
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-zinc-800 dark:text-zinc-200 leading-snug">
            Senior Technology Projects & Operations Leader
          </p>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Scroll through the interactive journey below—from photographer and big data programmer to national Olympic Velodrome setup and enterprise AI transformation leader.
          </p>

          {/* Quick Contact Ribbon */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-zinc-700 dark:text-zinc-300">
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
      </section>

      {/* 2. THE CONTINUOUS JOURNEY TIMELINE (Flowing Single-Page Experience) */}
      <section className="max-w-5xl mx-auto px-6 py-12 relative">
        {/* Glowing Vertical Journey Line */}
        <div className="absolute left-6 md:left-1/2 top-12 bottom-12 w-[3px] bg-gradient-to-b from-indigo-500 via-purple-500 via-emerald-500 to-indigo-600 -translate-x-1/2 opacity-40 dark:opacity-60" />

        <div className="space-y-16 relative z-10">

          {/* MILESTONE 1: Creative Origin & Process Automation */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:text-right space-y-3">
              <span className="text-xs font-mono font-extrabold text-purple-600 dark:text-purple-400 uppercase tracking-widest block">
                1997 – 2005 • Milestone 01
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                The Creative Origin & Process Automation
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Started as a photographer and graphic designer. Realizing that repeating manual work was inefficient, Yarnin pioneered graphic process automation to connect creative workflows and eliminate redundant labor.
              </p>
              <div className="pt-2">
                <Link
                  href="/photography"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline"
                >
                  <span>Explore Fine Art Photography Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Timeline Node Center */}
            <div className="hidden md:flex md:col-span-0 items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-extrabold text-xs flex items-center justify-center shadow-lg border-4 border-zinc-50 dark:border-zinc-950">
                01
              </div>
            </div>

            {/* Visual Card */}
            <div className="md:col-span-6">
              <div className="relative h-56 rounded-3xl overflow-hidden shadow-lg group editorial-card">
                <Image
                  src="/images/architecture.jpg"
                  alt="Architecture & Fine Art Photography by Yarnin Peled"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">Visual Media & Geometry</span>
                  <h3 className="text-sm font-bold text-white">Fine Art Architectural Photography</h3>
                </div>
              </div>
            </div>
          </div>

          {/* MILESTONE 2: Big Data & Systems Programming */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual Card */}
            <div className="md:col-span-6 md:order-1 order-2">
              <div className="editorial-card p-6 rounded-3xl space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-zinc-900 dark:text-white">Beeri Printers</h3>
                      <p className="text-xs text-zinc-500">Big Data & Statement Lifecycles</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">DATA PROGRAMMER</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  Managed big data ingestion, servers, and databases—controlling raw data from ingestion into print facilities until it exited as automated variable data print statements in sealed envelopes.
                </p>
              </div>
            </div>

            {/* Timeline Node Center */}
            <div className="hidden md:flex md:col-span-0 items-center justify-center md:order-2">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-lg border-4 border-zinc-50 dark:border-zinc-950">
                02
              </div>
            </div>

            <div className="md:col-span-6 md:order-3 order-1 space-y-3">
              <span className="text-xs font-mono font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-widest block">
                2008 – 2014 • Milestone 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                Big Data Programming & Server Engineering
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Returned to technical execution as a Data Programmer at Beeri Printers, managing end-to-end data pipelines, database servers, and high-volume statement processing.
              </p>
            </div>
          </div>

          {/* MILESTONE 3: Entrepreneurship & Supply Chain */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:text-right space-y-3">
              <span className="text-xs font-mono font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">
                2006 – 2019 • Milestone 03
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                Entrepreneurship & Global Supply Chains
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Owned a retail bike shop & co-founded PONY Cycling (cycling apparel venture with manufacturing in Italy and mass production in Asia, achieving a 25% profit margin). Led motorcycle gear import operations at Ofnoit.
              </p>
            </div>

            {/* Timeline Node Center */}
            <div className="hidden md:flex md:col-span-0 items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center shadow-lg border-4 border-zinc-50 dark:border-zinc-950">
                03
              </div>
            </div>

            {/* Visual Card */}
            <div className="md:col-span-6">
              <div className="editorial-card p-6 rounded-3xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">25% Margin</span>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950 px-3 py-1 rounded-full">Global Supply Chain</span>
                </div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">PONY Cycling & Ofnoit Import</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Optimized international vendor logistics, product mix demand forecasting, and eliminated dead stock.
                </p>
              </div>
            </div>
          </div>

          {/* MILESTONE 4: National Infrastructure & Olympic Velodrome */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual Card */}
            <div className="md:col-span-6 md:order-1 order-2">
              <div className="editorial-card p-6 rounded-3xl space-y-3">
                <span className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">Olympic Velodrome</span>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">National Sport Center Tel Aviv Setup</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Directed end-to-end technology and operational setup of Israel's national Velodrome, UCI sporting technology localization, and international championship logistics.
                </p>
              </div>
            </div>

            {/* Timeline Node Center */}
            <div className="hidden md:flex md:col-span-0 items-center justify-center md:order-2">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-extrabold text-xs flex items-center justify-center shadow-lg border-4 border-zinc-50 dark:border-zinc-950">
                04
              </div>
            </div>

            <div className="md:col-span-6 md:order-3 order-1 space-y-3">
              <span className="text-xs font-mono font-extrabold text-amber-600 dark:text-amber-400 uppercase tracking-widest block">
                2019 – 2024 • Milestone 04
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                National Infrastructure & Technology Setup
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Appointed Manager of Israel's National Velodrome facility, managing complex communications, global UCI sporting standards compliance, and international tech partner RFPs.
              </p>
            </div>
          </div>

          {/* MILESTONE 5: Enterprise AI & Digital Transformation (Present) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:text-right space-y-3">
              <span className="text-xs font-mono font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block">
                2024 – Present • Milestone 05
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">
                Enterprise AI Transformation & IT Leadership
              </h2>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Head of IT & Tech Projects | International MBA Candidate at Bar-Ilan. Manages 10M+ ILS tech roadmaps, LED/Solar PV IoT (20-25% OPEX reduction), custom CRM platforms, and published research on AI autonomous agents.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <span>Read Full Executive CV & Qualifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Timeline Node Center */}
            <div className="hidden md:flex md:col-span-0 items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-extrabold text-xs flex items-center justify-center shadow-lg border-4 border-zinc-50 dark:border-zinc-950">
                05
              </div>
            </div>

            {/* Visual Card */}
            <div className="md:col-span-6">
              <div className="editorial-card p-6 rounded-3xl space-y-4 border-2 border-indigo-500/40">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">10M+ ILS</span>
                  <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-950 px-3 py-1 rounded-full">20-25% Solar OPEX</span>
                </div>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-white">Enterprise AI & Systems Integration</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Published research on AI autonomous agents replacing monolithic legacy software to increase revenue, profit margins, and labor efficiency.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Interactive "Test-Drive AI Playground" Banner */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="editorial-card p-8 md:p-12 rounded-3xl border-2 border-indigo-500/40 bg-gradient-to-r from-indigo-900 via-indigo-950 to-slate-900 text-white shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-bold">
                <Play className="w-4 h-4 text-indigo-400 fill-indigo-400" />
                <span>Interactive Playground — Test Drive Live AI</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white">
                Experience Living AI Applications Hands-On Right Here
              </h2>
              <p className="text-sm text-indigo-200 leading-relaxed">
                Test-drive <span className="text-white font-bold">brain-room</span> (Real-Time Gemini 2.5 AI Canvas) and interactive document extractors live right now on ponyapp.net.
              </p>
            </div>

            <a
              href="https://brain-room.ponyapp.net"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-4 px-7 rounded-2xl transition-all shadow-xl text-sm flex-shrink-0"
            >
              <span>Launch Live brain-room App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 4. Multi-Page Promotional Portals */}
      <section className="max-w-7xl mx-auto px-6 pb-16 space-y-8">
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
