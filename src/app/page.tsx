import { CodeCarousel } from '@/components/CodeCarousel'
import { BackgroundLayer } from '@/components/BackgroundLayer'

export default function Home() {
  return (
    <>
      <BackgroundLayer />
      <section
        id="hello"
        className="relative mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8"
      >
        <div className="relative z-10 grid h-full w-full grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="mb-2 text-base text-slate-400/90">Olá, meu nome é</p>

            <h1 className="text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Richard B<br />
              Mezzomo
            </h1>

            <p className="mt-3 text-lg text-indigo-400 sm:text-xl">
              {'>'} Desenvolvedor Full Stack
            </p>

            {/* bloco "código" */}
            <div className="mt-10 rounded-xl bg-slate-900/50 p-4 text-sm leading-relaxed shadow-[inset_0_0_0_1px_rgba(15,23,42,0.35)] sm:p-5 sm:text-base">
              <p className="text-slate-400">
                // Encontre meu perfil no Github:
              </p>
              <p className="mt-1">
                <span className="text-indigo-400">const </span>
                <span className="text-teal-300">githubLink</span>
                <span className="text-slate-200"> = </span>
                <a
                  href="https://github.com/richardbmezzomo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 underline decoration-dotted underline-offset-4 hover:opacity-90"
                >
                  "https://github.com/
                  <br className="block sm:hidden" />
                  richardbmezzomo"
                </a>
                <span className="text-slate-200">;</span>
              </p>
            </div>
          </div>

          {/* COLUNA DIREITA (carrossel) — some no mobile */}
          <div className="relative hidden h-[calc(100svh-8rem)] lg:flex">
            <CodeCarousel />
          </div>
        </div>
      </section>
    </>
  )
}
