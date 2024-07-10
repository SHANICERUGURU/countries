import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" style={{ backgroundColor: '#f7bd86', display: 'flex' }}>
        <div><a className="navbar-brand" href="#">COUNTRYDATABASE!!</a></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={'/home'} className="nav-link active" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pick a continent!!
              </a>
              <ul className="dropdown-menu">
                <Link to='/continents' state={'Africa'}>
                  <li><a className="dropdown-item" href="#">Africa</a></li>
                </Link>
                <Link to='/continents' state={'Oceania'}>
                  <li><a className="dropdown-item" href="#">Oceania</a></li>
                </Link>
                <Link to='/continents' state={'Europe'}>
                  <li><a className="dropdown-item" href="#">Europe</a></li>
                </Link>
                <Link to='/continents' state={'North America'}>
                  <li><a className="dropdown-item" href="#">North America</a></li>
                </Link>
                <Link to='/continents' state={'South America'}>
                  <li><a className="dropdown-item" href="#">South America</a></li>
                </Link>
                <Link to='/continents' state={'Asia'}>
                  <li><a className="dropdown-item" href="#">Asia</a></li>
                </Link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}
export default NavBar