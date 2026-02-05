'use client'

import { useState } from 'react'
import { ChevronRight, Folder, FileText, Mail } from 'lucide-react'
import { AboutGroup } from './types'

const folderColors: Record<string, string> = {
  pessoal: 'text-orange-400',
  profissional: 'text-green-400',
}

function getFolderColor(sectionId: string): string {
  return folderColors[sectionId] || 'text-slate-500'
}
import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FaMarkdown } from 'react-icons/fa6'

interface SidebarProps {
  groups: AboutGroup[]
  activeItem: string | null
  onItemClick: (itemId: string) => void
}

export function Sidebar({ groups, activeItem, onItemClick }: SidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>(
    groups.flatMap((g) => g.sections?.map((s) => s.id) || []),
  )

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    )
  }

  return (
    <aside className="h-full overflow-y-auto border-r border-slate-700/80 bg-slate-900/50">
      <Accordion
        type="multiple"
        defaultValue={groups.map((g) => g.id)}
        className="w-full"
      >
        {groups.map((group) => (
          <AccordionItem
            key={group.id}
            value={group.id}
            className="border-b border-slate-700/80"
          >
            <AccordionTrigger className="px-4 py-2 text-sm text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:no-underline">
              {group.label}
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              {group.sections ? (
                <nav className="py-1">
                  {group.sections.map((section) => {
                    const isOpen = openSections.includes(section.id)

                    return (
                      <div key={section.id}>
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="flex w-full items-center gap-2 px-4 py-1.5 text-sm text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-slate-200"
                        >
                          <ChevronRight
                            className={cn(
                              'h-4 w-4 transition-transform',
                              isOpen && 'rotate-90',
                            )}
                          />
                          <Folder
                            className={cn(
                              'h-4 w-4',
                              getFolderColor(section.id),
                            )}
                          />
                          <span>{section.label}</span>
                        </button>

                        {isOpen && (
                          <div className="ml-4">
                            {section.items.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => onItemClick(item.id)}
                                className={cn(
                                  'flex w-full items-center gap-2 border-l-2 py-1.5 pr-4 pl-6 text-sm transition-colors',
                                  activeItem === item.id
                                    ? 'border-l-cyan-400 bg-slate-800/30 text-slate-100'
                                    : 'border-l-transparent text-slate-500 hover:bg-slate-800/30 hover:text-slate-300',
                                )}
                              >
                                <FaMarkdown className="h-4 w-4" />
                                <span>{item.label}</span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </nav>
              ) : group.email ? (
                <div className="py-1 pl-6">
                  <a
                    href={`mailto:${group.email}`}
                    className="flex items-center gap-2 py-1.5 text-sm text-slate-400 transition-colors hover:text-slate-200"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{group.email}</span>
                  </a>
                </div>
              ) : group.items ? (
                <nav className="py-1">
                  {group.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onItemClick(item.id)}
                      className={cn(
                        'flex w-full items-center gap-2 border-l-2 py-1.5 pr-4 pl-8 text-sm transition-colors',
                        activeItem === item.id
                          ? 'border-l-cyan-400 bg-slate-800/30 text-slate-100'
                          : 'border-l-transparent text-slate-500 hover:bg-slate-800/30 hover:text-slate-300',
                      )}
                    >
                      <FileText className="h-4 w-4" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              ) : null}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  )
}
