import React from "react"

import { Outlet } from 'react-router-dom'

import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'

import './App.scss'

const App = () => <div className="App position-relative">
  {/* <Header /> */}
  <Outlet />
  <Footer />
</div>


export default App
