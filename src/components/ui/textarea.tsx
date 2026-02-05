import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'min-h-32 w-full resize-none rounded-lg border border-slate-700/80 bg-slate-900/50 px-4 py-3 text-sm text-slate-100 transition-all outline-none placeholder:text-slate-500',
        'focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20',
        'hover:border-slate-600',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
