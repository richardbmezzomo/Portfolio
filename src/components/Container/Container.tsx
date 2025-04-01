type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children}: ContainerProps) {
  return (
    <div className="m-4 sm:m-5 md:m-6 lg:m-12 xl:m-16">
      {children}
    </div>
  )
}
