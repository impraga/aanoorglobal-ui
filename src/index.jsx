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
import About from './pages/About/About'
import Sitemap from './pages/Sitemap/Sitemap'
import Contact from './pages/Contact/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'

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
        element: <Contact />
        // lazy: () => import('./components/organisms/ContactSection/ContactSection')
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'sitemap',
        element: <Sitemap />
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
  // {
  //   path: '*',
  //   element: <NotFound />
  // }
])

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </ErrorBoundary>
  </React.StrictMode>
)
