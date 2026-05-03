import Link from 'next/link'

export const socials = [
  { label: 'GitHub', href: 'https://github.com/winsley-jeune' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/winsleyjeune/' },
  { label: 'X', href: 'https://x.com/winsleyjeune' },
  { label: 'Email', href: 'mailto:jeunewinsley9@gmail.com' },
  { label: 'Résumé', href: '/resume.pdf' },
  { label: 'RSS', href: '/feed.xml' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-zinc-200/80">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500">
          © {year} Winsley Jeune. Built in public.
        </p>

        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {socials.map(({ label, href }) => {
            const external = href.startsWith('http')
            return (
              <li key={label}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
                  >
                    {label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
