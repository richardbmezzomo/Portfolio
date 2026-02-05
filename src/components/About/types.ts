export interface AboutItem {
  id: string
  label: string
  icon?: 'file' | 'folder'
  content: string
}

export interface AboutSection {
  id: string
  label: string
  icon?: string
  items: AboutItem[]
}

export interface AboutGroup {
  id: string
  label: string
  sections?: AboutSection[]
  items?: AboutItem[]
  email?: string
}

export interface AboutData {
  groups: AboutGroup[]
}

export interface ActivityPanel {
  id: string
  label: string
  icon: string
  position?: 'top' | 'bottom'
}
