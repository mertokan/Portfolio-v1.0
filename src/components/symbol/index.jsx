import React from 'react'
import {Link} from 'react-router-dom'
import {FaReact} from 'react-icons/fa'
import classNames from 'classnames'

const Symbol = ({variant = 'primary', children = <FaReact />, to = '#', target = '_self'}) => {
  return (
    <>
      <Link
        to={to}
        target={target}
        className={classNames(
          'rounded-full border-2  h-11 w-11 flex justify-center items-center transition-colors duration-300 text-lg',
          {
            'text-neutral-6 border-white/10 hover:text-neutral-3 hover:border-neutral-3':
              variant === 'primary',
            'border-[1px] text-neutral-6 border-white/10 hover:border-state-yellow':
              variant === 'secondary',
          }
        )}
      >
        {children}
      </Link>
    </>
  )
}

export default Symbol
