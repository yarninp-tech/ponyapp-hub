'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, ExternalLink, User, Search, Tag } from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/articlesData';

export default function ArticlesIndexPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = Array.from(
    new Set(ARTICLES_DATA.flatMap((article) => article.tags))
  );

  const filteredArticles = selectedTag
    ? ARTICLES_DATA.filter((article) => article.tags.includes(selectedTag))
    : ARTICLES_DATA;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
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

          {/* Filter Tags */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-indigo-400" /> Filter:
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                selectedTag === null
                  ? 'bg-indigo-600 text-white border-indigo-500 font-semibold'
                  : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              All Articles ({ARTICLES_DATA.length})
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
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
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
                  <h2 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors leading-snug">
                    {article.title}
                  </h2>
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
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                    YP
                  </div>
                  <span className="text-xs text-slate-300 font-medium">{article.author}</span>
                </div>

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
      </div>
    </main>
  );
}
