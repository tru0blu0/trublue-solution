export const site = {
  name: 'Trublue Solution',
  tagline: 'Better operations. Lasting results.',
  description: 'Operations consulting for manufacturers, logistics operators, and growth-stage businesses.',
  location: 'Jackson, Michigan',
  email: 'jimchamberlin7@gmail.com',
  phone: '517-936-1032',
  domain: 'trubluesolution.com',
  siteUrl: 'https://trubluesolution.com',
  legalName: 'Trublue Solution, LLC',
  portfolioUrl: 'https://tru0blu0.github.io/portfolio',
  available: true,
  availableText: 'ACCEPTING NEW CLIENTS',
}

export const navItems = [
  { label: 'SERVICES', href: '#services' },
  { label: 'RESULTS', href: '#results' },
  { label: 'APPROACH', href: '#approach' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
]

export const hero = {
  headline: 'Operations That Run Without You.',
  subheadline: 'We work with companies scaling faster than their operations can handle — typically $2M–$50M in revenue. We build the systems, document the processes, and train the teams so your business performs — whether we\'re in the room or not.',
  cta: 'Book a Call',
  secondaryCta: 'See Our Results',
}

export const stats = [
  { value: 16, suffix: '+', label: 'Years Operations Leadership' },
  { value: 4, suffix: '', label: 'Industries of Operations Experience' },
  { value: 71, suffix: '%', label: 'Revenue Growth at Peak Engagement' },
  { value: 32, suffix: '%', label: 'Avg COGS Achieved for Clients' },
]

export const services = [
  {
    title: 'Operations Diagnostic',
    icon: '🔍',
    price: 'From $2,500',
    description: 'We map your AS-IS process — the real workflow, not the org chart. You get a gap analysis and prioritized roadmap. No slide decks. Real findings.',
    deliverables: ['AS-IS process map', 'Gap analysis report', 'Prioritized action plan'],
  },
  {
    title: 'Process Engineering & SOPs',
    icon: '⚙️',
    price: 'Starting at $5,000',
    description: 'We design workflows that eliminate root causes, not symptoms. Every SOP is documented, tested, and built to survive staff turnover.',
    deliverables: ['Documented SOPs', 'Optimized workflows', 'Training materials'],
  },
  {
    title: 'Compliance & Systems Build',
    icon: '🛡️',
    price: 'Project-based',
    description: 'FMCSA, MLCC, OSHA — we build compliance programs that keep you audit-ready. Living systems your team actually uses, not binders on a shelf.',
    deliverables: ['Compliance program', 'Audit-ready documentation', 'Staff training'],
  },
  {
    title: 'TMS & Tech Stack Implementation',
    icon: '💻',
    price: 'Project-based',
    description: 'Wrong system? No system? We select, implement, and train your team on the right TMS, MDM, or practice management platform for your operation.',
    deliverables: ['Vendor selection', 'Implementation', 'Team training'],
  },
  {
    title: 'Supply Chain & Logistics Ops',
    icon: '🚚',
    price: 'Project-based',
    description: 'Carrier onboarding, cost control, ELD deployment, cross-border compliance. We bring hands-on experience building brokerage operations — so you get systems that work in the real world, not just on paper.',
    deliverables: ['Carrier network setup', 'Cost control program', 'Compliance monitoring'],
  },
  {
    title: 'Financial Operations',
    icon: '📊',
    price: 'From $1,500',
    description: 'P&L buildout, vendor reconciliation, COGS tracking. We put measurement infrastructure in place before making changes — you can\'t manage what you can\'t measure.',
    deliverables: ['P&L system', 'Vendor ledger', 'Margin analysis'],
  },
]

export const clientResults = [
  {
    id: 'logistics',
    client: 'Midwest Transportation Company',
    industry: 'Logistics & Transportation',
    summary: 'Launched a fully compliant freight brokerage operation from absolute zero.',
    situation: 'The company had no FMCSA authority, no TMS, no carrier network, and fleet drivers still on paper logs — with a single-customer dependency that put the entire business at risk.',
    whatWeDid: 'Secured federal operating authority, selected and deployed a modern TMS, achieved 100% ELD fleet compliance ahead of the federal mandate, built carrier onboarding and compliance systems, and qualified the operation for government contracts.',
    outcomes: [
      { metric: '100%', label: 'Fleet ELD compliance before federal deadline' },
      { metric: '0', label: 'Regulatory enforcement actions' },
      { metric: 'Day 1', label: 'Operating authority active at launch' },
    ],
    testimonial: {
      quote: 'They built our entire freight brokerage operation from scratch — the compliance, the technology, the processes. In three years, zero enforcement actions and we qualified for DoD contracts. They documented everything so thoroughly we could hand it off without missing a beat.',
      name: 'General Manager',
      role: 'Midwest carrier, 50+ power units',
    },
  },
  {
    id: 'restaurant',
    client: 'Regional Restaurant Group',
    industry: 'Restaurant & Hospitality',
    summary: 'Turned a money-losing operation into a profitable, systems-driven business.',
    situation: 'No P&L system existed — ownership had no visibility into where money was going. COGS ran unchecked at 36-42%, vendor spending was unmonitored, and no documented processes meant every shift depended on who showed up.',
    whatWeDid: 'Built a complete financial operations infrastructure: P&L modeling, 30-category vendor reconciliation across 200+ suppliers, dual-vendor sourcing strategy, COGS tracking program, and documented SOPs for every role — giving ownership the data to make decisions and the systems to enforce them.',
    outcomes: [
      { metric: '+71%', label: 'Revenue increase' },
      { metric: '31.7%', label: 'COGS maintained — 89 consecutive weeks' },
      { metric: '0', label: 'Compliance violations across full engagement' },
    ],
    testimonial: {
      quote: 'They built the P&L system from scratch — gave me visibility into every cost center I\'d never been able to see before. Got our costs under control, implemented vendor strategies that improved margins, and documented every process. Best operational investment we ever made.',
      name: 'Owner / Shareholder',
      role: 'Multi-unit restaurant group',
    },
  },
  {
    id: 'legal',
    client: 'Regional Law Firm',
    industry: 'Legal & Professional Services',
    summary: 'Unified a disconnected technology stack into a seamless operation.',
    situation: 'The firm\'s practice management system operated in a silo — no sync with email or calendar, no client portal for document exchange, no integrated payment processing. Managing 20+ concurrent client files across 7 practice areas without standardized workflows was costing billable hours.',
    whatWeDid: 'Integrated the practice management platform with Google Workspace, deployed a secure client portal and compliant payment processing, built the client onboarding SOP from scratch, and established e-filing workflows that processed filings daily with a perfect acceptance record.',
    outcomes: [
      { metric: '~20', label: 'Concurrent client files managed seamlessly' },
      { metric: '7+', label: 'Practice areas supported on unified platform' },
      { metric: '0', label: 'E-filing rejections across multi-year engagement' },
    ],
    testimonial: {
      quote: 'They connected systems we didn\'t even know could talk to each other. Our practice management, email, calendar, billing, and client portal all work together now. The onboarding SOP they built is still what we use with every new client.',
      name: 'Managing Partner',
      role: 'Regional law firm, multiple practice areas',
    },
  },
]

export const approach = [
  {
    step: '01',
    title: 'Document the AS-IS before touching anything',
    description: 'Every engagement starts with mapping what actually exists — the real process, not the org chart. We build the problem statement before proposing any solution.',
  },
  {
    step: '02',
    title: 'Build the measurement infrastructure first',
    description: 'We put tracking in place before making changes. P&L systems, vendor ledgers, compliance logs — you can\'t manage what you can\'t measure.',
  },
  {
    step: '03',
    title: 'Fix the system, not the symptom',
    description: 'Most operational problems are structural. We design for root-cause elimination — carrier onboarding that enforces compliance, invoice ledgers that make costs visible, SOPs that survive turnover.',
  },
  {
    step: '04',
    title: 'Leave it self-sustaining',
    description: 'Every engagement ends with documented SOPs, trained staff, and systems that run without us. The measure of success is that it holds after we\'re gone.',
  },
]

export const about = {
  name: 'Jimmy Chamberlin',
  title: 'Founder & Operations Architect',
  story: 'I spent 16 years inside the operations other consultants only advise on — running P&Ls, deploying TMS platforms, building compliance programs from zero, and documenting processes that survived staff turnover across four industries. Every system I built had to work in the real world: with real employees, real deadlines, and real consequences when something broke.',
  why: 'I started Trublue Solution because most operations consulting comes from people who\'ve never actually run an operation. They deliver slide decks. We deliver systems that run without us — documented, measured, and built to survive the person who built them.',
  differentiation: 'We don\'t just identify what\'s broken. We fix it, document it, and train your team to run it. Then we leave — and it keeps working. That\'s the difference between advice and infrastructure.',
  credentials: [
    'BBA — Business Administration, Baker College (2025)',
    'Michigan Notary Public — active through Feb 2028',
    '16 years operations leadership across 4 industries',
    'P&L ownership, COGS control, vendor management — not theory, practice',
  ],
}
