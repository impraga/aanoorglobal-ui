import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

// Components
import App from './App'
import ErrorBoundary from './components/organisms/ErrorBoundary/ErrorBoundary'
import HomePage from './pages/HomePage/HomePage'
import NotFound from './pages/NotFound/NotFound'
import About from './pages/About/About'
import Sitemap from './pages/Sitemap/Sitemap'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import ServicePage from './pages/ServicePage/ServicePage'
import ContactPage from './pages/ContactPage/ContactPage'

import './index.scss'

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
        element: <ContactPage />
        // lazy: () => import('./components/organisms/ContactSection/ContactSection')
      },
      {
        path: 'services/:serviceName',
        element: <ServicePage />
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
])

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </ErrorBoundary>
  </React.StrictMode>
)
