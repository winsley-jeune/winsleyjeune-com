export type Post = {
  slug: string
  title: string
  description: string
  date: string
  status: 'published' | 'draft'
  body: string
}

export const posts: Post[] = [
  {
    slug: 'macbook-setup-for-ai-engineering-2026',
    title: 'How I Set Up My MacBook for AI Engineering in 2026',
    description:
      'A minimal, opinionated setup for building applied AI: Homebrew, Cursor, Claude API, Docker, Node, Python, pyenv — and the defaults I changed.',
    date: '2026-05-03',
    status: 'draft',
    body: `Outline (publishing soon):

— The 12 tools I install on day one and why.
— My terminal setup: zsh, starship, the dotfiles I keep across machines.
— Python: pyenv + uv, not pip + venv. The reasons.
— Node: pnpm, corepack, why I stopped using nvm aliases.
— Cursor + Claude Code: what each is good at, and how I keep them from stepping on each other.
— Anthropic API key handling: 1Password, direnv, and never .env in a public repo.
— Docker only when I need it. The defaults that bite you on Apple Silicon.
— What I removed compared to last year's setup.`,
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug)
}
