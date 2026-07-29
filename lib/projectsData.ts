export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Ecosystem App' | 'Personal Innovation' | 'Professional Work';
  description: string;
  longDescription: string;
  tags: string[];
  launchUrl?: string;
  isLive?: boolean;
  statusBadge?: string;
  iconName: string;
  highlights: string[];
  techStack: string[];
  embeddedHtmlComponent?: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'brain-room',
    title: 'brain-room',
    subtitle: 'Real-Time AI Collaborative Brainstorming Platform',
    category: 'Ecosystem App',
    description: 'Infinite canvas sticky notes with live Firebase sync and Gemini 2.5 Flash AI co-creator.',
    longDescription: 'brain-room is an AI-native brainstorming platform designed for frictionless team collaboration. Features include live sticky note canvas synchronization, Google Auth login, prompt pills, formatted Markdown AI responses, and instant room share links.',
    tags: ['Next.js 14', 'Gemini 2.5 Flash', 'Firebase Auth', 'Cloud Firestore', 'Tailwind CSS'],
    launchUrl: 'https://brain-room.ponyapp.net',
    isLive: true,
    statusBadge: 'LIVE APP',
    iconName: 'BrainCircuit',
    highlights: [
      'Powered by Gemini 2.5 Flash with formatted Markdown response streaming',
      'Real-time multi-user sticky note board with Google Sign-In',
      'Smooth auto-scrolling AI co-creator assistant panel',
      '1-click room link sharing and customizable color note cards',
    ],
    techStack: ['Next.js 14 App Router', '@google/genai SDK', 'Firebase Auth & Firestore', 'Tailwind CSS'],
  },
  {
    id: 'doc-viewer',
    title: 'Interactive PDF & Document Engine',
    subtitle: 'Enhanced Web Document Reader & Annotation Experience',
    category: 'Personal Innovation',
    description: 'An interactive web-based PDF and document reading environment with search, annotations, and quick navigation.',
    longDescription: 'An advanced web document viewer engineered for rapid reading, structured outline navigation, and real-time document analysis. Includes custom HTML integration for interactive document presentation.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PDF.js', 'Canvas API'],
    embeddedHtmlComponent: true,
    isLive: false,
    statusBadge: 'INTERACTIVE EMBED',
    iconName: 'FileText',
    highlights: [
      'Fluid document navigation with responsive zoom and page panning',
      'Full-text search and smart outline extraction',
      'Custom HTML container integration for rich document previews',
    ],
    techStack: ['JavaScript ES6+', 'HTML5 Canvas', 'CSS Grid', 'Document Object Model'],
  },
  {
    id: 'stok-app',
    title: 'StokApp',
    subtitle: 'Real-Time Stock & Inventory Intelligence',
    category: 'Ecosystem App',
    description: 'Smart inventory tracking and automated stock reordering workflow system.',
    longDescription: 'StokApp is a modern inventory management suite designed to streamline stock tracking, supplier management, and automated low-stock notifications for agile operations.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
    launchUrl: 'https://stok.ponyapp.net',
    isLive: false,
    statusBadge: 'COMING SOON',
    iconName: 'Package',
    highlights: [
      'Real-time SKU stock level monitoring',
      'Automated reorder triggers and supplier integration',
      'Interactive visual inventory reports',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
  },
  {
    id: 'mscheduler',
    title: 'MScheduler',
    subtitle: 'Intelligent Automated Dispatch & Shift Scheduler',
    category: 'Ecosystem App',
    description: 'AI-assisted scheduling engine for team shifts, resources, and calendar optimization.',
    longDescription: 'MScheduler solves complex shift allocation and resource management using intelligent constraint satisfaction and automated calendar synchronization.',
    tags: ['React', 'Node.js', 'Calendar API', 'Tailwind CSS'],
    launchUrl: 'https://scheduler.ponyapp.net',
    isLive: false,
    statusBadge: 'COMING SOON',
    iconName: 'Calendar',
    highlights: [
      'Drag-and-drop shift calendar builder',
      'Conflict-free AI schedule generation',
      'Instant SMS/Email notifications for team shifts',
    ],
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'REST API'],
  },
  {
    id: 'enterprise-analytics',
    title: 'Real-Time Data Streaming Dashboard',
    subtitle: 'High-Throughput Analytics & Telemetry Processing',
    category: 'Professional Work',
    description: 'Redesigned high-performance telemetry dashboard for enterprise operations.',
    longDescription: 'A scalable real-time analytics monitoring engine designed to visualize high-volume data streams, performance indicators, and system health metrics with zero latency spikes.',
    tags: ['TypeScript', 'WebSocket', 'React', 'D3.js / Charts'],
    isLive: false,
    statusBadge: 'PROFESSIONAL CASE STUDY',
    iconName: 'BarChart3',
    highlights: [
      'Handles thousands of live data metrics per second',
      'Custom WebSocket streaming engine with fallback polling',
      'Minimalist dark mode UI optimized for 24/7 monitoring centers',
    ],
    techStack: ['React', 'TypeScript', 'WebSocket Sync', 'Tailwind CSS'],
  },
  {
    id: 'cloud-workflow',
    title: 'Automated Cloud Orchestrator',
    subtitle: 'Distributed Task Queue & Workflow Automation',
    category: 'Professional Work',
    description: 'Workflow execution engine for automating multi-step cloud tasks.',
    longDescription: 'An enterprise-grade workflow orchestration interface allowing engineering teams to design, trigger, and monitor complex multi-step automated jobs across distributed cloud infrastructure.',
    tags: ['Node.js', 'Docker', 'REST API', 'Tailwind CSS'],
    isLive: false,
    statusBadge: 'PROFESSIONAL CASE STUDY',
    iconName: 'Workflow',
    highlights: [
      'Visual DAG workflow graph designer',
      'Real-time job execution step logs and error tracing',
      'Role-based access control and audit logging',
    ],
    techStack: ['Node.js', 'TypeScript', 'Express', 'React'],
  },
];
