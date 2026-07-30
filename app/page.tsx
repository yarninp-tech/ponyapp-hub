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
  FileText,
} from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/articlesData';
import { PROJECTS_DATA } from '@/lib/projectsData';

export default function HomePage() {
  const featuredArticle = ARTICLES_DATA[0];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 relative overflow-hidden transition-colors duration-500">
      {/* Background Accent Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-blue-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* 1. Journey Hero Header */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full editorial-card border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-300 text-xs font-bold shadow-sm">
            <Compass className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-spin-slow" />
            <span>The Winding Silver Journey: Systems, Code, Art & Infrastructure</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.05]">
            <span className="hero-headline block">Yarnin Peled</span>
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-zinc-800 dark:text-zinc-200 leading-snug">
            Senior Technology Projects & Operations Leader
          </p>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Follow the metallic silver line down the page—a continuous visual journey through 25+ years of graphic process automation, big data server engineering, global supply chains, Olympic Velodrome infrastructure, and enterprise AI transformation.
          </p>

          {/* Quick Portal Navigation Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/articles"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-lg text-xs"
            >
              <BookOpen className="w-4 h-4" />
              <span>Enterprise AI Articles</span>
            </Link>

            <Link
              href="/apps"
              className="flex items-center gap-2 editorial-card hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold py-3.5 px-6 rounded-2xl transition-all text-xs"
            >
              <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Interactive Apps</span>
            </Link>

            <Link
              href="/photography"
              className="flex items-center gap-2 editorial-card hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold py-3.5 px-6 rounded-2xl transition-all text-xs"
            >
              <Camera className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Photography Gallery</span>
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-2 bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 text-white font-bold py-3.5 px-6 rounded-2xl transition-all text-xs"
            >
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span>Leadership Story & CV</span>
            </Link>
          </div>

          {/* Quick Contact Ribbon */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-zinc-700 dark:text-zinc-300 border-t border-zinc-200 dark:border-zinc-800">
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
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE SILVER THREAD JOURNEY PATHWAY (Full-Bleed Winding Flow) */}
      <section className="max-w-6xl mx-auto px-6 py-12 relative">
        {/* Metallic Silver Thread Line */}
        <div className="absolute left-6 md:left-1/2 top-10 bottom-10 w-[4px] silver-thread-line -translate-x-1/2 z-0" />

        <div className="space-y-28 relative z-10">

          {/* CHAPTER 01: Creative Origin & Process Automation */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:text-right space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-bold">
                <Camera className="w-3.5 h-3.5" />
                <span>1997 – 2005 • Chapter 01</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
                The Creative Origin & Process Automation
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Yarnin began his career as a photographer and graphic designer. Realizing that repeating manual work was inefficient, he pioneered graphic process automation to connect creative workflows and eliminate redundant labor.
              </p>
              <div className="pt-2 flex flex-wrap items-center md:justify-end gap-3">
                <Link
                  href="/photography"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-5 rounded-2xl text-xs transition-all shadow-md"
                >
                  <span>Photography Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://yarninpeled.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-purple-600 dark:hover:text-purple-400 flex items-center gap-1"
                >
                  <span>yarninpeled.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Silver Node Badge Center */}
            <div className="hidden md:flex md:col-span-0 items-center justify-center">
              <div className="w-12 h-12 rounded-full silver-node-badge font-extrabold text-sm flex items-center justify-center z-10">
                01
              </div>
            </div>

            {/* Visual Photo Card */}
            <div className="md:col-span-6">
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-2xl group editorial-card border-2 border-purple-500/20">
                <Image
                  src="/images/yarnin_anemone.jpg"
                  alt="Golden Anemones Fine Art Photography by Yarnin Peled"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Fine Art Photography • © Yarnin Peled</span>
                  <h3 className="text-base font-bold text-white">Golden Anemones — Visual Media & Process Automation</h3>
                </div>
              </div>
            </div>
          </div>

          {/* CHAPTER 02: Big Data & Systems Programming */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:order-1 order-2">
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-2xl group editorial-card border-2 border-blue-500/20">
                <Image
                  src="/images/yarnin_bw_mountain.jpg"
                  alt="Mountain Summit Path B&W Fine Art Photography by Yarnin Peled"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-xs font-bold text-blue-300 uppercase tracking-widest">Beeri Printers • Photography by Yarnin Peled</span>
                  <h3 className="text-base font-bold text-white">Mountain Summit Path — Bank & Insurance Statement Data Lifecycles</h3>
                </div>
              </div>
            </div>

            {/* Silver Node Badge Center */}
            <div className="hidden md:flex md:col-span-0 items-center justify-center md:order-2">
              <div className="w-12 h-12 rounded-full silver-node-badge font-extrabold text-sm flex items-center justify-center z-10">
                02
              </div>
            </div>

            <div className="md:col-span-6 md:order-3 order-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-bold">
                <Database className="w-3.5 h-3.5" />
                <span>2008 – 2014 • Chapter 02</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
                Data Programming & End-to-End Statement Processing Lifecycles
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                As a Data Programmer at Beeri Printers, Yarnin engineered custom software scripts, database queries, and high-scale server pipelines to manage the complete end-to-end lifecycle of bank, financial, and insurance statements—from raw data ingestion into print facilities to automated variable data printing, folding, and delivery in sealed envelopes.
              </p>
            </div>
          </div>

          {/* CHAPTER 03: Entrepreneurship & Supply Chain */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:text-right space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                <Globe className="w-3.5 h-3.5" />
                <span>2006 – 2019 • Chapter 03</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
                Entrepreneurship & Global Supply Chains
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Owned a technical retail bike store & co-founded PONY Cycling—building a global supply chain with mass production in Asia and specialized manufacturing in Italy (25% profit margin). Later managed motorcycle gear import operations at Ofnoit.
              </p>
            </div>

            {/* Silver Node Badge Center */}
            <div className="hidden md:flex md:col-span-0 items-center justify-center">
              <div className="w-12 h-12 rounded-full silver-node-badge font-extrabold text-sm flex items-center justify-center z-10">
                03
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl group editorial-card border-2 border-emerald-500/30">
                <Image
                  src="/images/yarnin_pony_cycling.jpg"
                  alt="PONY Cycling & UCI Track Championship Photography by Yarnin Peled"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">PONY Cycling & UCI World Championships • Photo by Yarnin Peled</span>
                  <h3 className="text-base font-bold text-white">PONY Cycling — 25% Margin Global Manufacturing & Supply Chains</h3>
                </div>
              </div>
            </div>
          </div>

          {/* CHAPTER 04: National Infrastructure & Tel Aviv Velodrome */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:order-1 order-2">
              <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl group editorial-card border-2 border-amber-500/30">
                <Image
                  src="/images/yarnin_velodrome_track.jpg"
                  alt="Israel National Olympic Velodrome Banked Track Photography by Yarnin Peled"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">National Sport Center Tel Aviv • Photo by Yarnin Peled</span>
                  <h3 className="text-base font-bold text-white">Olympic Velodrome Banked Track & UCI Tech Setup</h3>
                </div>
              </div>
            </div>

            {/* Silver Node Badge Center */}
            <div className="hidden md:flex md:col-span-0 items-center justify-center md:order-2">
              <div className="w-12 h-12 rounded-full silver-node-badge font-extrabold text-sm flex items-center justify-center z-10">
                04
              </div>
            </div>

            <div className="md:col-span-6 md:order-3 order-1 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>2019 – 2024 • Chapter 04</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
                National Infrastructure & Technology Setup
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Directed end-to-end technology setup of Israel's National Olympic Velodrome, managing UCI sporting standards compliance, timing scoring networks, communications, and international RFPs.
              </p>
            </div>
          </div>

          {/* CHAPTER 05: Enterprise AI Transformation & IT Leadership */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 md:text-right space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                <Cpu className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>2024 – Present • Chapter 05</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
                Enterprise AI Transformation & IT Leadership
              </h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Head of IT & Tech Projects | International MBA Candidate at Bar-Ilan. Manages 10M+ ILS tech roadmaps, LED/Solar PV IoT (20-25% OPEX reduction), custom CRM platforms, and published research on AI autonomous agents.
              </p>
              <div className="pt-2 flex flex-wrap items-center md:justify-end gap-3">
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-2xl text-xs transition-all shadow-lg"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Read Published AI Articles</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 text-white font-bold py-3.5 px-6 rounded-2xl text-xs transition-all"
                >
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span>Executive Leadership CV</span>
                </Link>
              </div>
            </div>

            {/* Silver Node Badge Center */}
            <div className="hidden md:flex md:col-span-0 items-center justify-center">
              <div className="w-12 h-12 rounded-full silver-node-badge font-extrabold text-sm flex items-center justify-center z-10">
                05
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-2xl group editorial-card border-2 border-indigo-500/40">
                <Image
                  src="/images/yarnin_sunflowers.jpg"
                  alt="Sunflowers under Storm Sky Fine Art Photography by Yarnin Peled"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Sunflowers under Storm Sky • Photography by Yarnin Peled</span>
                  <h3 className="text-base font-bold text-white">20-25% Solar OPEX & Autonomous AI Workflows</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FEATURING BOTH LIVE STANDALONE APPS: BRAIN-ROOM & PDF EDITOR */}
      <section className="max-w-7xl mx-auto px-6 py-10 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
            <Play className="w-4 h-4 text-indigo-600 dark:text-indigo-400 fill-indigo-600 dark:fill-indigo-400" />
            <span>Interactive Ecosystem Apps — Test Drive Live</span>
          </div>
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
            Live Applications Deployed on ponyapp.net
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* APP CARD 1: brain-room (Matching Indigo Button Color for Text) */}
          <div className="p-8 rounded-3xl border-2 border-indigo-200 dark:border-indigo-500/40 bg-white dark:bg-zinc-900 shadow-xl space-y-6 flex flex-col justify-between transition-all hover:border-indigo-500">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold font-mono border border-emerald-200 dark:border-emerald-800">
                  ● LIVE APP • brain-room.ponyapp.net
                </span>
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">Gemini 2.5 Flash</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">brain-room</h3>
              <p className="text-sm font-semibold text-indigo-700 dark:text-indigo-200 leading-relaxed">
                Real-Time AI Collaborative Brainstorming Platform. Features infinite zoomable canvas sticky notes with live Firebase Firestore sync and Gemini 2.5 Flash AI co-creator.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-indigo-100 dark:border-zinc-800">
              <a
                href="https://brain-room.ponyapp.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-2xl text-xs transition-all shadow-md"
              >
                <span>Launch brain-room App</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/projects/brain-room"
                className="flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white font-bold py-3.5 px-6 rounded-2xl text-xs transition-all border border-indigo-200 dark:border-zinc-700"
              >
                <span>View Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* APP CARD 2: PDF Editor (Matching Purple Button Color for Text & Title "PDF Editor") */}
          <div className="p-8 rounded-3xl border-2 border-purple-200 dark:border-purple-500/40 bg-white dark:bg-zinc-900 shadow-xl space-y-6 flex flex-col justify-between transition-all hover:border-purple-500">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold font-mono border border-emerald-200 dark:border-emerald-800">
                  ● LIVE APP • pdf-editor.ponyapp.net
                </span>
                <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400">PDF.js & Document AI</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400">PDF Editor</h3>
              <p className="text-sm font-semibold text-purple-700 dark:text-purple-200 leading-relaxed">
                Browser-Based PDF Editing, Form Filling & Contract Data Extraction. Autonomous extraction of tenancy terms, legal agreement dates, and automated form fields into SQL.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-purple-100 dark:border-zinc-800">
              <a
                href="https://pdf-editor.ponyapp.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 px-6 rounded-2xl text-xs transition-all shadow-md"
              >
                <span>Launch PDF Editor App</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/projects/pdf-editor"
                className="flex items-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-700 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white font-bold py-3.5 px-6 rounded-2xl text-xs transition-all border border-purple-200 dark:border-zinc-700"
              >
                <span>View Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE BOTTOM DIRECTORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12 border-t-2 border-zinc-200 dark:border-zinc-800">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Complete Portal Directory & Section Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
            Explore All Features, AI Research, Apps & Media
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Detailed overview of all primary portals, research papers, ecosystem applications, and creative visual media hosted across <span className="font-bold text-zinc-900 dark:text-white">ponyapp.net</span> and <span className="font-bold text-zinc-900 dark:text-white">yarninpeled.com</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* BOTTOM DIRECTORY 1 */}
          <div className="editorial-card p-6 rounded-3xl flex flex-col justify-between space-y-5 hover:border-indigo-500 transition-all hover:-translate-y-1 group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Enterprise AI Strategy Articles
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Published research examining why enterprises should deploy autonomous AI agents instead of procuring expensive legacy SaaS software—including CFO financial task automation and data governance.
              </p>
              
              <div className="editorial-inner p-3 rounded-xl space-y-1 text-xs">
                <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">Featured Research</span>
                <p className="font-semibold text-zinc-900 dark:text-white line-clamp-1">{featuredArticle.title}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
              <Link
                href="/articles"
                className="w-full flex items-center justify-between bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow"
              >
                <span>Browse All 3 AI Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* BOTTOM DIRECTORY 2 */}
          <div className="editorial-card p-6 rounded-3xl flex flex-col justify-between space-y-5 hover:border-violet-500 transition-all hover:-translate-y-1 group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Ecosystem Apps & AI Playground
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Interactive web applications hosted on ponyapp.net—featuring <span className="font-bold text-zinc-900 dark:text-white">brain-room</span>, <span className="font-bold text-zinc-900 dark:text-white">PDF Editor</span>, StokApp, and MScheduler.
              </p>

              <div className="editorial-inner p-3 rounded-xl space-y-1 text-xs">
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">2 Live Ecosystem Sub-Apps</span>
                <p className="font-semibold text-zinc-900 dark:text-white">• brain-room.ponyapp.net</p>
                <p className="font-semibold text-zinc-900 dark:text-white">• pdf-editor.ponyapp.net</p>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
              <Link
                href="/apps"
                className="w-full flex items-center justify-between bg-violet-600 hover:bg-violet-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow"
              >
                <span>View All Ecosystem Apps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* BOTTOM DIRECTORY 3 */}
          <div className="editorial-card p-6 rounded-3xl flex flex-col justify-between space-y-5 hover:border-purple-500 transition-all hover:-translate-y-1 group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                <Camera className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Photography & Creative Media
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Visual media portfolio showcasing 94 curated fine art photographs from Yarnin Peled's personal gallery site <span className="font-bold text-purple-600 dark:text-purple-400">yarninpeled.com</span>.
              </p>

              <div className="editorial-inner p-3 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider block">94 Fine Art Works</span>
                  <p className="font-semibold text-zinc-900 dark:text-white">yarninpeled.com</p>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
              <Link
                href="/photography"
                className="w-full flex items-center justify-between bg-purple-600 hover:bg-purple-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow"
              >
                <span>Explore 94-Photo Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* BOTTOM DIRECTORY 4 */}
          <div className="editorial-card p-6 rounded-3xl flex flex-col justify-between space-y-5 hover:border-emerald-500 transition-all hover:-translate-y-1 group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Executive Leadership & Contact
              </h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Full 5-chapter biography detailing Yarnin's evolution, Head of IT & Tech Projects role at National Sport Center Tel Aviv, IMBA at Bar-Ilan, and direct contact details.
              </p>

              <div className="editorial-inner p-3 rounded-xl space-y-1 text-xs">
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">Direct Contact</span>
                <p className="font-bold text-zinc-900 dark:text-white">Cell: 054-7918818</p>
                <p className="text-zinc-500 text-[11px]">Email: yarninp@gmail.com</p>
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
              <Link
                href="/about"
                className="w-full flex items-center justify-between bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow"
              >
                <span>Read Full Story & CV</span>
                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Contact Banner */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
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
