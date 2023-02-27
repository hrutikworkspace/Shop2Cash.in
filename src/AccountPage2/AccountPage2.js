import React, { useState } from "react";
import "./AccountPage2.css";
import { Link } from "react-router-dom";
import HeaderNew from "../HeaderNew/HeaderNew";
import Footer from "../Footer/Footer";
import SidebarAccount from "../SidebarAccount/SidebarAccount";
import FooterNew from "../FooterNew/FooterNew";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";

const AccountPage2 = () => {
  const [status, setStatus] = useState(true);
  const [active, setActive] = useState(false);
  const changeHandler = () => {
    setStatus(true);
    setActive(true);
  };
  const passHandler = () => {
    setStatus(false);
    setActive(false);
  };

 
  const [activate, setActivate] = useState(true);
  
  const handleClick = () => {
    if(!activate){
      setActivate(!activate);
    setActivate1(!activate1);
    }
    else{
      setActivate(true);
      setActivate1(false);
    }
    
  };

  const [activate1, setActivate1] = useState(false);
  
  const handleClick1 = () => {
    if(!activate1){
      setActivate1(!activate1);
      setActivate(!activate);
    }
    else{
      setActivate(false);
      setActivate1(true);
    }
   
  };


  return (
    <>
      <MobileHeader />
      <HeaderNew />
      <div className="container-fluid p-whole">
        <nav aria-label="breadcrumb" className="main-breadcrumb accpg-2-link">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/HomePageSignup">
                Home
              </Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              My account
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-xl-3">
            <SidebarAccount />
          </div>
          <div className="col-xl-9">
            <div className="row">
              <div>
                <div className="accpg3-rect1">
                  <div className="accpg2-confirm-earning1">
                    Confirmed Earnings
                  </div>
                  <div className="accpg2-rectline"></div>
                  <div className="row">
                    <div className="col-sm-6 accpg2-card1">
                      <div className="card-body accpg2-cardtitle2">
                        <h5 className="card-title">Cashback Earned:</h5>
                        <p className="card-text"> &#x20b9; 0</p>
                      </div>
                    <div className="vl"></div>

                    </div>

                    <div className="col-sm-6 accpg2-card2">
                      <div className="card-body accpg2-cardtitle2">
                        <h5 className="card-title">Referral Earned:</h5>
                        <p className="card-text"> &#x20b9; 0</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="accpg2-rect2">
                <div className="accpg2-personalinfo">Personal Information</div>
                <div className="accpg2-line3"></div>

               
               <div>
                  <form className="accpg3-form">
                    <div className="form-group row as">
                      <div className="col-xl-9 col-md-9 col-sm-12">
                        <div className="eas">
                          <button
                          id="btn1"
                            onClick={()=>{changeHandler();handleClick();}}
                           
                            style={{ backgroundColor: activate ? "#EE6000" : "#FFFFFF",color: activate ? "#FFFFFF" :" #EE6000" }}
                            
                            
                            type="button"
                            className="btn accpg2-btn1"
                          >
                            Edit Information
                          </button>
                          <button
                          id="btn2"
                            onClick={()=>{passHandler();handleClick1();}}
                            style={{ backgroundColor: activate1 ? "#EE6000" : "#FFFFFF",color: activate1 ? "#FFFFFF" :" #EE6000" }}

                            type="button"
                            className="btn accpg2-btn2"
                          >
                            Change password
                          </button>
                        </div>
                      </div>
                    </div>

                    {status ? (
                      <div>
                        <div className="form-group row as ">
                          <label
                            for="inputEmail3"
                            className="col-xl-3 col-md-3 col-sm-3 col-form-label"
                          >
                            Name:
                          </label>
                          <div className="col-xl-6 col-md-6 col-sm-6">
                            <input
                              placeholder="Karan Sharma"
                              type="text"
                              className="form-control accpg2-inp"
                              id="inputEmail3"
                            />
                          </div>
                        </div>
                        <div className="form-group row as pb-0 ">
                          <label
                            for="inputEmail3"
                            className="col-xl-3 col-md-3 col-sm-3 col-form-label"
                          >
                            Birthday:
                          </label>
                          <div className="col-xl-6 col-md-6 col-sm-6">
                            <input
                              placeholder="Enter date of birth"
                              type="text"
                              className="form-control accpg2-inp"
                              id="inputEmail3"
                            />
                            <img
                              src="/AccountPage2/bday.svg"
                              className="bdayHome"
                            />
                          </div>
                        </div>
                        <div className="form-group row as ">
                          <label
                            for="inputEmail3"
                            className="col-xl-3 col-md-3 col-sm-3 col-form-label"
                          >
                            Email:
                          </label>
                          <div className="col-xl-6 col-md-6 col-sm-6">
                            <input
                              type="text"
                              placeholder="karansharma12@gmail.com"
                              className="form-control accpg2-inp"
                              id="inputEmail3"
                            />
                          </div>
                        </div>
                        <div className="form-group row as ">
                          <label
                            for="inputEmail3"
                            className="col-xl-3 col-md-3 col-sm-3 col-form-label"
                          >
                            Gender:
                          </label>
                          <div className="col-xl-6 col-md-6 col-sm-6">
                            <div className="form-check check-form">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios1"
                                value="option1"
                              />
                              <label
                                className="form-check-label sideLabel"
                                for="gridRadios1"
                              >
                                {" "}
                                Male
                              </label>
                            </div>
                            <div className="form-check accpg1-femail">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="gridRadios"
                                id="gridRadios2"
                                value="option2"
                              />
                              <label
                                className="form-check-label sideLabel"
                                for="gridRadios2"
                              >
                                {" "}
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row as pb-0 pt-0 ">
                          <label
                            for="inputEmail3"
                            className="col-xl-3 col-md-3 col-sm-3 col-form-label"
                          >
                            Phone Number:
                          </label>
                          <div className="col-xl-6 col-md-6 col-sm-6">
                            <input
                              type="number"
                              placeholder="1234569870"
                              className="form-control accpg2-inp"
                              id="inputEmail3"
                            />
                            <img
                              src="/AccountPage2/tick.svg"
                              className="tickHome"
                            />
                          </div>
                        </div>
                        <div className="form-group row as ">
                          <label
                            for="inputEmail3"
                            className="col-xl-3 col-md-3 col-sm-3 col-form-label"
                          >
                            State:
                          </label>
                          <div className="col-xl-6 col-md-6 col-sm-6">
                            <input
                              type="text"
                              placeholder="Enter the state"
                              className="form-control accpg2-inp"
                              id="inputEmail3"
                            />
                          </div>
                        </div>
                        <div className="form-group row btn3">
                          <div className="col-sm-12 btn-align">
                            <button
                              type="submit"
                              className="btn accpg2-btn3 accpga-btn"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="form-group row as ">
                          <label
                            for="inputEmail3"
                            className="col-xl-3 col-md-3 col-sm-3 col-form-label"
                          >
                            Current Password:
                          </label>
                          <div className="col-xl-6 col-md-6 col-sm-6">
                            <input
                              type="password"
                              className="form-control accpg2-inp"
                              id="inputEmail3"
                              placeholder="Current Password"
                            />
                          </div>
                        </div>
                        <div className="form-group row as ">
                          <label
                            for="inputEmail3"
                            className="col-xl-3 col-md-3 col-sm-3 col-form-label"
                          >
                            New Password:
                          </label>
                          <div className="col-xl-6 col-md-6 col-sm-6">
                            <input
                              type="password"
                              className="form-control accpg2-inp"
                              id="inputEmail3"
                              placeholder="New Password"
                            />
                          </div>
                        </div>
                        <div className="form-group row as ">
                          <label
                            for="inputEmail3"
                            className="col-xl-3 col-md-3 col-sm-3 col-form-label"
                          >
                            Confirm Password:
                          </label>
                          <div className="col-xl-6 col-md-6 col-sm-6">
                            <input
                              type="password"
                              className="form-control accpg2-inp"
                              id="inputEmail3"
                              placeholder="Confirm Password"
                            />
                          </div>
                        </div>
                        <div className="form-group row btn3">
                          <div className="col-sm-12 btn-align">
                            <Link to="/AccountPage1">
                              <button type="submit" className="btn accpg2-btn3">
                                Update
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
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

export default AccountPage2;
