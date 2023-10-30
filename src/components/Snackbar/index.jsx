import React from 'react'
import {BsCheck2Circle} from 'react-icons/bs'
import {BiError} from 'react-icons/bi'

const Snackbar = (props) => {
  return (
    <div className='fixed left-[3%] bottom-[5%] w-fit px-4 py-2 flex items-center bg-green-900 font-semibold select-none rounded-md'>
      <div className='flex-[20%]'>
        {props.type === 'success' ? (
          <BsCheck2Circle className='text-xl' />
        ) : (
          <BiError className='text-xl' />
        )}
      </div>
      <div className='flex-[80%] '>{props.message}</div>
    </div>
  )
}

export default Snackbar
