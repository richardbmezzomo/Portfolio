'use client'

import { useState, useMemo, useEffect } from 'react'
import { FilterSidebar } from '@/components/Projects/FilterSidebar'
import { ProjectCard } from '@/components/Projects/ProjectCard'
import { Project } from '@/components/Projects/types'
import {
  pinnedRepos,
  GITHUB_USERNAME,
  customDescriptions,
  liveUrls,
} from '@/data/projectsData'

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])

  useEffect(() => {
    async function fetchPinnedRepos() {
      try {
        const responses = await Promise.all(
          pinnedRepos.map((repo) =>
            fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo}`),
          ),
        )

        const repos = await Promise.all(
          responses.map((res) => (res.ok ? res.json() : null)),
        )

        const projectsData: Project[] = repos.filter(Boolean).map((repo) => ({
          id: repo.name,
          name: repo.name,
          description:
            customDescriptions[repo.name] ||
            repo.description ||
            'Sem descrição',
          image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
          language: repo.language || 'Outros',
          technologies: repo.topics || [],
          githubUrl: repo.html_url,
          liveUrl: liveUrls[repo.name] || repo.homepage || undefined,
        }))

        setProjects(projectsData)
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPinnedRepos()
  }, [])

  const languages = useMemo(() => {
    const langs = new Set(projects.map((p) => p.language))
    return Array.from(langs).sort()
  }, [projects])

  const filteredProjects = useMemo(() => {
    if (selectedLanguages.length === 0) {
      return projects
    }
    return projects.filter((p) => selectedLanguages.includes(p.language))
  }, [projects, selectedLanguages])

  return (
    <div className="grid h-[calc(100svh-8rem)] grid-cols-1 lg:grid-cols-[280px_1fr]">
      <FilterSidebar
        languages={languages}
        selectedLanguages={selectedLanguages}
        onFilterChange={setSelectedLanguages}
      />

      <main className="overflow-y-auto p-6">
        {loading ? (
          <div className="flex h-full items-center justify-center text-slate-500">
            <p>Carregando projetos...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="flex h-full items-center justify-center text-slate-500">
            <p>Nenhum projeto encontrado</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
