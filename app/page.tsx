import Image from 'next/image'
import Link from 'next/link'

const socials = [
  { label: 'GitHub', href: 'https://github.com/[TODO]' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/[TODO]' },
  { label: 'X', href: 'https://x.com/[TODO]' },
  { label: 'Email', href: 'mailto:jeunewinsley9@gmail.com' },
]

export default function Page() {
  return (
    <div className="space-y-16">
      <section className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Hi, I&apos;m Winsley
          </h1>
          <p className="text-lg text-zinc-600">
            Software engineer learning in public — sharing my journey from building
            software to building with AI.
          </p>
          <p className="text-zinc-600">
            After years of buiding and shiping new software assitign users in their jobs, I&apos;m now focused on building AI-powered solutions to help businesses grow.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/blog"
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              Read the blog
            </Link>
            <Link
              href="/projects"
              className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:border-zinc-900"
            >
              See my work
            </Link>
            <Link
              href="/about"
              className="rounded-md px-4 py-2 text-sm font-medium text-zinc-700 transition hover:text-zinc-900"
            >
              More about me →
            </Link>
          </div>
        </div>
        <div className="shrink-0">
          <Image
            src="/winsleyjeune.jpeg"
            alt="Winsley Jeune"
            width={140}
            height={140}
            priority
            className="rounded-full border border-zinc-200 object-cover"
          />
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
            Recent projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-zinc-500 transition hover:text-zinc-900"
          >
            All projects →
          </Link>
        </div>
        <p className="rounded-lg border border-dashed border-zinc-300 p-5 text-sm text-zinc-500">
        AI-powered web scraper
        </p>
      </section>

      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
            Latest writing
          </h2>
          <Link
            href="/blog"
            className="text-sm text-zinc-500 transition hover:text-zinc-900"
          >
            All posts →
          </Link>
        </div>
        <p className="rounded-lg border border-dashed border-zinc-300 p-5 text-sm text-zinc-500">
          First post coming soon.
        </p>
      </section>

      <section className="space-y-4   pt-8">
      
       
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                className="text-sm text-zinc-600 underline-offset-4 transition hover:text-zinc-900 hover:underline"
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
