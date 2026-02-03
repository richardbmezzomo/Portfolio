'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/About/Sidebar'
import { ContentViewer } from '@/components/About/ContentViewer'
import { aboutData } from '@/data/aboutData'
import { AboutItem } from '@/components/About/types'

interface OpenTab {
  item: AboutItem
  sectionLabel: string
}

export default function About() {
  const [openTabs, setOpenTabs] = useState<OpenTab[]>([])
  const [activeTabId, setActiveTabId] = useState<string | null>(null)

  const handleItemClick = (itemId: string) => {
    const alreadyOpen = openTabs.find((t) => t.item.id === itemId)

    if (alreadyOpen) {
      setActiveTabId(itemId)
      return
    }

    const section = aboutData.sections.find((s) =>
      s.items.some((item) => item.id === itemId),
    )
    const item = section?.items.find((i) => i.id === itemId)

    if (item && section) {
      setOpenTabs((prev) => [...prev, { item, sectionLabel: section.label }])
      setActiveTabId(itemId)
    }
  }

  const handleTabClose = (itemId: string) => {
    const tabIndex = openTabs.findIndex((t) => t.item.id === itemId)
    const newTabs = openTabs.filter((t) => t.item.id !== itemId)
    setOpenTabs(newTabs)

    if (activeTabId === itemId) {
      if (newTabs.length === 0) {
        setActiveTabId(null)
      } else if (tabIndex > 0) {
        setActiveTabId(newTabs[tabIndex - 1].item.id)
      } else {
        setActiveTabId(newTabs[0].item.id)
      }
    }
  }

  return (
    <div className="grid h-[calc(100svh-8rem)] grid-cols-1 lg:grid-cols-[280px_1fr]">
      <Sidebar
        sections={aboutData.sections}
        activeItem={activeTabId}
        onItemClick={handleItemClick}
      />
      <main className="overflow-hidden border-l border-slate-700/80">
        <ContentViewer
          tabs={openTabs}
          activeTabId={activeTabId}
          onTabClick={setActiveTabId}
          onTabClose={handleTabClose}
        />
      </main>
    </div>
  )
}
