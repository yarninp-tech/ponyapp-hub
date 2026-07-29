'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Camera, Sun, Moon, Sparkles, ExternalLink, Layers, BookOpen, User, Mail, ShieldCheck } from 'lucide-react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
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
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased transition-colors duration-500">
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-xl transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Brand Logo - Yarnin Peled */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-600/20 group-hover:scale-105 transition-all duration-300">
                <span className="font-extrabold text-white text-base font-mono tracking-tighter">YP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl leading-none tracking-tight hero-headline">
                  Yarnin Peled
                </span>
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono tracking-widest uppercase mt-0.5">ponyapp.net</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-2 md:gap-5">
              <nav className="flex items-center gap-1 md:gap-4 text-xs font-bold tracking-wider uppercase text-zinc-700 dark:text-zinc-300">
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
                className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200 hover:border-indigo-500/50 transition-all ml-2 flex items-center gap-1.5 text-xs font-bold"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span className="hidden sm:inline text-amber-300">Light</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-indigo-600" />
                    <span className="hidden sm:inline text-indigo-700">Dark</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 py-10 px-6 text-zinc-600 dark:text-zinc-400 text-sm transition-colors duration-500">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span className="font-extrabold text-zinc-900 dark:text-white">Yarnin Peled &copy; {new Date().getFullYear()}</span>
              <span className="text-zinc-400 dark:text-zinc-600">•</span>
              <span className="text-xs font-mono text-zinc-500">Senior Tech Projects & Operations Leader</span>
            </div>
            <div className="flex items-center gap-6 text-xs font-semibold text-zinc-600 dark:text-zinc-400">
              <Link href="/apps" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Apps</Link>
              <Link href="/articles" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Articles</Link>
              <Link href="/photography" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Photography</Link>
              <Link href="/about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</Link>
              <a href="https://yarninpeled.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1">
                <span>yarninpeled.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
