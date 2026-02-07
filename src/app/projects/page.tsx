'use client'

import { useState, useMemo, useEffect } from 'react'
import { FilterSidebar } from '@/components/Projects/FilterSidebar'
import { ProjectCard } from '@/components/Projects/ProjectCard'
import { ProjectCardSkeleton } from '@/components/Projects/ProjectCardSkeleton'
import { Project } from '@/components/Projects/types'

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])

  useEffect(() => {
    async function fetchPinnedRepos() {
      try {
        const res = await fetch('/api/projects')
        if (!res.ok) throw new Error('Erro ao buscar projetos')
        const data: Project[] = await res.json()
        setProjects(data)
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
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }, (_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
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
