import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin, UserCheck, ArrowRight } from 'lucide-react';

export default function ContactBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16 pt-8">
      <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
            <Mail className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct Engagement</span>
          </div>
          <h3 className="text-3xl font-extrabold text-white">Contact &amp; Professional Channels</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Reach out directly via our protected contact form with Google reCAPTCHA bot filtering, connect on LinkedIn, or schedule a meeting via Calendly.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold">
            <a
              href="https://www.linkedin.com/in/yarnin-peled"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://calendly.com/yarninp/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline flex items-center gap-1.5"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Book Meeting (Calendly)</span>
            </a>
          </div>
        </div>

        <Link
          href="/contact"
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-7 rounded-2xl transition-all shadow-lg shadow-indigo-600/20 text-xs flex-shrink-0"
        >
          <span>Open Contact &amp; Inquiry Page</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
