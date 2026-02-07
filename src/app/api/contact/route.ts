import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

export async function POST(req: Request) {
  const smtpEmail = process.env.SMTP_EMAIL
  const smtpPassword = process.env.SMTP_PASSWORD

  if (!smtpEmail || !smtpPassword) {
    return NextResponse.json(
      { error: 'Configuração SMTP não encontrada' },
      { status: 500 },
    )
  }

  try {
    const body = await req.json()
    const { name, email, message } = contactSchema.parse(body)

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpEmail,
        pass: smtpPassword,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio - ${name}" <${smtpEmail}>`,
      to: smtpEmail,
      replyTo: email,
      subject: `Nova mensagem de ${name}`,
      html: `
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    console.error('Erro ao enviar email:', error)
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem' },
      { status: 500 },
    )
  }
}
