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
  subheadline: 'We build the systems, document the processes, and train the teams so your business performs — whether we\'re in the room or not.',
  cta: 'Get a Free Operations Assessment',
  secondaryCta: 'See Our Work',
}

export const stats = [
  { value: 16, suffix: '+', label: 'Years Operations Leadership' },
  { value: 4, suffix: '', label: 'Industries of Operations Experience' },
  { value: 71, suffix: '%', label: 'Revenue Growth at Peak Engagement' },
  { value: 0, suffix: '', label: 'FMCSA Enforcement Actions (3 yrs)' },
]

export const services = [
  {
    title: 'Operations Diagnostic',
    icon: '🔍',
    description: 'We map your AS-IS process — the real workflow, not the org chart. You get a gap analysis and prioritized roadmap. No PowerPoint theater. Real findings.',
    deliverables: ['AS-IS process map', 'Gap analysis report', 'Prioritized action plan'],
  },
  {
    title: 'Process Engineering & SOPs',
    icon: '⚙️',
    description: 'We design workflows that eliminate root causes, not symptoms. Every SOP is documented, tested, and built to survive staff turnover.',
    deliverables: ['Documented SOPs', 'Optimized workflows', 'Training materials'],
  },
  {
    title: 'Compliance & Systems Build',
    icon: '🛡️',
    description: 'FMCSA, MLCC, OSHA — we build compliance programs that keep you audit-ready. Not binders on a shelf. Living systems that your team actually uses.',
    deliverables: ['Compliance program', 'Audit-ready documentation', 'Staff training'],
  },
  {
    title: 'TMS & Tech Stack Implementation',
    icon: '💻',
    description: 'Wrong system? No system? We select, implement, and train your team on the right TMS, MDM, or practice management platform for your operation.',
    deliverables: ['Vendor selection', 'Implementation', 'Team training'],
  },
  {
    title: 'Supply Chain & Logistics Ops',
    icon: '🚚',
    description: 'Carrier onboarding, cost control, ELD deployment, cross-border compliance. Built from 3+ years running a freight brokerage from zero.',
    deliverables: ['Carrier network setup', 'Cost control program', 'Compliance monitoring'],
  },
  {
    title: 'Financial Operations',
    icon: '📊',
    description: 'P&L buildout, vendor reconciliation, COGS tracking. We put measurement infrastructure in place before making changes — because you can\'t manage what you can\'t measure.',
    deliverables: ['P&L system', 'Vendor ledger', 'Margin analysis'],
  },
]

export const caseStudies = [
  {
    id: 'logistics',
    domain: 'LOGISTICS',
    headline: 'Built a freight brokerage from zero',
    tagline: '100% ELD compliance before federal mandate · MC-2979 broker authority · VehicHaul TMS',
    challenge: 'No FMCSA authority, no TMS, no carrier network, fleet drivers on paper HOS logs, single-customer dependency.',
    approach: 'Secured MC-2979 authority, deployed Samsung Tab A + BigRoad DashLink ELD + Samsung Knox MDM fleet-wide, replaced AscendTMS with VehicHaul, built carrier onboarding with ePOD enforcement.',
    results: [
      { metric: '100%', label: 'Fleet ELD compliance — beat federal mandate' },
      { metric: 'MC-2979', label: 'FMCSA broker authority — operational Day 1' },
      { metric: '0', label: 'Enforcement actions across 3 years' },
    ],
  },
  {
    id: 'restaurant',
    domain: 'RESTAURANT / F&B',
    headline: 'Turned operational chaos into a $1.25M engine',
    tagline: '+71% revenue growth · COGS held 31.7% for 89 consecutive weeks',
    challenge: 'No P&L system, no vendor controls, COGS running 36-42%, no documented processes, no staffing model.',
    approach: 'Built 19-sheet Excel P&L, 30-category invoice ledger across 203 vendors, 89-week alcohol cost tracking, dual-vendor food distributor strategy, SOPs for all 7 roles.',
    results: [
      { metric: '+71%', label: 'Revenue growth ($734K → $1.25M)' },
      { metric: '31.7%', label: 'Avg COGS — 89 consecutive weeks' },
      { metric: '0', label: 'MLCC compliance violations' },
    ],
  },
  {
    id: 'legal',
    domain: 'LEGAL OPERATIONS',
    headline: 'Owned full legal ops & tech stack solo',
    tagline: '~20 concurrent matters · 7+ practice areas · 0 e-filing rejections',
    challenge: 'Disconnected PracticePanther — no Google Workspace sync, no client portal, no payment processing, no onboarding SOP.',
    approach: 'Integrated PracticePanther with Google Workspace, deployed Secure Client Portal and LawPay, authored client onboarding SOP, maintained ~20 concurrent files, 5-10 MiFILE filings/week.',
    results: [
      { metric: '~20', label: 'Open client files managed concurrently' },
      { metric: '7+', label: 'Practice areas supported' },
      { metric: '0', label: 'E-filing rejections (4+ years)' },
    ],
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
    description: 'Most operational problems are structural. We design for root-cause elimination — carrier onboarding that enforces ePOD, invoice ledgers that make costs visible, SOPs that survive turnover.',
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
  bio: '16 years in the trenches across logistics, restaurant, legal, and IT operations. BBA from Baker College. I don\'t just advise — I\'ve run the operations, built the P&Ls, deployed the TMS, authored the SOPs, and held the compliance. Trublue Solution exists because Jackson County businesses need an operations consultant who\'s actually done the work.',
  credentials: [
    'BBA — Business Administration, Baker College (2025)',
    'Michigan Notary Public (active through Feb 2028)',
    'FMCSA Broker Authority (MC-2979) — operational',
    'SDDC DoD Certified Carrier — qualified',
    'PracticePanther Certified — 4+ years daily production',
  ],
}
