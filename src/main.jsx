import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import {Analytics} from '@vercel/analytics/react'
import routes from './routes'
import './assets/css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
    <Analytics />
  </React.StrictMode>
)
