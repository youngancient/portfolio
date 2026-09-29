export type Domain = "ai" | "web3" | "web2";

export const domainLabels: Record<Domain, string> = {
  ai: "AI & automation",
  web3: "Blockchain",
  web2: "Web",
};

export interface IDemo {
  provider: "loom" | "drive";
  /** Loom video id, or Google Drive file id (file must be shared "Anyone with the link"). */
  id: string;
  /** Local poster image, e.g. /assets/work/hound.jpg */
  poster?: string;
  /** Shown on the play button, e.g. "4 min" */
  length?: string;
}

export interface IProject {
  slug: string;
  name: string;
  kind: string;
  /** One line on what it does or achieved. */
  result: string;
  /** Substring of `result` that is a measurable fact; gets the highlighter mark. */
  mark?: string;
  domains: Domain[];
  year: string;
  status?: "live" | "paused" | "in-progress";
  role: string;
  /** Who it's for, described by the problem, never a client name. */
  problem?: string;
  stack: string[];
  notes?: string[];
  href?: string;
  github?: string;
  img?: string;
  demo?: IDemo;
}

export const ProjectList: IProject[] = [
  {
    slug: "hound",
    name: "Hound",
    kind: "Lead research and outreach agent",
    result:
      "Describe the companies you want and get 10 qualified leads, each with reasoning, sources and a drafted 3-step email sequence.",
    mark: "10 qualified leads",
    domains: ["ai"],
    year: "2026",
    status: "paused",
    role: "Sole engineer",
    problem: "For sales teams that research companies and write cold outreach by hand.",
    stack: ["Claude Agent SDK", "Inngest", "Apify", "Firecrawl", "Supabase", "Brevo", "Next.js"],
    notes: [
      "Reads the request back, with its assumptions, before spending anything.",
      "Budget is reserved before every paid call, so a search can't overspend.",
      "A failed search continues from where it stopped, keeping its leads.",
      "Never invents contact details and never sends anything itself.",
    ],
    href: "https://hound.up.railway.app",
    github: "https://github.com/youngancient/hound",
    demo: { provider: "drive", id: "1MhEZ9Vz76h2IEl_d3ouxUCNBNjUGrhsh", length: "7 min" },
  },
  {
    slug: "flow",
    name: "Flow",
    kind: "Content research and publishing agent",
    result:
      "A raw idea or three source links becomes researched, rubric-scored, approved posts for LinkedIn, X and email in 1–4 minutes.",
    mark: "1–4 minutes",
    domains: ["ai"],
    year: "2026",
    status: "paused",
    role: "Sole engineer",
    problem: "For content teams that research, fact-check and reformat every post by hand.",
    stack: ["Claude Sonnet + Haiku", "Supabase pgvector", "Voyage embeddings", "Firecrawl", "Brevo", "Next.js"],
    notes: [
      "Keeps only source passages that clear a relevance threshold, and flags thin research instead of guessing.",
      "Each of three drafts is scored against a rubric and revised automatically before a person sees it.",
      "A manager approves each channel separately; nobody approves their own work.",
      "Cost is logged for every model call and rolled up per request.",
    ],
    href: "https://flow99.vercel.app",
    github: "https://github.com/youngancient/flow",
    demo: { provider: "drive", id: "1nCMqzJIvYnNTxXOS2TgSQqLZyglpeAOh", length: "8 min" },
  },
  {
    slug: "forge",
    name: "Forge",
    kind: "Proposal generation and approval",
    result:
      "Sales call notes become a six-section client proposal, approved by a manager and emailed with a PDF, with every step logged.",
    domains: ["ai"],
    year: "2026",
    status: "paused",
    role: "Sole engineer",
    problem: "For sales teams whose proposals are slow to write and uneven in quality.",
    stack: ["Claude", "Next.js", "Prisma", "Neon Postgres", "Auth.js", "Resend"],
    notes: [
      "Any section can be edited directly or regenerated with an instruction.",
      "Approved and sent proposals are locked; changes happen on a clone.",
      "Failures post to the team's alert channel.",
    ],
    href: "https://forge99.vercel.app",
    github: "https://github.com/youngancient/forge",
    demo: { provider: "loom", id: "6bdd20a021b748219f5d693977b1e2d0", length: "5 min" },
  },
  {
    slug: "lattiss",
    name: "Lattiss",
    kind: "Application tracker",
    result:
      "One place to run job and university applications, deadlines, documents and referees. 70+ users and 300+ applications created.",
    mark: "70+ users and 300+ applications created",
    domains: ["web2"], // TODO(jude): add "ai" once the AI features ship
    year: "2026",
    status: "live",
    role: "Full-stack engineer",
    problem: "For people juggling many applications across spreadsheets.",
    stack: ["React", "TypeScript", "Express", "Prisma", "PostgreSQL", "Clerk"],
    notes: [
      "Dashboard, sortable table and drag-and-drop board over eight pipeline stages.",
      "Every API route is isolated per user.",
    ],
    href: "https://lattiss.xyz",
    img: "/assets/lattiss.png",
  },
  {
    slug: "sonikdrop",
    name: "SonikDrop",
    kind: "Multichain airdrop tool",
    result:
      "Communities send tokens and POAPs to their members across EVM chains without writing a contract.",
    domains: ["web3"],
    year: "2024",
    status: "live",
    role: "Smart contract and frontend engineer",
    stack: ["Solidity", "Hardhat", "Merkle proofs", "ethers.js", "Reown AppKit", "React"],
    href: "https://sonikdrop.vercel.app",
    github: "https://github.com/sonikdrop/SonikDropApp",
    notes: ["Distribution contracts: github.com/youngancient/SonikDrop"],
  },
  {
    slug: "vantage",
    name: "Vantage",
    kind: "AI operations reporting",
    result:
      "KPIs from every department flow through n8n into a live dashboard with Claude-written summaries, risks and next actions.",
    domains: ["ai"],
    year: "2026",
    status: "paused",
    role: "Sole engineer",
    problem: "For leadership teams assembling weekly reports from scattered sources.",
    stack: ["n8n", "Claude", "Supabase Realtime", "Next.js"],
    notes: [
      "New data arrives over websockets as a quiet prompt, not a jarring page reload.",
      "Reruns are race-safe: late websocket events can't produce duplicate notifications.",
    ],
    github: "https://github.com/youngancient/ai-operations-reporter",
    demo: { provider: "loom", id: "c190d61bd7634fb3b604dc0ab077400e", length: "5 min" },
  },
  {
    slug: "trenchr",
    name: "Trenchr",
    kind: "Autonomous trading agent",
    result:
      "An agent for Solana markets that reads signals, filters entries, and runs execution, position tracking and exits on its own.",
    domains: ["ai", "web3"],
    year: "2026",
    status: "in-progress",
    role: "Engineer",
    stack: ["Solana", "Jupiter", "TypeScript", "Docker", "Telegram ingestion"],
    notes: ["Solved Jupiter and Solana RPC rate-limiting in the execution layer."],
  },
  {
    slug: "support-agent",
    name: "Support voice agent", // TODO(jude): final name
    kind: "Customer support agent",
    result:
      "A voice agent that answers from approved knowledge, looks up accounts and payments, and opens tickets or hands off to a person.",
    domains: ["ai"],
    year: "2026",
    status: "in-progress",
    role: "Sole engineer",
    problem: "For support teams buried in repetitive, well-documented questions.",
    stack: ["Vapi", "Claude Agent SDK", "MCP server", "Supabase"],
  },
  {
    slug: "zerokoin",
    name: "Zerokoin",
    kind: "Crypto exchange, Web3Lagos hackathon",
    result: "A crypto exchange built as a team at the Web3Lagos 2024 hackathon, placing second runner-up.",
    mark: "second runner-up",
    domains: ["web3", "web2"],
    year: "2024",
    status: "live",
    role: "Frontend engineer",
    stack: ["React", "TypeScript"],
    href: "https://zerokoin.vercel.app/",
    github: "https://github.com/lochipi/Zerokoin",
    img: "/assets/zerokoin.png",
  },
  {
    slug: "paadc",
    name: "PAADC",
    kind: "User and admin dashboards",
    result: "User and admin dashboards used by 500+ teams.",
    mark: "500+ teams",
    domains: ["web2"],
    year: "2023",
    status: "live",
    role: "Frontend engineer",
    stack: ["React", "TypeScript"],
    href: "https://paadc.com/",
    img: "/assets/paadc.png",
  },
  {
    slug: "airlab",
    name: "AIRlab",
    kind: "Organisation website, volunteer",
    result: "Managed and deployed the organisation's website, working with one other developer.",
    domains: ["web2"],
    year: "2025",
    status: "live",
    role: "Project lead and deployment",
    stack: ["Next.js", "TypeScript", "Vercel"],
    href: "https://airlab-site.vercel.app/",
    github: "https://github.com/airlabglobal/AIRlab-site",
  },
  {
    slug: "residease",
    name: "Residease",
    kind: "Housing platform, hackathon build",
    result: "First runner-up at the GenZ Techies Hackathon 2023.",
    mark: "First runner-up",
    domains: ["web2"],
    year: "2023",
    status: "live",
    role: "Frontend engineer",
    stack: ["React", "TypeScript"],
    href: "https://residease.vercel.app/",
    github: "https://github.com/youngancient/Residease",
    img: "/assets/residease.png",
  },
  {
    slug: "xendar",
    name: "Xendar",
    kind: "E-learning platform",
    result: "An e-learning platform for people starting careers in tech.",
    domains: ["web2"],
    year: "2023",
    status: "live",
    role: "Frontend engineer",
    stack: ["React", "TypeScript"],
    href: "https://xendar.vercel.app/",
    github: "https://github.com/youngancient/Xendar",
    img: "/assets/xendar.JPG",
  },
];

export interface IContribution {
  repo: string;
  pr: number;
  summary: string;
  size: string;
  href: string;
}

export const Contributions: IContribution[] = [
  {
    repo: "rsksmart/rsk-cli",
    pr: 294,
    summary:
      "Added Rootstock Name Service to the official CLI: register domains, update records and transfer ownership.",
    size: "+675 lines, 11 files",
    href: "https://github.com/rsksmart/rsk-cli/pull/294",
  },
  {
    repo: "rsksmart/rootstock-scoreboard",
    pr: 100,
    summary:
      "Admin role management and voting-state synchronisation for the on-chain scoreboard, plus setup fixes.",
    size: "+14,170 / −8,654 lines, 81 files",
    href: "https://github.com/rsksmart/rootstock-scoreboard/pull/100",
  },
];
