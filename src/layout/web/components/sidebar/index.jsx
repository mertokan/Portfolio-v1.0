import Button from '@/components/button'
import {NAVBAR_MENU} from '@/utils/consts/navbar'
import classNames from 'classnames'
import React from 'react'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className='st-site-header st-style2 st-sticky-header fixed h-full top-0 flex-shrink-0 w-[300px] border-r border-site-darkcolor4 bg-site-darkcolor2 overflow-auto'>
      <div className='st-main-header px-5 pt-10'>
        <div className='container'>
          <div className='st-main-header-in'>
            <div className='st-main-header-left'>
              <div className='st-header-author h-48 w-48 rounded-full border-[6px] border-white/10 m-auto'>
                <img
                  src='pp.jpg'
                  alt=''
                  className='rounded-inherit h-full w-full object-cover object-photo'
                />
              </div>
            </div>
            <div className='st-main-header-right text-white'>
              <div className='st-nav flex flex-col'>
                <ul className='st-nav-list st-onepage-nav flex flex-col'>
                  {NAVBAR_MENU.map((menu, key) => (
                    <li>
                      {' '}
                      <NavLink
                        key={key}
                        to={menu.path}
                        className={({isActive}) =>
                          classNames(
                            'py-4 uppercase font-medium inline-block transition-all duration-300 ease-in-out',
                            {
                              '': !isActive,
                              'text-state-yellow': isActive,
                            }
                          )
                        }
                      >
                        {menu.title}
                      </NavLink>
                    </li>
                  ))}
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
