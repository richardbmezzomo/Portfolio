'use client'

import { useState, useEffect } from 'react'
import { ActivityBar } from '@/components/About/ActivityBar'
import { Sidebar } from '@/components/About/Sidebar'
import {
  SettingsPanel,
  SettingsFile,
  SettingsGroup,
} from '@/components/About/SettingsPanel'
import { ContentViewer } from '@/components/About/ContentViewer'
import { aboutData } from '@/data/aboutData'
import { AboutItem, ActivityPanel } from '@/components/About/types'

interface OpenTab {
  item: AboutItem
  sectionLabel: string
}

const panels: ActivityPanel[] = [
  { id: 'explorer', label: 'Explorer', icon: 'files' },
  { id: 'settings', label: 'Settings', icon: 'settings' },
  { id: 'user', label: 'User', icon: 'user', position: 'bottom' },
]

const settingsGroups: SettingsGroup[] = [
  {
    id: 'ide-settings',
    label: 'ide-settings',
    files: [
      {
        id: 'vscode-settings',
        label: 'vscode.json',
        icon: 'vscode',
        gistUrl:
          'https://gist.githubusercontent.com/richardbmezzomo/98b4b0c7ab3071a87a32abb3979770ef/raw/5cc23a1af776ee1d58ac0d958dd152bbfb93e1ce/settings.json',
      },
      {
        id: 'zed-settings',
        label: 'zed.json',
        icon: 'zed',
        gistUrl:
          'https://gist.githubusercontent.com/richardbmezzomo/6b107a9bcd8caea6dac1766f5edaf728/raw/3af6cd3b6785d491d8fabedb7a9e150e1283acd2/zed.json',
      },
    ],
  },
  {
    id: 'terminal',
    label: 'terminal',
    files: [
      {
        id: 'alacritty-config',
        label: 'alacritty.toml',
        icon: 'alacritty',
        content: `general.import = [ "~/.config/omarchy/current/theme/alacritty.toml" ]

[env]
TERM = "xterm-256color"

[font]
normal = { family = "JetBrainsMono Nerd Font", style = "Regular" }
bold = { family = "JetBrainsMono Nerd Font", style = "Bold" }
italic = { family = "JetBrainsMono Nerd Font", style = "Italic" }
size = 9

[window]
padding.x = 14
padding.y = 14
decorations = "None"

[[keyboard.bindings]]
key = "Insert"
mods = "Shift"
action = "Paste"

[[keyboard.bindings]]
key = "Insert"
mods = "Control"
action = "Copy"

[[keyboard.bindings]]
key = "Return"
mods = "Shift"
chars = "\\u001b\\r"`,
      },
      {
        id: 'starship-config',
        label: 'starship.toml',
        icon: 'starship',
        content: `"$schema" = 'https://starship.rs/config-schema.json'

[aws]
symbol = " "

[buf]
symbol = " "

[bun]
symbol = " "

[c]
symbol = " "

[cpp]
symbol = " "

[cmake]
symbol = " "

[conda]
symbol = " "

[crystal]
symbol = " "

[dart]
symbol = " "

[deno]
symbol = " "

[directory]
read_only = " 󰌾"

[docker_context]
symbol = " "

[elixir]
symbol = " "

[elm]
symbol = " "

[fennel]
symbol = " "

[fortran]
symbol = " "

[fossil_branch]
symbol = " "

[gcloud]
symbol = " "

[git_branch]
symbol = " "

[git_commit]
tag_symbol = '  '

[golang]
symbol = " "

[gradle]
symbol = " "

[guix_shell]
symbol = " "

[haskell]
symbol = " "

[haxe]
symbol = " "

[hg_branch]
symbol = " "

[hostname]
ssh_symbol = " "

[java]
symbol = " "

[julia]
symbol = " "

[kotlin]
symbol = " "

[lua]
symbol = " "

[memory_usage]
symbol = "󰍛 "

[meson]
symbol = "󰔷 "

[nim]
symbol = "󰆥 "

[nix_shell]
symbol = " "

[nodejs]
symbol = " "

[ocaml]
symbol = " "

[os.symbols]
Alpaquita = " "
Alpine = " "
AlmaLinux = " "
Amazon = " "
Android = " "
AOSC = " "
Arch = " "
Artix = " "
CachyOS = " "
CentOS = " "
Debian = " "
DragonFly = " "
Elementary = " "
Emscripten = " "
EndeavourOS = " "
Fedora = " "
FreeBSD = " "
Garuda = "󰛓 "
Gentoo = " "
HardenedBSD = "󰞌 "
Illumos = "󰈸 "
Ios = "󰀷 "
Kali = " "
Linux = " "
Mabox = " "
Macos = " "
Manjaro = " "
Mariner = " "
MidnightBSD = " "
Mint = " "
NetBSD = " "
NixOS = " "
Nobara = " "
OpenBSD = "󰈺 "
openSUSE = " "
OracleLinux = "󰌷 "
Pop = " "
Raspbian = " "
Redhat = " "
RedHatEnterprise = " "
RockyLinux = " "
Redox = "󰀘 "
Solus = "󰠳 "
SUSE = " "
Ubuntu = " "
Unknown = " "
Void = " "
Windows = "󰍲 "
Zorin = " "

[package]
symbol = "󰏗 "

[perl]
symbol = " "

[php]
symbol = " "

[pijul_channel]
symbol = " "

[pixi]
symbol = "󰏗 "

[python]
symbol = " "

[rlang]
symbol = "󰟔 "

[ruby]
symbol = " "

[rust]
symbol = "󱘗 "

[scala]
symbol = " "

[status]
symbol = " "

[swift]
symbol = " "

[xmake]
symbol = " "

[zig]
symbol = " "`,
      },
    ],
  },
  {
    id: 'setup',
    label: 'setup',
    files: [
      {
        id: 'distro',
        label: 'distro.md',
        icon: 'archlinux',
        content: `# Linux Setup

| Componente | Tecnologia |
|------------|------------|
| Distro | Arch Linux |
| Config | Omarchy |
| WM | Hyprland |
| Terminal | Alacritty |
| Shell | Zsh |
| Prompt | Starship |
| Plugins | Oh My Zsh |
| Font | JetBrainsMono Nerd Font |
`,
      },
      {
        id: 'hardware',
        label: 'hardware.md',
        icon: 'cpu',
        content: `# Hardware

## Notebook
**Dell Inspiron**
- **CPU:** Intel Core i5-1235U (12th Gen)
- **GPU:** Intel Iris Xe Graphics
- **RAM:** 16GB
- **SSD:** 512GB NVMe (ADATA)
`,
      },
    ],
  },
]

