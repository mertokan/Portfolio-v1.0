import React from 'react'
import Sidebar from './components/sidebar'
import Home from '@/pages/home/home'
import About from '@/pages/about'
import Projects from '@/pages/projects'
import Footer from './components/footer'

const WebLayout = () => {
  return (
    <>
      <Sidebar />
      <div className='flex-1 md:ml-[300px]'>
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default WebLayout
