'use client'

import { useState } from 'react'
import Link from 'next/link'
import MenuIcon from '../icons/MenuIcon'
import CloseIcon from '../icons/CloseIcon'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full rounded-t-lg border-x border-t border-slate-700 bg-slate-900 text-slate-500">
      <div className="mx-auto flex items-center justify-between border-b border-slate-700 lg:justify-normal lg:gap-12">
        <span className="px-6 py-4 text-slate-400">richard_b_mezzomo</span>

        {/* Menu desktop */}
        <nav className="hidden flex-1 lg:flex">
          <Link
            href={'#hello'}
            className="border-b-2 border-transparent transition-all hover:border-b-cyan-400 md:py-4 lg:border-l-1 lg:border-l-slate-700 lg:px-8"
          >
            _hello
          </Link>
          <Link
            href={'#about'}
            className="border-b-2 border-transparent transition-all hover:border-b-cyan-400 md:py-4 lg:px-8 lg:border-x-1 lg:border-x-slate-700"
          >
            _sobre-mim
          </Link>
          <Link
            href={'#projects'}
            className="border-b-2 border-transparent transition-all hover:border-b-cyan-400 md:py-4 lg:px-8 lg:border-r-1 lg:border-r-slate-700 "
          >
            _projetos
          </Link>
        </nav>

        <div className="hidden lg:flex">
          <Link
            href={'#contacts'}
            className="border-b-2 border-transparent transition-all hover:border-b-cyan-400 md:py-4 lg:border-l-1 lg:border-l-slate-700 lg:px-8"
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
