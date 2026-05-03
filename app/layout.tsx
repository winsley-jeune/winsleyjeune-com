import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

const siteUrl = 'https://winsleyjeune.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Winsley Jeune — Applied AI Engineer',
    template: '%s — Winsley Jeune',
  },
  description:
    'Full-stack engineer building applied AI systems. Shipping scrapers, RAG, and agents in public.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Winsley Jeune',
    title: 'Winsley Jeune — Applied AI Engineer',
    description:
      'Full-stack engineer building applied AI systems. Shipping scrapers, RAG, and agents in public.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@winsleyjeune',
    title: 'Winsley Jeune — Applied AI Engineer',
    description:
      'Full-stack engineer building applied AI systems. Shipping scrapers, RAG, and agents in public.',
  },
  alternates: {
    canonical: siteUrl,
    types: { 'application/rss+xml': '/feed.xml' },
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col bg-white font-sans text-zinc-900 antialiased">
        <Nav />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
