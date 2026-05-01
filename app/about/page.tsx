import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Winsley Jeune',
  description: 'About Winsley Jeune — software engineer learning in public.',
}

export default function Page() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          About
        </h1>
        <p className="text-lg text-zinc-600">
          Software engineer focused on AI — here&apos;s the longer version.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
          Background
        </h2>
        <p className="text-zinc-600">
          [TODO: A paragraph about where you started — schooling, first jobs,
          the stacks and languages you&apos;ve worked in, what kind of products
          you&apos;ve shipped.]
        </p>
        <p className="text-zinc-600">
          [TODO: A second paragraph about what pulled you toward AI and what
          you&apos;ve been building or studying since.]
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
          What I&apos;m exploring now
        </h2>
        <p className="text-zinc-600">
          [TODO: 2–3 sentences on current focus — e.g., LLM agents, RAG, evals,
          fine-tuning — and the kind of problems you&apos;d love to work on next.]
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
          Outside of code
        </h2>
        <p className="text-zinc-600">
          [TODO: Optional — a short, human paragraph. Hobbies, what you read,
          where you&apos;re based. Future employers like seeing a person, not
          just a resume.]
        </p>
      </section>
    </div>
  )
}
