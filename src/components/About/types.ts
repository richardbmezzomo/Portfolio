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

export interface AboutData {
  sections: AboutSection[]
}
