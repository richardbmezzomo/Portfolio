export default function Home() {
  return (
    <>
      <section
        id="hello"
        className="relative mx-auto flex min-h-[calc(100svh-8rem)] max-w-7xl items-center overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="self-center lg:self-start">
            <p className="mb-2 text-base text-slate-400/90">Olá, meu nome é</p>

            <h1 className="text-5xl leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Richard B<br />
              Mezzomo
            </h1>

            <p className="mt-3 text-lg text-indigo-400 sm:text-xl">
              {'>'} Desenvolvedor Full Stack
            </p>

            {/* bloco “código” */}
            <div className="mt-10 rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-sm leading-relaxed shadow-[inset_0_0_0_1px_rgba(15,23,42,0.35)] sm:p-5 sm:text-base">
              <p className="text-slate-400">
                // Encontre meu perfil no Github:
              </p>
              <p className="mt-1">
                <span className="text-indigo-400">const </span>
                <span className="text-teal-300">githubLink</span>
                <span className="text-slate-200"> = </span>
                <a
                  href="https://github.com/richardbmezzomo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 underline decoration-dotted underline-offset-4 hover:opacity-90"
                >
                  "https://github.com/
                  <br className="block sm:hidden" />
                  richardbmezzomo"
                </a>
                <span className="text-slate-200">;</span>
              </p>
            </div>
          </div>

          {/* COLUNA DIREITA (snippets) — some no mobile */}
          <div className="relative hidden lg:block">
            {/* glow de fundo */}

            <div className="flex flex-col gap-6">
              <CodeCard
                title="useFetch.ts"
                lines={[
                  'export async function useFetch<T>(url: string): Promise<T> {',
                  '  const res = await fetch(url);',
                  "  if (!res.ok) throw new Error('Request failed');",
                  '  return res.json() as Promise<T>;',
                  '}',
                ]}
              />
              <CodeCard
                title="api/hello.ts"
                lines={[
                  "import type { NextRequest } from 'next/server'",
                  '',
                  'export async function GET(req: NextRequest) {',
                  "  return Response.json({ ok: true, message: 'Hello, Richard!' })",
                  '}',
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function CodeCard({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-[0_8px_30px_rgba(2,6,23,0.35)] backdrop-blur">
      <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-2">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>
        <span className="ml-3 text-xs text-slate-400">{title}</span>
      </div>
      <pre className="p-4 text-[13px] leading-relaxed text-slate-300">
        {lines.map((l, i) => (
          <code key={i} className="block whitespace-pre">
            {l}
          </code>
        ))}
      </pre>
    </div>
  )
}
