import Button from '@/components/button'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className='st-site-header st-style2 st-sticky-header fixed h-full top-0 flex-shrink-0 w-[300px] border-r border-site-darkcolor4 bg-site-darkcolor2 overflow-auto'>
      <div className='st-main-header px-5 pt-10'>
        <div className='container'>
          <div className='st-main-header-in'>
            <div className='st-main-header-left'>
              <div className='st-header-author h-48 w-48 rounded-full border-[6px] border-white/10 m-auto'>
                <img
                  src='hero-img.jpg'
                  alt=''
                  className='rounded-inherit h-full w-full object-cover'
                />
              </div>
            </div>
            <div className='st-main-header-right text-white'>
              <div className='st-nav flex flex-col'>
                <ul className='st-nav-list st-onepage-nav flex flex-col'>
                  <li>
                    <a
                      href='#home'
                      className='st-smooth-move py-4 uppercase font-medium inline-block'
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href='#about'
                      className='st-smooth-move py-4 uppercase font-medium inline-block'
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href='#resume'
                      className='st-smooth-move py-4 uppercase font-medium inline-block'
                    >
                      Resume
                    </a>
                  </li>
                  <li>
                    <a
                      href='#portfolio'
                      className='st-smooth-move py-4 uppercase font-medium inline-block'
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href='#blog'
                      className='st-smooth-move py-4 uppercase font-medium inline-block'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href='#contact'
                      className='st-smooth-move py-4 uppercase font-medium inline-block'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                <div className='st-hero-btn'>
                  <Button variant='secondary' size='small'>
                    Hire Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
