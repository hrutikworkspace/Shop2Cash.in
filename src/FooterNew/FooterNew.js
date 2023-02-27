import React from "react";
import "./FooterNew.css";
import LabelImportantSharpIcon from "@mui/icons-material/LabelImportantSharp";
import { Link } from "react-router-dom";

function FooterNew() {
  return (
    <>
      <div className="container-flex foter-flex">
        <div className="futer">
          <div className="row footer-padding">
            <div className="col-md-6 col-sm-12 col-lg-3 col-xl-3">
              <div>
                <span className="foter-logo">
                  <img src="/Kling.png" className="foter-kling" alt="" />
                  <h1 className="foter-shopcash">Shop2Cash</h1>
                </span>

                <p className="foter-para">
                  Lörem ipsum tetraling ditygen intralig mibel. Mikäs svemester
                  om sykärtad antism, demicentrism. Enar rende. Puktiga nor, men
                  läraläde nåläsyn. Tigusper din emedan deciling inde.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-3 col-xl-3">
              <div className="foter-heading" style={{ color: "white" }}>
                <LabelImportantSharpIcon />
                <p className="">Useful Information</p>
              </div>
              <div className="foter-para-2">
                <ul className="foter-para-menu">
                  <Link to="/TermsCondition">
                    <li>
                      <img
                        src="/FooterNew/arrow.svg"
                        className="forwardArrow"
                      />
                      Terms and Conditions
                    </li>
                  </Link>
                  <Link to="/#">
                    <li>
                      {" "}
                      <img
                        src="/FooterNew/arrow.svg"
                        className="forwardArrow"
                      />
                      Privacy policy
                    </li>
                  </Link>
                  <Link to="/#">
                    <li>
                      <img
                        src="/FooterNew/arrow.svg"
                        className="forwardArrow"
                      />
                      Anti-spam policy
                    </li>
                  </Link>
                  <Link to="/#">
                    <li>
                      <img
                        src="/FooterNew/arrow.svg"
                        className="forwardArrow"
                      />
                      Help & Support
                    </li>
                  </Link>
                  <Link to="/#">
                    <li>
                      <img
                        src="/FooterNew/arrow.svg"
                        className="forwardArrow"
                      />
                      Refer and Earn
                    </li>
                  </Link>
                  <Link to="/#">
                    <li>
                      <img
                        src="/FooterNew/arrow.svg"
                        className="forwardArrow"
                      />
                      Careers
                    </li>
                  </Link>
                  <Link to="/#">
                    <li>
                      <img
                        src="/FooterNew/arrow.svg"
                        className="forwardArrow"
                      />
                      Become our member
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="col-md-6 col-sm-12 col-lg-3 col-xl-3">
              <div className="foter-heading mb-1rem">
                <img
                  src="/FooterNew/about.svg"
                  style={{ marginBottom: "1rem" }}
                />
                <p className="foter-para3-text">About us</p>
              </div>

              <div className="foter-about-menu">
                <ul className="foter-para-menu">
                  <Link to="/#">
                    <li>
                      <img
                        src="/FooterNew/arrow.svg"
                        className="forwardArrow"
                      />
                      Contact us
                    </li>
                  </Link>
                  <Link to="/#">
                    <li>
                      <img
                        src="/FooterNew/arrow.svg"
                        className="forwardArrow"
                      />
                      Blog
                    </li>
                  </Link>
                  <Link to="/#">
                    <li>
                      <img
                        src="/FooterNew/arrow.svg"
                        className="forwardArrow"
                      />
                      FAQ
                    </li>
                  </Link>
                  <Link to="/#">
                    <li>
                      <img
                        src="/FooterNew/arrow.svg"
                        className="forwardArrow"
                      />
                      How it works
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-3 col-xl-3">
              <div className="foter-heading footer-follow-us">
                <p className="foter-follow-us-last">
                  Follow us on Social media
                </p>
              </div>
              <div className="col-7 foter-social-media">
                <img src="/FooterNew/fb.svg" />
                <img src="/FooterNew/ld.svg" />
                <img src="/FooterNew/insta.svg" />
                <img src="/FooterNew/yt.svg" />
              </div>
            </div>
          </div>
          <div>
            <div className="foter-end-line"></div>
            <div className="footer-last-line">
              <img src="/FooterNew/copy.svg" style={{ height: "1.5rem" }} />
              <p className="foter-end-text">
                2022 | Shop 2 Earn | All Rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterNew;
