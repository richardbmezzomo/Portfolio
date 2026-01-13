// components/BackgroundLayer.tsx
'use client'

import Image from 'next/image'
import bg_image from '@/assets/background_blurs.svg'

export default function BackgroundLayer() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Image
        src={bg_image}
        alt=""
        fill
        priority
        className="object-cover object-[70%_40%]" // puxe o foco pra direita
      />
    </div>
  )
}
