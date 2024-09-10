import Cards from '../Cards/page'
import gitHubBlog from '@/assets/images/github-blog.png'

export default function Portfolio() {
  return (
    <section className="px-6 py-5 lg:h-screen lg:px-20 lg:py-8">
      <header>
        <h1 className="pb-3 font-sans text-xl font-bold text-black lg:pb-4 lg:text-4xl">
          Projetos
        </h1>
        <p className="font-mono text-sm lg:text-lg">
          alguns dos projetos desenvolvidos
        </p>
      </header>
      <main className="grid grid-cols-1 justify-items-center gap-5 pt-10 lg:grid-cols-2 lg:gap-10">
        <Cards
          imageSrc={gitHubBlog}
          title="GitHub Blog"
          paragraph="Blog informativo"
          paragraphTwo="Site"
          technologies={['React', 'TypeScript', 'Vite']}
          githubLink="https://github.com/richardmezzomo/github-blog"
          link="https://github-blog-krsrq52si-richardmezzomo.vercel.app/"
        />
      </main>
    </section>
  )
}
