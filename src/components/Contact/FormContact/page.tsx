'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function FormContact(): JSX.Element {
  const [nameIsActive, setNameIsActive] = useState<boolean>(false)
  const [emailIsActive, setEmailIsActive] = useState<boolean>(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleNameFocus = (): void => {
    setNameIsActive(true)
  }

  const handleNameBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    if (!event.target.value) {
      setNameIsActive(false)
    }
  }

  const handleEmailFocus = (): void => {
    setEmailIsActive(true)
  }

  const handleEmailBlur = (event: React.FocusEvent<HTMLInputElement>): void => {
    if (!event.target.value) {
      setEmailIsActive(false)
    }
  }

  function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault()

    const templateParams = {
      from_name: name,
      message,
      email,
    }

    emailjs
      .send(
        'service_or6wbbp',
        'template_ura1qmb',
        templateParams,
        'irVTtBR4yb4d9iEkk',
      )
      .then(
        (response) => {
          console.log(
            'Email enviado com sucesso!',
            response.status,
            response.text,
          )
          setName('')
          setEmail('')
          setMessage('')
        },
        (err) => {
          console.log('erro', err)
        },
      )

    toast.success('E-mail enviado com sucesso!', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'light',
    })
  }

  return (
    <div>
      <form className="flex flex-col items-center" onSubmit={sendEmail}>
        <div className="relative z-0 mb-9 mt-5 w-full">
          <input
            type="text"
            className="block w-full border-b border-b-black bg-transparent px-0 py-2.5 text-sm"
            onFocus={handleNameFocus}
            onBlur={handleNameBlur}
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <label
            className={`absolute top-3 -z-10 origin-[0] text-sm transition-all ${
              nameIsActive
                ? 'text-gray-500 -translate-y-6 scale-75'
                : 'translate-y-1 text-gray'
            }`}
          >
            Seu nome
          </label>
        </div>
        <div className="relative z-0 mb-9 mt-5 w-full ">
          <input
            type="email"
            className="block w-full border-b border-b-black bg-transparent px-0 py-2.5 text-sm"
            onFocus={handleEmailFocus}
            onBlur={handleEmailBlur}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <label
            className={`absolute top-3 -z-10 origin-[0] text-sm transition-all ${
              emailIsActive
                ? 'text-gray-500 -translate-y-6 scale-75'
                : 'translate-y-1 text-gray'
            }`}
          >
            Seu e-mail
          </label>
        </div>
        <textarea
          placeholder="Sua mensagem"
          className="h-44 w-full resize-none border border-black bg-white p-1 text-sm placeholder:text-sm"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        ></textarea>
        <input
          type="submit"
          value="Enviar Mensagem"
          className="mt-10 cursor-pointer border border-black px-4 py-2 font-mono"
        />
      </form>
      <ToastContainer />
    </div>
  )
}
