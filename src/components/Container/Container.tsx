type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex min-h-screen flex-col p-4 sm:p-5 md:p-6 lg:p-12 xl:p-16">
      {children}
    </div>
  )
}
