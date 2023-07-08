import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'
import ErrorBoundary from './components/organisms/ErrorBoundary/ErrorBoundary'

import NotFound from './pages/NotFound/NotFound'

import './App.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFound />,
    children: [
      {
        path: 'home',
        index: true,
        element: <HomePage />
      }
    ]
  },
  {
    path: 'contact',
    lazy: () => import('./components/organisms/ContactSection/ContactSection')
  },
  {
    path: '*',
    element: <NotFound />
  }
])

const App = () => (
  <div className="App position-relative">
    <React.StrictMode>
      <ErrorBoundary>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </ErrorBoundary>
    </React.StrictMode>
  </div>
)

export default App
