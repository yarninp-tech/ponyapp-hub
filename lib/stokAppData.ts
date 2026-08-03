export interface ScreenGuideItem {
  id: string;
  sectionSymbol: string;
  title: string;
  subtitle: string;
  description: string;
  keyFeatures: string[];
  badges?: string[];
}

export interface TechnicalPipeline {
  id: string;
  title: string;
  summary: string;
  steps: { stepNumber: string; title: string; detail: string }[];
  note?: string;
}

export interface SyncChannel {
  dataKind: string;
  channel: string;
  explanation: string;
}

export interface ExternalIntegration {
  system: string;
  usedFor: string;
  notes: string;
}

export const STOKAPP_DATA = {
  header: {
    title: 'StokApp',
    subtitle: 'A personal, multi-market portfolio companion that watches tickers, reasons with Claude, and hands you a plain-language read — never a trade it places itself.',
    version: 'DOCUMENTATION — V1',
  },

  heroMetrics: [
    { label: 'Platforms', value: '3', detail: 'Mac, iPad, iPhone (Universal SwiftUI)' },
    { label: 'Markets in Catalog', value: '9', detail: 'US Nasdaq/NYSE, TASE & Global exchanges' },
    { label: 'Trades Placed Auto', value: '0', detail: 'Self-directed research — zero auto execution' },
    { label: 'iCloud Account', value: '1', detail: 'Synced everywhere via your own iCloud' },
  ],

  howItWorksSteps: [
    {
      number: '01',
      title: 'You log it',
      subtitle: 'Bought, Sold, Watching, or Skipped',
      description: 'A short entry in My Actions is the only thing StokApp actually knows about your holdings. No brokerage connection required.',
    },
    {
      number: '02',
      title: 'It fetches prices',
      subtitle: 'Live & Historical Quotes',
      description: 'Fetches quotes for your positions, your watchlist, and each enabled market\'s leading stocks using your preferred provider.',
    },
    {
      number: '03',
      title: 'Rules run first',
      subtitle: 'Deterministic Mechanical Checks',
      description: 'Mechanical, zero-AI checks run constantly — trend, dividend yield, distance from 52-week low. Cheap, fast, and 100% deterministic.',
    },
    {
      number: '04',
      title: 'Claude reads the rest',
      subtitle: 'AI Synthesis & Rationale',
      description: 'Ranks candidates, writes plain-language rationale, and on request — conducts deep-dive research with live web search.',
    },
  ],

  gettingStarted: [
    {
      step: '1',
      title: 'Install StokApp & Sign into iCloud',
      description: 'Install StokApp on your Mac, iPad, or iPhone. Sign into iCloud on the device so your actions, rules, and research follow you across all devices.',
    },
    {
      step: '2',
      title: 'Add an Anthropic API Key',
      description: 'Navigate to Settings → Claude API. Required for AI features: daily scan rationale, Chat, Deep Dive, and Batch analysis. Keys are stored securely in Keychain.',
    },
    {
      step: '3',
      title: 'Connect a Market Data Source',
      description: 'Navigate to Settings → Connections. Pick a supported provider (EODHD, Twelve Data, Finnhub, Alpha Vantage, TASE Data Hub) and enter your credential.',
    },
    {
      step: '4',
      title: 'Log What You Already Hold',
      description: 'Go to My Actions → add a Bought entry for each existing position with shares and price paid so Portfolio computes your real cost basis from day one.',
    },
    {
      step: '5',
      title: 'Optional: Brief Notifications & Webhook',
      description: 'Configure Settings → Notifications & Email for scheduled morning and close briefs via Gmail SMTP, in-app alerts, or custom webhooks.',
    },
  ],

  screenGuides: [
    {
      id: 'today',
      sectionSymbol: '§ Today',
      title: 'Today',
      subtitle: 'Your Daily Home Screen & Market Overview',
      description: 'Your home screen provides an index snapshot for every enabled market, your portfolio\'s day P&L across held positions, and a full list of every stock in the daily scan grouped by market.',
      keyFeatures: [
        'Stance Badges: Direct mechanical verdicts (BUY, SELL, HOLD, WATCH) matching your Watchlist.',
        'Period Selector: 1D, 1W, 1M, 3M, 1Y, All timeframe sparklines and percentage change.',
        'Universal Search: Filters by ticker or company name across every market section at once.',
        'Select Mode & Batch Analysis: Check off several stocks to run a full multi-lens research pass.',
      ],
      badges: ['BUY', 'SELL', 'HOLD', 'WATCH'],
    },
    {
      id: 'recommendations',
      sectionSymbol: '§ Recommendations',
      title: 'Recommendations',
      subtitle: 'Where Claude\'s Actual Judgment Lives',
      description: 'Running the scan here asks Claude to rank your curated stock list into Buy/Sell/Hold/Watch calls with a written rationale, evaluating portfolio rules such as target-weight rebalancing, 200-day trend filters, and custom user rules.',
      keyFeatures: [
        'Curated Ranking: Ranks your stock universe with plain-language explanations.',
        'Whole-Market Screener: Sweeps thousands of symbols per enabled market mechanically before sending top matches to Claude.',
        'Custom Rule Builder: Combine price, yield, moving average distance, and weight drift into custom rules with Claude AI draft assistant and backtesting.',
      ],
    },
    {
      id: 'chat',
      sectionSymbol: '§ Chat',
      title: 'Chat',
      subtitle: 'Portfolio-Aware Running Conversation Agent',
      description: 'A running conversation with an AI agent that already knows your portfolio, your latest scan, and whole-market screener results — so you can ask complex questions without re-explaining your setup.',
      keyFeatures: [
        'Context Awareness: Knows your exact positions, cost basis, and latest screener results.',
        'Direct Queries: Ask "which of my holdings are furthest from 52-week low?" or "does anything on Nasdaq meet my dividend rule?"',
        'Copyable History: Every response is copyable and saved in sync history.',
      ],
    },
    {
      id: 'portfolio',
      sectionSymbol: '§ Portfolio',
      title: 'Portfolio',
      subtitle: 'Real Cost Basis & Dividend Income Projections',
      description: 'Your actual holdings computed purely from what you\'ve logged in My Actions using average-cost accounting, always shown in USD regardless of trading currency.',
      keyFeatures: [
        'Hero Chart: Total portfolio value scrub chart over 1D/1W/1M/3M/1Y/All vs period start or total invested.',
        'Summary Strip: Invested total, unrealized return, today\'s P&L, position count, and time-weighted benchmark return.',
        'Holdings Detail: Shares, invested amount, current value, earnings line, sparkline, and Deep Dive triggers.',
        'Allocation & Dividends: Donut chart allocation by position and trailing 12-month / projected forward dividend income.',
      ],
    },
    {
      id: 'watchlist',
      sectionSymbol: '§ Watchlist',
      title: 'Watchlist',
      subtitle: 'Curated Tickers & Entry Screen Verdicts',
      description: 'Every ticker you\'ve tapped the eye icon on across the app. Shows live price, 52-week range band gauge, and clear verdicts (Ready vs Watching).',
      keyFeatures: [
        'Plain Verdicts: "Ready" when clearing entry rules, "Watching" otherwise.',
        '52-Week Range Gauge: Visual indicator of current price within 52-week range.',
        'Validation on Add: Tickers are validated against live market data before adding.',
      ],
    },
    {
      id: 'scorecard',
      sectionSymbol: '§ Scorecard',
      title: 'Scorecard',
      subtitle: 'Running Accuracy Audit on App Suggestions',
      description: 'Measures what actually happened to stock prices 30 or 90 days after StokApp generated a Buy, Sell, or Review call against market benchmarks.',
      keyFeatures: [
        'Honest Sample Sizes: Displays exact sample counts to avoid implied false confidence.',
        'Rule-by-Rule Audit: Breakdown by overall performance, action type, and specific rule.',
        '30-Day & 90-Day Toggles: Evaluate short-term and medium-term call accuracy.',
      ],
    },
    {
      id: 'history-actions',
      sectionSymbol: '§ History & My Actions',
      title: 'History & My Actions',
      subtitle: 'Append-Only Ledger & Single Source of Truth',
      description: 'Every past analysis run and brief is stored in History. My Actions is your personal append-only ledger for Bought, Sold, Watching, and Skipped transactions.',
      keyFeatures: [
        'Single Source of Truth: Portfolio and rules read exclusively from your logged actions.',
        'Privacy First: StokApp never sees your real brokerage account.',
        'Copyable History: Review and copy past brief overviews anytime.',
      ],
    },
    {
      id: 'deep-dive',
      sectionSymbol: '§ Deep Dive',
      title: 'Deep Dive',
      subtitle: 'On-Demand Multi-Lens Individual Stock Research',
      description: 'An on-demand analysis for one stock at a time across three distinct analytical lenses: Technical, Risk, and Research.',
      keyFeatures: [
        'Technical Lens: Trend, support/resistance, moving averages, and momentum from price history.',
        'Risk Lens: Volatility, plain 1–10 risk rating, and position-sizing rule of thumb.',
        'Research Lens (Live Web Search): Searches the live web for news, earnings, and analyst context before writing summary.',
        'Run All Lenses: Assembles all three into a continuous, copyable report.',
      ],
    },
    {
      id: 'batch-analysis',
      sectionSymbol: '§ Batch Analysis',
      title: 'Batch Analysis',
      subtitle: 'Multi-Stock Deep Dive & 1–3 Year Stance Synthesis',
      description: 'The most thorough analysis StokApp performs: runs all three lenses on up to 15 stocks simultaneously, capped with a 4th synthesis call deriving a long-term Buy/Hold/Watch/Sell stance.',
      keyFeatures: [
        'Upfront Cost Stated: Explicitly discloses total Claude API calls (4xN) before running.',
        'Resilient Execution: Runs stocks one by one with live progress and cancel button; single failure doesn\'t abort batch.',
        'Comprehensive Report: Summary table sorted Buy → Watch → Hold → Sell plus Markdown export.',
      ],
    },
    {
      id: 'settings-data',
      sectionSymbol: '§ Settings & iCloud Sync',
      title: 'Settings & Data Security',
      subtitle: 'CloudKit Sync, Keychain API Keys, & Market Data Options',
      description: 'Manage API keys, market data connections, custom rules, notification schedules, and appearance settings.',
      keyFeatures: [
        'iCloud CloudKit Sync: Actions, positions, rules, deep dives, and chat sync seamlessly across Mac, iPad, iPhone.',
        'iCloud Keychain: API keys and passwords sync through Safari-grade encrypted Keychain.',
        'Mac-Only Brief Scheduler: Scheduled briefs run on Mac without requiring background servers.',
      ],
    },
  ],

  disclaimer: 'Nothing in StokApp is financial advice from a licensed advisor. It never places a trade — you review every suggestion and act on it yourself, manually, in whatever brokerage you actually use. Past performance shown anywhere in the app (backtests, the Scorecard, benchmark comparisons) does not predict future results.',

  // PART 2: TECHNICAL SPECIFICATION
  technical: {
    stack: [
      { name: 'SwiftUI Codebase', detail: 'Single unified codebase for macOS 14+, iOS 17+, iPadOS 17+ with narrowly-scoped #if os() platform branches.' },
      { name: 'SwiftData + CloudKit', detail: 'All user data stored in SwiftData backed by CloudKit — one shared container per iCloud account.' },
      { name: 'Anthropic Messages API', detail: 'Powers scan ranking, Chat, Deep Dive lenses, and Batch synthesis. Uses web_search tool for Research lens.' },
      { name: 'Pluggable Provider Layer', detail: 'Decoupled market data interface supporting EODHD, Twelve Data, Finnhub, Alpha Vantage, and TASE Data Hub.' },
      { name: 'Zero Server Overhead', detail: 'No third-party UI framework or bundled backend server; client talks directly to APIs, Gmail SMTP, and Webhooks.' },
    ],

    architectureDescription: 'StokApp follows a clean reactive architecture centered around a single shared AppState environment object. AppState owns a set of thin SwiftData reader/writer Stores and thin API client Services. No SwiftUI view talks to CloudKit or Anthropic directly.',

    syncMatrix: [
      { dataKind: 'Logged actions, positions (derived), watchlist (derived)', channel: 'SwiftData / CloudKit', explanation: 'Synced automatically with last-write-wins conflict resolution across user devices.' },
      { dataKind: 'Portfolio rules, target weights, universe, deep dives, batch reports, chat, briefs', channel: 'SwiftData / CloudKit', explanation: 'Persisted in shared iCloud container for full read/write access everywhere.' },
      { dataKind: 'App settings — model choice, enabled markets, delivery toggles', channel: 'iCloud Key-Value Store', explanation: 'Lightweight settings sync across all signed-in iCloud devices.' },
      { dataKind: 'Anthropic API key, provider credentials, SMTP password, webhook URL', channel: 'iCloud Keychain', explanation: 'Encrypted using Safari-grade Keychain security, never stored in plain text.' },
      { dataKind: 'Whole-market symbol pool, screener sweep cache, price history cache', channel: 'Local Disk Only', explanation: 'Large, rebuildable caches stored locally per device and never synced over network.' },
    ] as SyncChannel[],

    externalIntegrations: [
      { system: 'Anthropic Messages API', usedFor: 'Scan ranking, Chat, Deep Dive, Batch synthesis', notes: 'User-supplied key; Research lens & Batch use web_search tool' },
      { system: 'Market Data Providers (EODHD, Twelve Data, Finnhub, Alpha Vantage, TASE)', usedFor: 'Quotes, historical price data, dividends', notes: 'One credential per provider; auto-detects EOD vs Live capability' },
      { system: 'Gmail SMTP', usedFor: 'Scheduled morning and close briefs', notes: 'App-specific password, direct SMTP, no third-party email server' },
      { system: 'User Webhook', usedFor: 'Optional brief delivery automation', notes: 'Off by default; routes briefs into user\'s personal webhooks' },
      { system: 'Sparkle Framework', usedFor: 'macOS app updates', notes: 'EdDSA-signed appcast pointing to GitHub Releases binaries' },
    ] as ExternalIntegration[],

    constraintsAndNonGoals: [
      { title: 'Single-User by Design', text: 'Sync is built exclusively for one person\'s own devices. No multi-user merge UI is required.' },
      { title: 'No Background Execution on iOS/iPadOS', text: 'Scheduled briefs are Mac-only. Phones and tablets run scans on-demand.' },
      { title: 'Never Executes a Trade', text: 'Intentionally contains zero brokerage integrations and zero order-placement code.' },
      { title: 'Provider-Dependent Data Quality', text: 'Coverage and field accuracy depend on the user\'s chosen market data provider.' },
    ],
  },
};
