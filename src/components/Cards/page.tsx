import Image, { StaticImageData } from 'next/image'
import { FaGithubSquare } from 'react-icons/fa'
import arrow from '@/assets/icons/arrow.svg'

interface CardProps {
  imageSrc: StaticImageData
  title: string
  paragraph: string
  paragraphTwo: string
  technologies: string[]
  githubLink: string
  link: string
}

export default function Cards({
  imageSrc,
  title,
  paragraph,
  paragraphTwo,
  technologies,
  githubLink,
  link,
}: CardProps) {
  return (
    <section className="flex flex-col">
      <Image src={imageSrc} alt="" className="md:max-w-xl lg:max-w-xl" />
      <div className="flex max-w-xl items-center justify-between lg:justify-between">
        <div>
          <h1 className="pb-1 pt-3 font-sans text-xl font-bold md:text-2xl lg:pb-1 lg:pt-6 lg:text-3xl">
            {title}
          </h1>
          <p className="pb-2 font-sans text-base font-semibold lg:pb-4 lg:text-lg">
            {paragraph}
          </p>
          <div className="flex gap-14 lg:gap-16">
            <div>
              <span className="font-sans font-semibold lg:pb-3">Solução</span>
              <p>{paragraphTwo}</p>
            </div>
            <div>
              <span className="font-sans font-semibold lg:pb-3">
                Tecnologias
              </span>
              <ul className="flex gap-2 lg:gap-3">
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-4 lg:gap-6">
            <li>
              <a href={githubLink} target="_blank">
                <FaGithubSquare size={25} color="#222222" />
              </a>
            </li>
            <li>
              <a href={link} target="_blank">
                <Image src={arrow} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
