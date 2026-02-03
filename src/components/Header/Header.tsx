'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import MenuIcon from '../icons/MenuIcon'
import CloseIcon from '../icons/CloseIcon'
import { createPortal } from 'react-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // (opcional) trava o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleActiveLink = (href: string) =>
    `border-b-2 border-solid transition-all md:py-4 lg:px-8 ${
      pathname === href
        ? 'border-b-cyan-400 text-slate-100'
        : 'border-b-transparent hover:border-b-cyan-400'
    }`

  return (
    <header
      // header FIXO no topo, cobrindo o conteúdo
      className="fixed inset-x-0 top-0 z-50 h-16 border-b border-slate-700/80 bg-slate-900/80 text-slate-500 backdrop-blur supports-backdrop-filter:bg-slate-900/60"
    >
      <div className="mx-auto flex h-full items-center justify-between lg:justify-normal lg:gap-12">
        <span className="px-6 text-slate-400">richard_b_mezzomo</span>

        {/* Menu desktop */}
        <nav className="hidden flex-1 lg:flex">
          <Link href="/" className={handleActiveLink('/')}>
            _hello
          </Link>
          <Link href="/about" className={handleActiveLink('/about')}>
            _sobre-mim
          </Link>
          <Link href="/projects" className={handleActiveLink('/projects')}>
            _projetos
          </Link>
        </nav>

        <div className="hidden lg:flex">
          <Link href="/contact" className={handleActiveLink('/contact')}>
            _contate-me
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pr-6 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label="Abrir menu"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu: overlay em tela cheia (abaixo do header) */}
      {isOpen &&
        createPortal(
          <div
            id="mobile-nav"
            className="fixed inset-x-0 top-16 bottom-0 z-60 animate-[fadeIn_150ms_ease-out] overflow-y-auto border-t border-slate-800 bg-slate-900 lg:hidden"
          >
            <p className="px-6 pt-4 pb-3 text-slate-400"># navigate:</p>
            <nav className="flex flex-col">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-800 py-4 pl-6 text-slate-50 hover:text-cyan-400"
              >
                _hello
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-800 py-4 pl-6 text-slate-50 hover:text-cyan-400"
              >
                _sobre-mim
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-800 py-4 pl-6 text-slate-50 hover:text-cyan-400"
              >
                _projetos
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="border-b border-slate-800 py-4 pl-6 text-slate-50 hover:text-cyan-400"
              >
                _contate-me
              </Link>
            </nav>
          </div>,
          document.body,
        )}
    </header>
  )
}
