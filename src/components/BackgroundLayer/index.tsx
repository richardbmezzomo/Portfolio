'use client'

import Image from 'next/image'
import bg_image from '@/assets/background_blurs.svg'

export const BackgroundLayer = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Image
        src={bg_image}
        alt=""
        width={1128}
        height={940}
        priority
        className="absolute top-1/2 right-0 translate-x-[10%] -translate-y-1/2"
      />
    </div>
  )
}
