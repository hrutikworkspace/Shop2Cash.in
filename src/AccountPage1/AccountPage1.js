import React, { useState } from "react";
import "./AccountPage1.css";
import { Link } from "react-router-dom";
import HeaderNew from "../HeaderNew/HeaderNew";
import Footer from "../Footer/Footer";
import SidebarAccount from "../SidebarAccount/SidebarAccount";
import FooterNew from "../FooterNew/FooterNew";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";


function AccountPage1() {
const [status, setStatus]=useState(true);

return (
    <>
    <MobileHeader/>
      {/* <Header /> */}
      <HeaderNew/>
      <div className="container-fluid p-whole">
        
        <nav aria-label="breadcrumb" className="main-breadcrumb accpg-2-link">
          <col className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/HomePageSignup">
              <a href="index.html">Home</a></Link>
            </li>
            
            <li class="breadcrumb-item active" aria-current="page">
              AccountPage 
            </li>
          </col>
        </nav>

        <div className="row">
          <div className="col-xl-3">
                <SidebarAccount/>
              </div>
          <div className="col-xl-9">
            <div className="accpg1-rect1">
              <div className="row">
                
                <div className="accpg1-confirm-earning">Confirmed Earnings</div>
                <div className="accpg1-rectline"></div>
                <div className="col-sm-6 accpg1-card1">
                  <div className="card-body accpg1-cardtitle1">
                    <h5 className="card-title accpg1-cardtitle1">
                      Cashback Earned:
                    </h5>
                    <p className="accpg1-card-text zero">&#x20b9; 0</p>
                  </div>
                </div>
                <div className="vl1"></div>
                
                <div className="col-sm-6 accpg1-card2 ">
                  <div className="card-body accpg1-cardtitle1">
                    <h5 className="card-title">Referral Earned:</h5>
                    <p className="accpg1-card-text zero">&#x20b9; 0</p>
                  </div>
                </div>
              </div>
            </div>
        
            {/* <div className="accpg1-rect2">
              <div className="accpg1-personalinfo">Personal Information</div>
              <div className="accpg1-line3">

              </div>
              <div className="accpg2-two-btn">
                <button type="button" className="btn accpg1-btn1">
                  Edit Information
                </button>
                <button type="button" className="btn accpg1-btn2">
                  Change password
                </button>
              </div>

              <div>
                <form className="accpg1-form">
                  <div className="form row  ">
                    <label for="inputEmail3" className="col-sm-2 col-form-label sideLabel">
                      Name
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control accpg1-inp"
                        id="inputEmail3"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="form row  ">
                    <label for="inputEmail3" className="col-sm-2 col-form-label sideLabel">
                      Birthday
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="number"
                        className="form-control accpg1-inp"
                        id="inputEmail3"
                        placeholder="Enter your Birthday"
                      />
                    </div>
                  </div>
                  <div className="form row  ">
                    <label for="inputEmail3" className="col-sm-2 col-form-label sideLabel">
                      Email
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="email"
                        className="form-control accpg1-inp"
                        id="inputEmail3"
                        placeholder="Enter your Email"
                      />
                    </div>
                  </div>
                  


                  <div className="form row  ">
                    <div className="row accpg1-legend-gender">
                    <legend className="col-form-label col-sm-2 gen sideLabel">
                        Gender
                      </legend>                     
                    <div className="col-sm-6 accpg1-gender">
                    <div className="form-check check-gender">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios1"
                            value="option1"
                          />
                          <label className="form-check-label sideLabel" for="gridRadios1">
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
                          <label className="form-check-label sideLabel" for="gridRadios2">
                            {" "}
                            Female
                          </label>
                        </div>
                    </div>
                    </div>
                  </div>
                  
                  <div className="form row  ">
                    <label for="inputPassword3" className="col-sm-2 col-form-label sideLabel">
                      Mobile
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="number"
                        className="form-control accpg1-inp"
                        id="inputPassword3"
                        placeholder="Enter your mpbile number"
                      />
                    </div>
                  </div>

                  <div className="form row  ">
                    <label for="inputEmail3" className="col-sm-2 col-form-label sideLabel">
                      State
                    </label>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control accpg1-inp"
                        id="inputEmail3"
                        placeholder="Enter your state"
                      />
                    </div>
                  </div>
                  <div className="form-grou row btn">
                    <div className="col-sm-10 accpg1-last-btn">
                      <button type="submit" className="btn accpg1-btn3">
                        Save 
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div> */}

<div className="col-xl-12">
            <div className="accpg2-rect2">
              <div className="accpg2-personalinfo">Personal Information</div>
              <div className="accpg2-line3"></div>
              

             


              <div>
                <form className="accpg3-form">
                  <div className="form-group row as">
                    <div className="col-xl-9 col-md-9 col-sm-12">
                  <div className="eas">
                <button onClick={()=>setStatus(true)} type="button" className="btn accpg2-btn1">
                  Edit Information
                </button>
                <button onClick={()=>setStatus(false)}  type="button" className="btn accpg2-btn2">
                  Change password
                </button>
              </div>
              </div>
                  </div>

                  {
              status? <div>
              <div className="form-group row as ">
                <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
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
              <div className="form-group row as ">
                <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
                Birthday:
                </label>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <input
                  placeholder="Enter date of birth"
                    type="text"
                    className="form-control accpg2-inp"
                    id="inputEmail3"                   
                  />
                  <img src="/AccountPage2/bday.svg" className="bdayHome" />
                </div>
              </div>
              <div className="form-group row as ">
                <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
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
                <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
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
                      <label className="form-check-label sideLabel" for="gridRadios1">
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
                      <label className="form-check-label sideLabel" for="gridRadios2">
                        {" "}
                        Female
                      </label>
                    </div>
                </div>
              </div>
              <div className="form-group row as ">
                <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
                  
                Phone Number:
                </label>
                <div className="col-xl-6 col-md-6 col-sm-6">
                  <input
                    type="number"
                    placeholder="1234569870"
                    className="form-control accpg2-inp"
                    id="inputEmail3"
                    
                  />
                  <img src="/AccountPage2/tick.svg"  className="tickHome" />
                </div>
              </div>
              <div className="form-group row as ">
                <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
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
                  <button type="submit" className="btn accpg2-btn3 accpga-btn">
                    Save
                  </button>
                </div>
              </div>
              </div> : 
              <div>                  
              <div className="form-group row as ">
              <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
                Current Password
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
              <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
                New Password
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
              <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
                Confirm Password
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
                <Link to='/AccountPage1'>
                <button type="submit" className="btn accpg2-btn3">
                  Update
                </button>
                </Link>
              </div>
            </div>
            </div>
             }
                  {/* <div>
                  <div className="form-group row as ">
                    <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
                    Name:
                    </label>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <input
                        type="text"
                        className="form-control accpg2-inp"
                        id="inputEmail3"
                        
                      />
                    </div>
                  </div>
                  <div className="form-group row as ">
                    <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
                    Birthday:
                    </label>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <input
                        type="text"
                        className="form-control accpg2-inp"
                        id="inputEmail3"
                       
                      />
                    </div>
                  </div>
                  <div className="form-group row as ">
                    <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
                    Email:
                    </label>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <input
                        type="text"
                        className="form-control accpg2-inp"
                        id="inputEmail3"
                        
                      />
                    </div>
                  </div>
                  <div className="form-group row as ">
                    <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
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
                          <label className="form-check-label sideLabel" for="gridRadios1">
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
                          <label className="form-check-label sideLabel" for="gridRadios2">
                            {" "}
                            Female
                          </label>
                        </div>
                    </div>
                  </div>
                  <div className="form-group row as ">
                    <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
                    Phone Number:
                    </label>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <input
                        type="number"
                        className="form-control accpg2-inp"
                        id="inputEmail3"
                        
                      />
                    </div>
                  </div>
                  <div className="form-group row as ">
                    <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-3 col-form-label">
                    State:
                    </label>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <input
                        type="text"
                        className="form-control accpg2-inp"
                        id="inputEmail3"
                       
                      />
                    </div>
                  </div>
                  <div className="form-group row btn3">
                    <div className="col-sm-12 btn-align">
                      <button type="submit" className="btn accpg2-btn3 accpga-btn">
                        Save
                      </button>
                    </div>
                  </div>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <FooterNew/>
    </>
  );
}

export default AccountPage1;
