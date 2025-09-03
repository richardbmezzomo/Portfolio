import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 h-16 border-t border-slate-700/80 bg-slate-900/80 text-slate-500 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="mx-auto flex h-full items-center justify-between lg:justify-normal">
        {/* Texto à esquerda */}
        <span className="flex h-full items-center border-r border-slate-700/80 px-6 font-mono text-slate-400">
          me encontre em:
        </span>

        {/* Ícones desktop */}
        <nav className="hidden h-full flex-1 items-center justify-between lg:flex">
          <div className="flex h-full items-center">
            <Link
              href="https://twitter.com/richardbmezzomo"
              target="_blank"
              className="flex h-full items-center border-r border-slate-700/80 px-4 transition-colors hover:text-cyan-400"
            >
              <RiTwitterXFill size={22} />
            </Link>
            <Link
              href="https://linkedin.com/in/richardbmezzomo"
              target="_blank"
              className="flex h-full items-center border-r border-slate-700/80 px-4 transition-colors hover:text-cyan-400"
            >
              <RiLinkedinFill size={22} />
            </Link>
          </div>
          <Link
            href="https://github.com/richardbmezzomo"
            target="_blank"
            className="transition-colors hover:text-cyan-400 flex items-center gap-2 pr-6"
          >
            <p>@richardbmezzomo</p>
            <RiGithubFill size={22} />
          </Link>
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-4 pr-6 lg:hidden">
          <Link
            href="https://twitter.com/seuUser"
            target="_blank"
            className="transition-colors hover:text-cyan-400"
          >
            <RiTwitterXFill size={22} />
          </Link>
          <Link
            href="https://linkedin.com/in/richardbmezzomo"
            target="_blank"
            className="transition-colors hover:text-cyan-400"
          >
            <RiLinkedinFill size={22} />
          </Link>
          <Link
            href="https://github.com/richardbmezzomo"
            target="_blank"
            className=" transition-colors hover:text-cyan-400"
          >
            <RiGithubFill size={22} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
