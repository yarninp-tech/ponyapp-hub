'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Clock, Calendar, Sparkles, BookOpen, ExternalLink, Mail, UserCheck, Quote } from 'lucide-react';
import { ARTICLES_DATA } from '@/lib/articlesData';

export default function ArticleDetailPage() {
  const params = useParams();
  const router = useRouter();
  const articleId = params?.articleId as string;

  const article = ARTICLES_DATA.find((a) => a.id === articleId) || ARTICLES_DATA[0];

  // Helper to test if a paragraph string is a section headline
  const isSectionHeadline = (text: string) => {
    const trimmed = text.trim();
    return (
      (trimmed.length <= 85 &&
        !['.', '?', '!', ':', ';', ','].includes(trimmed.slice(-1)) &&
        !trimmed.toLowerCase().startsWith('is the') &&
        !trimmed.toLowerCase().startsWith('are we') &&
        !trimmed.toLowerCase().startsWith('and can') &&
        !trimmed.toLowerCase().startsWith('can an') &&
        !trimmed.toLowerCase().startsWith('or are')) ||
      trimmed.startsWith('## ') ||
      trimmed.startsWith('### ')
    );
  };

  // Collect all section headlines for the TOC bar
  const sectionHeadlines = article.content.filter(isSectionHeadline);

  // Counter to keep track of section IDs for smooth anchor links
  let headlineCounter = 0;

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

        {/* Article Container */}
        <article className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-8">
          {/* Header Metadata */}
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {article.title}
            </h1>
            <p className="text-base md:text-lg text-indigo-300 font-medium leading-relaxed">
              {article.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-3 py-1 rounded-lg font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Quick-Jump Table of Contents Bar */}
          {sectionHeadlines.length > 0 && (
            <div className="bg-slate-900/90 border border-indigo-500/20 rounded-2xl p-5 space-y-3 shadow-inner">
              <div className="flex items-center gap-2 text-xs font-extrabold text-indigo-400 uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                <span>Article Outline & Key Sections</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sectionHeadlines.map((heading, i) => {
                  const cleanHeading = heading.replace(/^#{2,3}\s*/, '');
                  return (
                    <a
                      key={i}
                      href={`#section-${i}`}
                      className="text-xs bg-slate-950 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 text-slate-300 hover:text-indigo-200 px-3 py-1.5 rounded-lg transition-all font-medium"
                    >
                      {cleanHeading}
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Main Article Body */}
          <div className="border-t border-slate-800/80 pt-8 text-slate-300 space-y-6 leading-relaxed text-base md:text-lg">
            {article.content.map((paragraph, idx) => {
              const trimmed = paragraph.trim();

              // A. Quote / Callout Block
              if (
                (trimmed.startsWith('"') || trimmed.startsWith('“') || trimmed.includes('— Geoffrey Hinton') || trimmed.includes('— Sandra Sucher')) &&
                trimmed.length > 30
              ) {
                const parts = trimmed.split('—');
                const quoteBody = parts[0].replace(/^["“]|["”]$/g, '').trim();
                const citation = parts[1] ? parts[1].trim() : null;

                return (
                  <blockquote
                    key={idx}
                    className="my-8 p-6 md:p-8 rounded-2xl bg-indigo-950/40 border-l-4 border-indigo-500 text-indigo-100 font-serif text-lg md:text-xl leading-relaxed shadow-xl relative space-y-3"
                  >
                    <Quote className="w-8 h-8 text-indigo-500/30 absolute top-4 right-4" />
                    <p className="italic text-slate-100 font-medium">"{quoteBody}"</p>
                    {citation && (
                      <footer className="text-sm font-semibold text-indigo-300 not-italic flex items-center gap-2 pt-1">
                        <span className="w-4 h-0.5 bg-indigo-500/60 inline-block" />
                        <span>— {citation}</span>
                      </footer>
                    )}
                  </blockquote>
                );
              }

              // B. Bullet Point
              if (trimmed.startsWith('•') || trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
                const listText = trimmed.replace(/^[•\-\*]\s*/, '');
                return (
                  <div key={idx} className="flex items-start gap-3 my-2 pl-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 mt-2.5 flex-shrink-0" />
                    <p className="text-slate-300 leading-relaxed text-base md:text-lg">{listText}</p>
                  </div>
                );
              }

              // C. Section Headline (H2)
              if (isSectionHeadline(trimmed)) {
                const currentId = `section-${headlineCounter}`;
                headlineCounter++;
                const cleanTitle = trimmed.replace(/^#{2,3}\s*/, '');

                return (
                  <div key={idx} id={currentId} className="pt-10 pb-4 mt-8 border-b border-indigo-500/20 space-y-2 scroll-mt-6">
                    <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-semibold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
                      <span>Section</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                      {cleanTitle}
                    </h2>
                  </div>
                );
              }

              // D. Lead Questions (Opening 3 paragraphs if ending with ?)
              if (idx < 3 && trimmed.endsWith('?')) {
                return (
                  <p
                    key={idx}
                    className="text-lg md:text-xl font-semibold text-indigo-200 leading-relaxed italic border-l-2 border-indigo-500/50 pl-4 my-4 bg-indigo-950/20 py-3 rounded-r-xl"
                  >
                    {trimmed}
                  </p>
                );
              }

              // E. Standard Body Paragraph
              return (
                <p key={idx} className="text-slate-300 leading-relaxed text-base md:text-lg">
                  {trimmed}
                </p>
              );
            })}
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
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium py-2 px-4 rounded-xl transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Contact Form</span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
