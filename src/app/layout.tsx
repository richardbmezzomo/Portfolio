import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Richard B Mezzomo',
  description: 'Portfolio',
}

import { Fira_Code } from 'next/font/google'
import Container from '@/components/Container/Container'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body className={`${firaCode.className} bg-slate-950`}>
        {/* Header fixo, full-width; o próprio Header deve conter <Container> internamente */}
        <Header />

        {/* Conteúdo compensa header e footer fixos */}
        <main className="">
          <Container>{children}</Container>
        </main>

        {/* Footer fixo, full-width; o próprio Footer deve conter <Container> internamente */}
        <Footer />
      </body>
    </html>
  )
}
