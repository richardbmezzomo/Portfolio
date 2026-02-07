'use client'

import { Files, Settings, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ActivityPanel } from './types'

interface ActivityBarProps {
  panels: ActivityPanel[]
  activePanel: string
  onPanelChange: (panelId: string) => void
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  files: Files,
  settings: Settings,
  user: User,
}

export function ActivityBar({
  panels,
  activePanel,
  onPanelChange,
}: ActivityBarProps) {
  const topPanels = panels.filter((p) => p.position !== 'bottom')
  const bottomPanels = panels.filter((p) => p.position === 'bottom')

  const renderButton = (panel: ActivityPanel) => {
    const Icon = iconMap[panel.icon] || Files
    const isActive = activePanel === panel.id

    return (
      <button
        key={panel.id}
        onClick={() => onPanelChange(panel.id)}
        title={panel.label}
        className={cn(
          'flex h-12 w-full items-center justify-center transition-colors',
          isActive
            ? 'border-l-2 border-l-cyan-400 bg-slate-800/50 text-slate-100'
            : 'border-l-2 border-l-transparent text-slate-500 hover:bg-slate-800/30 hover:text-slate-300',
        )}
      >
        <Icon className="h-5 w-5" />
      </button>
    )
  }

  return (
    <aside className="flex h-full w-12 flex-col justify-between border-r border-slate-700/80 bg-slate-900">
      <div>{topPanels.map(renderButton)}</div>
      <div>{bottomPanels.map(renderButton)}</div>
    </aside>
  )
}
