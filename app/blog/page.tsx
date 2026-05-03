import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '../components/EmailCapture'
import { posts } from './posts'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Notes on shipping applied AI: scrapers, RAG, agents, evals. Honest write-ups, no fluff.',
  alternates: {
    canonical: '/blog',
    types: { 'application/rss+xml': '/feed.xml' },
  },
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
})

export default function Page() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <div className="space-y-12">
      <header className="space-y-3">
        <p className="text-sm font-medium tracking-tight text-zinc-500">
          Blog
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Notes from the build.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
          Lessons from shipping applied AI: what worked, what broke, and what
          changed after the second time it broke.
        </p>
      </header>

      <section aria-label="Posts">
        {sorted.length === 0 ? (
          <p className="rounded-xl border border-dashed border-zinc-300 p-6 text-sm text-zinc-500">
            First post lands this week.
          </p>
        ) : (
          <ul className="divide-y divide-zinc-200 border-y border-zinc-200">
            {sorted.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-2 py-5 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <div className="space-y-1">
                    <h2 className="text-base font-medium text-zinc-900 transition-colors group-hover:text-zinc-600">
                      {post.title}
                      {post.status === 'draft' && (
                        <span className="ml-2 rounded-full bg-amber-50 px-2 py-0.5 align-middle text-xs font-medium text-amber-800 ring-1 ring-inset ring-amber-600/20">
                          Outline
                        </span>
                      )}
                    </h2>
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {post.description}
                    </p>
                  </div>
                  <time
                    dateTime={post.date}
                    className="shrink-0 text-xs tabular-nums text-zinc-500 sm:text-sm"
                  >
                    {dateFormatter.format(new Date(post.date))}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <EmailCapture />
    </div>
  )
}
