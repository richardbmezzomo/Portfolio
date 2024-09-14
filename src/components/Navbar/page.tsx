'use client'
import Image from 'next/image'
import logo from '@/assets/logo.svg'
import open from '@/assets/menu/open.svg'
import close from '@/assets/menu/close.svg'
import { useState } from 'react'
import SocialMedias from '../SocialMedias/page'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed z-10 w-screen bg-gray px-6 py-4 lg:flex lg:items-center lg:justify-between lg:px-20 lg:py-6">
        <div className="">
          <div className="flex items-center justify-between">
            <span>
              <Image
                src={logo}
                alt=""
                className="h-5 w-4 md:h-7 md:w-7 lg:h-9 lg:w-9"
              />
            </span>
            <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {!isOpen ? (
                <Image src={open} alt="" />
              ) : (
                <Image src={close} alt="" />
              )}
            </button>
          </div>
        </div>

        <div>
          <ul className="hidden font-mono text-lg text-black lg:flex lg:items-center lg:gap-6">
            <li>
              <a href="" className="hover:underline">
                Sobre mim
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Projetos
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Contato
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a
                href="/curriculo-richard-mezzomo.pdf"
                target="_blank"
                className="border border-black px-5 py-2 hover:shadow-sm hover:shadow-black"
              >
                Currículo
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed z-50 mt-[3.31rem] h-screen w-screen bg-white px-6 pt-14 lg:hidden">
          <ul className="flex flex-col gap-10 font-mono text-lg">
            <li>
              <a href="">Sobre mim</a>
            </li>
            <li>
              <a href="">Projetos</a>
            </li>
            <li>
              <a href="">Contato</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a
                href="/curriculo-richard-mezzomo.pdf"
                target="_blank"
                className="border border-black px-5 py-2 hover:shadow-sm hover:shadow-black"
              >
                Currículo
              </a>
            </li>
          </ul>
          <SocialMedias spacing="mt-12" />
        </div>
      )}
    </>
  )
}
