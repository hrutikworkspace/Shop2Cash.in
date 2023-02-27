import React from "react";
import "./Refer&Earn.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import HeaderNew from "../HeaderNew/HeaderNew";
import Footer from "../Footer/Footer";
import SidebarAccount from "../SidebarAccount/SidebarAccount";
import FooterNew from "../FooterNew/FooterNew";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { fontSize } from "@mui/system";
import MobileHeader from "../MobileHeader/MobileHeader";
function ReferEarn() {
  return (
    <>
    <HeaderNew />
      <MobileHeader/>

    <div style={{ overflowX: "hidden" }}>
      {/* <Header/> */}
      
      <div className="container-fluid p-whole">
        <div className="row">
          <nav aria-label="breadcrumb" className="main-breadcrumb accpg-2-link">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
              <Link to="/HomePageSignup">
             Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Refer & Earn
              </li>
            </ol>
          </nav>
          <div className="col-xl-3">
            <SidebarAccount />
          </div>
          <div className="col-xl-9">
            <div className="main-refbox">
              <div className="refbox-title">
                <div>
                  <p className="refbox-name1">REFER & EARN</p>
                  <p className="refbox-name2">
                    Invite friends & get Flat Rs.100 on your friend’s first
                    order.
                  </p>
                </div>
                <div className="refbox-img">
                  <img src="Ref&Earn/man.png"></img>
                </div>
              </div>
              <div className="padding-whole">
                <div className="row">
                  <div>
                    <p className="refbox-mname1">Your Referral link:</p>
                  </div>
                  <div className="input-group col-xl-6 col-md-6 col-sm-9">
                    <input
                      type="text"
                      className="form-control refbox-input1 refbox-input1Name "
                      placeholder="https://shop2cash.com?r=19463331&fname=Karan+Sharma"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <button
                      className="btn btn-outline-secondary refbox-button1 refbox-buttonName"
                      type="button"
                    >
                      Copy link
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-9">
                    <div>
                      <p className="refbox-or">OR</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div>
                      <p className="refbox-invite">Invite via:</p>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="refbox-input2">
                      <div className="col-xl-3 col-md-8 input-group refbox-emailInput2">
                        <input
                          type="email"
                          className="form-control refbox-input2box refbox-input2Name"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Enter your friend’s email"
                        />
                        <svg
                        className="refbox-emailIcon"
                          width="19"
                          height="16"
                          viewBox="0 0 19 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_359_4178)">
                            <path
                              d="M1.28952 14.1245H4.29565V6.80711L0 3.58105V12.8332C0 13.1757 0.13586 13.5041 0.377692 13.7463C0.619524 13.9884 0.947519 14.1245 1.28952 14.1245Z"
                              fill="#4285F4"
                            />
                            <path
                              d="M14.6152 14.124H17.6247C17.7942 14.1243 17.9622 14.0912 18.1189 14.0264C18.2756 13.9617 18.4181 13.8666 18.5381 13.7467C18.6581 13.6268 18.7533 13.4843 18.8183 13.3275C18.8832 13.1707 18.9167 13.0025 18.9167 12.8328V3.57812L14.621 6.80418L14.6152 14.124Z"
                              fill="#34A853"
                            />
                            <path
                              d="M14.6152 1.21108V6.80704L18.9109 3.58099V1.85712C18.9109 0.260634 17.0935 -0.650932 15.8155 0.306957L14.6152 1.21108Z"
                              fill="#FBBC04"
                            />
                            <path
                              d="M4.29492 6.8069V1.21094L9.45301 5.08468L14.6119 1.21094V6.8069L9.45301 10.6806L4.29492 6.8069Z"
                              fill="#EA4335"
                            />
                            <path
                              d="M0 1.85712V3.57851L4.29565 6.80456V1.21108L3.09535 0.306957C1.81739 -0.650932 0 0.260634 0 1.85712Z"
                              fill="#C5221F"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_359_4178">
                              <rect width="19" height="15.6269" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                      
                        <button
                          className="btn btn-outline-secondary refbox-button1 refbox-buttonName1"
                          type="button"
                        >
                          Send
                        </button>
                      </div>

                      <div className="col-xl-1 col-md-1">
                        <p className="refbox-or2">OR</p>
                      </div>

                      <div className="col-xl-8 col-md-8 display-flexR">
                        <div className="rae-verline">
                          <a href="#" className="refbox-wp refbox-WPvertical">
                            <img
                              style={{ marginBottom: "3px" }}
                              src="/Ref&Earn/wp.svg"
                            />
                          </a>
                        </div>
                        <div className="rae-verline">
                          <a href="#" className="refbox-FB">
                            <img
                              style={{ marginBottom: "3px" }}
                              src="/Ref&Earn/fb.svg"
                            />
                          </a>
                        </div>
                        <div className="rae-verline">
                          <a href="#" className="refbox-insta">
                            <img
                              style={{ marginBottom: "3px" }}
                              src="/Ref&Earn/insta.svg"
                            />
                          </a>
                        </div>
                        <div>
                          <a href="#" className="refbox-TEL">
                            <img
                              style={{ marginBottom: "3px" }}
                              src="/Ref&Earn/tel.svg"
                            />
                          </a>
                        </div>
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
    </div>
    </>
  );
}

export default ReferEarn;
