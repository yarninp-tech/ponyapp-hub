'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  UserCheck,
  ChevronLeft,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  Mail,
  Linkedin,
  Phone,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Building2,
  FileCode2,
  Camera,
  Database,
  Globe,
  Zap,
  Workflow,
  ArrowRight,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-12 px-6 transition-colors duration-500">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white uppercase tracking-wider transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Executive Profile Header */}
        <div className="editorial-card p-8 md:p-12 rounded-3xl space-y-6 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Senior Technology Projects & Operations Leader</span>
              </div>
              <h1 className="text-4xl sm:text-6xl font-extrabold hero-headline leading-tight">
                Yarnin Peled
              </h1>
              <p className="text-base text-indigo-600 dark:text-indigo-400 font-bold">
                Head of IT & Technology Projects | International MBA Candidate (Bar-Ilan)
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1 font-normal">
                A multidisciplinary technology and operations leader with decades of experience connecting isolated systems, automating complex workflows, and deploying high-ROI enterprise AI. From big data programming to national infrastructure and AI agent architecture.
              </p>
            </div>

            {/* Quick Contact & Action Card */}
            <div className="editorial-inner p-6 rounded-2xl space-y-3 w-full md:w-72 flex-shrink-0">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">Direct Contact</span>
              <a
                href="tel:0547918818"
                className="flex items-center gap-2.5 text-xs font-bold text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>054-7918818</span>
              </a>
              <a
                href="mailto:yarninp@gmail.com"
                className="flex items-center gap-2.5 text-xs font-bold text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>yarninp@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yarnin-peled"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors pt-2 border-t border-zinc-200 dark:border-zinc-800"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Key Impact Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <div className="p-4 rounded-xl editorial-inner">
              <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">10M+ ILS</span>
              <span className="text-[11px] text-zinc-600 dark:text-zinc-400 font-semibold block mt-0.5">Budget Managed</span>
            </div>
            <div className="p-4 rounded-xl editorial-inner">
              <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">20-25%</span>
              <span className="text-[11px] text-zinc-600 dark:text-zinc-400 font-semibold block mt-0.5">OPEX Energy Savings</span>
            </div>
            <div className="p-4 rounded-xl editorial-inner">
              <span className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">10-15%</span>
              <span className="text-[11px] text-zinc-600 dark:text-zinc-400 font-semibold block mt-0.5">CRM Friction Reduction</span>
            </div>
            <div className="p-4 rounded-xl editorial-inner">
              <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">IMBA</span>
              <span className="text-[11px] text-zinc-600 dark:text-zinc-400 font-semibold block mt-0.5">Bar-Ilan University</span>
            </div>
          </div>
        </div>

        {/* The Multidisciplinary Story Timeline (5 Chapters) */}
        <section className="space-y-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
              <Workflow className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Career Journey & Evolution</span>
            </div>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white">
              The Journey of Connecting Systems (1997 – Present)
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              How decades of visual design, process automation, big data programming, entrepreneurship, and national infrastructure converged into enterprise AI leadership.
            </p>
          </div>

          <div className="space-y-6">
            {/* Chapter 1: The Creative & Automation Origin */}
            <div className="editorial-card p-8 rounded-3xl space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Chapter 1: The Creative Origin & Process Automation</h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">Photographer, Designer & Graphic Automation Pioneer • Beeri Printers</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-zinc-500">1997 – 2005</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Started as a photographer and graphic designer. Early on, Yarnin realized that repeating manual creative tasks over and over was inefficient. He pioneered graphic process automation, connecting isolated creative software tools so work flowed seamlessly without manual repetition.
              </p>
            </div>

            {/* Chapter 2: Big Data & Systems Programming */}
            <div className="editorial-card p-8 rounded-3xl space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Chapter 2: Big Data Programming & Server Lifecycles</h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">Data Programmer • Beeri Printers</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-zinc-500">2008 – 2014</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Returned to deep technical execution as a Data Programmer. Managed big data ingestion across databases and high-scale server environments, controlling the complete end-to-end lifecycle—from raw data entry into print facilities until it exited as automated variable data print statements in sealed envelopes.
              </p>
            </div>

            {/* Chapter 3: Entrepreneurship & Supply Chain */}
            <div className="editorial-card p-8 rounded-3xl space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Chapter 3: Entrepreneurship & Global Supply Chain</h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">Retail Bike Shop Owner • Co-Founder PONY Cycling • Operations Manager Ofnoit</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-zinc-500">2006 – 2019</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Owned and operated a technical retail bicycle shop. Co-founded PONY Cycling, building a global supply chain with mass production in Asia and specialized manufacturing in Italy (achieving a 25% profit margin). Later led international vendor procurement and import operations at Ofnoit (motorcycle gear import).
              </p>
            </div>

            {/* Chapter 4: National Infrastructure & Tel Aviv Velodrome */}
            <div className="editorial-card p-8 rounded-3xl space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Chapter 4: National Infrastructure & Olympic Velodrome Setup</h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">Operations & Tech Project Manager • National Sport Center Tel Aviv</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-zinc-500">2019 – 2024</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Appointed Manager of Israel's National Velodrome facility. Rapidly took command of technology and infrastructure—directing end-to-end setup, international UCI sports timing tech localization, international RFPs, and logistics for world championship sporting events.
              </p>
            </div>

            {/* Chapter 5: Enterprise AI & Digital Transformation */}
            <div className="editorial-card p-8 rounded-3xl space-y-4 border-2 border-indigo-500/40">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Chapter 5: Enterprise AI & Digital Transformation Leader</h3>
                    <p className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">Head of IT & Technology Projects • International MBA Candidate (Bar-Ilan)</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">2024 – Present</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Manages multi-year 5M+ ILS technology roadmaps. Spearheaded green energy IoT transformation (LED, PV Solar, command-and-control) reducing annual OPEX by 20%–25%. Partners with Finance/CFO departments on custom CRM implementation, Cloud migration, and published research on replacing monolithic legacy software with autonomous AI agents.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Qualifications */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-white">Education & Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="editorial-card p-6 rounded-2xl space-y-2 border-2 border-indigo-500/30">
              <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">Graduate Degree</span>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">International MBA (IMBA)</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">Bar-Ilan University</p>
              <span className="text-[11px] text-indigo-600 dark:text-indigo-300 font-bold block pt-2 border-t border-zinc-200 dark:border-zinc-800">2025 – Present</span>
            </div>

            <div className="editorial-card p-6 rounded-2xl space-y-2">
              <span className="text-xs font-extrabold text-zinc-500 uppercase tracking-wider block">Undergraduate Degree</span>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">B.A. in IT Systems Management</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">Hadassah Academic College</p>
              <span className="text-[11px] text-zinc-500 font-semibold block pt-2 border-t border-zinc-200 dark:border-zinc-800">Graduated 2025</span>
            </div>

            <div className="editorial-card p-6 rounded-2xl space-y-2">
              <span className="text-xs font-extrabold text-zinc-500 uppercase tracking-wider block">Specialized Certification</span>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">Mobile Application Development</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">John Bryce College</p>
              <span className="text-[11px] text-zinc-500 font-semibold block pt-2 border-t border-zinc-200 dark:border-zinc-800">Completed 2014</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
