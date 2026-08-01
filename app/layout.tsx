'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sun, Moon, Layers, BookOpen, Camera, ShieldCheck, Mail, Linkedin, Phone, Menu, X } from 'lucide-react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check initial theme preference or local storage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <html lang="en" className="light">
      <head>
        <title>Yarnin Peled | Senior Tech Projects & Operations Leader</title>
        <meta name="description" content="Personal portfolio & editorial innovation portal of Yarnin Peled — Senior Technology Projects & Operations Leader, AI Agent practitioner, and IMBA Candidate." />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased transition-colors duration-500">
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-xl transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Brand Logo - Pure Liquid Silver YP Monogram */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-11 h-11 rounded-2xl overflow-hidden shadow-lg shadow-indigo-600/20 group-hover:scale-105 transition-all duration-300 border border-indigo-500/30">
                <Image
                  src="/images/ponyapp_logo.jpg"
                  alt="Yarnin Peled YP Monogram Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl leading-none tracking-tight hero-headline">
                  Yarnin Peled
                </span>
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono tracking-widest uppercase mt-0.5 font-bold">ponyapp.net</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-5">
              <nav className="flex items-center gap-4 text-xs font-bold tracking-wider uppercase text-zinc-700 dark:text-zinc-300">
                <Link href="/" className="px-3 py-2 rounded-xl hover:text-indigo-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all">
                  Home
                </Link>
                <Link href="/apps" className="px-3 py-2 rounded-xl hover:text-indigo-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Apps</span>
                </Link>
                <Link href="/articles" className="px-3 py-2 rounded-xl hover:text-indigo-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Articles</span>
                </Link>
                <Link href="/photography" className="px-3 py-2 rounded-xl hover:text-indigo-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Photography</span>
                </Link>
                <Link href="/about" className="px-3 py-2 rounded-xl hover:text-indigo-600 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all">
                  About
                </Link>
                <Link href="/contact" className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-md shadow-indigo-600/20">
                  Contact
                </Link>
              </nav>

              {/* Dark / Light Mode Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200 hover:border-indigo-500/50 transition-all flex items-center gap-1.5 text-xs font-bold"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-300">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-indigo-600" />
                    <span className="text-indigo-700">Dark</span>
                  </>
                )}
              </button>
            </div>

            {/* Mobile Controls: Dark Mode & Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200"
                title="Toggle Theme"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-indigo-600 text-white shadow-md flex items-center justify-center"
                aria-label="Toggle Mobile Menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Drawer Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-fadeIn">
              <nav className="flex flex-col space-y-3 font-bold text-sm tracking-wider uppercase text-zinc-800 dark:text-zinc-200">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all flex items-center justify-between"
                >
                  <span>Home</span>
                </Link>
                <Link
                  href="/apps"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    Interactive Apps
                  </span>
                </Link>
                <Link
                  href="/articles"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    AI Articles & Research
                  </span>
                </Link>
                <Link
                  href="/photography"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <Camera className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    Photography Gallery
                  </span>
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all flex items-center justify-between"
                >
                  <span>About & Executive CV</span>
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl bg-indigo-600 text-white text-center font-bold shadow-md"
                >
                  Contact & Direct Engagement
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* Main Content Area */}
        <div className="flex-1">{children}</div>

        {/* Footer */}
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 py-12 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden border border-indigo-500/30">
                <Image
                  src="/images/ponyapp_logo.jpg"
                  alt="YP Monogram Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-zinc-900 dark:text-zinc-100">Yarnin Peled • ponyapp.net</span>
                <p className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">Senior Technology Projects & Operations Leader | Head of IT & Tech Projects</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="/about" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Executive Story & CV</Link>
              <Link href="/articles" className="hover:text-indigo-600 dark:hover:text-white transition-colors">AI Research</Link>
              <a href="https://pdf-editor.ponyapp.net/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Privacy Policy</a>
              <a href="https://pdf-editor.ponyapp.net/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-white transition-colors">Terms of Service</a>
              <a href="https://yarninpeled.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-white transition-colors">yarninpeled.com</a>
            </div>

            <div className="text-right">
              <p>© {new Date().getFullYear()} Yarnin Peled. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
