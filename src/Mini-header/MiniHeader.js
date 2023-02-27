import React from 'react'
import './MiniHeader.css';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from 'react-router-dom'
import BorderAllIcon from '@mui/icons-material/BorderAll';

function MiniHeader() {
  return (
    <>
    <div className='hidden3'>
       <nav className="navbar navbar-expand-lg navbar-light bg-orange-new">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <div className="icon-text">
            <img src="/Kling.png" />
            <Link to="/HomePageSignup">
              Shop2Cash
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex">
              <div className="input-icon">
                {/* <i className="fa fa-search icons" aria-hidden="true"></i>

                <input
                  className="form-control input-check2 me-2"
                  type="search"
                  placeholder="Search anything you need"
                  aria-label="Search"
                /> */}
                {/* <i className="fa fa-microphone icons" aria-hidden="true"></i> */}
              </div>
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
             
              <li className="nav-item icon-align">
                <AccountCircleIcon style={{ color: "white" }} />
                <Link to="/AccountPage1">
                  <a
                    className="nav-link active right-side-text"
                    aria-current="page"
                    href="#"
                  >
                    My Account
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  )
}

export default MiniHeader;