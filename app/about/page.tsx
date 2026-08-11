'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  User,
  UserCheck,
  ChevronLeft,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  Database,
  ExternalLink,
  Globe,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
  ArrowUpRight,
  Camera,
} from 'lucide-react';

const MILESTONES = [
  {
    chapter: '01',
    years: '1997 – 2005',
    role: 'Creative Director & Process Automation Specialist',
    company: 'Independent Creative & Graphic Automation',
    summary:
      "Started as a professional photographer and graphic designer. Identified repetitive manual design bottlenecks and pioneered custom automated graphic processing systems, connecting disparate software pipelines to eliminate redundant labor and scale production throughput.",
    highlights: [
      'Engineered automated pre-press & graphic processing scripts',
      'Integrated separate creative design tools into unified workflows',
      'Achieved up to 70% reduction in manual production time',
    ],
    photoSrc: '/images/yarnin_artisan_portrait.jpg',
    photoCaption: 'The Artisan Craftsman Portrait — © Yarnin Peled',
  },
  {
    chapter: '02',
    years: '2008 – 2014',
    role: 'Data Programmer & Statement Processing Lifecycles',
    company: 'Beeri Printers',
    summary:
      'Engineered complex big data processing algorithms, database queries, and automated server pipelines at Beeri Printers. Managed the complete end-to-end lifecycle of bank, financial, and insurance statements—from raw data ingestion into secure servers to variable data printing, automated envelope insertion, and postal dispatch.',
    highlights: [
      'Engineered high-scale database scripts for enterprise banking data',
      'Managed end-to-end variable data print (VDP) workflows for tier-1 banks',
      'Guaranteed 99.99% data integrity across millions of confidential monthly statements',
    ],
    photoSrc: '/images/yarnin_bw_mountain.jpg',
    photoCaption: 'High-Scale Data Pipelines — © Yarnin Peled',
  },
  {
    chapter: '03',
    years: '2006 – 2019',
    role: 'Founder & Supply Chain Director',
    company: 'PONY Cycling & Ofnoit Import Operations',
    summary:
      'Co-founded PONY Cycling, managing end-to-end product design, manufacturing, and global supply chains. Established mass-production partnerships in Asia alongside high-end custom apparel manufacturing in Italy, maintaining a 25% profit margin. Managed motorcycle gear import & distribution at Ofnoit.',
    highlights: [
      'Co-founded PONY Cycling with 25% sustained net profit margin',
      'Architected global supply chain across Italian & Asian manufacturing hubs',
      'Managed nationwide wholesale distribution & technical retail operations',
    ],
    photoSrc: '/images/yarnin_pony_cycling.jpg',
    photoCaption: 'PONY Cycling & UCI Championship — © Yarnin Peled',
  },
  {
    chapter: '04',
    years: '2019 – 2024',
    role: 'Technology Project Manager & Operations Director',
    company: 'Israel National Olympic Velodrome & National Sport Center Tel Aviv',
    summary:
      'Directed end-to-end technology infrastructure setup for Israel’s premier National Olympic Velodrome. Managed international RFPs, UCI compliance, precision timing-scoring networks, LED display systems, and broadcast infrastructure.',
    highlights: [
      'Led 10M+ ILS technology infrastructure buildout for National Olympic Velodrome',
      'Engineered UCI-compliant microsecond timing & live scoring networks',
      'Managed municipal communications, security, and facility operations',
    ],
    photoSrc: '/images/yarnin_velodrome_track.jpg',
    photoCaption: 'Tel Aviv Olympic Velodrome Wooden Track — © Yarnin Peled',
  },
  {
    chapter: '05',
    years: '2024 – Present',
    role: 'Head of IT & Technology Projects | International MBA',
    company: 'National Sport Center Tel Aviv & Bar-Ilan University',
    summary:
      'Spearheading digital transformation and IT strategy across the 250,000 m² National Sport Center. Executing smart facility IoT initiatives, including LED lighting overhauls and PV solar systems yielding 20-25% OPEX savings, alongside published research on AI autonomous agent architectures.',
    highlights: [
      'Supervising multi-million ILS annual technology & IT budget roadmaps',
      'Pioneered PV Solar & Smart Energy IoT saving 20-25% annual facility OPEX',
      'International MBA Candidate at Bar-Ilan University focusing on AI Strategy',
    ],
    photoSrc: '/images/yarnin_sunflowers.jpg',
    photoCaption: '20-25% Energy OPEX Savings & AI Leadership — © Yarnin Peled',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 px-6 transition-colors duration-500">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white uppercase tracking-wider transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Journey Home</span>
        </Link>

        {/* Hero Card */}
        <div className="editorial-card p-8 md:p-12 rounded-3xl space-y-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Executive Leadership Profile</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold hero-headline">
                Yarnin Peled
              </h1>
              <p className="text-lg font-bold text-zinc-700 dark:text-zinc-300">
                Head of IT & Technology Projects | Senior Systems Leader | International MBA Candidate
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                25+ years bridging creative process automation, big data server engineering, international supply chains, Olympic sports infrastructure, and enterprise AI transformation.
              </p>
            </div>

            {/* Authentic Portrait Card */}
            <div className="relative w-48 h-48 rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-500/30 flex-shrink-0">
              <Image
                src="/images/yarnin_artisan_portrait.jpg"
                alt="Yarnin Peled Artisan Craftsman Portrait"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-xs font-semibold">
            <a href="https://www.linkedin.com/in/yarnin-peled" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-indigo-600 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="flex items-center gap-1">
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>
            <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-indigo-600 dark:hover:text-emerald-400 transition-colors">
              <UserCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="flex items-center gap-1">
                <span>Book Meeting (Calendly)</span>
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>
            <Link href="/contact" className="flex items-center gap-3 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Contact Form &amp; Inquiry</span>
            </Link>
          </div>
        </div>

        {/* 5-Chapter Story Timeline with Authentic Photographs */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
              The 5-Chapter Leadership Timeline
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              Detailed chronological account of Yarnin Peled's professional journey, key achievements, and authentic photography.
            </p>
          </div>

          <div className="space-y-8">
            {MILESTONES.map((item) => (
              <div key={item.chapter} className="editorial-card p-8 rounded-3xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center">
                        {item.chapter}
                      </span>
                      <span className="text-xs font-bold text-zinc-500">{item.years}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{item.role}</h3>
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{item.company}</p>

                    <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                      {item.summary}
                    </p>

                    {item.chapter === '01' && (
                      <div className="pt-1">
                        <Link
                          href="/apps"
                          className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm"
                        >
                          <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                          <span>Explore Interactive Applications & Software Engines →</span>
                        </Link>
                      </div>
                    )}

                    <ul className="space-y-2 pt-2">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-5">
                    <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800">
                      <Image
                        src={item.photoSrc}
                        alt={item.photoCaption}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                        <span className="text-[10px] font-bold text-amber-300 font-mono">{item.photoCaption}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
