'use client'

import { useState } from 'react'
import { ChevronRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { languageColors } from '@/data/projectsData'

interface FilterSidebarProps {
  languages: string[]
  selectedLanguages: string[]
  onFilterChange: (languages: string[]) => void
}

export function FilterSidebar({
  languages,
  selectedLanguages,
  onFilterChange,
}: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleLanguage = (language: string) => {
    if (selectedLanguages.includes(language)) {
      onFilterChange(selectedLanguages.filter((l) => l !== language))
    } else {
      onFilterChange([...selectedLanguages, language])
    }
  }

  return (
    <aside className="h-full overflow-y-auto border-r border-slate-700/80 bg-slate-900/50">
      <div className="border-b border-slate-700/80 px-4 py-3">
        <span className="text-sm text-slate-400">_projetos</span>
      </div>

      <div className="border-b border-slate-700/80">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
        >
          <ChevronRight
            className={cn(
              'h-4 w-4 transition-transform',
              isOpen && 'rotate-90'
            )}
          />
          <span>linguagens</span>
        </button>

        {isOpen && (
          <div className="pb-2">
            {languages.map((language) => {
              const isSelected = selectedLanguages.includes(language)
              const colorClass = languageColors[language] || 'bg-slate-500'

              return (
                <button
                  key={language}
                  onClick={() => toggleLanguage(language)}
                  className="flex w-full items-center gap-3 px-6 py-1.5 text-sm text-slate-400 transition-colors hover:bg-slate-800/50 hover:text-slate-200"
                >
                  <div
                    className={cn(
                      'flex h-4 w-4 items-center justify-center rounded border transition-colors',
                      isSelected
                        ? 'border-cyan-400 bg-cyan-400'
                        : 'border-slate-600 bg-transparent'
                    )}
                  >
                    {isSelected && <Check className="h-3 w-3 text-slate-900" />}
                  </div>
                  <span
                    className={cn('h-3 w-3 rounded-full', colorClass)}
                  />
                  <span>{language}</span>
                </button>
              )
            })}
          </div>
        )}
      </div>
    </aside>
  )
}
