'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stacks: string[] = [
  'Nodejs',
  'React',
  'Next',
  'TypeScript',
  'JavaScript',
  'Tailwind',
  'Shadcn/UI',
]

export default function Carrousel() {
  const carousel = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState<number>()

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <motion.div whileTap={{ cursor: 'grabbing' }} ref={carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width! }}
          className="text-gray2 flex cursor-grab select-none gap-4 pb-10 pt-6 font-sans text-4xl font-bold lg:text-7xl"
        >
          {stacks.map((stack) => (
            <span key={stack}>{stack}</span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}
