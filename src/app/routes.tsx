import { createBrowserRouter } from 'react-router-dom'
import Landing from '../pages/Landing'
import Visualization from '../pages/Visualization'

export const router = createBrowserRouter(
  [
    { path: '/', Component: Landing },
    { path: '/visualize', Component: Visualization },
  ],
  {
    basename: '/Rooted/',  // Add this for subpath routing
  }
)