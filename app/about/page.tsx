import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Winsley Jeune — Software Engineer at Suncor Stainless, building applied AI systems. Eight years across data, full-stack, and applied AI engineering.',
  alternates: { canonical: '/about' },
}

const timeline = [
  {
    year: '2018 — 2021',
    role: 'Data Analyst',
    org: 'Arbusta · Buenos Aires',
    body: 'Started in tech on the data side — queries, dashboards, and the discipline to chase root causes through real datasets. The foundation for how I think about evaluation and instrumentation now.',
  },
  {
    year: '2021 — 2023',
    role: 'Web Developer',
    org: 'Arbusta · Argentina (Hybrid)',
    body: 'Moved from analytics into engineering. Built internal tools, dashboards, and client-facing interfaces on Scrum teams. GitHub PR reviews, CI-backed releases, real product work.',
  },
  {
    year: '2023 — 2024',
    role: 'Frontend Developer',
    org: 'Huenei IT Services · Remote',
    body: 'React on a distributed Agile team. Modular components, REST integration, and performance tuning — lazy loading, code splitting, render optimization — to support growing concurrent load.',
  },
  {
    year: '2024 — Present',
    role: 'Software Engineer',
    org: 'Suncor Stainless · Plymouth, MA (Hybrid)',
    body: 'Full-stack ownership of a production web platform. Led a mobile-first redesign with Tailwind that lifted Core Web Vitals 25%+. Architect hybrid React/Vite front-ends that bridge a legacy PHP/SQL backend — incremental modernization without service interruption. Build automation that replaces manual operational work, and use AI-assisted tooling daily as part of the development workflow.',
  },
  {
    year: '2026',
    role: 'Applied AI, in production',
    org: 'Open source',
    body: 'Building extraction, retrieval, and agent systems on the Anthropic API. Quantara live; regulatory-intelligence RAG shipping; personal-knowledge MCP server next; workflow-automation agent on deck.',
  },
]

const principles = [
  {
    title: 'Direct API, not framework wrappers',
    body: 'I work against the Anthropic API in primitives — tool use, schemas, vision fallback, prompt caching. Frameworks abstract the parts I most need to understand. I learn them in a week when a job requires one.',
  },
  {
    title: 'Hybrid systems, not rewrites',
    body: 'Years of production work mean I know modernization happens incrementally. At Suncor I bridge a legacy PHP/SQL backend with modern React + Vite without service interruption. Same instinct applies to AI: ship the smallest useful system, evaluate, expand.',
  },
  {
    title: 'Evals before scale',
    body: 'Golden datasets, regression checks, and honest failure reports are non-negotiable. A demo that works once isn’t shipped. Every project comes with the harness that proves it still works tomorrow.',
  },
]

const credentials = [
  {
    title: 'BS, Applied Technology — Information Technology',
    org: 'Brigham Young University–Idaho',
    year: '2022 — 2024',
  },
  {
    title: 'Certified Tech Developer',
    org: 'Digital House',
    year: '2022 — 2023',
  },
  {
    title: 'Front-End System Design · Next.js v3 · PHP',
    org: 'Frontend Masters',
    year: '2024 — 2025',
  },
]

export default function Page() {
  return (
    <div className="space-y-16">
      <header className="space-y-3">
        <p className="text-sm font-medium tracking-tight text-zinc-500">
          About
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Experienced engineer. Applied AI focus.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
          Eight years shipping production software across data analysis,
          full-stack engineering, and now applied AI. Currently a Software
          Engineer at <span className="text-zinc-900">Suncor Stainless</span>{' '}
          in Plymouth, Massachusetts.
        </p>
      </header>

      <section aria-labelledby="trajectory" className="space-y-6">
        <h2
          id="trajectory"
          className="text-xl font-semibold tracking-tight text-zinc-900"
        >
          Trajectory
        </h2>
        <ol className="relative space-y-8 border-l border-zinc-200 pl-6">
          {timeline.map((item) => (
            <li key={item.year} className="relative">
              <span
                aria-hidden
                className="absolute -left-[27px] top-1.5 h-2 w-2 rounded-full bg-zinc-900 ring-4 ring-white"
              />
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                {item.year}
              </p>
              <h3 className="mt-1 text-base font-medium text-zinc-900">
                {item.role}
                <span className="font-normal text-zinc-500"> · {item.org}</span>
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="how" className="space-y-6">
        <h2
          id="how"
          className="text-xl font-semibold tracking-tight text-zinc-900"
        >
          How I work
        </h2>
        <ul className="space-y-5">
          {principles.map((p) => (
            <li key={p.title} className="space-y-1">
              <p className="text-base font-medium text-zinc-900">{p.title}</p>
              <p className="text-sm leading-relaxed text-zinc-600">{p.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="credentials" className="space-y-6">
        <h2
          id="credentials"
          className="text-xl font-semibold tracking-tight text-zinc-900"
        >
          Education &amp; certifications
        </h2>
        <ul className="divide-y divide-zinc-200 border-y border-zinc-200">
          {credentials.map((c) => (
            <li
              key={c.title}
              className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <div>
                <p className="text-sm font-medium text-zinc-900">{c.title}</p>
                <p className="text-sm text-zinc-600">{c.org}</p>
              </div>
              <span className="text-xs tabular-nums text-zinc-500 sm:text-sm">
                {c.year}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-zinc-200 bg-zinc-50/60 p-6 sm:p-7">
        <h2 className="text-base font-medium tracking-tight text-zinc-900">
          See what I&apos;m shipping.
        </h2>
        <p className="mt-1 text-sm text-zinc-600">
          Projects page has live repos and in-flight work. Résumé below if
          you&apos;re hiring.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            href="/projects"
            className="inline-flex rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            View projects
          </Link>
          <a
            href="/resume.pdf"
            className="inline-flex rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-900"
          >
            Résumé (PDF)
          </a>
        </div>
      </section>
    </div>
  )
}
