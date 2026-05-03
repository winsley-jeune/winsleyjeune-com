export default function EmailCapture({
  heading = 'Get new posts in your inbox',
  description = 'Notes on shipping applied AI: scrapers, RAG, agents, evals. No fluff.',
}: {
  heading?: string
  description?: string
}) {
  return (
    <section
      aria-labelledby="email-capture"
      className="rounded-xl border border-zinc-200 bg-zinc-50/60 p-6 sm:p-7"
    >
      <h2
        id="email-capture"
        className="text-base font-medium tracking-tight text-zinc-900"
      >
        {heading}
      </h2>
      <p className="mt-1 text-sm text-zinc-600">{description}</p>

      <form
        action="#"
        method="post"
        className="mt-4 flex flex-col gap-2 sm:flex-row"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@domain.com"
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-zinc-900 focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
        >
          Subscribe
        </button>
      </form>

      <p className="mt-2 text-xs text-zinc-500">
        One email per post. Unsubscribe anytime.
      </p>
    </section>
  )
}
