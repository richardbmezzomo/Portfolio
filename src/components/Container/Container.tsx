type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children}: ContainerProps) {
  return (
    <div className="m-4 md:m-16">
      {children}
    </div>
  )
}
