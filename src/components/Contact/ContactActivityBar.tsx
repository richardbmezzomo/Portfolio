'use client'

import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/richardbmezzomo',
    icon: FaGithub,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/richardbmezzomo',
    icon: FaLinkedin,
  },
  {
    id: 'twitter',
    label: 'Twitter',
    url: 'https://twitter.com/richardbmezzomo',
    icon: FaXTwitter,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://instagram.com/richardbmezzomo',
    icon: FaInstagram,
  },
]

export const ContactActivityBar = () => {
  return (
    <aside className="h-full overflow-y-auto border-r border-slate-700/80 bg-slate-900/50">
      <Accordion
        type="multiple"
        defaultValue={['contatos', 'redes']}
        className="w-full"
      >
        <AccordionItem
          value="contatos"
          className="border-b border-slate-700/80"
        >
          <AccordionTrigger className="px-4 py-2 text-sm text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:no-underline">
            contatos
          </AccordionTrigger>
          <AccordionContent className="pb-2">
            <div className="py-1 pl-6">
              <a
                href="mailto:richard@exemplo.com"
                className="flex items-center gap-2 py-1.5 text-sm text-slate-400 transition-colors hover:text-slate-200"
              >
                <Mail className="h-4 w-4" />
                <span>contato@richardbmezzomo.com</span>
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="redes" className="border-b border-slate-700/80">
          <AccordionTrigger className="px-4 py-2 text-sm text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:no-underline">
            me-encontre-em
          </AccordionTrigger>
          <AccordionContent className="pb-2">
            <nav className="py-1">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-1.5 pr-4 pl-6 text-sm text-slate-400 transition-colors hover:bg-slate-800/30 hover:text-slate-200"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </nav>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  )
}
