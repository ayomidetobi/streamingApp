import React from "react"
import '../../src/App.css'
import logo from '../assets/image/Vector.png'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="container-fluid">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between  mb-4 px-5">
        <div className="col-md-3 mb-2 mb-md-0 aligns-items-center">
          <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <img src={logo} className="" alt="Logo" style={{height :"40px"}}/>
          <span className="pt-2 ps-1"><b>N</b></span>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to={'/'}  className="nav-link px-2 link-secondary">HOME</Link></li>
          <li className="vr mt-2 mx-2" style={{height :"25px"}}></li>
          <li><a href="#" className="nav-link px-2">MOVIE</a></li>
          <li className="vr mt-2 mx-2" style={{height :"25px"}}></li>
          <li><a href="#" className="nav-link px-2">TV SHOW</a></li>
          <li className="vr mt-2 mx-2" style={{height :"25px"}}></li>
          <li><a href="#" className="nav-link px-2">WEB SERIES</a></li>
          <li className="vr mt-2 mx-2" style={{height :"25px"}}></li>
          <li><a href="#" className="nav-link px-2">PRIMIUN</a></li>
        </ul>

        <div className="col-md-3 text-end">
          <i className="bi bi-search pe-4"></i>
          
          <a href="" className="pe-4 link-body-emphasis"><i className="bi bi-globe-americas"></i> EN  <i className="bi bi-chevron-down"> </i></a>

          <button type="button">SIGN IN</button>
        </div>
      </header>
    </div>
  )
}

export default Header;

