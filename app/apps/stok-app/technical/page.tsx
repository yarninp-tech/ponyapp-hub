'use client';

import React from 'react';
import Link from 'next/link';
import {
  Code2,
  BookOpen,
  ChevronLeft,
  Cpu,
  Layers,
  Zap,
  HardDrive,
  Key,
  Database,
  Cloud,
  Mail,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  GitBranch,
  FileCode,
} from 'lucide-react';
import { STOKAPP_DATA } from '@/lib/stokAppData';

export default function StokAppTechnicalPage() {
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
            TECHNICAL OVERVIEW — PART 2
          </span>
        </div>

        {/* Header Title & Sub-Navigation Tabs */}
        <div className="space-y-6">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 space-y-6 bg-gradient-to-b from-indigo-950/30 to-slate-950">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/10">
                <Code2 className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  StokApp Technical Overview
                </h1>
                <p className="text-xs font-mono text-indigo-300 mt-1">System Architecture, Data Pipelines, & Integration Specification</p>
              </div>
            </div>

            <p className="text-base text-slate-300 leading-relaxed max-w-4xl font-normal">
              The shape of the app for an engineer getting oriented — architecture, data flow, and integrations at a level that explains the design without doubling as a build spec.
            </p>

            {/* PART 1 / PART 2 TOGGLE BAR */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
              <Link
                href="/apps/stok-app"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs transition-all border border-slate-800"
              >
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Part 1: User Guide & Feature Catalog</span>
              </Link>
              <Link
                href="/apps/stok-app/technical"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all border border-indigo-500"
              >
                <Code2 className="w-4 h-4" />
                <span>Part 2: Technical Overview & Spec</span>
              </Link>
            </div>
          </div>
        </div>

        {/* PLATFORM & STACK SPECIFICATION */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              Platform & Tech Stack
            </h2>
            <p className="text-xs text-slate-400">Core technologies powering StokApp across Apple platforms:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {STOKAPP_DATA.technical.stack.map((item, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-white/10 space-y-2 hover:border-indigo-500/50 transition-all">
                <h3 className="text-sm font-bold text-indigo-300 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  {item.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE AT A GLANCE */}
        <section className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 bg-slate-900/60">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-indigo-400" />
              Architecture at a Glance
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {STOKAPP_DATA.technical.architectureDescription}
            </p>
          </div>

          {/* Architecture Box Diagram */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">System Flow Diagram</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs">
              <div className="p-4 rounded-xl bg-indigo-950/60 border border-indigo-800/80 space-y-1">
                <span className="font-bold text-indigo-300 block">SwiftUI Views</span>
                <span className="text-[11px] text-slate-400 block">Today, Recommendations, Portfolio, Deep Dive, Chat</span>
              </div>
              <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-800/80 space-y-1 my-auto">
                <span className="font-bold text-amber-300 block">AppState</span>
                <span className="text-[11px] text-slate-400 block">Single shared injected environment object</span>
              </div>
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/80 space-y-1">
                <span className="font-bold text-emerald-300 block">Stores & Services</span>
                <span className="text-[11px] text-slate-400 block">SwiftData Stores + Thin External System Services</span>
              </div>
            </div>
            <div className="text-[11px] text-slate-400 text-center italic pt-2">
              Reading this: every screen reads and writes through one shared AppState, which owns thin Stores (SwiftData reader/writers) and Services (external system clients).
            </div>
          </div>
        </section>

        {/* SYNC & PERSISTENCE MATRIX */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Cloud className="w-5 h-5 text-indigo-400" />
              Sync & Persistence Matrix
            </h2>
            <p className="text-xs text-slate-400">Where each data type lives and how it syncs across devices:</p>
          </div>

          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-slate-300 border-b border-slate-800 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Data Type</th>
                    <th className="p-4">Sync Channel</th>
                    <th className="p-4">Channel Detail & Security</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300 font-normal">
                  {STOKAPP_DATA.technical.syncMatrix.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                      <td className="p-4 font-semibold text-white">{item.dataKind}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-md bg-indigo-950 border border-indigo-800 font-mono text-[11px] text-indigo-300 font-bold">
                          {item.channel}
                        </span>
                      </td>
                      <td className="p-4 text-slate-400">{item.explanation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* EXTERNAL INTEGRATIONS */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-amber-400" />
              External Integrations
            </h2>
            <p className="text-xs text-slate-400">Direct integration endpoints used by StokApp:</p>
          </div>

          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-slate-300 border-b border-slate-800 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-4">System</th>
                    <th className="p-4">Used For</th>
                    <th className="p-4">Notes & Capabilities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300 font-normal">
                  {STOKAPP_DATA.technical.externalIntegrations.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                      <td className="p-4 font-bold text-white">{item.system}</td>
                      <td className="p-4 text-indigo-300 font-semibold">{item.usedFor}</td>
                      <td className="p-4 text-slate-400">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CONSTRAINTS & NON-GOALS */}
        <section className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 bg-slate-900/60">
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Constraints & Non-Goals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STOKAPP_DATA.technical.constraintsAndNonGoals.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
