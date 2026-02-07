'use client'

import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Project } from './types'
import { languageColors } from '@/data/projectsData'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const colorClass = languageColors[project.language] || 'bg-slate-500'

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/50 transition-all hover:border-cyan-400/50">
      {/* Imagem ou placeholder */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-4xl font-bold text-slate-700">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
        {project.featured && (
          <span className="absolute top-2 right-2 rounded bg-cyan-500 px-2 py-0.5 text-xs font-medium text-slate-900">
            Destaque
          </span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col p-4">
        {/* Título e linguagem */}
        <div className="mb-2 flex items-center gap-2">
          <span className={cn('h-3 w-3 rounded-full', colorClass)} />
          <h3 className="font-medium text-slate-100">{project.name}</h3>
        </div>

        {/* Descrição */}
        <p className="mb-3 line-clamp-2 flex-1 text-sm text-slate-400">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Botões */}
        <div className="flex gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-800 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-700 hover:text-slate-100"
          >
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-500 py-2 text-sm text-slate-900 transition-colors hover:bg-cyan-400"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
