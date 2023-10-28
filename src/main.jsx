import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {NextUIProvider} from '@nextui-org/react'
import {inject} from '@vercel/analytics'
import routes from './routes'
import './assets/css/index.css'

inject()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={routes} />
    </NextUIProvider>
  </React.StrictMode>
)
