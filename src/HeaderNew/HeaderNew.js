import React, { useState, useEffect } from "react";
import "./HeaderNew.css";
import MicNoneIcon from "@mui/icons-material/MicNone";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GridViewIcon from "@mui/icons-material/GridView";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import SignIn from "../SignIn/Sign-In";

function HeaderNew() {
  // const navigate = useNavigate();

  // const Logout = () => {
  //   navigate("/SignIn");
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("user");
  // };

  const [sticky, setSticky] = useState(false);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const location = useLocation();
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <>
      <div className="hidden stickey">
        <nav className="navbar navbar-expand-lg navbar-light bg-orange-new">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <div className="icon-text">
              <img src="/Kling.png" />
              <NavLink to="/HomePageSignup">Shop2Cash</NavLink>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex">
                <div className="input-icon">
                  <i className="fa fa-search icons" aria-hidden="true"></i>
                  {/* <i className="fa fa-microphone" aria-hidden="true"></i> */}
                  <input
                    className="form-control input-check me-2"
                    type="search"
                    placeholder="Search anything you need"
                    aria-label="Search"
                  />
                  <img src="/mike.svg" className="mike-img" alt="" />
                </div>
                {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
              </form>
              <div className="mainAllList">
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li
                    className="nav-item icon-align"
                    style={{ display: "inline-block" }}
                  >
                    <NavLink
                      to="/AccountPage2"
                      className={
                        "nav-link right-side-text " +
                        (url === "/WithdrawPage" ? " active" : "") +
                        (url === "/OrderHistory" ? " active" : "") +
                        (url === "/ReferEarn" ? " active" : "") +
                        (url === "/SupportPage1" ? " active" : "") +
                        (url === "/PaymentSettingPage" ? " active" : "")
                      }
                      aria-current="page"
                    >
                      <AccountCircleIcon />
                      &nbsp; My Account
                    </NavLink>
                  </li>
                  <li
                    className="nav-item icon-align"
                    style={{ display: "inline-block" }}
                  >
                    <NavLink
                      to="/AllStorePage"
                      className="nav-link right-side-text"
                      aria-current="page"
                    >
                      <GridViewIcon />
                      &nbsp; All stores
                    </NavLink>
                  </li>
                  <li
                    className="nav-item icon-align"
                    style={{ display: "inline-block" }}
                  >
                    <NavLink
                      to="/SignIn"
                      className="nav-link right-side-text"
                      aria-current="page"
                    >
                      <img src="/HeaderNew/login.svg" />
                      &nbsp; Login/ Sign-up
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default HeaderNew;
