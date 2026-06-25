export const brand = {
  name: "BeatsPerfect",
  shopName: "Focused digital products",
  tagline: "One clear job. Ready to use.",
  heroCopy:
    "Focused digital tools built around proven needs without unnecessary complexity or recurring fees.",
  methodHeading: "Built from evidence, not guesswork.",
  methodCopy:
    "We identify recurring jobs people already pay to solve, study where existing solutions repeatedly disappoint, and build a focused product around one clear promise.",
  disclosure:
    "BeatsPerfect is an AI-operated product company. AI agents perform all product research, specification, production, and testing within human-set constraints. BeatsPerfect remains accountable for every release.",
  operatingLine: "AI-operated. Human-accountable.",
  footerLine: "BeatsPerfect creates focused digital products for one clear job.",
};

export const nav = [
  { label: "Products", href: "/catalog/" },
  { label: "How we build", href: "/about/" },
  { label: "Support", href: "/faq/" },
];

export const filters = [
  "all",
  "spreadsheets",
  "budgeting",
  "download",
  "ready to publish",
];

export const products = [
  {
    id: "C-003-001",
    slug: "budget-planner-studio",
    title: "Budget Planner Studio",
    oneClearJob: "Track paycheck income, bills, debt, savings, and daily spending in one protected rolling 12-month workbook.",
    whoItIsFor: "People who want a simple spreadsheet budget system without a subscription, bank connection, or app login.",
    buyerOutcome: "A clear monthly view of opening balance, monthly net cashflow, closing balance, and the next month carry-forward.",
    format: "Protected spreadsheet workbook",
    priceUsd: null,
    pricingModel: "One-time download",
    status: "Ready to publish",
    summary: "A rolling 12-month budget planner for paycheck budgeting, bills, debt payoff, savings, daily spending, and next-cycle setup.",
    excerpt: "A protected workbook that shows what money is left each month and carries the closing balance forward.",
    includedItems: [
      "Budget Planner Studio Excel workbook",
      "Google Sheets import copy",
      "Dashboard, Start Here, Settings, Month 1 through Month 12, Next Workbook Setup, and Help sheets",
      "Quick-start and FAQ delivery notes",
      "Final Etsy-ready listing creatives"
    ],
    previewAssets: [
      "Dashboard and carry-forward overview",
      "Month 1 planning workflow",
      "Money In & Out table",
      "Settings start-month setup",
      "Next Workbook Setup closeout"
    ],
    compatibility: "Excel-compatible spreadsheet editors; Google Sheets standard-formula import",
    testedEnvironment: "FLOW-005 QA passed artifact integrity, formula truth-table, period continuity, carry-forward, closeout, protection truthfulness, listing fidelity, and publish-blocker gates.",
    limitations: [
      "No live bank sync",
      "No live price feeds",
      "Not tax, accounting, or financial advice",
      "Google Sheets imported protection behavior can vary by account or editor"
    ],
    notFor: [
      "Buyers who need automatic bank connections",
      "Teams needing multi-user accounting software",
      "People expecting tax preparation or bookkeeping services",
      "Buyers who want a fixed Jan-Dec 2026 workbook"
    ],
    releaseDate: "Pending marketplace publish",
    currentVersion: "1.0 ready to publish",
    lastUpdated: "2026-06-24",
    evidenceSummary: "Candidate C-003-001 passed FLOW-005 through the publishing gate and stopped at pass_pending_marketplace_publish pending human marketplace approval.",
    supportChannel: "Use the FAQ and Contact pages on this site.",
    marketplaceLabel: "Ready to publish",
    marketplaceUrl: "",
    tags: ["spreadsheets", "budgeting", "download", "ready to publish"],
    directCtaLabel: "View details",
    accent: "pipeline"
  }
];

export const featuredSlugs = ["budget-planner-studio"];

export const disclosure = brand.disclosure;
