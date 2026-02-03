import { AboutData } from '@/components/About/types'

export const aboutData: AboutData = {
  sections: [
    {
      id: 'pessoal',
      label: 'pessoal',
      items: [
        {
          id: 'bio',
          label: 'bio.md',
          content: `# Sobre mim

Olá! Eu sou **Richard B. Mezzomo**, Desenvolvedor Full Stack.

Atuo no ecossistema **JavaScript/TypeScript**, desenvolvendo aplicações web completas do front-end ao back-end, com foco em organização, consistência e entrega.

---

## O que eu faço

- Desenvolvimento de interfaces com **componentização** e UI escalável usando **React** e **Next.js**
- Criação de **APIs REST** utilizando as runtimes **Node.js** ou **Bun**
- Autenticação, validações, regras de negócio, **BFF (Backend for Frontend)** e integrações com serviços externos
- Modelagem e consultas em banco de dados relacional (**PostgreSQL**)
- Estruturação de projetos com **separação de responsabilidades**, padronização de erros e **testes automatizados (Vitest)**


---

## Tecnologias

| Área | Stack |
|------|-------|
| Front-end | React, Next.js, Tailwind, Shadcn/UI |
| Back-end | Node.js, Express, NestJS, Fastify |
| Banco de dados | PostgreSQL |
| Ferramentas | Git, Linux, Docker |

---

Confira meus projetos para ver exemplos reais do meu trabalho!`,
        },
        {
          id: 'interesses',
          label: 'interesses.md',
          content: `# Interesses

## O que me motiva

- Desenvolvimento Web
- Open Source
- Linux
- Aprender novas tecnologias


## Hobbies

Quando não estou programando, você pode me encontrar:

- Trabalhando em **projetos pessoais**
- Lendo sobre tecnologia
- Surfando
- Jogando tênis
- Testando uma nova distro Linux`,
        },
        {
          id: 'educacao',
          label: 'educacao.md',
          content: `# Formação

## Graduação — UNINTER
**Análise e Desenvolvimento de Sistemas**
*Fev 2023 – Ago 2025*

---

Estou em constante evolução, aprofundando meus estudos em desenvolvimento web moderno (Front-end e Back-end), arquitetura de aplicações e boas práticas de engenharia de software.`,
        },
      ],
    },
    {
      id: 'profissional',
      label: 'profissional',
      items: [
        {
          id: 'experiencia',
          label: 'experiencia.md',
          content: `# Experiência Profissional

## Desenvolvedor Front-end — IPM Sistemas
*03/2025 – Atual*

- Criação e evolução de interfaces web utilizando React, Next.js e TypeScript, com foco em reuso, consistência visual e escalabilidade
- Integrações com APIs internas e externas utilizando BFF no Next.js, com SSR para renderização server-side e otimização de performance e experiência do usuário
- Implementação de autenticação e segurança com JWT e fluxo de Refresh Token
- Criação de uma biblioteca interna de componentes (Design System), com documentação em Storybook e publicação em registry privado via Verdaccio
- Integração com chamadas para um serviço de IA proprietário, realizando integração via API e adaptação de fluxos internos
- Atuação em ambiente corporativo com versionamento, code review e pipelines automatizados via GitLab CI/CD

**Stack:** React, Next.js, TypeScript, Tailwind, shadcn/ui, Radix UI, Storybook, Verdaccio, Node.js, Docker, GitLab CI/CD

---

## Desenvolvedor — ADMRH
*02/2024 – 03/2025*

- Criação e manutenção de rotinas e otimizações em SQL, com foco em performance e confiabilidade
- Desenvolvimento de procedures críticas e melhoria de consultas para relatórios
- Otimização de relatórios e rotinas SQL, reduzindo tempo de execução e melhorando estabilidade do sistema
- Construção de protótipos e interfaces interativas, integrando sistemas legados a novas aplicações web, com foco em usabilidade e performance

**Stack:** SQL, procedures, relatórios, React, Vite, JavaScript,
TypeScript`,
        },
        {
          id: 'habilidades',
          label: 'habilidades.md',
          content: `# 🛠️ Habilidades Técnicas

## 🎨 Front-end

| Categoria | Tecnologias |
|----------|-------------|
| Linguagens | TypeScript, JavaScript |
| Frameworks | React, Next.js |
| State & Data | Redux Toolkit, Zustand |
| UI & Styling | Tailwind CSS, shadcn/ui, Radix UI |
| Forms & Validation | React Hook Form (RHF), Zod |
| Rendering | SSR (Server-Side Rendering) |

## ⚙️ Back-end

| Categoria | Tecnologias |
|----------|-------------|
| Runtime | Node.js, Bun |
| Frameworks | NestJS, Express, Fastify, Elysia |
| APIs | REST, integração via BFF (Next.js) |
| Auth | JWT, Refresh Token |
| Databases | PostgreSQL |

## 🧪 Testes

| Categoria | Tecnologias |
|----------|-------------|
| Unit & Integration | Jest, Vitest |
| Front-end Testing | React Testing Library (RTL) |

## 🚀 DevOps & Ferramentas

| Categoria | Tecnologias |
|----------|-------------|
| Containers | Docker, Docker Compose |
| CI/CD | GitLab CI/CD |
| SO & Ferramentas | Linux, SSH, Git |

---

## 💻 Exemplo de Código (TypeScript)

\`\`\`ts
import { useEffect, useState } from "react"

/**
 * Hook para debounce de valores (útil para inputs, filtros e buscas)
 */
export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
\`\`\``,
        },
      ],
    },
    {
      id: 'contato',
      label: 'contato',
      items: [
        {
          id: 'email',
          label: 'email.md',
          content: `# Contato

Fique à vontade para entrar em contato! Respondo em até **24 horas**.

## Email

**richard@exemplo.com**

---

*Assunto sugerido:* "Contato via Portfolio"`,
        },
        {
          id: 'redes',
          label: 'redes-sociais.md',
          content: `# Redes Sociais

Me siga para acompanhar meus projetos!

## Links

- **GitHub:** [github.com/richardbmezzomo](https://github.com/richardbmezzomo)
- **LinkedIn:** [linkedin.com/in/richardbmezzomo](https://linkedin.com/in/richardbmezzomo)
- **Twitter:** [twitter.com/richardbmezzomo](https://twitter.com/richardbmezzomo)

---

> Sempre aberto para colaborações e novas conexões!`,
        },
      ],
    },
  ],
}
