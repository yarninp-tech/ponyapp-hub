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
  Database,
  Key,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  GitBranch,
  CheckCircle2,
  Server,
  Lock,
  FileCheck2,
} from 'lucide-react';
import { BOOK_A_SHOW_DATA } from '@/lib/bookAShowData';

export default function BookAShowTechnicalPage() {
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
            TECHNICAL REFERENCE — PART 2
          </span>
        </div>

        {/* Header Title & Sub-Navigation Tabs */}
        <div className="space-y-6">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 space-y-6 bg-gradient-to-b from-indigo-950/40 via-slate-900/90 to-slate-950">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-lg shadow-indigo-500/10">
                <Code2 className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  Book a Show Technical Reference
                </h1>
                <p className="text-xs font-mono text-indigo-300 mt-1">Architecture, Data Model, Workflow Rules & Integration Surface</p>
              </div>
            </div>

            <p className="text-base text-slate-300 leading-relaxed max-w-4xl font-normal">
              The shape of the app for developers and technical evaluators — database schemas, Next.js App Router architecture, 8-stage bid workflow pipeline, partner API specification, and source-level quality gates.
            </p>

            {/* PART 1 / PART 2 TOGGLE BAR & GITHUB BUTTON */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/apps/book-a-show"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-semibold text-xs transition-all border border-slate-800"
                >
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Part 1: System Walkthrough & User Guide</span>
                </Link>
                <Link
                  href="/apps/book-a-show/technical"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs shadow-md shadow-indigo-600/20 transition-all border border-indigo-500"
                >
                  <Code2 className="w-4 h-4" />
                  <span>Part 2: Technical Reference & Spec</span>
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

        {/* PLATFORM & TECH STACK SPECIFICATION */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-indigo-400" />
              Platform & Architecture Choices
            </h2>
            <p className="text-xs text-slate-400">Core architectural decisions driving performance, security, and document fidelity:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BOOK_A_SHOW_DATA.technical.stack.map((item, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-white/10 space-y-2 hover:border-indigo-500/50 transition-all">
                <h3 className="text-sm font-bold text-indigo-300 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  {item.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 16 DATA MODELS SCHEMA GROUPS */}
        <section className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 bg-slate-900/60">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-indigo-400" />
              Database Topology (16 Models & 9 Enums)
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              PostgreSQL database schema structured into 5 logical domain groups:
            </p>
          </div>

          <div className="space-y-6">
            {BOOK_A_SHOW_DATA.technical.dataModelGroups.map((group, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <h3 className="text-sm font-bold text-amber-400 font-mono uppercase tracking-wider">{group.groupName}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {group.models.map((m, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                      <span className="text-xs font-bold text-white font-mono">{m.name}</span>
                      <p className="text-xs text-slate-300 font-normal leading-relaxed">{m.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8-STAGE BID WORKFLOW PIPELINE */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-emerald-400" />
              8-Stage Bid Workflow Pipeline
            </h2>
            <p className="text-xs text-slate-400">State progression matrix for requests, holds, and assigned dates:</p>
          </div>

          <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-slate-300 border-b border-slate-800 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="p-4">Bid Status</th>
                    <th className="p-4">Workflow Meaning</th>
                    <th className="p-4">Calendar Days State</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 text-slate-300 font-normal">
                  {BOOK_A_SHOW_DATA.technical.bidStatuses.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                      <td className="p-4 font-mono font-bold text-white">
                        <span className={`px-2.5 py-1 rounded-md border text-[11px] ${
                          item.status === 'APPROVED'
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                            : item.status.includes('AWAITING') || item.status.includes('RETURNED')
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                            : 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4 font-semibold text-slate-200">{item.meaning}</td>
                      <td className="p-4 font-mono text-emerald-400 font-bold">{item.held}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* READ-ONLY PARTNER API SPECIFICATION */}
        <section className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 bg-slate-900/60">
          <div className="space-y-2">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <Key className="w-5 h-5 text-indigo-400" />
              Read-Only Partner API Specification (`/api/v1`)
            </h2>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Exposes contracted shows to downstream finance, ERP, and document management systems:
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {BOOK_A_SHOW_DATA.technical.partnerApi.endpoints.map((ep, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[10px] border border-emerald-500/40">
                      {ep.method}
                    </span>
                    <span className="font-mono text-xs text-white font-bold">{ep.path}</span>
                  </div>
                  <p className="text-xs text-slate-400">{ep.description}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400">Security & Scope Rules:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {BOOK_A_SHOW_DATA.technical.partnerApi.scopeRules.map((rule, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 9 QUALITY GATES ASSERTION SUITES */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              9 Quality Gate Assertion Check Suites
            </h2>
            <p className="text-xs text-slate-400">Source-level automated check suites executing on every change:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BOOK_A_SHOW_DATA.technical.qualityGates.map((gate, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 hover:border-emerald-500/40 transition-all">
                <div className="flex items-center gap-2 font-mono font-bold text-xs text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>check:{gate.suite}</span>
                </div>
                <p className="text-xs text-slate-300 font-normal leading-relaxed">{gate.asserts}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
