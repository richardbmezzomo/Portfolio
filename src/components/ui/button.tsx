import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*="size-"])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none',
  {
    variants: {
      variant: {
        default:
          'bg-cyan-500 text-slate-900 hover:bg-cyan-400 focus:ring-2 focus:ring-cyan-400/20',
        destructive:
          'bg-red-500 text-white hover:bg-red-400 focus:ring-2 focus:ring-red-400/20',
        outline:
          'border border-slate-700/80 bg-transparent text-slate-300 hover:border-slate-600 hover:bg-slate-800/50 hover:text-slate-100',
        secondary:
          'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-100',
        ghost: 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200',
        link: 'text-cyan-400 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        xs: 'h-7 gap-1 rounded-md px-2 text-xs',
        sm: 'h-8 rounded-md gap-1.5 px-3',
        lg: 'h-11 rounded-lg px-6',
        icon: 'size-10',
        'icon-xs': 'size-7 rounded-md',
        'icon-sm': 'size-8',
        'icon-lg': 'size-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
