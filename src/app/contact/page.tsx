'use client'

import { ContactActivityBar } from '@/components/Contact/ContactActivityBar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <div className="grid h-[calc(100svh-8rem)] grid-cols-1 lg:grid-cols-[280px_1fr]">
      <ContactActivityBar />
      <main className="flex-1 border-l border-slate-700/80">
        <div className="flex h-full border">
          <div className="flex w-1/2 items-center justify-center border">
            <form className="flex w-80 flex-col gap-6">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name">_nome:</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  className="focus:bg-foreground"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email">_email:</label>
                <Input type="text" id="email" name="email" required />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message">_menssagem:</label>
                <Textarea id="message" name="message" required></Textarea>
              </div>
              <div>
                <Button className="cursor-pointer">Enviar mensagem</Button>
              </div>
            </form>
          </div>
          <div className="w-1/2 border"></div>
        </div>
      </main>
    </div>
  )
}
