export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  fullOverview: string;
  highlights: string[];
  techStack: string[];
  isLive: boolean;
  statusBadge: string;
  launchUrl?: string;
  iconName: string;
  tags: string[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'brain-room',
    title: 'brain-room',
    subtitle: 'Real-Time AI Collaborative Brainstorming Platform',
    category: 'Ecosystem App',
    description: 'Infinite canvas sticky notes with live Firebase sync and Gemini 2.5 Flash AI co-creator. Test-drive live right now in the hub playground.',
    fullOverview: 'brain-room is an enterprise collaborative ideation workspace where teams and individuals brainstorm visually on an infinite canvas, powered by Gemini 2.5 Flash AI agents to summarize, connect ideas, and generate strategic insights in real-time.',
    highlights: [
      'Infinite zoomable canvas with real-time Firebase Firestore multi-user synchronization',
      'Integrated Gemini 2.5 Flash AI co-creator for instant summary & ideation',
      'Google Firebase Sign-In authentication with user profile header',
      'Markdown text rendering, smooth auto-scrolling, and room link sharing',
      'Deploys live as a standalone sub-app at brain-room.ponyapp.net',
    ],
    techStack: ['Next.js 14', 'Gemini 2.5 Flash API', 'Firebase Auth', 'Cloud Firestore', 'Tailwind CSS', 'TypeScript'],
    isLive: true,
    statusBadge: 'LIVE APP',
    launchUrl: 'https://brain-room.ponyapp.net',
    iconName: 'BrainCircuit',
    tags: ['Next.js 14', 'Gemini 2.5 Flash', 'Firebase Auth', 'Firestore'],
  },
  {
    id: 'pdf-editor',
    title: 'PDF Editor',
    subtitle: 'Browser-Based PDF Editing, Form Filling & Contract Data Extraction',
    category: 'Ecosystem App',
    description: 'Full-featured browser PDF editor and AI document reader deployed live at pdf-editor.ponyapp.net.',
    fullOverview: 'Deploys an autonomous PDF editor and document intelligence workspace where users edit PDFs, fill forms, extract structured contract data into enterprise databases, and automate document workflows.',
    highlights: [
      'Browser-based PDF form filling, page manipulation, and document annotation',
      'Autonomous extraction of contract terms, dates, and tenancy records into SQL',
      'Google Firebase Authentication with Gmail integration & secure document storage',
      'Deploys live as a standalone sub-app at pdf-editor.ponyapp.net',
    ],
    techStack: ['React', 'Firebase Hosting', 'Firebase Auth', 'PDF.js', 'TypeScript', 'Tailwind CSS'],
    isLive: true,
    statusBadge: 'LIVE APP',
    launchUrl: 'https://pdf-editor.ponyapp.net',
    iconName: 'FileText',
    tags: ['PDF Editor', 'Firebase Hosting', 'Firebase Auth', 'Contract Extraction'],
  },
  {
    id: 'stok-app',
    title: 'StokApp',
    subtitle: 'Multi-Market Portfolio Companion & Claude AI Assistant',
    category: 'Ecosystem App',
    description: 'A personal, multi-market portfolio companion that watches tickers, reasons with Claude, and hands you a plain-language read — never placing a trade itself.',
    fullOverview: 'StokApp is a personal research and record-keeping tool for self-directed investors across macOS, iOS, and iPadOS. It runs deterministic mechanical checks first, then leverages Anthropic Claude AI to evaluate portfolio rules, write trade rationales, and perform deep dives with live web search.',
    highlights: [
      'Universal SwiftUI application across Mac, iPad, and iPhone with CloudKit sync',
      'Deterministic mechanical checks run first (0 AI cost) before Claude AI ranking',
      'Anthropic Messages API integration with web_search tool for live market research',
      'Append-only ledger (My Actions) providing a 100% private single source of truth',
      'Includes complete 2-Part documentation suite: User Guide & Technical Overview',
    ],
    techStack: ['SwiftUI', 'SwiftData', 'CloudKit', 'Anthropic Messages API', 'iCloud Keychain', 'TypeScript'],
    isLive: true,
    statusBadge: 'APP SPEC',
    launchUrl: '/apps/stok-app',
    iconName: 'Package',
    tags: ['SwiftUI', 'CloudKit', 'Claude AI', 'Portfolio Research', 'Multi-Market'],
  },
  {
    id: 'mscheduler',
    title: 'MScheduler',
    subtitle: 'Intelligent Automated Dispatch & Shift Scheduler',
    category: 'Ecosystem App',
    description: 'AI-assisted scheduling engine for team shifts, sports complex facility resources, and calendar optimization.',
    fullOverview: 'Built to streamline facility operations at large-scale multi-sport complexes like the National Sport Center Tel Aviv, MScheduler automates shift scheduling, resource allocation, and calendar conflict resolution.',
    highlights: [
      'Automated shift generation matching staff skills & availability',
      'Facility resource booking and conflict resolution engine',
      'Calendar API integration with SMS/Email notifications',
    ],
    techStack: ['React', 'Node.js', 'Calendar API', 'Tailwind CSS'],
    isLive: false,
    statusBadge: 'COMING SOON',
    launchUrl: 'https://scheduler.ponyapp.net',
    iconName: 'Calendar',
    tags: ['React', 'Node.js', 'Calendar API', 'Tailwind CSS'],
  },
  {
    id: 'tel-aviv-velodrome',
    title: 'Olympic Velodrome Infrastructure & Tech Setup',
    subtitle: 'National Sport Center Tel Aviv Project Engineering',
    category: 'National Infrastructure Case Study',
    description: 'End-to-end technological setup of Israel\'s Olympic Velodrome facility and specialized international UCI sporting technology integration.',
    fullOverview: 'Yarnin Peled directed the end-to-end technological and operational setup of the Olympic Velodrome, transforming a complex infrastructure project into a world-class facility aligned 100% with global UCI sporting regulations.',
    highlights: [
      'End-to-end infrastructure setup of Israel\'s national Olympic Velodrome facility',
      'Deployment & localization of UCI-compliant sporting timing & scoring tech',
      'International RFP processes and contract negotiations with global tech partners',
    ],
    techStack: ['UCI Tech Standards', 'Command & Control', 'IoT Systems', 'RFP Execution'],
    isLive: true,
    statusBadge: 'NATIONAL PROJECT',
    iconName: 'BarChart3',
    tags: ['Infrastructure', 'UCI Standards', 'Command & Control', 'RFP Negotiation'],
  },
  {
    id: 'solar-iot-energy',
    title: 'Command & Control IoT Energy Efficiency Initiative',
    subtitle: '20-25% Annual OPEX Reduction via Solar PV & Smart Lighting',
    category: 'Green Tech Case Study',
    description: 'Comprehensive energy-efficiency transformation integrating IoT command-and-control systems, LED lighting, and PV solar power.',
    fullOverview: 'Led by Yarnin Peled at the National Sport Center Tel Aviv, this comprehensive energy initiative integrated IoT command-and-control systems, automated LED lighting arrays, and solar PV installations, delivering a 20%-25% reduction in annual operational costs.',
    highlights: [
      '20%-25% reduction in annual facility operational expenditure',
      'Integration of PV solar power systems and LED lighting arrays',
      'Command-and-control IoT dashboard for real-time energy monitoring',
    ],
    techStack: ['IoT Command & Control', 'Solar PV Systems', 'Automated Workflows', 'Power BI'],
    isLive: true,
    statusBadge: '25% OPEX REDUCTION',
    iconName: 'Workflow',
    tags: ['IoT', 'Solar PV', 'OPEX Savings', 'Automation'],
  },
];
