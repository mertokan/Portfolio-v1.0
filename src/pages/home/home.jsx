import Symbol from '@/components/symbol'
import React from 'react'
import {FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'
import BgParticle from '@/components/BgParticle'

const Home = () => {
  return (
    <>
      {/* // Start Hero Seciton */}

      <section
        id='home'
        className='h-screen flex justify-center items-center relative overflow-hidden text-center bg-site-darkcolor2 text-neutral-0'
      >
        <div className='absolute h-full w-full top-0'>
          <BgParticle />
        </div>
        <div className='px-4 w-full relative'>
          <h1 className='text-6xl font-semibold mb-5'>
            Hi, I am <span className='text-state-yellow'>Mert Okan</span>
          </h1>
          <p className='text-lg font-light mb-6 text-neutral-3'>
            I am a frontend web developer. I can provide responsive design.
          </p>
          <div className='flex justify-center items-center gap-3'>
            <Symbol to='https://www.linkedin.com/in/mert-okan/' target='_blank'>
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
      </section>
      {/* // End Hero Seciton */}
      {/* <About />
      <Projects /> */}
    </>
  )
}

export default Home
