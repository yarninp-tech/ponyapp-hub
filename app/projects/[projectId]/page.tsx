'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronLeft,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  BrainCircuit,
  Layers,
  FileText,
  Package,
  Calendar,
  BarChart3,
  Workflow,
  Upload,
} from 'lucide-react';
import { PROJECTS_DATA } from '@/lib/projectsData';

const ICON_MAP: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-8 h-8 text-indigo-400" />,
  FileText: <FileText className="w-8 h-8 text-emerald-400" />,
  Package: <Package className="w-8 h-8 text-amber-400" />,
  Calendar: <Calendar className="w-8 h-8 text-blue-400" />,
  BarChart3: <BarChart3 className="w-8 h-8 text-purple-400" />,
  Workflow: <Workflow className="w-8 h-8 text-cyan-400" />,
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params?.projectId as string;

  const project = PROJECTS_DATA.find((p) => p.id === projectId) || PROJECTS_DATA[0];

  // Custom HTML file content state for the embedded document viewer
  const [customHtmlContent, setCustomHtmlContent] = useState<string | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomHtmlContent(event.target?.result as string);
      };
      reader.readAsText(file);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Back Link */}
        <button
          onClick={() => router.push('/#projects')}
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Hub Projects</span>
        </button>

        {/* Header Banner */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                {ICON_MAP[project.iconName] || <Layers className="w-8 h-8 text-indigo-400" />}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800">
                  {project.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
                  {project.title}
                </h1>
                <p className="text-sm text-slate-400 mt-1 font-medium">{project.subtitle}</p>
              </div>
            </div>

            {project.launchUrl && (
              <a
                href={project.launchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-600/25"
              >
                <span>Launch Live App</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="border-t border-slate-800/80 pt-6">
            <p className="text-base text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>
        </div>

        {/* Technical Highlights & Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Highlights */}
          <div className="md:col-span-2 glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              Key Innovations & Features
            </h3>
            <ul className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="text-lg font-bold text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-slate-900 border border-slate-800 text-indigo-300 px-3 py-1 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Embedded Interactive Viewer for Document/HTML Projects */}
        {project.embeddedHtmlComponent && (
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Interactive Document Container</h3>
                <p className="text-xs text-slate-400">Load and preview custom HTML document/PDF viewer content directly below.</p>
              </div>

              <label className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-colors">
                <Upload className="w-4 h-4 text-indigo-400" />
                <span>Upload HTML File</span>
                <input type="file" accept=".html,.htm" onChange={handleFileUpload} className="hidden" />
              </label>
            </div>

            <div className="min-h-[400px] w-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden p-4">
              {customHtmlContent ? (
                <iframe
                  srcDoc={customHtmlContent}
                  className="w-full h-[500px] border-0 rounded-xl bg-white"
                  title="Document Preview"
                />
              ) : (
                <div className="h-[350px] flex flex-col items-center justify-center text-center text-slate-500 space-y-3">
                  <FileText className="w-12 h-12 text-slate-600" />
                  <div>
                    <p className="text-sm font-medium text-slate-300">No document file loaded yet.</p>
                    <p className="text-xs text-slate-500 mt-1">Upload an HTML file above to embed your interactive document presentation!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
