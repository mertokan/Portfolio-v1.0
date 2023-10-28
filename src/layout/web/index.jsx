import React from 'react'
import Sidebar from './components/sidebar'
import Home from '@/pages/home/home'
import About from '@/pages/about'
import Projects from '@/pages/projects'
import Footer from './components/footer'
import MobileBar from './components/mobileBar/mobileBar'
import Contact from '@/pages/contact'

const WebLayout = () => {
  return (
    <main className='dark'>
      <Sidebar />
      <div className='flex-1 md:ml-[300px]'>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <MobileBar />
      </div>
    </main>
  )
}

export default WebLayout
