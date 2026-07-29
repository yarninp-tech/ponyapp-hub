'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Clock, Calendar, Sparkles, BookOpen, ExternalLink, Mail, UserCheck } from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/articlesData';

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const articleId = params?.articleId as string;

  const article = ARTICLES_DATA.find((a) => a.id === articleId) || ARTICLES_DATA[0];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Back Link */}
        <button
          onClick={() => router.push('/articles')}
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All AI Articles</span>
        </button>

        {/* Article Banner */}
        <article className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800">
                Enterprise AI Insight
              </span>
              <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {article.readTime}
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              {article.title}
            </h1>
            <p className="text-base text-indigo-300 font-medium leading-relaxed">
              {article.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-lg"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Main Content Paragraphs */}
          <div className="border-t border-slate-800/80 pt-8 text-slate-300 space-y-5 leading-relaxed text-base">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author Bio Footer Card */}
          <div className="border-t border-slate-800/80 pt-8">
            <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                  YP
                </div>
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                    {article.author}
                    <UserCheck className="w-4 h-4 text-indigo-400" />
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">{article.authorRole}</p>
                  <p className="text-xs text-indigo-300 mt-1 font-medium">
                    Writing on digital transformation, operational excellence, and practical economics of AI.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {article.linkedinUrl && (
                  <a
                    href={article.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-200 text-xs font-semibold py-2 px-4 rounded-xl transition-all"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href="mailto:yarninp@gmail.com"
                  className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium py-2 px-4 rounded-xl transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
