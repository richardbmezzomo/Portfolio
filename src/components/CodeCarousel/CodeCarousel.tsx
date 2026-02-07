'use client'

import { useState, useEffect } from 'react'

const snippets = [
  {
    id: 1,
    code: (
      <>
        <span className="text-indigo-400">interface </span>
        <span className="text-teal-300">User</span>
        <span className="text-slate-300">{' {'}</span>
        {'\n'}
        <span className="text-slate-300">{'  '}id: </span>
        <span className="text-teal-300">string</span>
        <span className="text-slate-300">;</span>
        {'\n'}
        <span className="text-slate-300">{'  '}name: </span>
        <span className="text-teal-300">string</span>
        <span className="text-slate-300">;</span>
        {'\n'}
        <span className="text-slate-300">{'  '}email: </span>
        <span className="text-teal-300">string</span>
        <span className="text-slate-300">;</span>
        {'\n'}
        <span className="text-slate-300">{'}'}</span>
      </>
    ),
  },
  {
    id: 2,
    code: (
      <>
        <span className="text-indigo-400">export async function </span>
        <span className="text-teal-300">useFetch</span>
        <span className="text-slate-300">{'<T>(url: string) {'}</span>
        {'\n'}
        <span className="text-slate-300">{'  '}</span>
        <span className="text-indigo-400">const </span>
        <span className="text-slate-300">res = </span>
        <span className="text-indigo-400">await </span>
        <span className="text-teal-300">fetch</span>
        <span className="text-slate-300">(url);</span>
        {'\n'}
        <span className="text-slate-300">{'  '}</span>
        <span className="text-indigo-400">return </span>
        <span className="text-slate-300">res.</span>
        <span className="text-teal-300">json</span>
        <span className="text-slate-300">();</span>
        {'\n'}
        <span className="text-slate-300">{'}'}</span>
      </>
    ),
  },
  {
    id: 3,
    code: (
      <>
        <span className="text-indigo-400">const </span>
        <span className="text-teal-300">config</span>
        <span className="text-slate-300"> = {'{'}</span>
        {'\n'}
        <span className="text-slate-300">{'  '}api: </span>
        <span className="text-amber-300">'https://api.dev'</span>
        <span className="text-slate-300">,</span>
        {'\n'}
        <span className="text-slate-300">{'  '}timeout: </span>
        <span className="text-orange-400">5000</span>
        <span className="text-slate-300">,</span>
        {'\n'}
        <span className="text-slate-300">{'}'}</span>
      </>
    ),
  },
  {
    id: 4,
    code: (
      <>
        <span className="text-indigo-400">import </span>
        <span className="text-slate-300">{'{ '}</span>
        <span className="text-teal-300">NextRequest</span>
        <span className="text-slate-300">{' } '}</span>
        <span className="text-indigo-400">from </span>
        <span className="text-amber-300">'next/server'</span>
        {'\n\n'}
        <span className="text-indigo-400">export function </span>
        <span className="text-teal-300">GET</span>
        <span className="text-slate-300">(req: NextRequest) {'{'}</span>
        {'\n'}
        <span className="text-slate-300">{'  '}</span>
        <span className="text-indigo-400">return </span>
        <span className="text-teal-300">Response</span>
        <span className="text-slate-300">.</span>
        <span className="text-teal-300">json</span>
        <span className="text-slate-300">({'{ '}ok: </span>
        <span className="text-orange-400">true</span>
        <span className="text-slate-300">{' }'})</span>
        {'\n'}
        <span className="text-slate-300">{'}'}</span>
      </>
    ),
  },
  {
    id: 5,
    code: (
      <>
        <span className="text-indigo-400">type </span>
        <span className="text-teal-300">Status</span>
        <span className="text-slate-300"> = </span>
        <span className="text-amber-300">'idle'</span>
        <span className="text-slate-300"> | </span>
        <span className="text-amber-300">'loading'</span>
        <span className="text-slate-300"> | </span>
        <span className="text-amber-300">'success'</span>
        {'\n\n'}
        <span className="text-indigo-400">const </span>
        <span className="text-slate-300">[status, setStatus] = </span>
        <span className="text-teal-300">useState</span>
        <span className="text-slate-300">{'<Status>'}(</span>
        <span className="text-amber-300">'idle'</span>
        <span className="text-slate-300">)</span>
      </>
    ),
  },
]

export function CodeCarousel() {
  const [activeIndex, setActiveIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % snippets.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex
    const absDiff = Math.abs(diff)

    if (absDiff === 0) {
      return 'opacity-100 scale-100 z-20'
    } else if (absDiff === 1) {
      return 'opacity-60 scale-95 z-10'
    } else {
      return 'opacity-20 scale-90 z-0'
    }
  }

  const getCardBg = (index: number) => {
    const diff = Math.abs(index - activeIndex)
    if (diff === 0) {
      return 'bg-slate-900'
    }
    return 'bg-slate-900/40 backdrop-blur-md'
  }

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      {/* Blur colorido de fundo - fixo, atrás dos cards */}
      <div className="pointer-events-none fixed top-1/2 right-[25%] -z-10 -translate-y-1/2">
        <div className="absolute -top-80 -left-20 h-80 w-80 rounded-full bg-indigo-500/40 blur-[120px]" />
        <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/35 blur-[110px]" />
        <div className="absolute top-60 -right-10 h-80 w-80 rounded-full bg-violet-500/30 blur-[120px]" />
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        {snippets.map((snippet, index) => (
          <div
            key={snippet.id}
            onClick={() => setActiveIndex(index)}
            className={`w-full cursor-pointer transition-all duration-500 ease-out ${getCardStyle(index)}`}
          >
            <div className={`rounded-xl p-5 ${getCardBg(index)}`}>
              <pre className="text-[13px] leading-relaxed">
                <code>{snippet.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
