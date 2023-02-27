import React from "react";
import Footer from "../Footer/Footer";
import FooterNew from "../FooterNew/FooterNew";
import Header from "../Header/Header";
import HeaderNew from "../HeaderNew/HeaderNew";
import "./CashBack.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { Link } from "react-router-dom";
import MobileHeader from "../MobileHeader/MobileHeader";

function CashBack() {
  return (
    <>
    <MobileHeader/>
      <HeaderNew />
      <div className="container p-whole">
        <nav aria-label="breadcrumb" className="main-breadcrumb accpg-2-link">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
             <Link to="/HomePageSignup">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/Bestsellerpage">
              Realme Narzo 50i</Link>
            
            </li>
            <li className="breadcrumb-item cb-vamz">
              Visit Amazon
            </li>
          </ol>
        </nav>
       
        <div style={{ textAlign: "center" }}>
          <div className="cb-rext-1">
            <img
              src="/CashBack/header.png"
              alt=""
              className="cb-head-img "
            />
            <div>
              <img
                src="/CashBack/cashback-amazon.png"
                className="pt-5"                
              />
            </div>
            <div className=" pb-3">
              <button type="submit" className=" cb-btn1">
                Visit amazon
                <SkipNextIcon style={{ color: "white" }} />
              </button>
            </div>
          </div>
        </div>
        <div className="cb-rect2">
          <div style={{ alignItems: "center" }} className="cb-round-1">
            <TripOriginIcon style={{ color: "#EE6000" }}/>
            <div className="justify">
            <p className="ps-2 paragraph">Purchase<br></br> Today</p>
            </div>
          </div>
          {/* <div className="vr ms-5 cb-vl" style={{ height: "5rem", color: "" }}></div> */}

          <div className="cashback-vl"></div>
          <div style={{ alignItems: "center" }} className="cb-round-2">
            <TripOriginIcon style={{ color: "#EE6000" }} />
            <p className="ps-2">Get rewards <br></br>through<br></br>game</p>
          </div>
          <div className="playgamebtn">
           <Link to='/PlayGamePage2'> <button>Play game<SkipNextIcon style={{ color: "#EE6000" }} /></button></Link>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
      <FooterNew />
    </>
  );
}

export default CashBack;
