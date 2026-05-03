import Image from 'next/image'
import Link from 'next/link'
import ProjectCard, { type Project } from './components/ProjectCard'
import EmailCapture from './components/EmailCapture'

const projects: Project[] = [
  {
    title: 'Quantara — product extraction backend',
    description:
      'Self-hosted scraper for e-commerce research. Paste a product URL or PDF catalog; Claude returns a typed JSON product (title, SKU, price, specs, variants, images) and joins a batch that exports to multi-sheet Excel. No per-vendor selectors — text path with vision fallback.',
    tags: ['Claude Sonnet 4.6', 'Puppeteer', 'Node.js', 'SQLite'],
    status: 'live',
    repo: 'https://github.com/winsley-jeune/quantara',
  },
  {
    title: 'Regulatory intelligence RAG platform',
    description:
      'Retrieval pipeline over public regulatory documents: ingestion, semantic chunking, embeddings, pgvector indexing, and a Next.js research interface with source-grounded citations. Includes golden datasets, regression testing, and retrieval benchmarks to prevent prompt drift.',
    tags: ['RAG', 'Embeddings', 'pgvector', 'Next.js', 'Evals'],
    status: 'shipping',
    href: '/projects',
  },
]

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Winsley Jeune',
  url: 'https://winsleyjeune.com',
  jobTitle: 'Applied AI Engineer',
  sameAs: [
    'https://github.com/winsley-jeune',
    'https://www.linkedin.com/in/winsleyjeune/',
    'https://x.com/winsleyjeune',
  ],
}

export default function Page() {
  return (
    <div className="space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center">
        <div className="flex-1 space-y-5">
          <p className="text-sm font-medium tracking-tight text-zinc-500">
            Winsley Jeune · Applied AI Engineer
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Applied AI systems.
            <br className="hidden sm:block" />
            <span className="text-zinc-500"> Built in public.</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            After years of shipping production software across data and
            full-stack engineering, I&apos;m now building applied AI systems
            focused on extraction, retrieval, automation, and evaluation.
          </p>

          <p className="max-w-xl text-sm leading-relaxed text-zinc-500">
            Every system is public — code, architecture decisions, benchmarks,
            failure reports, and post-mortems included.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/blog"
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              Read the blog
            </Link>
            <Link
              href="/projects"
              className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-900"
            >
              View projects
            </Link>
          </div>
        </div>

        <div className="shrink-0">
          <Image
            src="/winsleyjeune.jpeg"
            alt="Winsley Jeune"
            width={128}
            height={128}
            priority
            className="rounded-full border border-zinc-200 object-cover"
          />
        </div>
      </section>

      <section aria-labelledby="focus" className="space-y-5">
        <h2
          id="focus"
          className="text-xl font-semibold tracking-tight text-zinc-900"
        >
          Current focus
        </h2>
        <p className="text-zinc-600">
          Applied AI, end-to-end, using the primitives directly. Three areas:
        </p>
        <ul className="space-y-3 text-zinc-600">
          <li className="flex gap-3">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
            <span>
              <span className="text-zinc-900">Structured extraction</span> — LLM
              tool-use with strict schemas, replacing brittle scrapers.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
            <span>
              <span className="text-zinc-900">Retrieval-augmented generation</span>{' '}
              — chunking, embeddings, pgvector, and citations that hold up.
            </span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
            <span>
              <span className="text-zinc-900">Agents and evals</span> — small,
              tool-using loops with regression tests, not demoware.
            </span>
          </li>
        </ul>
      </section>

      <section aria-labelledby="projects" className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2
            id="projects"
            className="text-xl font-semibold tracking-tight text-zinc-900"
          >
            Selected projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            All projects →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      <section aria-labelledby="writing" className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2
            id="writing"
            className="text-xl font-semibold tracking-tight text-zinc-900"
          >
            Writing
          </h2>
          <Link
            href="/blog"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            All posts →
          </Link>
        </div>

        <p className="text-zinc-600">
          Notes on shipping applied AI — what works, what breaks, and what I
          changed after the second time it broke.
        </p>

        <EmailCapture />
      </section>

      <section aria-labelledby="bio" className="space-y-3">
        <h2
          id="bio"
          className="text-xl font-semibold tracking-tight text-zinc-900"
        >
          Background
        </h2>
        <p className="text-zinc-600">
          Previously full-stack engineer at Arbusta. Boston-based, open to
          senior and staff applied-AI roles — onsite, hybrid, or remote ET.
        </p>
      </section>

      <section aria-labelledby="contact" className="space-y-4">
        <h2
          id="contact"
          className="text-xl font-semibold tracking-tight text-zinc-900"
        >
          Hiring an applied AI engineer?
        </h2>
        <p className="text-zinc-600">
          The fastest way to reach me is email. Résumé and links below.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
          <li>
            <a
              href="mailto:jeunewinsley9@gmail.com"
              className="text-sm font-medium text-zinc-900 underline underline-offset-4 transition-colors hover:text-zinc-600"
            >
              jeunewinsley9@gmail.com
            </a>
          </li>
          <li>
            <a
              href="/resume.pdf"
              className="text-sm text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline"
            >
              Résumé (PDF) →
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/winsleyjeune/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline"
            >
              LinkedIn →
            </a>
          </li>
          <li>
            <a
              href="https://github.com/winsley-jeune"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline"
            >
              GitHub →
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}
