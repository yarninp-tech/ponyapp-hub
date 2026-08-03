'use client';

import React from 'react';
import Link from 'next/link';
import {
  BrainCircuit,
  ArrowRight,
  ExternalLink,
  Layers,
  Package,
  Calendar,
  BarChart3,
  Workflow,
  FileText,
  Code2,
  ChevronLeft,
  Sparkles,
  Theater,
} from 'lucide-react';
import { PROJECTS_DATA } from '@/lib/projectsData';

const ICON_MAP: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
  FileText: <FileText className="w-6 h-6 text-emerald-400" />,
  Package: <Package className="w-6 h-6 text-amber-400" />,
  Theater: <Theater className="w-6 h-6 text-rose-400" />,
  Calendar: <Calendar className="w-6 h-6 text-blue-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-purple-400" />,
  Workflow: <Workflow className="w-6 h-6 text-cyan-400" />,
};

export default function AppsPage() {
  const ecosystemApps = PROJECTS_DATA.filter((p) => p.category === 'Ecosystem App');
  const otherProjects = PROJECTS_DATA.filter((p) => p.category !== 'Ecosystem App');

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header Banner */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-indigo-400" />
            <span>Applications & Engineering Projects</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Software Applications & Case Studies
          </h1>
          <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
            Explore web applications built under the <span className="text-indigo-400 font-semibold">ponyapp.net</span> ecosystem alongside technical case studies, interactive document tools, and automated workflow engines by <span className="text-white font-extrabold">Yarnin Peled</span>.
          </p>
        </div>

        {/* Ecosystem Apps Grid */}
        <section className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              Ecosystem Applications
            </h2>
            <p className="text-xs text-slate-400 mt-1">Live and upcoming web platforms hosted under ponyapp.net</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ecosystemApps.map((project) => (
              <div
                key={project.id}
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-indigo-500/50 transition-all hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {ICON_MAP[project.iconName] || <Layers className="w-6 h-6 text-indigo-400" />}
                    </div>
                    <span
                      className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase border ${
                        project.isLive
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300'
                      }`}
                    >
                      {project.statusBadge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-indigo-400 font-medium mt-0.5">{project.subtitle}</p>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                      100% Free &amp; Open Access
                    </span>
                    {project.id === 'pdf-editor' && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
                        🛡️ 100% Client-Side Private
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800/80">
                  <Link
                    href={
                      project.id === 'stok-app'
                        ? '/apps/stok-app'
                        : project.id === 'book-a-show'
                        ? '/apps/book-a-show'
                        : `/projects/${project.id}`
                    }
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.launchUrl && (
                    <a
                      href={project.launchUrl}
                      target={project.launchUrl.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-3.5 rounded-xl text-xs transition-all shadow-md shadow-indigo-600/20"
                    >
                      <span>Launch Application</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Projects & Case Studies */}
        <section className="space-y-6 pt-6 border-t border-slate-900">
          <div>
            <h2 className="text-2xl font-bold text-white">Innovation Projects & Technical Case Studies</h2>
            <p className="text-xs text-slate-400 mt-1">Interactive document tools, analytics architectures, and workflow engines</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.id}
                className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col justify-between hover:border-indigo-500/50 transition-all hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {ICON_MAP[project.iconName] || <Code2 className="w-6 h-6 text-indigo-400" />}
                    </div>
                    <span className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase bg-slate-900 border border-slate-700 text-slate-300">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-indigo-400 font-medium mt-0.5">{project.subtitle}</p>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <Link
                    href={`/projects/${project.id}`}
                    className="w-full flex items-center justify-between text-xs font-semibold text-indigo-400 hover:text-indigo-300 py-1"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
