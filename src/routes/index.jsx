import WebLayout from '@/layout/web'
import NotFound from '@/pages/home/error-page'
import Home from '@/pages/home/home'
import UnderConstruction from '@/pages/home/under-construction'
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
        path: '/about',
        element: <UnderConstruction />,
      },
    ],
  },
])

export default routes
