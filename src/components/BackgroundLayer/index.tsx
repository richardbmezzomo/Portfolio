'use client'

import Image from 'next/image'
import bg_image from '@/assets/background_blurs.svg'

export const BackgroundLayer = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Image
        src={bg_image}
        alt=""
        fill
        priority
        className="object-cover object-right opacity-40"
      />
    </div>
  )
}
