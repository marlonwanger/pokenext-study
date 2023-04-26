import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <header>
        <link rel='icon shortcut' href='/images/favicon.ico'></link>
        <title>Pokenext</title>
      </header>
      <Header/>
        <main className='container mx-auto min-h-[70vh]'>
          {children}
        </main>
      <Footer/>
    </>
  )
}
