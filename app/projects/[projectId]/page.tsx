'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ExternalLink, Sparkles, Code2, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '@/lib/projectsData';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params?.projectId as string;

  const project = PROJECTS_DATA.find((p) => p.id === projectId) || PROJECTS_DATA[0];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Link */}
        <button
          onClick={() => router.push('/apps')}
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Applications & Projects</span>
        </button>

        {/* Project Header */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800">
              {project.category}
            </span>
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full uppercase border ${
                project.isLive
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                  : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
              }`}
            >
              {project.statusBadge}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{project.title}</h1>
            <p className="text-base text-indigo-300 font-medium">{project.subtitle}</p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Banner link for StokApp 2-Part Spec */}
          {project.id === 'stok-app' && (
            <div className="p-6 rounded-2xl bg-indigo-950/60 border border-indigo-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  Official 2-Part Specification & User Guide
                </h3>
                <p className="text-xs text-slate-300">
                  Explore Part 1 (User Guide & Screen Catalog) and Part 2 (Technical Architecture & Data Pipelines).
                </p>
              </div>
              <Link
                href="/apps/stok-app"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 px-5 rounded-xl text-xs transition-all shadow-md shadow-indigo-600/20 whitespace-nowrap"
              >
                <span>View 2-Part Spec</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {project.launchUrl && (
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <a
                href={project.launchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/20 text-sm"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-xs text-indigo-400 font-mono">{project.launchUrl}</span>
            </div>
          )}
        </div>

        {/* Technical Overview & Highlights */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Code2 className="w-5 h-5 text-indigo-400" />
            <span>Technical Breakdown & Overview</span>
          </h2>

          <div className="border-t border-slate-800/80 pt-6">
            <p className="text-base text-slate-300 leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wider">
                Key Engineering Highlights
              </h3>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* How to Try & Full App Inquiry Section */}
        <div className="glass-panel p-8 rounded-3xl border border-indigo-500/30 bg-indigo-950/20 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">How to Try & Request Full App Implementation</h2>
              <p className="text-xs text-indigo-300">Guide for visitors, evaluators, and prospective clients</p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300 leading-relaxed border-t border-indigo-900/60 pt-4">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">1. What is this app for?</h3>
              <p className="text-xs text-slate-300">
                {project.description} This platform demonstrates automated decision logic, real-time data synchronization, and modern web application architecture.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">2. How to try & evaluate it</h3>
              <p className="text-xs text-slate-300">
                Click <strong>Launch Live Application</strong> above to test-drive the interactive interface live in your browser. {project.launchUrl ? `Available directly at ${project.launchUrl}.` : ''}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">3. Request Full App or Custom Engine</h3>
              <p className="text-xs text-slate-300">
                Interested in obtaining full desktop / enterprise versions of this software, or building a custom automated application for your business? Contact <strong>Yarnin Peled</strong> directly:
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`mailto:yarninp@gmail.com?subject=Full%20App%20Inquiry%20-%20${encodeURIComponent(project.title)}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow"
                >
                  <span>✉️ Email Yarnin</span>
                </a>
                <a
                  href="tel:+972547918818"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs transition-all"
                  title="Call Cellular"
                >
                  <span>📞 Cellular</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-indigo-400 border border-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs transition-all"
                >
                  <span>🌐 Open Contact Page</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
