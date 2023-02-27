import React from "react";
import "./Footer.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";
import LabelImportantSharpIcon from '@mui/icons-material/LabelImportantSharp';

function Footer() {
  return (
    <>
      {/* <!--  FOOTER START --> */}

      <div className="footer">
        <div className="inner-footer">
          <div className="footer-items">
            <img src="./Footer/Kling.png" className="footer-kling" alt="" />
            <h1>Shop2Cash</h1>
            <p>
              Lörem ipsum tetraling ditygen intralig mibel. Mikäs svemester om
              sykärtad antism, demicentrism. Enar rende. Puktiga nor, men
              läraläde nåläsyn. Tigusper din emedan deciling inde.
            </p>
          </div>

          {/* <!--  for quick links  --> */}

          <div className="footer-items">
            <img
              src="./Footer/footer-arrow.png"
              className="footer-arrow-big"
              alt=""
            />
            {/* <LabelImportantSharpIcon/> */}
            <h3 className="h3">Useful Information</h3>

            <ul>
              <Link to="/TermsCondition">
              <a href="#">
                <li>
                  <ArrowForwardIosIcon />
                  Terms and Conditions
                </li>
              </a>
              </Link>
              <a href="#">
                <li>
                  {" "}
                  <ArrowForwardIosIcon />
                  Privacy policy
                </li>
              </a>
              <a href="#">
                <li>
                  <ArrowForwardIosIcon />
                  Anti-spam policy
                </li>
              </a>
              <Link to="/ReferEarn">
              <a href="#">
                <li>
                  <ArrowForwardIosIcon />
                  Refer and Earn
                </li>
              </a>
              </Link>
              <a href="#">
                <li>
                  <ArrowForwardIosIcon />
                  Careers
                </li>
              </a>
              <a href="#">
                <li>
                  <ArrowForwardIosIcon />
                  Become our member
                </li>
              </a>
            </ul>
          </div>

          {/* <!--  for some other links --> */}
          <div className="footer-items">
            <img src="./Footer/I.png" alt="" className="f-aboutUs-icon" />
            <h3>About us</h3>

            <ul className="about-us-2">
              <a href="#">
                <li>
                  <ArrowForwardIosIcon />
                  Contact us
                </li>
              </a>
              <a href="#">
                <li>
                  <ArrowForwardIosIcon />
                  Blog
                </li>
              </a>
              <a href="#">
                <li>
                  <ArrowForwardIosIcon />
                  FAQ
                </li>
              </a>
              <a href="#">
                <li>
                  <ArrowForwardIosIcon />
                  How it works
                </li>
              </a>
            </ul>
          </div>

          {/* <!--  for contact us info --> */}
          <div className="footer-items">
            <h3>Follow us on Social media</h3>

            {/* <!--   for social links --> */}
            <div className="social-media">
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <LinkedInIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <YouTubeIcon />
              </a>
            </div>
          </div>
          <div className="f-download-now">
            <p>Download App</p>
          </div>
          {/* <div className="footer-end">
            <button className="google-play"></button>
            <button className="apple-mac"></button>
          </div> */}
        </div>
        <div
          style={{ border: "0.8px solid #FFFFFF", backgroundColor: "#EE6000" }}
        ></div>
        <div className="footer-bottom">
          2022 | Shop 2 Earn | All Rights reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
