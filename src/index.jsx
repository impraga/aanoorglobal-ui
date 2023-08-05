import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom/client'

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

import { TransitionProvider } from './context/TransitionContext'
import TransitionComponent from './components/organisms/Transition/Transition'

import './index.scss'
import Blog from './pages/Blog/Blog'
import Dashboard from './pages/Dashboard/Dashboard'
import NewBlog from './pages/NewBlog/NewBlog'

// const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: (
          <TransitionComponent>
            <HomePage />
          </TransitionComponent>
        ),
        children: [{ path: 'home', element: <HomePage /> }]
      },
      {
        path: 'contact',
        element: (
          <TransitionComponent>
            <ContactPage />
          </TransitionComponent>
        )
        // lazy: () => import('./components/organisms/ContactSection/ContactSection')
      },
      {
        path: 'services/:serviceName',
        element: (
          <TransitionComponent>
            <ServicePage />
          </TransitionComponent>
        )
      },
      {
        path: 'about',
        element: (
          <TransitionComponent>
            <About />
          </TransitionComponent>
        )
      },
      {
        path: 'sitemap',
        element: (
          <TransitionComponent>
            <Sitemap />
          </TransitionComponent>
        )
      },
      {
        path: 'privacy-policy',
        element: (
          <TransitionComponent>
            <PrivacyPolicy />
          </TransitionComponent>
        )
      },
      {
        path: 'blog',
        element: (
          <TransitionComponent>
            <Blog />
          </TransitionComponent>
        )
      },
      {
        path: 'dashboard',
        element: (
          <TransitionComponent>
            <Dashboard />
          </TransitionComponent>
        )
      },
      {
        path: 'new-blog',
        element: (
          <TransitionComponent>
            <NewBlog />
          </TransitionComponent>
        )
      },
      {
        path: '*',
        element: (
          <TransitionComponent>
            <NotFound />
          </TransitionComponent>
        )
      }
    ]
  }
])

// root.render(
ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <TransitionProvider>
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </TransitionProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
)
