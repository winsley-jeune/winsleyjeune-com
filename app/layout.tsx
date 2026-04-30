import type { Metadata } from 'next'
import './globals.css'
import Nav from './components/Nav'

export const metadata: Metadata = {
  title: 'Winsley Jeune',
  description: 'My learning journey from software engineering to AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 antialiased">
        <Nav />
        <main className="mx-auto max-w-3xl px-6 py-12">{children}</main>
      </body>
    </html>
  )
}
