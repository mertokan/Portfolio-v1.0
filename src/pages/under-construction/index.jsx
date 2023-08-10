import React from 'react'

const UnderConstruction = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div
        className=' w-[800px] h-[500px] rounded-[8px] overflow-hidden absolute 
       before:content-[""] before:absolute before:w-[800px] before:h-[500px] before:bg-gradient-to-b before:from-transparent before:via-state-purple before:to-state-purple before:animate-[don_6s_linear_infinite] before:top-[50%] before:left-[50%] before:origin-top-left
       after:content-[""] after:absolute after:w-[800px] after:h-[500px] after:bg-gradient-to-b after:from-state-orange after:via-state-orange after:to-transparent after:animate-[don_6s_linear_infinite] after:-top-[50%] after:-left-[50%] after:origin-bottom-right
'
      >
        <div className=' bg-neutral-8 absolute z-[1] inset-1 rounded-[8px]'>
          <div className=' flex items-center z-[2] w-full h-full justify-center flex-col relative overflow-hidden'>
            <img
              src='bw-stripe.jpg'
              alt='bwstripe'
              className='w-full h-10 absolute top-5 -left-64 -rotate-45'
            />
            <img
              src='bw-stripe.jpg'
              alt='bwstripe'
              className='w-full h-10 absolute top-5 left-64 rotate-45'
            />
            <img src='uc.png' alt='uc' className='w-64' />
            <img
              src='bw-stripe.jpg'
              alt='bwstripe'
              className='w-full h-10 absolute bottom-5 left-64 -rotate-45'
            />
            <img
              src='bw-stripe.jpg'
              alt='bwstripe'
              className='w-full h-10 absolute bottom-5 -left-64 rotate-45'
            />
          </div>
        </div>
      </div>
      <video autoPlay loop muted className='w-full h-full object-cover ease-in-out duration-200'>
        <source src='construction.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default UnderConstruction
