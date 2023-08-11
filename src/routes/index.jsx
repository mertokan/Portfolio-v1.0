import WebLayout from '@/layout/web'
import About from '@/pages/about'
import NotFound from '@/pages/error-page'
import Home from '@/pages/home/home'
import UnderConstruction from '@/pages/under-construction'
import {createBrowserRouter} from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <WebLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/uc',
        element: <UnderConstruction />,
      },
    ],
  },
])

export default routes
