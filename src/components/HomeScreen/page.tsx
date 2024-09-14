import Link from 'next/link'

export default function HomeScreen() {
  return (
    <>
      <section className="relative -z-10 flex h-screen w-full justify-between bg-[#F8F7F3] pt-12 text-black">
        <main className="h-auto px-6 pt-14 lg:flex lg:flex-col lg:justify-center lg:pl-20 lg:pt-0">
          <p className="text-gray-500 mb-2 font-mono text-sm lg:mb-4 lg:text-lg">
            olá, meu nome é
          </p>
          <h1 className="mb-2 font-sans text-4xl font-bold lg:mb-4 lg:text-6xl">
            Richard Mezzomo.
          </h1>
          <h2 className="mb-2 font-sans text-4xl font-bold lg:mb-4 lg:text-6xl">
            Transformo ideias em código.
          </h2>
          <p className="text-gray-600 font-sans text-sm lg:text-lg">
            Desenvolvedor focado em criar experiências digitais, especialmente
            no desenvolvimento web.
            <br />
            Busco construir produtos rápidos, escaláveis e centrados na
            experiência do usuário.
          </p>

          <div className="flex w-full items-center justify-center pt-14 lg:flex lg:justify-start lg:pt-16">
            <Link href="https://wa.me/+5548984864299" target="_blank">
              <div className="border border-black px-6 py-2 font-mono text-sm transition-all duration-300 hover:bg-black hover:text-white lg:px-12 lg:py-3 lg:text-lg">
                ENTRE EM CONTATO
              </div>
            </Link>
          </div>
        </main>

        {/* Div rotacionada e fixada no lado inferior direito */}
        <button className="absolute -bottom-[75px] right-[-120px] mb-56 flex rotate-90 items-center">
          <Link href="mailto:richardbbmm@gmail.com">
            <div className="text-gray-600 font-mono text-sm">
              richardbbmm@gmail.com
            </div>
          </Link>
          <div className="ml-4 h-0.5 w-32 bg-black"></div>
        </button>
      </section>
    </>
  )
}
