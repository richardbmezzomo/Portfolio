'use client'

import { CodePreview } from '@/components/Contact/CodePreview'
import { ContactActivityBar } from '@/components/Contact/ContactActivityBar'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const { name, email, message } = form.watch()

  function onSubmit(values: ContactFormValues) {
    console.log(values)
  }

  return (
    <div className="grid h-[calc(100svh-8rem)] grid-cols-1 lg:grid-cols-[280px_1fr]">
      <ContactActivityBar />
      <main className="flex-1 border-l border-slate-700/80">
        <div className="flex h-full">
          <div className="flex w-full items-center justify-center lg:w-1/2 lg:border-r lg:border-slate-700">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-80 flex-col gap-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-accent">_nome:</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          className="focus:bg-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-accent">_email:</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          className="focus:bg-foreground"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-accent">_mensagem:</FormLabel>
                      <FormControl>
                        <Textarea className="focus:bg-foreground" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Button className="text-accent cursor-pointer">
                    Enviar mensagem
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          <div className="hidden w-1/2 lg:block">
            <CodePreview name={name} email={email} message={message} />
          </div>
        </div>
      </main>
    </div>
  )
}
