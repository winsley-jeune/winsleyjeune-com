import Link from 'next/link'

type Status = 'live' | 'shipping' | 'next' | 'on-deck'

const statusStyle: Record<Status, string> = {
  live: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  shipping: 'bg-amber-50 text-amber-800 ring-amber-600/20',
  next: 'bg-zinc-100 text-zinc-700 ring-zinc-600/20',
  'on-deck': 'bg-zinc-100 text-zinc-600 ring-zinc-500/20',
}

const statusLabel: Record<Status, string> = {
  live: 'Live',
  shipping: 'Currently shipping',
  next: 'Shipping next',
  'on-deck': 'On deck',
}

export type Project = {
  title: string
  description: string
  tags?: string[]
  status?: Status
  href?: string
  repo?: string
  demo?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, status, href, repo, demo } = project

  const Title = href ? (
    <Link
      href={href}
      className="font-medium text-zinc-900 transition-colors group-hover:text-zinc-600"
    >
      {title}
    </Link>
  ) : (
    <span className="font-medium text-zinc-900">{title}</span>
  )

  return (
    <article className="group rounded-xl border border-zinc-200 bg-white p-5 transition-colors hover:border-zinc-300">
      <header className="flex items-start justify-between gap-4">
        <h3 className="text-base">{Title}</h3>
        {status && (
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${statusStyle[status]}`}
          >
            {statusLabel[status]}
          </span>
        )}
      </header>

      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
        {description}
      </p>

      {tags && tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-md bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
            >
              {t}
            </li>
          ))}
        </ul>
      )}

      {(repo || demo) && (
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-zinc-500 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline"
            >
              GitHub →
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-zinc-500 underline-offset-4 transition-colors hover:text-zinc-900 hover:underline"
            >
              Live demo →
            </a>
          )}
        </div>
      )}
    </article>
  )
}