export default function About() {
  const [activePanel, setActivePanel] = useState('explorer')
  const [openTabs, setOpenTabs] = useState<OpenTab[]>([])
  const [activeTabId, setActiveTabId] = useState<string | null>(null)
  const [settingsCache, setSettingsCache] = useState<Record<string, string>>({})

  const handleItemClick = (itemId: string) => {
    const alreadyOpen = openTabs.find((t) => t.item.id === itemId)

    if (alreadyOpen) {
      setActiveTabId(itemId)
      return
    }

    let item: AboutItem | undefined
    let sectionLabel = ''

    for (const group of aboutData.groups) {
      if (group.sections) {
        for (const section of group.sections) {
          const found = section.items.find((i) => i.id === itemId)
          if (found) {
            item = found
            sectionLabel = section.label
            break
          }
        }
      } else if (group.items) {
        const found = group.items.find((i) => i.id === itemId)
        if (found) {
          item = found
          sectionLabel = group.label
          break
        }
      }
      if (item) break
    }

    if (item) {
      setOpenTabs((prev) => [...prev, { item, sectionLabel }])
      setActiveTabId(itemId)
    }
  }

  const handleSettingsClick = async (file: SettingsFile) => {
    const alreadyOpen = openTabs.find((t) => t.item.id === file.id)

    if (alreadyOpen) {
      setActiveTabId(file.id)
      return
    }

    let content = file.content || settingsCache[file.id]

    if (!content && file.gistUrl) {
      try {
        const response = await fetch(file.gistUrl)
        content = await response.text()
        setSettingsCache((prev) => ({ ...prev, [file.id]: content }))
      } catch {
        content = '// Erro ao carregar configurações'
      }
    }

    const isMarkdown = file.label.endsWith('.md')
    const isJson = file.label.endsWith('.json')

    const item: AboutItem = {
      id: file.id,
      label: file.label,
      content: isMarkdown
        ? content || ''
        : `\`\`\`${isJson ? 'json' : 'text'}\n${content}\n\`\`\``,
    }

    setOpenTabs((prev) => [...prev, { item, sectionLabel: file.icon }])
    setActiveTabId(file.id)
  }

  const handleTabClose = (itemId: string) => {
    const tabIndex = openTabs.findIndex((t) => t.item.id === itemId)
    const newTabs = openTabs.filter((t) => t.item.id !== itemId)
    setOpenTabs(newTabs)

    if (activeTabId === itemId) {
      if (newTabs.length === 0) {
        setActiveTabId(null)
      } else if (tabIndex > 0) {
        setActiveTabId(newTabs[tabIndex - 1].item.id)
      } else {
        setActiveTabId(newTabs[0].item.id)
      }
    }
  }

  return (
    <div className="grid h-[calc(100svh-8rem)] grid-cols-1 lg:grid-cols-[48px_280px_1fr]">
      <div className="hidden lg:block">
        <ActivityBar
          panels={panels}
          activePanel={activePanel}
          onPanelChange={(panelId) => {
            if (panelId === 'user') {
              window.open('https://instagram.com/richardbmezzomo', '_blank')
              return
            }
            setActivePanel(panelId)
          }}
        />
      </div>

      {activePanel === 'explorer' && (
        <Sidebar
          groups={aboutData.groups}
          activeItem={activeTabId}
          onItemClick={handleItemClick}
        />
      )}

      {activePanel === 'settings' && (
        <SettingsPanel
          groups={settingsGroups}
          activeItem={activeTabId}
          onItemClick={handleSettingsClick}
        />
      )}

      {activePanel === 'user' && (
        <aside className="flex h-full items-center justify-center border-r border-slate-700/80 bg-slate-900/50 text-slate-500">
          <p className="text-sm">Em breve...</p>
        </aside>
      )}

      <main className="overflow-hidden border-l border-slate-700/80">
        <ContentViewer
          tabs={openTabs}
          activeTabId={activeTabId}
          onTabClick={setActiveTabId}
          onTabClose={handleTabClose}
        />
      </main>
    </div>
  )
}
