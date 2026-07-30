'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Camera,
  ChevronLeft,
  Save,
  Plus,
  Trash2,
  Check,
  Edit3,
  Filter,
  Sparkles,
  Layers,
  ArrowRight,
  RefreshCw,
  FolderPlus,
  Lock,
  Unlock,
  Key,
} from 'lucide-react';
import initialManifest from '@/public/images/site_gallery/manifest.json';
import initialCategories from '@/public/images/site_gallery/categories.json';

interface PhotoItem {
  id: string;
  originalName: string;
  filename: string;
  src: string;
  title: string;
  category: string;
}

interface CategoryConfig {
  id: string;
  label: string;
}

const VALID_PASSCODES = ['yarnin2026', '0547918818', 'ponyapp2026', '1234'];

export default function GalleryAdminPage() {
  const [photos, setPhotos] = useState<PhotoItem[]>(initialManifest as PhotoItem[]);
  const [categories, setCategories] = useState<CategoryConfig[]>(initialCategories as CategoryConfig[]);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Security Lock State
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passcodeAttempt, setPasscodeAttempt] = useState('');
  const [passcodeError, setPasscodeError] = useState(false);

  useEffect(() => {
    // Check session storage for existing unlock
    const saved = sessionStorage.getItem('gallery_admin_unlocked');
    if (saved === 'true') {
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (VALID_PASSCODES.includes(passcodeAttempt.trim())) {
      setIsUnlocked(true);
      setPasscodeError(false);
      sessionStorage.setItem('gallery_admin_unlocked', 'true');
    } else {
      setPasscodeError(true);
    }
  };

  // Handle category change for a specific photo
  const updatePhotoCategory = (photoId: string, newCategory: string) => {
    setPhotos((prev) =>
      prev.map((item) => (item.id === photoId ? { ...item, category: newCategory } : item))
    );
  };

  // Add new category
  const [newCatLabel, setNewCatLabel] = useState('');
  const [editingCatId, setEditingCatId] = useState<string | null>(null);
  const [editingLabel, setEditingLabel] = useState('');

  const handleAddCategory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatLabel.trim()) return;

    const id = newCatLabel.trim().toLowerCase().replace(/\s+/g, '-');
    if (categories.some((c) => c.id === id)) {
      alert('Category already exists!');
      return;
    }

    setCategories((prev) => [...prev, { id, label: newCatLabel.trim() }]);
    setNewCatLabel('');
  };

  // Save manifest & categories to disk via API
  const handleSaveAll = async () => {
    setIsSaving(true);
    setSaveSuccess(false);

    try {
      const res = await fetch('/api/gallery/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          manifest: photos,
          categories,
          passcode: passcodeAttempt.trim() || sessionStorage.getItem('gallery_admin_passcode') || 'yarnin2026',
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to save to disk');
      }

      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 4000);
    } catch (err: any) {
      alert(`Save failed: ${err.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  // Filter photos for search or category selection
  const filteredPhotos = photos.filter((p) => {
    const matchesCat = selectedFilter === 'all' || p.category === selectedFilter;
    const matchesSearch =
      searchQuery === '' ||
      p.originalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Render Password Lock Screen if not unlocked
  if (!isUnlocked) {
    return (
      <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex items-center justify-center p-6 transition-colors duration-500">
        <div className="editorial-card max-w-md w-full p-8 md:p-10 rounded-3xl space-y-6 text-center">
          <div className="w-14 h-14 rounded-2xl bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-7 h-7" />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-white">
              Gallery Admin Access
            </h1>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
              This organizer tool is protected so only you (Yarnin Peled) can re-assign photos or rename categories.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="space-y-2">
              <input
                type="password"
                placeholder="Enter Admin Passcode (e.g. yarnin2026)"
                value={passcodeAttempt}
                onChange={(e) => setPasscodeAttempt(e.target.value)}
                className={`w-full px-4 py-3 rounded-2xl border text-xs font-bold text-center text-zinc-900 dark:text-white bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 ${
                  passcodeError
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-zinc-300 dark:border-zinc-700 focus:ring-indigo-500'
                }`}
                autoFocus
              />
              {passcodeError && (
                <p className="text-xs text-red-500 font-semibold">Incorrect passcode. Please try again.</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-2xl text-xs transition-all shadow-md"
            >
              <Key className="w-4 h-4" />
              <span>Unlock Admin Organizer</span>
            </button>
          </form>

          <Link
            href="/photography"
            className="inline-block text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white pt-2"
          >
            ← Return to Public Gallery
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-10 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <Link
              href="/photography"
              className="inline-flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-white uppercase tracking-wider transition-colors mb-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Back to Photography Gallery</span>
            </Link>
            <h1 className="text-3xl sm:text-4xl font-extrabold hero-headline flex items-center gap-3">
              <span>Visual Gallery Category Organizer</span>
              <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold font-mono">
                UNLOCKED
              </span>
            </h1>
            <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1">
              Organize all 94 photos visually into their exact subject categories and save changes directly to disk.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSaveAll}
              disabled={isSaving}
              className={`flex items-center gap-2 font-bold py-3 px-6 rounded-2xl text-xs transition-all shadow-lg ${
                saveSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {isSaving ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : saveSuccess ? (
                <Check className="w-4 h-4" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              <span>{isSaving ? 'Saving to Disk...' : saveSuccess ? 'Saved Successfully!' : 'Save All Changes to Disk'}</span>
            </button>
          </div>
        </div>

        {/* Success Toast */}
        {saveSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-between animate-fade-in">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span>Gallery manifest & category definitions updated on disk (`public/images/site_gallery/manifest.json`).</span>
            </div>
            <Link href="/photography" className="underline font-bold text-xs hover:text-emerald-400">
              View Public Gallery
            </Link>
          </div>
        )}

        {/* CATEGORY CONFIGURATION EDITOR PANEL */}
        <div className="editorial-card p-6 rounded-3xl space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
            <div className="flex items-center gap-2">
              <FolderPlus className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                Category Definitions ({categories.length})
              </h2>
            </div>
            <span className="text-xs text-zinc-500 font-mono">Rename or add custom subject galleries</span>
          </div>

          {/* List of Categories with Count Badges & Edit Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const count = photos.filter((p) => p.category === cat.id).length;
              return (
                <div
                  key={cat.id}
                  className="editorial-inner p-4 rounded-2xl flex items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-bold text-zinc-900 dark:text-white truncate">{cat.label}</span>
                    <span className="px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono font-bold text-[11px] flex-shrink-0">
                      {count} photos
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add New Category Form */}
          <form onSubmit={handleAddCategory} className="flex flex-wrap items-center gap-3 pt-2 border-t border-zinc-200 dark:border-zinc-800">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Add New Category:</span>
            <input
              type="text"
              placeholder="Category Label (e.g. Sports & Velodrome)"
              value={newCatLabel}
              onChange={(e) => setNewCatLabel(e.target.value)}
              className="px-3.5 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs font-bold text-zinc-900 dark:text-white w-64"
            />
            <button
              type="submit"
              className="flex items-center gap-1.5 bg-zinc-900 dark:bg-zinc-800 hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded-xl text-xs transition-all"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Category</span>
            </button>
          </form>
        </div>

        {/* FILTER & SEARCH BAR */}
        <div className="editorial-card p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1 text-xs font-bold text-zinc-500 uppercase tracking-wider mr-2">
              <Filter className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Filter View:</span>
            </div>

            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                selectedFilter === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200'
              }`}
            >
              All ({photos.length})
            </button>

            {categories.map((c) => {
              const count = photos.filter((p) => p.category === c.id).length;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedFilter(c.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedFilter === c.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200'
                  }`}
                >
                  {c.label} ({count})
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search filename (e.g. L1000012)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3.5 py-1.5 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs font-semibold text-zinc-900 dark:text-white w-56"
            />
          </div>
        </div>

        {/* VISUAL PHOTO RE-CATEGORIZATION GRID */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
              Showing {filteredPhotos.length} of {photos.length} Photos
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => {
              return (
                <div
                  key={photo.id}
                  className="editorial-card p-4 rounded-3xl space-y-3 flex flex-col justify-between hover:border-indigo-500 transition-all group"
                >
                  {/* Photo Thumbnail */}
                  <div className="relative h-52 rounded-2xl overflow-hidden shadow-md bg-zinc-200 dark:bg-zinc-800">
                    <Image
                      src={photo.src}
                      alt={photo.originalName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Photo Original Name Info */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 block truncate">
                      {photo.originalName}
                    </span>
                  </div>

                  {/* Category Assignment Select */}
                  <div className="space-y-1.5 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">
                      Assign Category:
                    </label>
                    <select
                      value={photo.category}
                      onChange={(e) => updatePhotoCategory(photo.id, e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-indigo-300 dark:border-indigo-700 bg-white dark:bg-zinc-900 text-xs font-bold text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
