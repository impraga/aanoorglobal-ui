import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ReactDOM from 'react-dom/client'

// Components
import App from './App'
import ErrorBoundary from './components/organisms/ErrorBoundary/ErrorBoundary'
import HomePage from './pages/HomePage/HomePage'
import NotFound from './pages/NotFound/NotFound'
import './index.scss'
import Services from './pages/Services/Services'

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        children: [{ path: 'home', element: <HomePage /> }]
      },
      {
        path: 'contact',
        lazy: () => import('./components/organisms/ContactSection/ContactSection')
      },
      {
        path: 'services',
        element: <Services />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </ErrorBoundary>
  </React.StrictMode>
)
