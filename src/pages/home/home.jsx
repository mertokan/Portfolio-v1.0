import Symbol from '@/components/symbol'
import React from 'react'
import {FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'
import About from '../about'

const Home = () => {
  return (
    <>
      {/* // Start Hero Seciton */}
      <section
        id='home'
        className='st-hero st-style2 h-screen flex justify-center items-center relative overflow-hidden text-center bg-site-darkcolor2 text-neutral-0'
      >
        <div className='st-hero-text px-4 w-full'>
          <h1 className='text-6xl font-semibold mb-5'>
            Hi, I am <span className='text-state-yellow'>Mert Okan</span>
          </h1>
          <p className='text-lg font-light mb-6 text-neutral-3'>
            I am a frontend web developer. I can provide clean code and pixel perfect design. <br />
            I also make website more & more interactive with web animations.
          </p>
          <div className='st-hero-social-links flex justify-center items-center gap-3'>
            <Symbol to='https://www.linkedin.com/in/mert-okan-522140212/' target='_blank'>
              <FaLinkedin />
            </Symbol>
            <Symbol to='https://twitter.com/mert_okan_12' target='_blank'>
              <FaTwitter />
            </Symbol>
            <Symbol to='https://github.com/Elitesmert' target='_blank'>
              <FaGithub />
            </Symbol>
          </div>
        </div>
        <div id='background-wrap'>
          <div className='bubble x1'></div>
          <div className='bubble x2'></div>
          <div className='bubble x3'></div>
          <div className='bubble x4'></div>
          <div className='bubble x5'></div>
          <div className='bubble x6'></div>
          <div className='bubble x7'></div>
          <div className='bubble x8'></div>
          <div className='bubble x9'></div>
          <div className='bubble x10'></div>
        </div>
        <div id='particles-js'></div>
      </section>
      {/* // End Hero Seciton */}
      <About />
    </>
  )
}

export default Home
