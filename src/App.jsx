import React from 'react'
import { Outlet } from 'react-router-dom'

import { HelmetProvider } from 'react-helmet-async'

// Importing Other components
import Header from './components/organisms/Header/Header'
// import HeaderVersionTwo from './components/organisms/HeaderVersionTwo/HeaderVersionTwo'
import Footer from './components/organisms/Footer/Footer'
import HandBar from './components/molecules/HandBar/HandBar'

import './App.scss'
import PrimaryImport from './utils/primaryImport'

const App = () => (
  <HelmetProvider>
    <PrimaryImport />
    <div className="App position-relative">
      <Header />
      <Outlet />
      <Footer />
      <HandBar />
    </div>
  </HelmetProvider>
)

export default App
