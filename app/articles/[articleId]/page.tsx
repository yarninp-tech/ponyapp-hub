'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Clock, Calendar, Sparkles, BookOpen, Share2 } from 'lucide-react';
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
          onClick={() => router.push('/#articles')}
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to AI Insights</span>
        </button>

        {/* Article Banner */}
        <article className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
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

          <div className="border-t border-slate-800/80 pt-8 text-slate-300 space-y-6 leading-relaxed text-base">
            {article.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl font-bold text-white pt-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={idx} className="list-disc pl-5 space-y-2 text-slate-300">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>
        </article>
      </div>
    </main>
  );
}
