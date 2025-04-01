import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Richard B Mezzomo",
  description: "Portfolio",
};

// src/app/layout.tsx
import { Fira_Code } from 'next/font/google'
import Container from "@/components/Container/Container";

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${firaCode.className} bg-slate-950`}>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
