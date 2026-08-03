export interface BookAShowWalkthroughStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface UserRoleItem {
  title: string;
  badge: string;
  description: string;
  capabilities: string[];
}

export interface DataModelGroup {
  groupName: string;
  models: { name: string; purpose: string }[];
}

export const BOOK_A_SHOW_DATA = {
  header: {
    title: 'Book a Show',
    subtitle: 'A single-venue date-booking, pricing engine, and contracting system managing the full path from availability lookup to signed contract & read-only partner API.',
    version: 'SYSTEM SPECIFICATION — V1',
  },

  heroMetrics: [
    { label: 'Data Models', value: '16', detail: 'PostgreSQL schema with 9 enums' },
    { label: 'Walkthrough Steps', value: '7', detail: 'Publish to contracted API' },
    { label: 'Signature Types', value: '2', detail: 'Commitment form & final contract' },
    { label: 'Partner API', value: 'v1', detail: 'Read-only bearer key API (120 req/min)' },
  ],

  walkthroughSteps: [
    {
      stepNumber: '1',
      title: 'Venue Publishes Availability',
      subtitle: 'Open, Blocked, or Cancellable Days',
      description: 'Staff mark calendar days as OPEN, BLOCKED, or OPEN_CANCELLABLE at short notice. Producers view a live, transparent calendar of what is free.',
    },
    {
      stepNumber: '2',
      title: 'Producer Requests Dates',
      subtitle: 'Contiguous Run & Commitment Form',
      description: 'Producers sign in with their company registration ID, select a contiguous date range, specify artist and show type, and sign a commitment form.',
    },
    {
      stepNumber: '3',
      title: 'Revenue-Ranked Overlap Engine',
      subtitle: 'Maximized Revenue Combinations',
      description: 'When multiple producers request overlapping dates, the system enumerates non-overlapping offer combinations ranked by total revenue, showing days used vs wasted.',
    },
    {
      stepNumber: '4',
      title: 'Date Reservation & Holds',
      subtitle: 'Days Marked PENDING',
      description: 'When a commitment form goes out, days automatically flip to PENDING — preventing double-booking while giving the producer a deadline to sign.',
    },
    {
      stepNumber: '5',
      title: 'Staff Approval & Assignment',
      subtitle: 'Days Set ASSIGNED',
      description: 'Venue staff confirm the selected combination, assigning the days to the winning producer and releasing unselected requests with automated notifications.',
    },
    {
      stepNumber: '6',
      title: 'Final Agreement Signing',
      subtitle: 'Dual-Signature PDF Engine',
      description: 'The final contract is generated with frozen rate snapshot figures. The producer reads and signs it directly in the browser, producing a tamper-proof PDF.',
    },
    {
      stepNumber: '7',
      title: 'Partner API Synchronization',
      subtitle: 'Read-Only External Integration',
      description: 'Once contracted, the show becomes visible to downstream systems (finance, ERP, document archives) over a secure, rate-limited Bearer API.',
    },
  ] as BookAShowWalkthroughStep[],

  userRoles: [
    {
      title: 'Producers',
      badge: 'Counterparty',
      description: 'Promoters and production companies hiring the venue.',
      capabilities: [
        'Sign in with unique company registration ID',
        'Request contiguous available date ranges',
        'Sign commitment forms & final agreements in-browser',
        'Track request status & download signed contracts',
      ],
    },
    {
      title: 'Venue Staff',
      badge: 'VIEWER Role',
      description: 'Day-to-day operations personnel managing the calendar.',
      capabilities: [
        'Manage calendar availability (OPEN, BLOCKED, CANCELLABLE)',
        'Compare competing requests & evaluate revenue rankings',
        'Prepare & send commitment forms & final agreements',
        'Monitor calendar schedule grid & handle revocations',
      ],
    },
    {
      title: 'Venue Administrators',
      badge: 'ADMIN Role',
      description: 'Superusers managing business rules, rates, and integrations.',
      capabilities: [
        'Configure global pricing rates & custom overrides',
        'Manage staff & producer user accounts',
        'Issue, revoke & monitor partner API keys',
        'Edit document & email templates in admin panel',
      ],
    },
    {
      title: 'Downstream Systems',
      badge: 'Partner API v1',
      description: 'Finance, ERP, document libraries, and reporting tools.',
      capabilities: [
        'Read contracted shows via GET /api/v1/shows',
        'Download signed contract PDFs via GET /api/v1/shows/{id}/agreement',
        'Guaranteed zero access to uncontracted draft figures',
        'Rate-limited to 120 req/min per isolated API key',
      ],
    },
  ] as UserRoleItem[],

  // PART 2: TECHNICAL REFERENCE
  technical: {
    stack: [
      { name: 'Next.js App Router', detail: 'TypeScript codebase with React Server Components by default and targeted Client Components for interaction.' },
      { name: 'PostgreSQL & Prisma ORM', detail: '16 data models and 9 enums powered by Prisma via the Postgres driver adapter for type-safe database queries.' },
      { name: 'NextAuth & Scrypt Security', detail: 'JWT session management with separate credentials providers for Staff (email) and Producers (Company Reg ID).' },
      { name: 'Dual PDF Generation Engine', detail: 'Browser HTML->Canvas->PDF for signed documents (capturing exact signature layout); server headless browser for previews.' },
      { name: 'Build-Time Bidi Locale', detail: 'Full bidirectional (RTL and LTR) support driven by build-time constant, eliminating missing translation key runtime errors.' },
      { name: 'Nodemailer SMTP Engine', detail: 'Direct SMTP email delivery with every email template editable in the admin panel.' },
    ],

    dataModelGroups: [
      {
        groupName: '3.1 Identity and Access',
        models: [
          { name: 'User', purpose: 'Venue staff. Role is ADMIN (pricing, user management, API keys) or VIEWER (operations). Scrypt password hash.' },
          { name: 'Producer', purpose: 'Counterparty. Company name, registration ID (login ID, unique), contact person, email, phone, password hash.' },
          { name: 'Account, Session, VerificationToken', purpose: 'NextAuth standard authentication tables.' },
        ],
      },
      {
        groupName: '3.2 The Calendar',
        models: [
          { name: 'CalendarDate', purpose: 'One row per day. Status is OPEN, OPEN_CANCELLABLE, BLOCKED, PENDING, or ASSIGNED.' },
          { name: 'DateRange', purpose: 'Contiguous run of days a producer asked for. Carries range status and optional document folder.' },
          { name: 'DateRangeItem', purpose: 'Join row linking DateRange to each CalendarDate it covers.' },
        ],
      },
      {
        groupName: '3.3 Requests & Pricing',
        models: [
          { name: 'Bid', purpose: 'Central record: artist, show type, status, frozen price snapshot, document timestamps.' },
          { name: 'BidCostLine', purpose: 'Free-text additional cost lines on a bid, ordered.' },
          { name: 'PricingChangeLog', purpose: 'Audit trail of every change to global rates with who and when.' },
          { name: 'SystemConfig', purpose: 'Key/value settings: rates, calendar window, storage path, SMTP, contracting entity.' },
        ],
      },
      {
        groupName: '3.4 Documents',
        models: [
          { name: 'Document', purpose: 'File attached to a bid (COMMITMENT, FINAL_AGREEMENT, DRAFT_OBLIGATION, CONTRACT, SIGNED_RETURN, OTHER).' },
          { name: 'DocumentTemplate', purpose: 'Admin-editable wording: built-in default -> venue override -> per-booking override.' },
        ],
      },
      {
        groupName: '3.5 Integration',
        models: [
          { name: 'ApiKey', purpose: 'Credential for downstream system stored as SHA-256 hash with clear prefix, expiry, and lastUsedAt.' },
          { name: 'SyncLog', purpose: 'Results of external calendar synchronisation runs.' },
        ],
      },
    ] as DataModelGroup[],

    bidStatuses: [
      { status: 'SUBMITTED', meaning: 'Requested, competing for dates', held: 'No' },
      { status: 'DOCS_READY', meaning: 'Commitment form prepared, not sent', held: 'No' },
      { status: 'AWAITING_SIGNATURE', meaning: 'Form sent, awaiting producer', held: 'Yes — PENDING' },
      { status: 'DOCS_RETURNED', meaning: 'Producer signed, awaiting staff', held: 'Yes — PENDING' },
      { status: 'APPROVED', meaning: 'Confirmed by venue staff', held: 'Yes — ASSIGNED' },
      { status: 'REJECTED', meaning: 'Never finalised', held: 'No' },
      { status: 'CANCELLED', meaning: 'Reversed after being promised', held: 'No' },
      { status: 'ESCALATED', meaning: 'Passed to next-ranked candidate', held: 'No' },
    ],

    partnerApi: {
      baseUrl: '/api/v1',
      endpoints: [
        { method: 'GET', path: '/api/v1/shows', description: 'Contracted shows, filterable by date overlap, paginated' },
        { method: 'GET', path: '/api/v1/shows/{id}', description: 'One contracted show details and cost breakdown' },
        { method: 'GET', path: '/api/v1/shows/{id}/agreement', description: 'The signed final agreement PDF document' },
      ],
      scopeRules: [
        'Strict Scope Isolation: Only shows with a signed final agreement are visible. Uncontracted draft bookings return 404.',
        'Bearer API Key Security: API keys are shown once and stored SHA-256 hashed with instant revocation.',
        'Rate Limiting: 120 requests per minute per key applied post-authentication with rate-limit response headers.',
        'Freeze-on-Quote Figures: Reported amounts come from the frozen rate snapshot, ensuring 100% financial audit accuracy.',
      ],
    },

    qualityGates: [
      { suite: 'templates', asserts: 'Every template\'s fields and defaults resolve without errors' },
      { suite: 'storage', asserts: 'Uploaded files cannot escape the designated storage root' },
      { suite: 'dates', asserts: 'Date-span labels render accurately across month and year boundaries' },
      { suite: 'agreement', asserts: 'Default -> template -> per-booking override layering functions correctly' },
      { suite: 'pricing', asserts: 'Day counts, night teardown, and discount ordering evaluate precisely' },
      { suite: 'signature', asserts: 'The signature is embedded into document canvas, not stamped on after' },
      { suite: 'api', asserts: 'Partner API authentication, scope limits, and rate limiting behave strictly' },
      { suite: 'schedule', asserts: 'Calendar availability vs revokable booking statuses stay 100% distinct' },
      { suite: 'boundary', asserts: 'No client component imports a server-only module that reaches the database' },
    ],
  },
};
