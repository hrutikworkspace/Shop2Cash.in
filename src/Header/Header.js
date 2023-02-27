import React from "react";
import "./Header.css";
// import kling from './asset/Kling.png';
// import AllStore from './asset/AllStore.png';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const activeLink = 'bg-blue-100ntext-black'
  const normalLink = ''
  return (
    <>
    <div className="hidden2">
      <nav className="navbar navbar-expand-lg navbar-light bg-orange-new">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <div className="icon-text">
            <img src="/Kling.png" />
            <Link to="/HomePage">
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
                <i className="fa fa-search icons" aria-hidden="true"></i>

                <input
                  className="form-control input-check2 me-2"
                  type="search"
                  placeholder="Search anything you need"
                  aria-label="Search"
                />
                {/* <i className="fa fa-microphone icons" aria-hidden="true"></i> */}
              </div>
              {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item icon-align">
               <img src="/Header/menu.svg"/>
                <Link to="/AllStorePage"  className="nav-link active right-side-text"
                    aria-current="page">
                      All stores
                  
                
                </Link>
              </li>
              <li className="nav-item icon-align">
                <AccountCircleIcon style={{ color: "white" }} />
                <Link to="/AccountPage1" className="nav-link active right-side-text"
                    aria-current="page">
                      My Account
                  
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
}

export default Header;
