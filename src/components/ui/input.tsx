import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-10 w-full rounded-lg border border-slate-700/80 bg-slate-900/50 px-4 py-2 text-sm text-slate-100 transition-all outline-none placeholder:text-slate-500',
        'focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20',
        'hover:border-slate-600',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
