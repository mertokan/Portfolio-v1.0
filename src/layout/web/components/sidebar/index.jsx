import Button from '@/components/button'
import {NAVBAR_MENU} from '@/utils/consts/navbar'
import React from 'react'
import {Link} from 'react-scroll'

const Sidebar = () => {
  return (
    <>
      <aside className='hidden md:block st-style2 st-sticky-header fixed min-h-full top-0 flex-shrink-0 w-[300px] border-r border-site-darkcolor4 bg-site-darkcolor2 overflow-auto'>
        <div className='px-5 pt-10'>
          <div className='container mx-auto'>
            <div className='h-48 w-48 rounded-full border-[6px] border-white/10 m-auto'>
              <img
                src='pp.jpg'
                alt=''
                className='rounded-inherit h-full w-full object-cover object-photo'
              />
            </div>

            <div className='flex flex-col text-white'>
              <ul className='flex flex-col'>
                {NAVBAR_MENU.map((menu, key) => (
                  <li key={key}>
                    <Link
                      to={menu.path}
                      activeClass='text-state-yellow'
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={1000}
                      className='py-4 uppercase font-medium inline-block transition-all duration-300 ease-in-out cursor-pointer'
                    >
                      {menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <Button
                  variant='secondary'
                  size='small'
                  as='a'
                  download
                  href='/Resume-Mert-OKAN.pdf'
                >
                  Hire Me
                </Button>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
