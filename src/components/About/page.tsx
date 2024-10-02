import Image from 'next/image'
import profile from '@/assets/images/profile-pic.svg'
import SocialMedias from '../SocialMedias/page'
import Carrousel from '../Carrousel/page'

export default function About() {
  return (
    <section className="h-full h-screen w-full bg-white">
      <header>
        <Carrousel />
      </header>
      <main className="px-6 lg:px-20">
        <div className="sm:flex sm:items-center sm:justify-between sm:gap-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <h1 className="pb-3 font-sans text-xl font-bold text-black lg:pb-6 lg:text-5xl">
              Sobre mim
            </h1>
            <div className="flex flex-col gap-3 font-sans text-sm text-black sm:max-w-sm lg:max-w-xl lg:text-lg">
              <p>
                Desenvolvedor e entusiasta da tecnologia, atualmente cursando
                Análise e Desenvolvimento de Sistemas.
              </p>
              <p>
                Apaixonado por desenvolvimento, estou em busca de oportunidades
                para aplicar e aprimorar meu conhecimento.
              </p>
              <p>
                Interessado nos vieses cognitivos no design para aprimorar a
                experiência do usuário.
              </p>
              <p>
                Com expertise nas principais linguagens e frameworks como
                JavaScript, TypeScript, Next, React, Node, Tailwind,
                Styled-components, Shadcn/UI, estou preparado para contribuir em
                projetos inovadores.
              </p>
              <p>
                Busco novos desafios e aprendizado em um ambiente que
                proporcione isso.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-6 lg:pt-0">
            <Image src={profile} alt="foto de Richard Mezzomo" className="" />
            <SocialMedias spacing="pt-10 lg:pt-6" />
          </div>
        </div>
      </main>
    </section>
  )
}
