'use client'

import { useState } from 'react'
import Link from 'next/link'
import MenuIcon from '../icons/MenuIcon'
import CloseIcon from '../icons/CloseIcon'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#hello')

  const handleActiveLink = (href: string) => {
    return `border-b-2 transition-all md:py-4 lg:px-8 ${
      activeLink === href
        ? 'border-b-cyan-400 text-slate-100'
        : 'border-transparent hover:border-b-cyan-400'
    }`
  }

  return (
    <header className="w-full rounded-t-lg border-x border-t border-slate-700 bg-slate-900 text-slate-500">
      <div className="mx-auto flex items-center justify-between border-b border-slate-700 lg:justify-normal lg:gap-12">
        <span className="px-6 py-4 text-slate-400">richard_b_mezzomo</span>

        {/* Menu desktop */}
        <nav className="hidden flex-1 lg:flex">
          <Link
            href={'#hello'}
            onClick={() => setActiveLink('#hello')}
            className={handleActiveLink('#hello')}
          >
            _hello
          </Link>
          <Link
            href={'#about'}
            onClick={() => setActiveLink('#about')}
            className={handleActiveLink('#about')}
          >
            _sobre-mim
          </Link>
          <Link
            href={'#projects'}
            onClick={() => setActiveLink('#projects')}
            className={handleActiveLink('#projects')}
          >
            _projetos
          </Link>
        </nav>

        <div className="hidden lg:flex">
          <Link
            href={'#contacts'}
            onClick={() => setActiveLink("#contacts")}
            className={handleActiveLink("#contacts")}
          >
            _contate-me
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="pr-6 lg:hidden">
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="bg-slate-900 lg:hidden">
          <p className="mt-3 border-b border-slate-700 py-3 pl-6 text-slate-400">
            # navigate:
          </p>
          <nav className="flex flex-col">
            <Link
              href={'#hello'}
              onClick={() => setIsOpen(false)}
              className="border-b border-slate-700 py-3 pl-6 text-slate-50 transition-colors hover:text-cyan-400"
            >
              _hello
            </Link>
            <Link
              href={'#about'}
              onClick={() => setIsOpen(false)}
              className="border-b border-slate-700 py-3 pl-6 text-slate-50 transition-colors hover:text-cyan-400"
            >
              _sobre-mim
            </Link>
            <Link
              href={'#projects'}
              onClick={() => setIsOpen(false)}
              className="border-b border-slate-700 py-3 pl-6 text-slate-50 transition-colors hover:text-cyan-400"
            >
              _projetos
            </Link>
            <Link
              href={'#contacts'}
              onClick={() => setIsOpen(false)}
              className="border-b border-slate-700 py-3 pl-6 text-slate-50 transition-colors hover:text-cyan-400"
            >
              _contate-me
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
