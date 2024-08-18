import Header from '../header'
import Footer from '../footer'

type LayoutProp = {
  children: React.ReactNode
}

export default function Index({ children }: LayoutProp) {
  return (
    <div className="container mt-12 px-5 md:px-44 lg:px-72 xl:px-[370px]">
      <Header />
      <main className="pt-10">{children}</main>
      <Footer />
    </div>
  )
}
