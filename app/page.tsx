'use client';

import React from 'react';
import Link from 'next/link';
import {
  BrainCircuit,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Camera,
  Layers,
  Package,
  Calendar,
  BarChart3,
  Workflow,
  FileText,
  BookOpen,
  Clock,
  Code2,
  Mail,
  Linkedin,
  Phone,
  UserCheck,
  Building2,
} from 'lucide-react';
import { PROJECTS_DATA } from '@/lib/projectsData';
import { ARTICLES_DATA } from '@/lib/articlesData';

const ICON_MAP: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-indigo-400" />,
  FileText: <FileText className="w-6 h-6 text-emerald-400" />,
  Package: <Package className="w-6 h-6 text-amber-400" />,
  Calendar: <Calendar className="w-6 h-6 text-blue-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-purple-400" />,
  Workflow: <Workflow className="w-6 h-6 text-cyan-400" />,
};

export default function HomePage() {
  const ecosystemApps = PROJECTS_DATA.filter((p) => p.category === 'Ecosystem App');
  const otherProjects = PROJECTS_DATA.filter((p) => p.category !== 'Ecosystem App');

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 relative overflow-hidden transition-colors duration-300">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-16 z-10 relative text-center max-w-4xl">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span className="font-extrabold text-white">Yarnin Peled</span>
            <span className="text-slate-400">| Product, Technology & Enterprise AI Innovations</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
              Yarnin Peled
            </span>
            <br />
            <span className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
              Innovation Hub & Portfolio
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-normal">
            Personal portal at <span className="text-indigo-400 font-semibold">ponyapp.net</span>. Enterprise AI strategy, software applications ecosystem, technical case studies, and photography by <span className="text-white font-extrabold underline decoration-indigo-500/50 underline-offset-4">Yarnin Peled</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="#articles"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/25 transform hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Read Enterprise AI Articles</span>
            </Link>

            <Link
              href="#apps"
              className="flex items-center gap-2 glass-panel hover:bg-slate-800 text-slate-200 font-medium py-3.5 px-5 rounded-xl border border-slate-700 transition-all"
            >
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Explore Ecosystem Apps</span>
            </Link>
          </div>

          {/* Quick Contact Badge */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <a
              href="mailto:yarninp@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>yarninp@gmail.com</span>
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/yarnin-peled"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-indigo-400" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Prominent Section 1: Enterprise AI Insights & Articles */}
      <section id="articles" className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-900">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-indigo-500/30 mb-10 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-semibold">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Featured Publications by Yarnin Peled</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Enterprise AI & Digital Transformation Insights
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Strategic articles examining practical economics of AI in business, autonomous agents, CFO workflow automation, and change management in large organizations.
              </p>
            </div>

            <Link
              href="/articles"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/25 flex-shrink-0 text-sm"
            >
              <span>Browse All AI Articles ({ARTICLES_DATA.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Featured Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES_DATA.map((article) => (
            <div
              key={article.id}
              className="glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-indigo-500/60 transition-all hover:-translate-y-1 group bg-slate-900/50 shadow-lg"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between text-xs text-slate-400 font-medium border-b border-slate-800 pb-3">
                  <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {article.date}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-indigo-300 font-semibold">
                    {article.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 pt-2 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-slate-950 border border-slate-800 text-indigo-200 px-2.5 py-1 rounded-md font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                    YP
                  </div>
                  <span className="text-xs text-slate-300 font-semibold">{article.author}</span>
                </div>

                <Link
                  href={`/articles/${article.id}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors bg-indigo-950/60 px-3 py-1.5 rounded-lg border border-indigo-800/60"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Balanced Ecosystem Applications */}
      <section id="apps" className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-900">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Ecosystem Applications</h2>
            <p className="text-sm text-slate-400 mt-1">Suite of web applications built and hosted under ponyapp.net</p>
          </div>
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
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
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

              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800/80">
                <Link
                  href={`/projects/${project.id}`}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                >
                  <span>Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {project.launchUrl && (
                  <a
                    href={project.launchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    <span>Launch App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Projects & Case Studies */}
      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-900">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Innovation Projects & Professional Case Studies</h2>
          <p className="text-sm text-slate-400 mt-1">Technical breakdowns, interactive tools, and engineering architectures</p>
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
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
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
                  <span>Read Case Study & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Deep-Dive Contact Details Card */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-900">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 space-y-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>Get in Touch with Yarnin Peled</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">Direct Contact & Professional Links</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Available for enterprise AI consulting, technology project leadership, digital transformation initiatives, and creative media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <a
              href="mailto:yarninp@gmail.com"
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Email Directly</span>
                <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">yarninp@gmail.com</span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/yarnin-peled"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">LinkedIn Profile</span>
                <span className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors flex items-center gap-1">
                  linkedin.com/in/yarnin-peled
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>

            {/* Direct Phone / Contact Page Card */}
            <Link
              href="/contact"
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block">Phone & Contact Form</span>
                <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                  Contact & Inquiry Form
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Photography Spotlight (yarninpeled.com) */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-900">
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
              <Camera className="w-3.5 h-3.5 text-purple-400" />
              <span>Creative Media & Fine Art</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              Photography Portfolio Showcase
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Explore a curated selection of visual storytelling, landscape, and architectural photography by Yarnin Peled at <span className="text-purple-300 font-semibold">yarninpeled.com</span>.
            </p>
            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/photography"
                className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold py-2.5 px-5 rounded-xl transition-colors"
              >
                View Sample Gallery
              </Link>
              <a
                href="https://yarninpeled.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5"
              >
                <span>Visit yarninpeled.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 w-full md:w-auto max-w-md">
            <div className="h-32 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-4 text-center">
              <span className="text-xs text-purple-300 font-medium">Urban & Architecture</span>
            </div>
            <div className="h-32 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-4 text-center">
              <span className="text-xs text-purple-300 font-medium">Landscape & Nature</span>
            </div>
            <div className="h-32 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center p-4 text-center col-span-2">
              <span className="text-xs text-purple-300 font-medium">Visual Storytelling & Fine Art</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
