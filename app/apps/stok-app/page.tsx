'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Package,
  ChevronLeft,
  BookOpen,
  Code2,
  Sparkles,
  CheckCircle2,
  Search,
  Key,
  Database,
  Briefcase,
  Bell,
  ArrowRight,
  ShieldAlert,
  Bot,
  Activity,
  Layers,
  FileText,
  Sliders,
  RefreshCw,
  Zap,
  ExternalLink,
} from 'lucide-react';
import { STOKAPP_DATA } from '@/lib/stokAppData';

export default function StokAppUserGuidePage() {
  const [activeScreenTab, setActiveScreenTab] = useState<string>('today');

  const selectedScreen =
    STOKAPP_DATA.screenGuides.find((s) => s.id === activeScreenTab) ||
    STOKAPP_DATA.screenGuides[0];

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
            {STOKAPP_DATA.header.version}
          </span>
        </div>

        {/* Header Title & Sub-Navigation Tabs */}
        <div className="space-y-6">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 space-y-6 bg-gradient-to-b from-slate-900/90 to-slate-950">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/10">
                <Package className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  {STOKAPP_DATA.header.title}
                </h1>
                <p className="text-xs font-mono text-amber-400 mt-1">Multi-Market Portfolio Companion & AI Research Assistant</p>
              </div>
            </div>

            <p className="text-base text-slate-300 leading-relaxed max-w-4xl font-normal">
              {STOKAPP_DATA.header.subtitle}
            </p>

            {/* PART 1 / PART 2 TOGGLE BAR & LAUNCH APP BUTTON */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/apps/stok-app"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all border border-indigo-500"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Part 1: User Guide & Feature Catalog</span>
                </Link>
                <Link
                  href="/apps/stok-app/technical"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs transition-all border border-slate-800"
                >
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>Part 2: Technical Overview & Spec</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <a
                href="https://stokapp.ponyapp.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all border border-emerald-500"
              >
                <span>Launch Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* HERO METRICS CARDS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STOKAPP_DATA.heroMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-2 hover:border-amber-500/40 transition-all"
            >
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{metric.label}</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">{metric.value}</span>
              <span className="text-[11px] text-indigo-300">{metric.detail}</span>
            </div>
          ))}
        </div>

        {/* INTRODUCTION SECTION */}
        <section className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4 bg-slate-900/60">
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400" />
            Introduction & Product Philosophy
          </h2>
          <div className="text-sm text-slate-300 leading-relaxed space-y-3 font-normal">
            <p>
              StokApp is a personal research and record-keeping tool built for a self-directed investor who trades manually somewhere else. It intentionally does not connect to a brokerage and it never places orders.
            </p>
            <p>
              Instead, you tell it what you bought and sold, and in return it watches the markets you care about, runs the same mechanical checks a disciplined investor would run by hand, and asks Claude AI to turn all of that into a plain-language read: a stance, a risk note, a research summary, or a longer-term view.
            </p>
            <p>
              It runs seamlessly across Mac, iPad, and iPhone, with your actions, rules, and research synced across all devices through your own private iCloud account.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS IN ONE PASS (4-STEP PIPELINE) */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-amber-400" />
              How It Works, In One Pass
            </h2>
            <p className="text-xs text-slate-400">Four things happen in this order every time StokApp looks at a stock:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {STOKAPP_DATA.howItWorksSteps.map((step) => (
              <div
                key={step.number}
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4 hover:border-indigo-500/50 transition-all group"
              >
                <div className="space-y-2">
                  <span className="text-2xl font-extrabold font-mono text-amber-400 group-hover:scale-110 transition-transform inline-block">
                    {step.number}
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

          <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200 leading-relaxed">
            <span className="font-bold text-indigo-300">💡 Cost Efficiency Architecture:</span> Mechanical rules are cheap and run constantly across every scan, scorecard, and backtest. Claude AI is reserved for where it adds maximum value: ranking recommendations, chatting about your portfolio, and conducting deep-dive research on request.
          </div>
        </section>

        {/* GETTING STARTED WALKTHROUGH */}
        <section className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 bg-slate-900/60">
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            Getting Started Setup Guide
          </h2>

          <div className="space-y-4">
            {STOKAPP_DATA.gettingStarted.map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm flex-shrink-0 mt-0.5">
                  {item.step}
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SCREEN-BY-SCREEN CATALOG (INTERACTIVE TABS & CARDS) */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              Complete Screen-by-Screen User Guide
            </h2>
            <p className="text-xs text-slate-400">Detailed breakdown of every screen and feature in StokApp:</p>
          </div>

          {/* Screen Tabs Header */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {STOKAPP_DATA.screenGuides.map((screen) => (
              <button
                key={screen.id}
                onClick={() => setActiveScreenTab(screen.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs font-bold transition-all border flex-shrink-0 ${
                  activeScreenTab === screen.id
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {screen.sectionSymbol} — {screen.title}
              </button>
            ))}
          </div>

          {/* Active Screen Detail Card */}
          <div className="glass-panel p-8 rounded-3xl border-2 border-indigo-500/40 bg-indigo-950/10 space-y-6 animate-fadeIn">
            <div className="space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 px-3 py-1 rounded-md border border-amber-800">
                  {selectedScreen.sectionSymbol}
                </span>
                {selectedScreen.badges && (
                  <div className="flex items-center gap-1.5">
                    {selectedScreen.badges.map((badge, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase border ${
                          badge === 'BUY'
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : badge === 'SELL'
                            ? 'bg-red-500/20 text-red-300 border-red-500/40'
                            : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <h3 className="text-2xl font-extrabold text-white">{selectedScreen.title}</h3>
              <p className="text-xs font-semibold text-indigo-300">{selectedScreen.subtitle}</p>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              {selectedScreen.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Key Capabilities & Features:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedScreen.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DISCLAIMER BOX */}
        <section className="p-6 rounded-2xl bg-amber-950/20 border border-amber-500/30 text-amber-200 space-y-2">
          <div className="flex items-center gap-2 font-bold text-sm text-amber-400">
            <ShieldAlert className="w-4 h-4" />
            <span>DISCLAIMER & FINANCIAL SAFETY MODEL</span>
          </div>
          <p className="text-xs text-amber-200/90 leading-relaxed font-normal">
            {STOKAPP_DATA.disclaimer}
          </p>
        </section>
      </div>
    </main>
  );
}
