import React from "react";
import "./SupportPage2.css";
import SidebarAccount from "../SidebarAccount/SidebarAccount";
import FooterNew from "../FooterNew/FooterNew";
import MobileHeader from "../MobileHeader/MobileHeader";
import HeaderNew from "../HeaderNew/HeaderNew";
import { Link } from "react-router-dom";

function SupportPage2() {
  return (
    <>
      <MobileHeader />
      <HeaderNew />
      <div className="container-fluid p-whole">
        <nav aria-label="breadcrumb" className="main-breadcrumb accpg-2-link">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/HomePageSignup">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              My Account
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-xl-3">
            <SidebarAccount />
          </div>

          <div className="col-md-9 sp2-box2">
            <div className="supg2-rect">
              <div className="supg2-txt1">
                <p>How Shop2Cash works?</p>
              </div>
              <div className="supg2-txt2"></div>
              <div className="supg2-para">
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>

                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>

                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>

                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterNew />
    </>
  );
}

export default SupportPage2;
