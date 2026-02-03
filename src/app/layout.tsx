// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import { Fira_Code } from 'next/font/google'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Richard B Mezzomo',
  description: 'Portfolio',
}

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="overflow-x-clip">
      <body className={`${firaCode.className} bg-slate-950`}>
        <Header />
        <main className="min-h-[calc(100svh-8rem)] pt-15 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
