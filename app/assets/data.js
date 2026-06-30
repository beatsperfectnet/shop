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
  "pricing",
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
  },
  {
    id: "C-011-001",
    slug: "etsy-pricing-decision-planner",
    title: "Etsy Pricing Decision Planner",
    oneClearJob: "Turn Etsy listing assumptions into a publish-or-reprice decision with a safe price floor and a total-profit hurdle matrix.",
    whoItIsFor: "Active Etsy sellers repricing a listing or testing discount and ad assumptions without needing bookkeeping software or platform sync.",
    buyerOutcome: "A safe pricing recommendation, clear unit-economics view, and the required sales-volume hurdle for nearby price or ad changes.",
    format: "Protected spreadsheet workbook",
    priceUsd: 11.2,
    pricingModel: "One-time download",
    status: "Ready to publish",
    summary: "A pricing-decision workbook for Etsy sellers with fee-aware profit math, target-margin guardrails, and a visible required-units hurdle matrix.",
    excerpt: "A protected workbook that shows whether the current price is safe and what unit growth a lower price or higher ad spend would need.",
    includedItems: [
      "Etsy Pricing Decision Planner Excel workbook",
      "Google Sheets import copy",
      "Start Here, Assumptions, Listing Inputs, Scenario Compare, Profit Hurdle Matrix, and Decision Summary sheets",
      "README-FIRST and Quick Start / FAQ delivery notes",
      "Final Etsy-ready listing creatives"
    ],
    previewAssets: [
      "Decision Summary publish-ready view",
      "Scenario Compare unit-economics table",
      "Profit Hurdle Matrix price x ad grid",
      "Assumptions guardrails setup",
      "Start Here onboarding flow"
    ],
    compatibility: "Excel desktop and Excel-compatible spreadsheet editors; Google Sheets standard-formula import; no macros required",
    testedEnvironment: "FLOW-007 launch-ready validation passed actual artifact inspection, formula truth-table, buyer-behavior walkthrough, executable adversarial scenarios, listing packaging QA, pre-mortem analysis, and founder launch gate review.",
    limitations: [
      "No bookkeeping or tax preparation",
      "No Etsy API sync",
      "No inventory tracking",
      "The hurdle matrix is a decision tool, not a sales forecast"
    ],
    notFor: [
      "Buyers who need whole-shop bookkeeping or accounting software",
      "People expecting tax filing help",
      "Sellers who want inventory planning",
      "Anyone looking for a guaranteed demand prediction engine"
    ],
    releaseDate: "Pending marketplace publish",
    currentVersion: "1.0 launch-ready",
    lastUpdated: "2026-06-30",
    evidenceSummary: "Candidate C-011-001 passed FLOW-007 actual artifact QA, listing packaging QA, pre-mortem review, and founder launch gate review with `LAUNCH_READY` status pending marketplace publish.",
    supportChannel: "Use the FAQ and Contact pages on this site.",
    marketplaceLabel: "Ready to publish",
    marketplaceUrl: "",
    tags: ["spreadsheets", "pricing", "download", "ready to publish"],
    directCtaLabel: "View details",
    accent: "pipeline"
  }
];

export const featuredSlugs = ["budget-planner-studio", "etsy-pricing-decision-planner"];

export const disclosure = brand.disclosure;
