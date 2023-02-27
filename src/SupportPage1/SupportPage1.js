import React from "react";
import "./SupportPage1.css";
import HeaderNew from "../HeaderNew/HeaderNew";
import Footer from "../Footer/Footer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import CallMissedIcon from "@mui/icons-material/CallMissed";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { Link } from "react-router-dom";
import SidebarAccount from "../SidebarAccount/SidebarAccount";
import FooterNew from "../FooterNew/FooterNew";
import Header from "../Header/Header";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MobileHeader from "../MobileHeader/MobileHeader";

function SupportPage1() {
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
              Support
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-xl-3">
                <SidebarAccount />
              </div>

              <div className="col-xl-9">
                <div className="row">
                  <div className="col-xl-4 col-md-6 suppg1-card">
                    <div className="card">
                      <div className="card-body suppg-1-card-body">
                        <div className="supg1-i2">
                          <WorkspacePremiumIcon style={{ fontSize: "3rem" }} />
                        </div>

                        <h5 className="card-title suppg1-c1">
                          <a href="#">How Shop2Cash works?</a>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6 suppg1-card">
                    <div className="card">
                      <div className="card-body suppg-1-card-body">
                        <div className="supg1-i2">
                          <EmojiEventsIcon style={{ fontSize: "3rem" }} />
                        </div>
                        <h5 className="card-title suppg1-c1">
                          <a href="#">Question about the rewards?</a>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6 suppg1-card">
                    <div className="card">
                      <div className="card-body suppg-1-card-body">
                        <div className="supg1-i2">
                          <CurrencyRupeeIcon style={{ fontSize: "3rem" }} />
                        </div>
                        <h5 className="card-title suppg1-c1">
                          <a href="#">Related to your payment?</a>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6 suppg1-card">
                    <div className="card">
                      <div className="card-body suppg-1-card-body">
                        <div className="supg1-i2">
                          <CallMissedIcon style={{ fontSize: "3rem" }} />
                        </div>
                        <h5 className="card-title suppg1-c1">
                          <a href="#">If your rewards are missing?</a>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6 suppg1-card">
                    <div className="card">
                      <div className="card-body suppg-1-card-body">
                        <div className="supg1-i2">
                          <ArrowCircleRightIcon style={{ fontSize: "3rem" }} />
                        </div>
                        <h5 className="card-title suppg1-c1">
                          <a href="#">Unable to Login?</a>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-md-6 suppg1-card">
                    <div className="card">
                      <div className="card-body suppg-1-card-body">
                        <div className="supg1-i2">
                          <QuestionMarkIcon style={{ fontSize: "3rem" }} />
                        </div>
                        <h5 className="card-title suppg1-c1">
                          <a href="#">Any other questions?</a>
                        </h5>
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
}

export default SupportPage1;
