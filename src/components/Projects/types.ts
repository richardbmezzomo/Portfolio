export interface Project {
  id: string
  name: string
  description: string
  image?: string
  language: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
  featured?: boolean
}

export interface LanguageFilter {
  name: string
  color: string
  checked: boolean
}
