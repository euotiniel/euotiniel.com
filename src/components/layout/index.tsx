import Header from './header'
import Footer from './footer'

type LayoutProp = {
  children: React.ReactNode
}

export default function Index({ children }: LayoutProp) {
  return (
    <div className="flex justify-center px-5 py-20">
      <div className="flex w-full max-w-[530px] flex-col">
        <Header />
        <main className="pt-10">{children}</main>
        <Footer />
      </div>
    </div>
  )
}
