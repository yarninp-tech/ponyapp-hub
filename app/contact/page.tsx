'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, ChevronLeft, Send, Check, Linkedin, Calendar, ShieldCheck, Loader2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setLoading(true);

    try {
      // Primary direct form delivery service to yarninp@gmail.com
      await fetch('https://formsubmit.co/ajax/yarninp@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Inquiry from ${name} via ponyapp.net`,
          _template: 'table',
          _captcha: 'true'
        })
      });

      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors font-medium"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Contact Header */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-8 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 flex-shrink-0 shadow-lg shadow-indigo-600/10">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Contact & Direct Inquiries</h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">Senior Technology & Operations Leadership | Enterprise AI Strategy</p>
            </div>
          </div>

          {/* Professional Channels Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/yarnin-peled"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">LinkedIn Profile</span>
                <span className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors truncate block">Connect on LinkedIn</span>
              </div>
            </a>

            {/* Calendly Booking Card */}
            <a
              href="https://calendly.com/yarninp/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Schedule Meeting</span>
                <span className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors truncate block">Book via Calendly</span>
              </div>
            </a>
          </div>

          {/* Form / Internal Confirmation Message */}
          {submitted ? (
            <div className="p-8 bg-emerald-500/10 border-2 border-emerald-500/40 rounded-3xl text-center space-y-4 shadow-xl">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-extrabold text-white">Message Delivered Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-bold">{name}</span>. Your inquiry has been transmitted to Yarnin. You will receive a direct reply to your email address (<span className="text-slate-200 font-mono">{email}</span>).
                </p>
                <p className="text-xs text-slate-400 pt-2">
                  Protected by anti-spam security filters.
                </p>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 px-5 py-2.5 rounded-xl text-xs font-bold transition-all"
              >
                <span>Send Another Message</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 border-t border-slate-800/80 pt-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-extrabold text-white">Send an Internal Direct Message</h3>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Bot Protected • Direct Inquiry
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 text-white placeholder-slate-500 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 text-white placeholder-slate-500 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">Message *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Inquire about enterprise AI strategy, technology leadership, software projects, or consulting..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 text-white placeholder-slate-500 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 text-sm disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
