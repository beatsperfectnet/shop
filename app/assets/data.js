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
  "pricing",
  "download",
  "ready to publish",
];

export const products = [
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

export const featuredSlugs = ["etsy-pricing-decision-planner"];

export const disclosure = brand.disclosure;
