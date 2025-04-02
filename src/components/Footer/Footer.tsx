import { RiGithubFill, RiLinkedinFill, RiTwitterXFill } from 'react-icons/ri'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full rounded-b-lg border border-x border-t border-slate-700 bg-slate-900 text-slate-500">
      <div className="flex items-center justify-between lg:hidden">
        <span className=" px-6 py-4 font-mono">
          me encontre em:
        </span>
        <div className="flex items-center divide-x divide-slate-700">
          <Link href={''} className="px-6 py-4 border-l border-slate-700">
            <RiTwitterXFill size={24} />
          </Link>
          <Link href={''} className="px-6 py-4">
            <RiLinkedinFill size={24} />
          </Link>
          <Link href={''} className="px-6 py-4">
            <RiGithubFill size={24} />
          </Link>
        </div>
      </div>

      <div className="hidden items-center justify-between lg:flex">
        <div className="flex items-center">
          <span className="border-r border-slate-700 px-6 py-4 font-mono">
            me encontre em:
          </span>
          <div className="flex items-center divide-x divide-slate-700">
            <Link href={''} className="px-6 py-4">
              <RiTwitterXFill size={24} />
            </Link>
            <Link href={''} className="px-6 py-4 border-r border-slate-700">
              <RiLinkedinFill size={24} />
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 border-l border-slate-700 px-6 py-4">
          <span className="font-mono text-sm">@richardbmezzomo</span>
          <Link href={''}>
            <RiGithubFill size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
