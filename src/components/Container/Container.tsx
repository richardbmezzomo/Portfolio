type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col px-4 sm:px-5 md:px-6 lg:px-12 xl:px-16">
      {children}
    </div>
  )
}
