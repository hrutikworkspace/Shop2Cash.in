import React from "react";
import "./OrderHistory.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HeaderNew from "../HeaderNew/HeaderNew";
import Footer from "../Footer/Footer";
import SidebarAccount from "../SidebarAccount/SidebarAccount";
import FooterNew from "../FooterNew/FooterNew";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
const OrderHistory = () => {
  return (
    <div>
      <MobileHeader/>
      {/* <Header/> */}
      <HeaderNew/>
      <div className="container-fluid p-whole anchor">
      <nav aria-label="breadcrumb" className="main-breadcrumb accpg-2-link">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/HomePageSignup">
             Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
            Order History
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-xl-3">
            <SidebarAccount/>
          </div>
          <div className="col-xl-9">
            <div className="mainBox-order">
              <div className="orderBox-title">
                <p>Order History</p>
              </div>
              <div className="orderBox-1line"></div>

              <div className="orderBox1-main">
                <img src="/Order/watch.png"></img>
                <div>
                  <p className="orderBox-item">Arriving tommorow by 9 PM</p>
                  <p className="orderBox-cashback">
                    You won Rs. 50 cashback and will be credited within 1 week.
                  </p>
                </div>
                <p className="orderBox-price">&#x20b9;6,999</p>
                <p className="orderBox-discount">(20% off)</p>
                <p className="orderBox-priceADIS">&#x20b9;5,600</p>
                <Link to="/">
                  <p className="orderBox-his">
                    <ArrowForwardIosIcon />
                  </p>
                </Link>
              </div>

              <div className="orderBox2-main">
                <img src="/Order/shooe.png"></img>
                <div className="orderBox2-Mname">
                  <span className="orderBox2-item">
                    WROGN, Mahroon shoes &nbsp;
                    <span className="orderBox2-delivery">
                      Delivered on: 02-11-22
                    </span>
                  </span>
                  <p className="orderBox2-cashback">Cashback won Rs. 100.</p>
                </div>
                <p className="orderBox2-price">&#x20b9;8,999</p>
                <p className="orderBox2-discount">(30% off)</p>
                <p className="orderBox2-priceADIS">&#x20b9;6,300</p>
                <Link to="#">
                  <p className="orderBox2-his">
                    <ArrowForwardIosIcon />
                  </p>
                </Link>
              </div>

              <div className="orderBox2-main">
                <img src="/Order/headphone.png"></img>
                <div className="orderBox3-Mname">
                  <span className="orderBox2-item">
                    Boat Wireless Headhpones &nbsp;
                    <span className="orderBox2-delivery">
                      Delivered on: 29-07-22
                    </span>
                  </span>
                  <p className="orderBox2-cashback">Cashback won Rs. 40.</p>
                </div>
                <p className="orderBox3-price">&#x20b9;4,500</p>
                <p className="orderBox2-discount">(10% off)</p>
                <p className="orderBox2-priceADIS">&#x20b9;4,050</p>
                <Link to="/">
                  <p className="orderBox2-his">
                    <ArrowForwardIosIcon />
                  </p>
                </Link>
              </div>

              <div className="orderBox2-main">
                <img src="/Order/facewash.png"></img>
                <div className="orderBox4-Mname">
                  <span className="orderBox2-item">
                    mCaffeine Facwash &nbsp;
                    <span className="orderBox2-delivery">
                    Delivered on: 04-06-22
                    </span>
                  </span>
                  <p className="orderBox2-cashback">Cashback won Rs. 15.</p>
                </div>
                <p className="orderBox4-price">&#x20b9;650</p>
                <p className="orderBox4-discount">(40% off)</p>
                <p className="orderBox4-priceADIS">&#x20b9;390</p>
                <Link to="/">
                  <p className="orderBox4-his">
                    <ArrowForwardIosIcon />
                  </p>
                </Link>
              </div>

              <div className="orderBox2-mainBook">
                <img src="/Order/book.png"></img>
                <div className="orderBox5-Mname">
                  <span className="orderBox2-item">
                  Milk and honey by Rupi... &nbsp;
                    <span className="orderBox2-delivery">
                    Delivered on: 19-03-22
                    </span>
                  </span>
                  <p className="orderBox2-cashback">Cashback won Rs. 20.</p>
                </div>
                <p className="orderBox5-price">&#x20b9;3,200</p>
                <p className="orderBox5-discount">(15% off)</p>
                <p className="orderBox5-priceADIS">&#x20b9;2,720</p>
                <Link to="/">
                  <p className="orderBox5-his">
                    <ArrowForwardIosIcon />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
      <FooterNew/>
    </div>
  );
};

export default OrderHistory;
