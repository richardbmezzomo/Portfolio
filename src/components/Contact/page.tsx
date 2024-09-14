import FormContact from './FormContact/page'
import Image from 'next/image'
import rocket from '@/assets/icons/rocket.svg'

export default function Contact() {
  return (
    <section className="bg-white p-6 sm:px-9 md:px-20">
      <div className="mx-auto my-0 lg:flex lg:max-w-3xl lg:flex-col">
        <header>
          <span className="flex gap-3 font-mono text-sm lg:text-lg">
            estamos prontos <Image src={rocket} alt="" />
          </span>
          <h1 className="pb-3 pt-1 font-sans text-xl font-bold lg:text-[40px]">
            Podemos falar de negócios?
          </h1>
          <p className="text-sm lg:text-lg">
            Estamos prontos para transformar sua visão em realidade digital.
          </p>
        </header>
        <main>
          <FormContact />
        </main>
      </div>
    </section>
  )
}
