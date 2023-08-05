import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.scss'
import img404 from '../../../public/assets/icons/error404.svg'

const NotFound = () => (
  <div className="container error-cont">
    <div className="error">
      <img src={img404} alt="404 Warning" />
    </div>
    <div className="text-center my-5">
      <h1 className="d-none">Page not found</h1>
      <Link to="/">
        <button type="button" className="home-btn ag-primary-btn">
          Go Back to Home
        </button>
      </Link>
    </div>
  </div>
)

export default NotFound
