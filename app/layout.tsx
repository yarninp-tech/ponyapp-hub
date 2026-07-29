'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Camera, Sun, Moon, Sparkles, ExternalLink, Layers, BookOpen, User, Mail } from 'lucide-react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
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
    <html lang="en" className="dark">
      <head>
        <title>Yarnin Peled | Innovations, Product & Tech Portfolio</title>
        <meta name="description" content="Personal innovation hub, applications, enterprise AI, and photography portfolio by Yarnin Peled" />
      </head>
      <body className="bg-slate-950 text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white transition-colors duration-300">
        {/* Navigation Header */}
        <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Brand Logo - Yarnin Peled */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition-transform">
                <span className="font-extrabold text-white text-sm font-mono tracking-tighter">YP</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl leading-none tracking-tight text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-indigo-100 dark:to-indigo-300">
                  Yarnin Peled
                </span>
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400/80 font-mono tracking-wider">ponyapp.net</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center gap-2 md:gap-4">
              <nav className="flex items-center gap-1 md:gap-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                <Link href="/" className="px-3 py-1.5 rounded-lg hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900 transition-all">
                  Home
                </Link>
                <Link href="/apps" className="px-3 py-1.5 rounded-lg hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900 transition-all flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                  <span>Apps</span>
                </Link>
                <Link href="/articles" className="px-3 py-1.5 rounded-lg hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900 transition-all flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                  <span>Articles</span>
                </Link>
                <Link href="/photography" className="px-3 py-1.5 rounded-lg hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900 transition-all flex items-center gap-1.5">
                  <Camera className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
                  <span>Photography</span>
                </Link>
                <Link href="/about" className="px-3 py-1.5 rounded-lg hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-900 transition-all">
                  About
                </Link>
                <Link href="/contact" className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-md shadow-indigo-600/20">
                  Contact
                </Link>
              </nav>

              {/* Dark / Light Mode Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-indigo-500/50 transition-all ml-2"
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
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
        <footer className="border-t border-slate-800/80 bg-slate-950 py-8 px-6 text-slate-400 text-sm">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="font-extrabold text-slate-900 dark:text-white">Yarnin Peled Innovation Hub</span>
              <span>&copy; {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-6 text-xs text-slate-400">
              <Link href="/apps" className="hover:text-indigo-400 transition-colors">Apps</Link>
              <Link href="/articles" className="hover:text-indigo-400 transition-colors">Articles</Link>
              <Link href="/photography" className="hover:text-indigo-400 transition-colors">Photography</Link>
              <Link href="/about" className="hover:text-indigo-400 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link>
              <a href="https://yarninpeled.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
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
