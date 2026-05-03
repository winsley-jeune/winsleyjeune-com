import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Winsley Jeune — full-stack engineer building applied AI systems. Background, focus, and what I am working on.',
  alternates: { canonical: '/about' },
}

const timeline = [
  {
    year: '2018',
    title: 'Data analyst at Arbusta',
    body: 'Started in tech on the data side — building queries, dashboards, and the discipline to chase root causes through real datasets.',
  },
  {
    year: '2019–2022',
    title: 'Full-stack engineer',
    body: 'Studied full-stack development at Digital House and built a career as a JavaScript engineer across the stack — React, Node, Postgres, the usual production concerns.',
  },
  {
    year: '2023',
    title: 'First exposure to ML',
    body: 'Introduced to machine learning at Arbusta. Direction changed. Started building applied projects to understand how these systems behave outside of demos.',
  },
  {
    year: '2026',
    title: 'Applied AI in production',
    body: 'Building extraction pipelines, retrieval systems with eval harnesses, and small agent loops on the Anthropic API. First system in the open: Quantara, a product-extraction backend with text + vision fallback.',
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
          Years of shipping production software across data and full-stack
          engineering, now applied to extraction, retrieval, automation, and
          evaluation systems on the Anthropic API. Direct API work, no
          framework wrappers.
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
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                {item.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="now" className="space-y-4">
        <h2
          id="now"
          className="text-xl font-semibold tracking-tight text-zinc-900"
        >
          What I&apos;m building now
        </h2>
        <p className="text-zinc-600">
          AI systems that have to work outside of a notebook: structured
          extraction with schema validation, retrieval pipelines with
          citations, and small agent loops that fail loudly and recover
          cleanly.
        </p>
        <p className="text-zinc-600">
          I work directly against the Anthropic API. Frameworks abstract the
          parts I most need to understand, so I skip them until the cost of
          rolling my own is higher than the cost of learning their conventions.
        </p>
      </section>

      <section aria-labelledby="off-clock" className="space-y-4">
        <h2
          id="off-clock"
          className="text-xl font-semibold tracking-tight text-zinc-900"
        >
          Off the clock
        </h2>
        <p className="text-zinc-600">
          Reading about product, talking to people building things, and
          improving how I write and explain technical work in public.
        </p>
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
