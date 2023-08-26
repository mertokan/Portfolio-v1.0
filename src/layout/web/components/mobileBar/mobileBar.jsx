import {NAVBAR_MENU} from '@/utils/consts/navbar'
import React from 'react'
import {Link} from 'react-scroll'

const MobileBar = () => {
  return (
    <div className='fixed md:hidden container items-center z-30 bottom-3 text-white flex justify-center'>
      <div className='border-state-yellow border-[2px] shadow-inner shadow-state-yellow bg-site-darkcolor4/80 flex justify-evenly w-3/4 rounded-3xl select-none'>
        {NAVBAR_MENU.map((menu, key) => (
          <Link
            key={key}
            to={menu.path}
            activeClass='text-state-yellow'
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            className='py-4 uppercase font-medium inline-block transition-all duration-300 ease-in-out cursor-pointer'
          >
            {menu.icon}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileBar
