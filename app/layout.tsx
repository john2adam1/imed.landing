import type { Metadata } from 'next'
import './globals.css'
import { site } from '@/lib/content'

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: { icon: site.logo },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz">
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  )
}
