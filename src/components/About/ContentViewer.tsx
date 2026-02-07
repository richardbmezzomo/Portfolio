'use client'

import { X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { AboutItem } from './types'
import { cn } from '@/lib/utils'

interface Tab {
  item: AboutItem
  sectionLabel: string
}

interface ContentViewerProps {
  tabs: Tab[]
  activeTabId: string | null
  onTabClick: (itemId: string) => void
  onTabClose: (itemId: string) => void
}

export function ContentViewer({
  tabs,
  activeTabId,
  onTabClick,
  onTabClose,
}: ContentViewerProps) {
  const activeTab = tabs.find((t) => t.item.id === activeTabId)

  if (tabs.length === 0) {
    return (
      <div className="flex h-full items-center justify-center text-slate-500">
        <p>Selecione um arquivo na sidebar</p>
      </div>
    )
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center border-b border-slate-700/80">
        {tabs.map((tab) => (
          <div
            key={tab.item.id}
            className={cn(
              'group flex cursor-pointer items-center gap-2 border-r border-slate-700/80 px-4 py-2 transition-colors',
              activeTabId === tab.item.id
                ? 'border-t-2 border-t-cyan-400 bg-slate-900/50 text-slate-100'
                : 'bg-slate-900/30 text-slate-500 hover:bg-slate-800/50 hover:text-slate-300',
            )}
            onClick={() => onTabClick(tab.item.id)}
          >
            <span className="text-sm">{tab.item.label}</span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onTabClose(tab.item.id)
              }}
              className="rounded p-0.5 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-slate-700"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>

      {activeTab && (
        <div className="flex-1 overflow-auto p-6">
          <article className="prose prose-invert prose-slate prose-headings:text-slate-100 prose-h1:text-2xl prose-h1:font-semibold prose-h1:border-b prose-h1:border-slate-700 prose-h1:pb-2 prose-h1:mb-4 prose-h2:text-xl prose-h2:font-medium prose-h2:text-slate-200 prose-h2:mt-6 prose-h3:text-lg prose-h3:text-slate-300 prose-p:text-slate-300 prose-p:leading-relaxed prose-strong:text-slate-100 prose-em:text-slate-400 prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-cyan-500 prose-blockquote:text-slate-400 prose-blockquote:italic prose-code:text-cyan-300 prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-transparent prose-pre:p-0 prose-ul:text-slate-300 prose-ol:text-slate-300 prose-li:marker:text-slate-500 prose-hr:border-slate-700 prose-table:text-sm prose-th:text-slate-200 prose-th:bg-slate-800/50 prose-th:px-4 prose-th:py-2 prose-td:px-4 prose-td:py-2 prose-td:text-slate-300 prose-tr:border-slate-700 max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '')
                  const isInline = !match && !className

                  if (isInline) {
                    return (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    )
                  }

                  return (
                    <SyntaxHighlighter
                      style={vscDarkPlus}
                      language={match ? match[1] : 'text'}
                      showLineNumbers
                      lineNumberStyle={{
                        minWidth: '2.5em',
                        paddingRight: '1em',
                        color: '#4a5568',
                        userSelect: 'none',
                      }}
                      customStyle={{
                        background: 'rgba(15, 23, 42, 0.5)',
                        borderRadius: '0.5rem',
                        padding: '1rem',
                        fontSize: '0.875rem',
                        lineHeight: '1.625',
                      }}
                    >
                      {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                  )
                },
              }}
            >
              {activeTab.item.content}
            </ReactMarkdown>
          </article>
        </div>
      )}
    </div>
  )
}
