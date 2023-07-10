import React from "react"

import { Outlet } from 'react-router-dom'

import Header from './components/organisms/Header/Header'
import Footer from './components/organisms/Footer/Footer'

import './App.scss'
import HandBar from "./components/molecules/HandBar/HandBar"

const App = () => <div className="App position-relative">
  {/* <Header /> */}
  <Outlet />
  <Footer />
  <HandBar />
</div>


export default App
