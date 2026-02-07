'use client'

import { useState } from 'react'
import { ChevronRight, FileJson, Terminal, Monitor, Cpu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { VscVscode } from 'react-icons/vsc'
import {
  SiZedindustries,
  SiGhostery,
  SiAlacritty,
  SiArchlinux,
  SiStarship,
} from 'react-icons/si'

export interface SettingsFile {
  id: string
  label: string
  icon: string
  gistUrl?: string
  content?: string
}

export interface SettingsGroup {
  id: string
  label: string
  files: SettingsFile[]
}

interface SettingsPanelProps {
  groups: SettingsGroup[]
  activeItem: string | null
  onItemClick: (file: SettingsFile) => void
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  vscode: VscVscode,
  zed: SiZedindustries,
  ghostty: SiGhostery,
  alacritty: SiAlacritty,
  archlinux: SiArchlinux,
  starship: SiStarship,
  monitor: Monitor,
  cpu: Cpu,
  json: FileJson,
}

const iconColors: Record<string, string> = {
  vscode: 'text-blue-400',
  zed: 'text-orange-400',
  ghostty: 'text-purple-400',
  alacritty: 'text-orange-500',
  archlinux: 'text-cyan-400',
  starship: 'text-pink-400',
  monitor: 'text-slate-400',
  cpu: 'text-red-400',
  json: 'text-yellow-400',
}

export function SettingsPanel({
  groups,
  activeItem,
  onItemClick,
}: SettingsPanelProps) {
  const [openGroups, setOpenGroups] = useState<string[]>(
    groups.map((g) => g.id),
  )

  const toggleGroup = (groupId: string) => {
    setOpenGroups((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId],
    )
  }

  return (
    <aside className="h-full overflow-y-auto border-r border-slate-700/80 bg-slate-900/50">
      {groups.map((group) => {
        const isOpen = openGroups.includes(group.id)

        return (
          <div key={group.id} className="border-b border-slate-700/80">
            <button
              onClick={() => toggleGroup(group.id)}
              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
            >
              <ChevronRight
                className={cn(
                  'h-4 w-4 transition-transform',
                  isOpen && 'rotate-90',
                )}
              />
              <span>{group.label}</span>
            </button>

            {isOpen && (
              <nav className="py-1">
                {group.files.map((file) => {
                  const Icon = iconMap[file.icon] || FileJson

                  return (
                    <button
                      key={file.id}
                      onClick={() => onItemClick(file)}
                      className={cn(
                        'flex w-full items-center gap-2 border-l-2 py-1.5 pr-4 pl-6 text-sm transition-colors',
                        activeItem === file.id
                          ? 'border-l-cyan-400 bg-slate-800/30 text-slate-100'
                          : 'border-l-transparent text-slate-500 hover:bg-slate-800/30 hover:text-slate-300',
                      )}
                    >
                      <Icon className={cn('h-4 w-4', iconColors[file.icon])} />
                      <span>{file.label}</span>
                    </button>
                  )
                })}
              </nav>
            )}
          </div>
        )
      })}
    </aside>
  )
}
