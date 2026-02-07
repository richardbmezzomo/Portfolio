import { NextResponse } from 'next/server'
import { GITHUB_USERNAME, customDescriptions, liveUrls } from '@/data/projectsData'

const GITHUB_GRAPHQL = 'https://api.github.com/graphql'

const query = `
  query {
    user(login: "${GITHUB_USERNAME}") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            homepageUrl
            primaryLanguage {
              name
            }
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

export async function GET() {
  const token = process.env.GITHUB_TOKEN

  if (!token) {
    return NextResponse.json(
      { error: 'GITHUB_TOKEN não configurado' },
      { status: 500 },
    )
  }

  try {
    const res = await fetch(GITHUB_GRAPHQL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    })

    const json = await res.json()

    if (json.errors) {
      return NextResponse.json({ error: json.errors }, { status: 500 })
    }

    const repos = json.data.user.pinnedItems.nodes

    const projects = repos.map(
      (repo: {
        name: string
        description: string | null
        url: string
        homepageUrl: string | null
        primaryLanguage: { name: string } | null
        repositoryTopics: { nodes: { topic: { name: string } }[] }
      }) => ({
        id: repo.name,
        name: repo.name,
        description:
          customDescriptions[repo.name] ||
          repo.description ||
          'Sem descrição',
        image: `https://opengraph.githubassets.com/1/${GITHUB_USERNAME}/${repo.name}`,
        language: repo.primaryLanguage?.name || 'Outros',
        technologies: repo.repositoryTopics.nodes.map(
          (t: { topic: { name: string } }) => t.topic.name,
        ),
        githubUrl: repo.url,
        liveUrl: liveUrls[repo.name] || repo.homepageUrl || undefined,
      }),
    )

    return NextResponse.json(projects)
  } catch (error) {
    console.error('Erro ao buscar pinned repos:', error)
    return NextResponse.json(
      { error: 'Erro ao buscar repositórios' },
      { status: 500 },
    )
  }
}
