'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Theater,
  ChevronLeft,
  BookOpen,
  Code2,
  Sparkles,
  CheckCircle2,
  Calendar,
  Users,
  FileCheck2,
  Lock,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  ExternalLink,
  DollarSign,
  Globe,
  FileText,
} from 'lucide-react';
import { BOOK_A_SHOW_DATA } from '@/lib/bookAShowData';
import ContactBanner from '@/components/ContactBanner';

export default function BookAShowUserGuidePage() {
  const [activeRoleTab, setActiveRoleTab] = useState<number>(0);

  const selectedRole = BOOK_A_SHOW_DATA.userRoles[activeRoleTab];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Applications</span>
          </Link>
          <span className="text-xs font-mono text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800">
            {BOOK_A_SHOW_DATA.header.version}
          </span>
        </div>

        {/* Header Title & Sub-Navigation Tabs */}
        <div className="space-y-6">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 space-y-6 bg-gradient-to-b from-indigo-950/40 via-slate-900/90 to-slate-950">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/10">
                <Theater className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {BOOK_A_SHOW_DATA.header.title}
                </h1>
                <p className="text-xs font-mono text-indigo-300 mt-1">Venue Date-Booking, Pricing Engine & Contracting System</p>
              </div>
            </div>

            <p className="text-base text-slate-300 leading-relaxed max-w-4xl font-normal">
              {BOOK_A_SHOW_DATA.header.subtitle}
            </p>

            {/* PART 1 / PART 2 TOGGLE BAR & LAUNCH BUTTON */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/apps/book-a-show"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all border border-indigo-500"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Part 1: System Walkthrough & User Guide</span>
                </Link>
                <Link
                  href="/apps/book-a-show/technical"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs transition-all border border-slate-800"
                >
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>Part 2: Technical Reference & Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <a
                href="https://book-a-show.ponyapp.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/20 transition-all border border-indigo-400"
              >
                <span>Launch Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* HERO METRICS CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {BOOK_A_SHOW_DATA.heroMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-2 hover:border-indigo-500/40 transition-all"
            >
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{metric.label}</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">{metric.value}</span>
              <span className="text-[11px] text-indigo-300">{metric.detail}</span>
            </div>
          ))}
        </div>

        {/* WHAT PROBLEM IT SOLVES */}
        <section className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4 bg-slate-900/60">
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            What Problem Book a Show Solves
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3 font-normal">
            <p>
              A performance venue sells the same scarce thing over and over: <strong className="text-white">days</strong>. A busy hall juggles promoters asking for overlapping weeks, each wanting a hold while they confirm an artist, each expecting a price, and each eventually needing a contract. Run on email and a shared spreadsheet, this goes wrong in predictable ways — two producers promised the same week, a hold nobody released, a contract that does not match the dates actually booked, or an invoice priced at last year's rates.
            </p>
            <p>
              Book a Show is the single system of record for that entire process: one calendar everybody reads, one place a request is made, one place it is priced, and one transparent path from request to signed contract with zero unrecorded manual steps.
            </p>
          </div>
        </section>

        {/* 7-STEP END-TO-END SYSTEM WALKTHROUGH */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-400" />
              How It Works, End to End (7 Steps)
            </h2>
            <p className="text-xs text-slate-400">The 7-stage progression from availability lookup to signed contract & partner API sync:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BOOK_A_SHOW_DATA.walkthroughSteps.map((step) => (
              <div
                key={step.stepNumber}
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4 hover:border-indigo-500/50 transition-all group"
              >
                <div className="space-y-2">
                  <span className="text-2xl font-extrabold font-mono text-emerald-400 group-hover:scale-110 transition-transform inline-block">
                    Step 0{step.stepNumber}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-400">{step.subtitle}</p>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* USER ROLES & ACCESS MATRIX */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-400" />
              User Roles & System Participants
            </h2>
            <p className="text-xs text-slate-400">Select a role to inspect its permissions and capabilities:</p>
          </div>

          {/* Role Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {BOOK_A_SHOW_DATA.userRoles.map((role, idx) => (
              <button
                key={idx}
                onClick={() => setActiveRoleTab(idx)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all border flex-shrink-0 ${
                  activeRoleTab === idx
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {role.title} ({role.badge})
              </button>
            ))}
          </div>

          {/* Active Role Card */}
          <div className="glass-panel p-8 rounded-3xl border-2 border-indigo-500/40 bg-indigo-950/10 space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-md border border-amber-800">
                  {selectedRole.badge}
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">{selectedRole.title}</h3>
              <p className="text-xs font-semibold text-indigo-300">{selectedRole.description}</p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Role Capabilities:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedRole.capabilities.map((cap, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* KEY HIGHLIGHT CARDS: OVERLAP ENGINE, FREEZE-ON-QUOTE, DUAL SIGNATURE, BIDI LOCALE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <span>Revenue-Ranked Overlap Engine</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              When multiple producers request overlapping date ranges, the venue does not guess. Book a Show enumerates all valid non-overlapping combinations and ranks them by total venue revenue, highlighting used vs wasted open days.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-amber-400" />
              <span>Freeze-on-Quote Pricing Integrity</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              A booking's rates are snapshotted onto the bid when quoted. Updating the venue's standard rate schedule next month will never silently reprice an existing booking or contract executed last month.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileCheck2 className="w-5 h-5 text-indigo-400" />
              <span>Dual-Signature PDF Engine</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Separates the Commitment Form (request phase) from the Final Agreement (post-approval contract). Signed PDFs are rasterised in the browser so the captured signature is 100% identical to what the signer viewed.
            </p>
          </div>

          <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-3">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-cyan-400" />
              <span>Build-Time Bidi (RTL & LTR) Locale</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Fully bidirectional interface selected at build time via `NEXT_PUBLIC_LOCALE`. Unused locale dictionaries are dropped from bundles, and missing keys trigger compile errors rather than blank labels in production.
            </p>
          </div>
        </section>
        <ContactBanner />
      </div>
    </main>
  );
}
