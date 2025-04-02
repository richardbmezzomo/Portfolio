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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${firaCode.className} bg-slate-950`}>
        <Container>
          <Header />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  )
}
