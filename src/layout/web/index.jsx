import React from 'react'
import {Outlet} from 'react-router-dom/dist'
import Sidebar from './components/sidebar'

const WebLayout = () => {
  return (
    <>
      <Sidebar />
      <div className='p-6 flex-1 ml-[300px]'>
        <Outlet />
      </div>
    </>
  )
}

export default WebLayout
