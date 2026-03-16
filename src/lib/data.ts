export interface Metric {
  value: string;
  label: string;
  context: string;
}

export interface ImpactCard {
  metric: string;
  title: string;
  description: string;
}

export interface TimelineEntry {
  company: string;
  role: string;
  dates: string;
  active: boolean;
  description: string;
  tags: string[];
}

export interface OSProject {
  name: string;
  org: string;
  description: string;
  url: string;
  href: string;
  featured?: boolean;
}

export interface Mention {
  name: string;
  description: string;
  url: string;
  href: string;
}

export interface ContactLink {
  label: string;
  url: string;
  href: string;
  primary?: boolean;
}

export const heroMetrics: Metric[] = [
  { value: "5+", label: "Years shipping Go", context: "Backend services, CLIs, and open-source libraries in production" },
  { value: "10M+", label: "Inserts per second", context: "Metrics pipeline I built writing to ClickHouse at scale" },
  { value: "300+", label: "Engineers use my tools", context: "Internal debugging platform I led — used weekly across OZON" },
  { value: "3×", label: "Memory reduction", context: "Reusable batch inserts I shipped to the clickhouse-go driver" },
];

export const impactCards: ImpactCard[] = [
  {
    metric: "100+",
    title: "Backend-Driven UI & Page Composition",
    description:
      "Core engineer on the Composer system — the engine that assembles OZON's user-facing pages from widgets provided by hundreds of domain teams. Owned the entrypoint service responsible for rendering web pages from multiple microfrontends, and contributed to the Composer core that orchestrates data resolution, widget processing, and page layout across 100+ microservices in a single request.",
  },
  {
    metric: "300+",
    title: "Debugging System for Mobile & Web",
    description:
      "Led development of an internal debugging tool that cut debug complexity from hours to minutes. Used weekly by over 300 engineers. Became one of the go-to tools for diagnosing issues in OZON's mobile and web applications.",
  },
  {
    metric: "10M+",
    title: "High-Throughput Metrics Pipeline",
    description:
      "Built a metrics collection service that handles tens of millions of inserts per second into ClickHouse. The storage demands of this project led directly to creating ch-rollup — a data aggregation library later open-sourced under ozontech.",
  },
  {
    metric: "3×",
    title: "ClickHouse Go Driver — Major Contributor",
    description:
      "Implemented reusable batch inserts in the official ClickHouse Go driver (2.9k+ stars), cutting memory consumption by three times. Shipped multiple critical fixes upstream and contributed documentation to the Altinity Knowledge Base.",
  },
];

export const timeline: TimelineEntry[] = [
  {
    company: "OZON",
    role: "Senior Software Engineer",
    dates: "July 2022 — Present",
    active: true,
    description:
      "Grew from engineer to senior. Led and contributed to multiple high-impact systems: BDUI & Composer platform powering user-facing pages, debugging platform (300+ WAU), metrics pipeline (10M+ inserts/sec), and clickhouse-go driver contributions.",
    tags: ["Go", "ClickHouse", "BDUI", "Microfrontends", "High-Load", "Observability", "Open Source"],
  },
  {
    company: "FaTech",
    role: "Go Developer · Team Lead",
    dates: "May 2021 — Feb 2022",
    active: false,
    description:
      "Built the engineering team for an e-commerce startup from the ground up — recruiting, onboarding, and setting technical direction. Hands-on with core services: warehouse management, courier logistics, payment system integrations. Developed CI/CD pipelines that shortened time-to-market.",
    tags: ["Go", "CI/CD", "Linux", "Grafana", "Team Building"],
  },
  {
    company: "FTOYD Arena",
    role: "Go Developer",
    dates: "Mar 2020 — Apr 2021",
    active: false,
    description:
      "Built high-load components for a gaming platform: authentication with Google & Discord OAuth, real-time matchmaking, in-game communication. Set up the full observability stack — Prometheus, Grafana, Jaeger, ELK — from scratch.",
    tags: ["Go", "Real-Time Systems", "OAuth", "Prometheus", "ELK"],
  },
];

export const osProjects: OSProject[] = [
  {
    name: "ch-rollup",
    org: "ozontech",
    description:
      "A Go library for continuous data aggregation in ClickHouse. Automatically rolls up time-series data — converting minute-level precision to hourly after a configurable retention period — reducing storage costs while preserving analytical value.",
    url: "github.com/ozontech/ch-rollup",
    href: "https://github.com/ozontech/ch-rollup",
    featured: true,
  },
  {
    name: "clickhouse-go",
    org: "ClickHouse · contributor",
    description:
      "Major contributions to the official Go driver for ClickHouse (2.9k+ stars). Implemented reusable batch inserts that cut memory consumption by 3×, alongside multiple critical bug fixes — all merged upstream.",
    url: "github.com/ClickHouse/clickhouse-go",
    href: "https://github.com/ClickHouse/clickhouse-go",
    featured: true,
  },
  {
    name: "Junter",
    org: "co-creator",
    description:
      "JSON-to-HTML compiler for building complex UIs from small composable pieces. Server-side rendering, dynamic content slots, component integration with modern frameworks, and a modern CSS styling system.",
    url: "junter.dev",
    href: "https://junter.dev",
  },
  {
    name: "cloudflare-operator",
    org: "contributor",
    description:
      "Active contributor to this Kubernetes operator for managing Cloudflare Tunnels and DNS records. Added security contexts, lint configuration, CI jobs, and release installer automation.",
    url: "github.com/adyanth/cloudflare-operator",
    href: "https://github.com/adyanth/cloudflare-operator",
  },
  {
    name: "clickhouse-github-action",
    org: "author",
    description:
      "A GitHub Action to spin up ClickHouse in CI workflows. Configurable version selection, native and HTTP port bindings. Drop it into your pipeline and test against a real ClickHouse instance.",
    url: "github.com/EpicStep/clickhouse-github-action",
    href: "https://github.com/EpicStep/clickhouse-github-action",
  },
  {
    name: "go-simple-geo",
    org: "author",
    description:
      "A lightweight Go library for simple geo calculations. No heavy dependencies — just the math you need for distance, bearing, and coordinate work. 21 stars.",
    url: "github.com/EpicStep/go-simple-geo",
    href: "https://github.com/EpicStep/go-simple-geo",
  },
];

export const mentions: Mention[] = [
  {
    name: "CanCopy",
    description: "A web extension that lets you copy content from any website, even those that try to block it.",
    url: "github.com/EpicStep/CanCopy",
    href: "https://github.com/EpicStep/CanCopy",
  },
  {
    name: "JOSS Paper Reviewer",
    description:
      'Served as a peer reviewer for "PowerAPI: A Python framework for building software-defined power meters" published in the Journal of Open Source Software.',
    url: "joss.theoj.org/papers/10.21105/joss.06670",
    href: "https://joss.theoj.org/papers/10.21105/joss.06670",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    url: "linkedin.com/in/epicstep",
    href: "https://linkedin.com/in/epicstep",
    primary: true,
  },
  {
    label: "GitHub",
    url: "github.com/EpicStep",
    href: "https://github.com/EpicStep",
  },
];

export const navLinks = ["Impact", "Experience", "Open Source", "Contact"] as const;
