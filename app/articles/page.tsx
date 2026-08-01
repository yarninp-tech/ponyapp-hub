'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, Calendar, ArrowRight, ExternalLink, User, Tag, Plus, Minus, Sparkles } from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/articlesData';

export default function ArticlesIndexPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showTags, setShowTags] = useState(false);

  // Extract all unique tags
  const allTags = Array.from(
    new Set(ARTICLES_DATA.flatMap((article) => article.tags))
  );

  const filteredArticles = selectedTag
    ? ARTICLES_DATA.filter((article) => article.tags.includes(selectedTag))
    : ARTICLES_DATA;

  const latestArticle = filteredArticles[0];
  const additionalArticles = filteredArticles.slice(1);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Header */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-6">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Enterprise AI Insights & Publications</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
              AI Strategy, Digital Transformation & Leadership
            </h1>
            <p className="text-base text-slate-300 leading-relaxed">
              Published articles, strategic frameworks, and research by <span className="text-white font-extrabold">Yarnin Peled</span> examining the practical economics of AI in the enterprise, autonomous leadership models, and operational change management.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
              <a
                href="https://www.linkedin.com/in/yarnin-peled"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <User className="w-3.5 h-3.5" />
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <span>yarninp@gmail.com</span>
            </div>
          </div>

          {/* Collapsible Filter Toggle (+ / -) */}
          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setShowTags(!showTags)}
                className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 bg-indigo-950/60 border border-indigo-800/80 px-3.5 py-2 rounded-xl transition-all"
              >
                {showTags ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                <span>{showTags ? 'Hide Topic Filters' : '+ Filter Articles by Topic / Tags'}</span>
                {selectedTag && <span className="bg-indigo-600 text-white px-2 py-0.5 rounded-md text-[10px] ml-1">{selectedTag}</span>}
              </button>

              {selectedTag && (
                <button
                  onClick={() => setSelectedTag(null)}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  Clear Tag Filter
                </button>
              )}
            </div>

            {/* Expandable Tag List */}
            {showTags && (
              <div className="flex flex-wrap items-center gap-2 pt-2 animate-fadeIn">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    selectedTag === null
                      ? 'bg-indigo-600 text-white border-indigo-500 font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  All Topics ({ARTICLES_DATA.length})
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                      selectedTag === tag
                        ? 'bg-indigo-600 text-white border-indigo-500 font-semibold'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* SECTION 1: LATEST PUBLISHED ARTICLE */}
        {latestArticle && (
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <h2 className="text-2xl font-extrabold text-white">מאמר אחרון שפורסם • Latest Published Article</h2>
            </div>

            <div className="glass-card p-8 md:p-10 rounded-3xl border-2 border-indigo-500/40 bg-indigo-950/20 flex flex-col justify-between space-y-6 hover:border-indigo-500 transition-all shadow-xl group">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold">
                  <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider">
                    ★ FEATURED RELEASE
                  </span>
                  <div className="flex items-center gap-4 text-slate-400">
                    <span className="flex items-center gap-1.5 text-indigo-300">
                      <Clock className="w-4 h-4" />
                      {latestArticle.readTime}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-slate-500" />
                      {latestArticle.date}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-indigo-300 transition-colors leading-tight">
                    {latestArticle.title}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-300">
                    {latestArticle.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {latestArticle.summary}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {latestArticle.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">By {latestArticle.author}</span>
                <Link
                  href={`/articles/${latestArticle.id}`}
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-xl text-xs transition-all shadow-lg shadow-indigo-600/20"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 2: ADDITIONAL ARTICLES */}
        {additionalArticles.length > 0 && (
          <section className="space-y-6 pt-6">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <h2 className="text-2xl font-extrabold text-white">מאמרים נוספים • Additional Articles & Research</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalArticles.map((article) => (
                <div
                  key={article.id}
                  className="glass-card p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-indigo-500/50 transition-all hover:-translate-y-1 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                      <span className="flex items-center gap-1 text-indigo-400">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {article.date}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs text-indigo-300 font-medium mt-1">
                        {article.subtitle}
                      </p>
                      <p className="text-xs text-slate-400 mt-3 line-clamp-4 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {article.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">By {article.author}</span>
                    <Link
                      href={`/articles/${article.id}`}
                      className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
