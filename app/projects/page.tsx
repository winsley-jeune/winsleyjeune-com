import type { Metadata } from 'next'
import ProjectCard, { type Project } from '../components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Applied AI projects shipped in public — scrapers, RAG, agents, MCP servers.',
  alternates: { canonical: '/projects' },
}

const projects: Project[] = [
  {
    title: 'Quantara — product extraction backend',
    description:
      'Self-hosted backend for e-commerce research. Paste a product URL or upload a PDF catalog; Claude returns a typed JSON product (title, SKU, brand, price, specs, variants, images, availability) and joins a batch that exports to a multi-sheet Excel workbook with price-history deltas and margin calculations. No per-vendor selectors — text path with vision fallback when extraction is thin or blocked. Stealth Puppeteer, typed error codes, SQLite price history.',
    tags: [
      'Claude Sonnet 4.6',
      'Tool use',
      'Puppeteer',
      'Node.js',
      'SQLite',
      'Vision fallback',
    ],
    status: 'live',
    repo: 'https://github.com/winsley-jeune/quantara',
  },
  {
    title: 'Regulatory intelligence RAG platform',
    description:
      'Retrieval pipeline over public regulatory documents: ingestion, semantic chunking, embeddings, pgvector indexing, and a Next.js research interface with source-grounded citations. Includes golden datasets, regression testing, and retrieval benchmarks to prevent prompt drift.',
    tags: ['RAG', 'Embeddings', 'pgvector', 'Next.js', 'Evals'],
    status: 'shipping',
  },
  {
    title: 'Personal knowledge MCP server',
    description:
      'Model Context Protocol server exposing structured personal data to local AI clients through resources, tools, and prompts. Built with stdio transport, protocol tracing, and automated validation using MCP Inspector.',
    tags: ['MCP', 'TypeScript'],
    status: 'next',
  },
  {
    title: 'Workflow automation agent',
    description:
      'A production workflow agent built directly on Anthropic tool use. Every decision, tool call, retry, and failure is logged, evaluated, and documented. Target workflow: document processing and action generation.',
    tags: ['Agents', 'Tool use', 'Evals'],
    status: 'on-deck',
  },
]

export default function Page() {
  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-sm font-medium tracking-tight text-zinc-500">
          Projects
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Applied AI systems, built in public.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
          Production-grade extraction, retrieval, and automation systems.
          Every project ships with the code, architecture decisions,
          benchmarks, and failure reports.
        </p>
      </header>

      <section aria-label="Project list" className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </section>

      <section className="rounded-xl border border-zinc-200 bg-zinc-50/60 p-6 sm:p-7">
        <h2 className="text-base font-medium tracking-tight text-zinc-900">
          Hiring an applied AI engineer in Boston (or remote ET)?
        </h2>
        <p className="mt-1 text-sm text-zinc-600">
          Email is the fastest channel. Résumé below.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href="mailto:jeunewinsley9@gmail.com"
            className="inline-flex rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            jeunewinsley9@gmail.com
          </a>
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
