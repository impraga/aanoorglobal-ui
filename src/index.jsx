import React from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
// import ReactDOM from 'react-dom'
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'

// Components
import App from './App'
import ErrorBoundary from './components/organisms/ErrorBoundary/ErrorBoundary'
import HomePage from './pages/HomePage/HomePage'
import NotFound from './pages/NotFound/NotFound'
import About from './pages/About/About'
import Sitemap from './pages/Sitemap/Sitemap'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import ContactPage from './pages/ContactPage/ContactPage'
// import Blog from './pages/Blog/Blog'
import Dashboard from './pages/Dashboard/Dashboard'
import NewBlog from './pages/NewBlog/NewBlog'
import LoginPage from './pages/LoginPage/LoginPage'

// import { TransitionProvider } from './context/TransitionContext'
// import TransitionComponent from './components/organisms/Transition/Transition'
import ProtectedComponent from './components/molecules/ProtectedComponent/ProtectedComponent'

import './index.scss'
import BlogView from './pages/BlogView/BlogView'
import ServicePage from './pages/ServicePage/ServicePage'
import Blog from './pages/Blog/Blog'
import LandingPage from './pages/LandingPage/LandingPage'
import AdminPage from './pages/AdminPage/AdminPage'
import Loader from './components/atoms/Loader/Loader'

const root = createRoot(document.getElementById('root'))

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
        path: 'services/:category/:serviceName',
        element: <ServicePage />
      },
      {
        path: 'blog',
        element: <Blog />,
        children: [
          { path: ':service', element: <Blog /> },
          {
            path: 'tag',
            element: <Blog />,
            children: [
              {
                path: ':tag'
              }
            ]
          }
        ]
      },
      {
        path: 'post',
        element: <Navigate to="/blog" />
      },
      {
        path: 'post/:postUrl',

        element: <BlogView />
      },

      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
  {
    element: <LandingPage />,
    errorElement: <NotFound />,
    path: 'landing-page'
  },
  {
    element: <LoginPage />,
    errorElement: <NotFound />,
    path: 'ar-admin/login'
  },
  {
    path: 'admin',
    errorElement: <NotFound />,
    element: (
      <ProtectedComponent>
        <AdminPage />
      </ProtectedComponent>
    ),
    children: [
      {
        path: 'edit-blog/:postUrl',
        element: (
          <ProtectedComponent>
            <NewBlog />
          </ProtectedComponent>
        )
      },
      {
        path: 'dashboard',
        element: (
          <ProtectedComponent>
            <Dashboard />
          </ProtectedComponent>
        )
      },

      {
        path: 'new-blog',
        element: (
          <ProtectedComponent>
            <NewBlog />
          </ProtectedComponent>
        )
      }
    ]
  }
])

root.render(
  // ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </ErrorBoundary>
  </React.StrictMode>
  // document.getElementById('root')
)
