'use client'

import { useState } from 'react'
import { ChevronRight, Folder, FileText } from 'lucide-react'
import { AboutSection } from './types'
import { cn } from '@/lib/utils'

interface SidebarProps {
  sections: AboutSection[]
  activeItem: string | null
  onItemClick: (itemId: string) => void
}

export function Sidebar({ sections, activeItem, onItemClick }: SidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>(
    sections.map((s) => s.id)
  )

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  return (
    <aside className="h-full border-r border-slate-700/80 bg-slate-900/50">
      <div className="border-b border-slate-700/80 px-4 py-3">
        <span className="text-sm text-slate-400">_sobre-mim</span>
      </div>

      <nav className="py-2">
        {sections.map((section) => {
          const isOpen = openSections.includes(section.id)

          return (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="flex w-full items-center gap-2 px-4 py-2 text-sm text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-slate-200"
              >
                <ChevronRight
                  className={cn(
                    'h-4 w-4 transition-transform',
                    isOpen && 'rotate-90'
                  )}
                />
                <Folder className="h-4 w-4 text-slate-500" />
                <span>{section.label}</span>
              </button>

              {isOpen && (
                <div className="ml-4">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onItemClick(item.id)}
                      className={cn(
                        'flex w-full items-center gap-2 border-l-2 py-2 pl-6 pr-4 text-sm transition-colors',
                        activeItem === item.id
                          ? 'border-l-cyan-400 bg-slate-800/30 text-slate-100'
                          : 'border-l-transparent text-slate-500 hover:bg-slate-800/30 hover:text-slate-300'
                      )}
                    >
                      <FileText className="h-4 w-4" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
