'use client';

import React from 'react';
import Link from 'next/link';
import {
  UserCheck,
  ChevronLeft,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  Mail,
  Linkedin,
  Phone,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Building2,
  FileCode2,
} from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Executive Profile Header */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-6 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Senior Technology Projects & Operations Leader</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                Yarnin Peled
              </h1>
              <p className="text-base text-indigo-300 font-semibold">
                Head of IT & Technology Projects | International MBA Candidate
              </p>
              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                Senior Technology & Operations Leader with a proven track record of bridging the gap between strategic business vision and complex technical execution. Expert in driving digital transformation, multi-million budget management (10M+ ILS), and AI agent deployment as a high-ROI alternative to legacy software procurement.
              </p>
            </div>

            {/* Quick Contact & Action Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3 w-full md:w-72 flex-shrink-0">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Direct Contact</span>
              <a
                href="tel:0547918818"
                className="flex items-center gap-2.5 text-xs font-bold text-white hover:text-emerald-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>054-7918818</span>
              </a>
              <a
                href="mailto:yarninp@gmail.com"
                className="flex items-center gap-2.5 text-xs font-bold text-white hover:text-indigo-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>yarninp@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yarnin-peled"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs font-bold text-white hover:text-blue-400 transition-colors pt-1 border-t border-slate-800"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Key Impact Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80 text-center">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-2xl font-extrabold text-indigo-400">10M+ ILS</span>
              <span className="text-[11px] text-slate-400 font-medium block mt-0.5">Budget Managed</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-2xl font-extrabold text-emerald-400">20-25%</span>
              <span className="text-[11px] text-slate-400 font-medium block mt-0.5">OPEX Energy Reduction</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-2xl font-extrabold text-purple-400">10-15%</span>
              <span className="text-[11px] text-slate-400 font-medium block mt-0.5">Friction Reduction</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-2xl font-extrabold text-blue-400">IMBA</span>
              <span className="text-[11px] text-slate-400 font-medium block mt-0.5">Bar-Ilan University</span>
            </div>
          </div>
        </div>

        {/* Professional Experience Timeline */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Professional Leadership Experience</h2>
          </div>

          <div className="space-y-6">
            {/* Role 1: National Sport Center Tel Aviv */}
            <div className="glass-card p-8 rounded-3xl border border-white/10 space-y-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">National Sport Center Tel Aviv</h3>
                  <p className="text-xs text-indigo-400 font-semibold">Israel's largest multi-sport complex serving high-performance athletics</p>
                </div>
                <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 self-start md:self-auto">
                  2019 – Present
                </span>
              </div>

              {/* Position A */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white text-indigo-300">Head of IT & Technology Projects</h4>
                  <span className="text-xs text-slate-400 font-medium">2024 – Present</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Manage multi-year technological roadmaps & complex infrastructure upgrades exceeding 5M ILS.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Spearhead energy-efficiency IoT & command-and-control integration, achieving a 20%–25% reduction in annual operational costs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Optimize operations with Python/SQL automated workflows for enterprise scalability.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>Direct end-to-end custom CRM platform implementation, reducing operational friction by 10%–15%.</span>
                  </li>
                </ul>
              </div>

              {/* Position B */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white text-slate-200">Operations & Technology Project Manager</h4>
                  <span className="text-xs text-slate-400 font-medium">2019 – 2024</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>Directed end-to-end technological setup of the Olympic Velodrome, transforming complex infrastructure into a world-class facility.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>Managed deployment and localization of specialized international sporting technologies aligned with global regulatory standards (UCI).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 flex-shrink-0 mt-0.5" />
                    <span>Executed complex international RFP processes and negotiated contracts with global tech partners.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Role 2: PONY Cycling & Ofnoit */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">PONY Cycling</h3>
                    <p className="text-xs text-slate-400">Co-Founder & Operations Manager</p>
                  </div>
                  <span className="text-xs text-slate-400">2018–2019</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Technical cycling apparel venture. Built an international supply chain across Asia and Italy, achieving a <span className="text-white font-semibold">25% profit margin</span> through supply chain optimization.
                </p>
              </div>

              <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">Ofnoit</h3>
                    <p className="text-xs text-slate-400">Operations & Project Manager</p>
                  </div>
                  <span className="text-xs text-slate-400">2015–2019</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Leading motorcycle & riding gear importer. Managed global vendor procurement, delivering a consistent <span className="text-white font-semibold">5%–10% annual increase</span> in category profitability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Academic Excellence */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Education & Qualifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-indigo-500/30 bg-slate-900/50 space-y-2">
              <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider block">Graduate Studies</span>
              <h3 className="text-base font-bold text-white">International MBA (IMBA)</h3>
              <p className="text-xs text-slate-300">Bar-Ilan University</p>
              <span className="text-[11px] text-indigo-300 font-medium block pt-2 border-t border-slate-800">2025 – Present</span>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Undergraduate Degree</span>
              <h3 className="text-base font-bold text-white">B.A. in IT Systems Management</h3>
              <p className="text-xs text-slate-300">Hadassah Academic College</p>
              <span className="text-[11px] text-slate-400 font-medium block pt-2 border-t border-slate-800">Graduated 2025</span>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Specialized Program</span>
              <h3 className="text-base font-bold text-white">Mobile Application Development</h3>
              <p className="text-xs text-slate-300">John Bryce College</p>
              <span className="text-[11px] text-slate-400 font-medium block pt-2 border-t border-slate-800">Completed 2014</span>
            </div>
          </div>
        </section>

        {/* Technical Core Competencies Grid */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Cpu className="w-6 h-6 text-indigo-400" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Core Competencies & Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wider">AI & Enterprise Architecture</h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'AI Agent Architecture',
                  'Agentic Workflow Design',
                  'Enterprise AI ROI',
                  'Human-Centric AI Leadership',
                  'Organisational AI Adoption',
                  'Python & SQL Automation',
                ].map((item, idx) => (
                  <span key={idx} className="text-xs bg-slate-900 border border-slate-800 text-slate-200 px-3 py-1 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
              <h3 className="text-sm font-bold text-indigo-300 uppercase tracking-wider">Systems, IoT & Data Analytics</h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'Priority ERP / SAP B1 / NetSuite',
                  'Cloud (AWS / Azure)',
                  'Command & Control IoT',
                  'ISO 27001 Cyber Security',
                  'Power BI & Data Visualization',
                  'RFP & Contract Negotiation',
                ].map((item, idx) => (
                  <span key={idx} className="text-xs bg-slate-900 border border-slate-800 text-slate-200 px-3 py-1 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
