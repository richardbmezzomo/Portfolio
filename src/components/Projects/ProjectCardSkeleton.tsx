import { Skeleton } from '@/components/ui/skeleton'

export function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/50">
      <Skeleton className="aspect-video w-full rounded-none" />

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center gap-2">
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>

        <Skeleton className="mb-1 h-3 w-full" />
        <Skeleton className="mb-3 h-3 w-2/3" />

        <div className="mb-4 flex gap-1">
          <Skeleton className="h-5 w-14 rounded" />
          <Skeleton className="h-5 w-16 rounded" />
          <Skeleton className="h-5 w-12 rounded" />
        </div>

        <Skeleton className="h-9 w-full rounded-lg" />
      </div>
    </div>
  )
}
