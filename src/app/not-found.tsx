import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex h-[calc(100svh-8rem)] flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-8xl font-bold text-slate-200">404</h1>
      <p className="text-lg text-slate-400">
        A página que você está procurando não foi encontrada.
      </p>
      <Button asChild variant="outline">
        <Link href="/">Voltar para o início</Link>
      </Button>
    </div>
  )
}
