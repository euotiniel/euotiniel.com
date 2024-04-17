import React from 'react'
import Header from '../header'
import Footer from '../footer'
type layoutProp = {
  children: React.ReactNode
}

export default function index({ children }: layoutProp) {
  return (
    <div className='container mt-12 px-5 md:px-20 lg:px-56 xl:px-80 flex flex-col gap-3'>
      <Header />
      <main className='pt-10'>{children}</main>
      <Footer />
    </div>
  )
}
