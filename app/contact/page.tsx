'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ChevronLeft, Send, Check } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Hub</span>
        </Link>

        <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-white">Contact & Collaboration</h1>
              <p className="text-xs text-slate-400">Reach out for software projects, AI tools, or photography inquiries.</p>
            </div>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-xs text-slate-300">Thank you for reaching out. I will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 border-t border-slate-800/80 pt-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 text-white placeholder-slate-500 px-4 py-2.5 rounded-xl text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 text-white placeholder-slate-500 px-4 py-2.5 rounded-xl text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project, idea, or inquiry..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 text-white placeholder-slate-500 px-4 py-2.5 rounded-xl text-sm outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
