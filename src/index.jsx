import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Footer from './components/molecules/Footer/Footer'
import Header from './components/molecules/Header/Header'
import ErrorBoundary from './components/organisms/ErrorBoundary/ErrorBoundary'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Header />
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    <Footer />
  </React.StrictMode>
)
