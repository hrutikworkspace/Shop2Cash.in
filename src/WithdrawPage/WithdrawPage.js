import React from "react";
import "./WithdrawPage.css";
import HeaderNew from "../HeaderNew/HeaderNew";
import Footer from "../Footer/Footer";
import SidebarAccount from "../SidebarAccount/SidebarAccount";
import FooterNew from "../FooterNew/FooterNew";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
const WithdrawPage = () => {
  return (
    <>
      <MobileHeader />
      <HeaderNew />
      <div>
        <div className="container-fluid p-whole">
          <div className="row">
            <nav
              aria-label="breadcrumb"
              className="main-breadcrumb accpg-2-link"
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/HomePageSignup">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Withdraw Money
                </li>
              </ol>
            </nav>
            <div className="col-xl-3">
              <SidebarAccount />
            </div>
            <div className="col-xl-9">
              <div className="main-withdrawBox">
                <div className="withdrawBox-title">
                  <span>Withdraw money</span>
                </div>
                <div className="withdrawBox-1line"></div>
                
                <div className="row">
                  <div className="col-md-6 col-sm-12 with-v-line">
                    <div
                      className="withdrawBox-1 withdrawBox-b"
                      style={{ paddingBottom: "1rem" }}
                    >
                      <div>
                        <p className="Box-1Line">MAKE A RECHARGE</p>
                      </div>
                      <div>
                        <p className="Box-2Line">
                          Use your cashback to recharge your bills.
                        </p>
                      </div>
                      <div>
                        <p className="Box-3Line"> &#x20b9;0</p>
                      </div>
                      <div>
                        <p className="Box-4Line">
                          NOTE: Your minimum balance should be 250.
                        </p>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <button className="button">
                          Recharge now &nbsp;{" "}
                          <img
                            className="insidebutton"
                            src="/withdraw/Arrow.png"
                          ></img>
                        </button>
                      </div>
                    </div>
                  <div class="vl"></div>

                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="withdrawBox-1">
                      <div>
                        <p className="Box-1Line">TRANSFER TO E-WALLET</p>
                      </div>
                      <div>
                        <p className="Box-2Line">
                          You can transfer money to any wallet.
                        </p>
                      </div> 
                      <div>
                        <p className="Box-3Line"> &#x20b9;0</p>
                      </div>
                      <div>
                        <p className="Box-4Line">
                          NOTE: Your minimum balance should be 250.
                        </p>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <button className="button">
                          Transfer &nbsp;{" "}
                          <img
                            className="insidebutton"
                            src="/withdraw/Arrow.png"
                          ></img>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
          {/* <div className="with-vl"></div> */}
                <hr></hr>
                <div className="row">
                  <div className="col-md-6 col-sm-12 pb-4">
                    <div
                      className="withdrawBox-1 withdrawBox-b "
                      style={{ paddingBottom: "1rem" }}
                    >
                      <div>
                        <p className="Box-1Line">TRANSFER TO BANK</p>
                      </div>
                      <div>
                        <p className="Box-2Line">
                          Use your cashback to recharge your bills.
                        </p>
                      </div>
                      <div>
                        <p className="Box-3Line"> &#x20b9;0</p>
                      </div>
                      <div>
                        <p className="Box-4Line">
                          NOTE: Your minimum balance should be 250 and it may
                          take 2-3 days.
                        </p>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <button className="button">
                          Create Request &nbsp;{" "}
                          <img
                            className="insidebutton"
                            src="/withdraw/Arrow.png"
                          ></img>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="withdrawBox-1">
                      <div>
                        <p className="Box-1Line">CONVERT TO GIFT CARDS</p>
                      </div>
                      <div>
                        <p className="Box-2Line">
                          Our gift partners are: amazon and flipkart
                        </p>
                      </div>
                      <div>
                        <p className="Box-3Line"> &#x20b9;0</p>
                      </div>
                      <div>
                        <p className="Box-4Line">
                          NOTE: Your minimum balance should be 250.
                        </p>
                      </div>
                      <div
                        className="button-maintag"
                        style={{ textAlign: "center", paddingBottom: "1rem" }}
                      >
                        <button className="button">
                          Convert Gift Cards &nbsp;{" "}
                          <img
                            className="insidebutton"
                            src="/withdraw/Arrow.png"
                          ></img>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterNew />
    </>
  );
};

export default WithdrawPage;
