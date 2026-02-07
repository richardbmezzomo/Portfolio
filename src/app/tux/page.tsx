import Image from 'next/image'

export default function Tux() {
  return (
    <div className="flex h-[calc(100svh-8rem)] flex-col items-center justify-center gap-6">
      <Image
        src="https://media1.tenor.com/m/oFwxiOFZMMcAAAAC/linux-unix.gif"
        alt="Linux Tux"
        width={300}
        height={300}
        unoptimized
      />
      <p className="text-sm text-slate-500">I use arch btw.</p>
    </div>
  )
}
