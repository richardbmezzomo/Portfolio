'use client'

import { useState } from 'react'
import Link from 'next/link'
import MenuIcon from '../icons/MenuIcon'
import CloseIcon from '../icons/CloseIcon'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full rounded-t-lg border-x border-t border-slate-700 bg-slate-900 text-slate-500">
      <div className="mx-auto flex lg:gap-12 items-center justify-between lg:justify-normal border-b border-slate-700">
        <span className="px-6 py-4 text-slate-400">
          richard_b_mezzomo
        </span>

        {/* Menu desktop */}
        <nav className="hidden lg:flex flex-1">
          <Link
            href={'#hello'}
            className="lg:px-8 md:py-4 border-b-2 border-transparent transition-all hover:border-cyan-400"
          >
            _hello
          </Link>
          <Link
            href={'#about'}
            className="lg:px-8 md:py-4 border-b-2 border-transparent transition-all hover:border-cyan-400"
          >
            _sobre-mim
          </Link>
          <Link
            href={'#projects'}
            className="lg:px-8 md:py-4 border-b-2 border-transparent transition-all hover:border-cyan-400"
          >
            _projetos
          </Link>

        </nav>

        <div className='hidden lg:block'>
          <Link
            href={'#contacts'}
            className="lg:px-8 md:py-4 border-b-2 border-transparent transition-all hover:border-cyan-400"
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
