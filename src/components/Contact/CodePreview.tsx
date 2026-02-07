'use client'

import { useMemo } from 'react'

interface CodePreviewProps {
  name: string
  email: string
  message: string
}

function Line({ num, children }: { num: number; children?: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="inline-block w-10 shrink-0 pr-4 text-right text-slate-600 select-none">
        {num}
      </span>
      <span className="break-all whitespace-pre-wrap">{children}</span>
    </div>
  )
}

export function CodePreview({ name, email, message }: CodePreviewProps) {
  const dateStr = useMemo(() => {
    const today = new Date()
    return today.toLocaleDateString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    })
  }, [])

  const codeLineCount = 12
  const totalLines = 13

  return (
    <div className="flex h-full w-full flex-col overflow-hidden py-4 font-mono text-base leading-6">
      <Line num={1}>
        <span className="text-indigo-400">const </span>
        <span className="text-teal-300">button</span>
        <span className="text-slate-300"> = </span>
        <span className="text-slate-300">document.</span>
        <span className="text-teal-300">querySelector</span>
        <span className="text-slate-300">(</span>
        <span className="text-amber-300">&quot;#sendBtn&quot;</span>
        <span className="text-slate-300">);</span>
      </Line>

      <Line num={2} />

      <Line num={3}>
        <span className="text-indigo-400">const </span>
        <span className="text-teal-300">message</span>
        <span className="text-slate-300"> = {'{'}</span>
      </Line>

      <Line num={4}>
        <span className="text-slate-300">{'  '}name: </span>
        <span className="text-amber-300">&quot;{name}&quot;</span>
        <span className="text-slate-300">,</span>
      </Line>

      <Line num={5}>
        <span className="text-slate-300">{'  '}email: </span>
        <span className="text-amber-300">&quot;{email}&quot;</span>
        <span className="text-slate-300">,</span>
      </Line>

      <Line num={6}>
        <span className="text-slate-300">{'  '}message: </span>
        <span className="text-amber-300">&quot;{message}&quot;</span>
        <span className="text-slate-300">,</span>
      </Line>

      <Line num={7}>
        <span className="text-slate-300">{'  '}date: </span>
        <span className="text-amber-300">&quot;{dateStr}&quot;</span>
      </Line>

      <Line num={8}>
        <span className="text-slate-300">{'}'};</span>
      </Line>

      <Line num={9} />

      <Line num={10}>
        <span className="text-slate-300">button.</span>
        <span className="text-teal-300">addEventListener</span>
        <span className="text-slate-300">(</span>
        <span className="text-amber-300">&quot;click&quot;</span>
        <span className="text-slate-300">{', () => {'}</span>
      </Line>

      <Line num={11}>
        <span className="text-slate-300">{'  '}form.</span>
        <span className="text-teal-300">send</span>
        <span className="text-slate-300">(message);</span>
      </Line>

      <Line num={12}>
        <span className="text-slate-300">{'}'});</span>
      </Line>

      {Array.from({ length: totalLines - codeLineCount }, (_, i) => (
        <Line key={i + codeLineCount + 1} num={i + codeLineCount + 1} />
      ))}
    </div>
  )
}
