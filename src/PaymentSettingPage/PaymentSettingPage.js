import React from "react";
import "./PaymentSettingPage.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import RestoreIcon from "@mui/icons-material/Restore";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HeaderNew from "../HeaderNew/HeaderNew";
import Footer from "../Footer/Footer";
import RedeemIcon from '@mui/icons-material/Redeem';
import FooterNew from "../FooterNew/FooterNew";
import Header from "../Header/Header";
import SidebarAccount from "../SidebarAccount/SidebarAccount";
import MobileHeader from "../MobileHeader/MobileHeader";
function PaymentSettingPage() {
  return (
    <>
    <MobileHeader/>
      {/* <Header /> */}
      <HeaderNew/>
      <div className="container-fluid p-whole">
        <nav aria-label="breadcrumb" className="main-breadcrumb accpg-2-link">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/HomePageSignup">
             Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Payment Settings
            </li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-xl-3 padding-bottom-check">
            {/* <div className="myAccount">
              <div className="myAccount-img">
                <img src="/withdraw/image.png" ></img>
              </div>
              <div>
                <p className="myAccount-edit">Edit photo</p>
              </div>
              <div>
                <p className="myAccount-name">Karan Sharma</p>
              </div>
              <div className="all-side">
              <div>
                <Link to="/AccountPage1">
                  <p className="myAccout-accicon">
                    <AccountCircleRoundedIcon />
                    &nbsp;&nbsp;My Account
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/WithdrawPage">
                  <p className="myAccout-widrwicon">
                    <AccountCircleRoundedIcon />
                    &nbsp;&nbsp;Withdraw
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/OrderHistory">
                  <p className="myAccout-hisicon">
                    <RestoreIcon />
                    &nbsp;&nbsp;Order History
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/ReferEarn">
                  <p className="myAccout-reficon">
                    <RedeemIcon />
                    &nbsp;&nbsp;Refer & Earn
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/SupportPage1">
                  <p className="myAccout-suppicon">
                    <ContactSupportIcon />
                    &nbsp;&nbsp;Support
                  </p>
                </Link>
              </div>
              <div>
                <Link to="/PaymentSettingPage">
                  <p className="myAccout-payicon">
                    <SettingsIcon />
                    &nbsp;&nbsp;Payment Settings
                  </p>
                </Link>
              </div>
              </div>
            </div> */}
            <SidebarAccount/>
          </div>
          <div className="col-xl-9">
            <div className="pymentset-rect">
              <div className="pymentset-hed">
                <p>Bank Details</p>
              </div>
              <div className="pymentset-line1"></div>
              <div>
                <form className=" pay-padding">
                  <div className="form-group row as">
                    {/* <div className="col-xl-9 col-md-9 col-sm-12">
                  <div className="eas">
                <button type="button" className="btn accpg2-btn1">
                  Edit Information
                </button>
                <button type="button" className="btn accpg2-btn2">
                  Change password
                </button>
              </div>
              </div> */}
                  </div>
                  <div className="form-group row as ">
                    <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-6 col-form-label">
                    Select Type:
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
                            IFSC
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
                            UPI
                          </label>
                        </div>
                    </div>
                  </div>
                  <div className="form-group row as ">
                    <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-6 col-form-label">
                    Bank Name:
                    </label>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <input
                        type="text"
                        className="form-control accpg2-inp"
                        id="inputEmail3"
                        placeholder="Add Bank Name..."
                      />
                    </div>
                  </div>
                  <div className="form-group row as ">
                    <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-6 col-form-label">
                    Branch Name:
                    </label>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <input
                        type="text"
                        className="form-control accpg2-inp"
                        id="inputEmail3"
                       placeholder="Add Branch Name..."
                      />
                    </div>
                  </div>
                  <div className="form-group row as ">
                    <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-6 col-form-label">
                    Account Number:
                    </label>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <input
                        type="number"
                        className="form-control accpg2-inp"
                        id="inputEmail3"
                        placeholder="Add Account Number..."
                      />
                    </div>
                  </div>
                  
                  <div className="form-group row as ">
                    <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-6 col-form-label">
                    Account Holder Name:
                    </label>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <input
                        type="text"
                        className="form-control accpg2-inp"
                        id="inputEmail3"
                        placeholder="Add Account Holder Name..."
                      />
                    </div>
                  </div>
                  <div className="form-group row as ">
                    <label for="inputEmail3" className="col-xl-3 col-md-3 col-sm-6 col-form-label">
                    Bank IFSC Code:
                    </label>
                    <div className="col-xl-6 col-md-6 col-sm-6">
                      <input
                        type="text"
                        className="form-control accpg2-inp"
                        id="inputEmail3"
                       placeholder="Add IFSC Code..."
                      />
                    </div>
                  </div>
                  <div className="form-group row btn3 ">
                    <div className="col-sm-12 btn-align">
                      <button type="submit" className="btn accpg2-btn3 btn-new1">
                      Add Account
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div>
                <form className="accpg2-form payment-form">

                  <div className="paymentpg pay-lebel">
                    <label for="name">Select Type:</label>
                    <div className="radio1">
                      <label>
                        <input
                          type="radio"
                          name="optionsRadios"
                          id="optionsRadios1"
                          value="option1"
                        />{" "}
                        IFSC
                      </label>
                    </div>
                    <div className="radio2">
                      <label>
                        <input
                          type="radio"
                          className="payment-radio2"
                          name="optionsRadios"
                          style={{ marginRight: "5px" }}
                          id="optionsRadios2"
                          value="option2"
                        />
                        UPI
                      </label>
                    </div>
                  </div>
                  <div className="form-group pay-lebel">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label pymentpg"
                    >
                      Bank Name:
                    </label>
                    <div className="col-sm-6 pay-input">
                      <input
                        type="text"
                        className="form-control accpg2-inp pymentpg-input"
                        id="inputEmail3"
                        placeholder="Enter your Bank Name:"
                      />
                    </div>
                  </div>

                  <div className="form-group pay-lebel">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label pymentpg"
                    >
                      Branch Name:
                    </label>
                    <div className="col-sm-6 pay-input">
                      <input
                        type="text"
                        className="form-control accpg2-inp pymentpg-input"
                        id="inputEmail3"
                        placeholder="Add Branch Name"
                      />
                    </div>
                  </div>

                  <div className="form-group pay-lebel">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label pymentpg"
                    >
                      Account Number:
                    </label>
                    <div className="col-sm-6 pay-input">
                      <input
                        type="number"
                        className="form-control accpg2-inp pymentpg-input"
                        id="inputEmail3"
                        placeholder="Add Account Number..."
                      />
                    </div>
                  </div>

                  <div className="form-group pay-lebel">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label pymentpg"
                    >
                      Account Holder Name:
                    </label>
                    <div className="col-sm-6 pay-input">
                      <input
                        type="text"
                        className="form-control accpg2-inp pymentpg-input"
                        id="inputEmail3"
                        placeholder="Add Account Holder Name..."
                      />
                    </div>
                  </div>

                  <div className="form-group pay-lebel">
                    <label
                      for="inputEmail3"
                      className="col-sm-2 col-form-label pymentpg"
                    >
                      Bank IFSC Code:
                    </label>
                    <div className="col-sm-6 pay-input">
                      <input
                        type="text"
                        className="form-control accpg2-inp pymentpg-input"
                        id="inputEmail3"
                        placeholder="Add IFSC Code..."
                      />
                    </div>
                  </div>
                  
                   <div className="form-group row" style={{paddingRight:"2rem"}}>
                    <div className="col-sm-11 ">
                      <button type="submit" className="btn accpg1-btn3 pay-lasnt-bt" style={{padding:"0.5rem 11rem"}} >
                      Add Account 
                      </button>
                    </div>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <FooterNew/>
    </>
  );
}

export default PaymentSettingPage;
