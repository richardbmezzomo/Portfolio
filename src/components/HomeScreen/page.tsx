export default function HomeScreen() {
  return (
    <>
      <section className="justify-left -z-10 flex h-screen w-full items-center bg-white pt-12 text-black lg:pt-20">
        <main className="h-auto px-6 pt-14 lg:px-20 lg:py-24">
          <p className="mb-2 font-mono text-sm lg:mb-4 lg:text-lg">
            olá, meu nome é
          </p>
          <h1 className="mb-2 font-sans text-4xl font-bold lg:mb-4 lg:text-6xl">
            Richard Mezzomo.
          </h1>
          <h2 className="mb-2 font-sans text-4xl font-bold lg:mb-4 lg:text-6xl">
            Transformo ideias em código.
          </h2>
          <p className="fonst-sans text-sm lg:text-lg">
            Desenvolvedor focado em criar experiências digitais, especialmente
            no desenvolvimento web.
            <br />
            Busco construir produtos rápidos, escaláveis e centrados na
            experiência do usuário.
          </p>

          <div className="flex w-full items-center justify-center pt-14 lg:flex lg:justify-start lg:pt-16">
            <a
              href="https://wa.me/+5548984864299"
              target="_blank"
              className="border border-black px-3 py-2 font-mono text-sm lg:px-10 lg:py-3 lg:text-lg"
            >
              ENTRE EM CONTATO
            </a>
          </div>
        </main>
      </section>
    </>
  )
}
