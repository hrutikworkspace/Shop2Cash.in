import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import FooterNew from "../FooterNew/FooterNew";
import Header from "../Header/Header";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import MobileHeader from "../MobileHeader/MobileHeader";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HeaderNew from "../HeaderNew/HeaderNew";


const HomePage = () => 
{
  const topimg = {
    margin: 30,
    responsiveClass: true,
    // nav: true,
    // autoplay:true,
    autoplayTimeout: 5000,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    rewind: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
};
const bestFeatured = {
  margin: 30,
  responsiveClass: true,
  // nav: true,
  autoplay:false,
  autoplayTimeout: 5000,
  dots: false,
  // autoplay: false,
  smartSpeed: 1000,
  rewind: true,
  responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 2,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
          items: 4,

      }
  },
};
const maxdisc = {
  margin: 30,
  responsiveClass: true,
  // nav: true,
  autoplay:true,
  autoplayTimeout: 5000,
  dots: false,
  // autoplay: false,
  smartSpeed: 1000,
  rewind: true,
  responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
          items: 2,

      }
  },
};
const mobsell = {
  margin: 30,
  responsiveClass: true,
  // nav: true,
  autoplay:true,
  autoplayTimeout: 5000,
  dots: false,
  // autoplay: false,
  smartSpeed: 1000,
  rewind: true,
  responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
  <>
      <div className="overflowcheck">
        <MobileHeader />
        {/* <Header /> */}
        <HeaderNew/>
        <div>
          <div className="container-fluid p-whole">
            <OwlCarousel {...topimg} className="owl-theme">

              <div>
                <img
                  className="image-car"
                  src={require("../asset/image 5.png")}
                />
              </div>
              <div>
                <img
                  className="image-car"
                  src={require("../asset/image 6.png")}
                />
              </div>
              <div>
                <img
                  className="image-car"
                  src={require("../asset/image 7.png")}
                />
              </div>
              <div>
                <img
                  className="image-car"
                  src={require("../asset/image 5.png")}
                />
              </div>
              <div>
                <img
                  className="image-car"
                  src={require("../asset/image 6.png")}
                />
              </div>
              <div>
                <img
                  className="image-car"
                  src={require("../asset/image 7.png")}
                />
              </div>
              <div>
                <img
                  className="image-car"
                  src={require("../asset/image 5.png")}
                />
              </div>
            </OwlCarousel>

            <div className="row">
              <div className="col-12">
                <div className="row row1-p">
                  <div className="col-12">
                    <div className="best-featured">
                      <h5>BEST FEATURED STORES</h5>
                    </div>
                  </div>
                  <div className="col-xl-12 padding-top-bottom">
                    <OwlCarousel {...bestFeatured} className="owl-theme hp-owl">
                    <Link to="/CashBack">

                      <div className="stores-image">
                        
                          <img src="./AllStore/Amazon1.png" />
                        
                      </div>
              </Link>
              <Link to="/CashBack">

                      <div className="stores-image">
                        
                          <img src="./AllStore/Amazon1.png" />
                        
                      </div>
              </Link>
              <Link to="/CashBack">

                      <div className="stores-image">
                        
                          <img src="./AllStore/Amazon1.png" />
                        
                      </div>
              </Link>
              <Link to="/CashBack">

                      <div className="stores-image">
                        
                          <img src="./AllStore/Amazon1.png" />
                        
                      </div>
              </Link>
              <Link to="/CashBack">

                      <div className="stores-image">
                        
                          <img src="./AllStore/Amazon1.png" />
                        
                      </div>
              </Link>
              <Link to="/CashBack">

                      <div className="stores-image">
                        
                          <img src="./AllStore/Amazon1.png" />
                        
                      </div>
              </Link>

                    </OwlCarousel>
                    <div className="hp-a3">
                      <ArrowForwardIosIcon/>
                    </div>
                  </div>
                  <div className="col-xl-12 padding-top-bottom ">
                    <OwlCarousel {...bestFeatured} className="owl-theme hp-owl">
                      <div className="stores-image">
                        
                          <img src="./AllStore/Amazon1.png" />
                        
                      </div>
                      <div className="stores-image">
                        
                          <img src="./AllStore/Amazon1.png" />
                        
                      </div>
                      <div className="stores-image">
                        
                          <img src="./AllStore/Amazon1.png" />
                        
                      </div>
                      <div className="stores-image">
                        
                          <img src="./AllStore/Amazon1.png" />
                        
                      </div>
                      <div className="stores-image">
                        
                          <img src="./AllStore/Amazon1.png" />
                        
                      </div>
                      <div className="stores-image">
                        
                          <img src="./AllStore/Amazon1.png" />
                        
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-12">
                    <div className="all-above-div">
                      <div className="text-center-div">
                        <h5 className="Sign-h5">
                          Sign up to earn the best rewards every time you buy.
                        </h5>
                        <p className="save-p">
                          Save real money with the help of the offers.
                        </p>
                      </div>
                      <div className="text-align-btn">
                        <Link to="/Signup">
                          <button>SIGNUP FOR FREE</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="row row2-common-p">
                  <div className="col-12">
                    <div className="best-featured">
                      <span className="dot1"></span>

                      <h5>MAXIMUM DISCOUNT AFTER 5 PM</h5>
                    </div>
                    <div className="see-all">
                      SEE ALL
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-12 pad-check">
                    <div className="best-offer">
                      <div
                        className="refbox1-title"
                        // style={{
                        //   backgroundImage: "url(/Cashback/head-img.png)",
                        // }}
                      >
                        <img src="/HomePage/himg.png" className="refbox1-title"/>
                        <div>
                          <p className="refbox1-name2 first-hed bestHome">Best offer of the day </p>
                        </div>
                      </div>
                      <div className="hp-amazon-card-1">
                        <img
                          src="/HomePage/Amazon-hp.png"
                          className="hp-i1 mt-1 ms-4"
                        />
                        <img src="/HomePage/Cosmic-hp.png" className="hp-i2" />
                        <img src="/HomePage/Croma-hp.png" className="ms-4" />
                        <img
                          src="/HomePage/MCaffeine-hp.png"
                          className="hp-i4"
                        />
                      </div>
                      <p className="hp-amazon-card2-para">
                        UPTO 50% CASHBACK & REWARDS
                      </p>
                      <div className="signupfree">
                        <Link to="#">
                          {" "}
                          <button className="">
                            Get the deal
                            <SkipNextIcon />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-xl-12 hide-div" style={{height:"224px"}}>
                        <OwlCarousel {...maxdisc} className="owl-theme ">
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                        </OwlCarousel>
                        <div className="hp-a1">
                          <ArrowForwardIosIcon/>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <OwlCarousel {...maxdisc} className="owl-theme">
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Buy now</button>
                            </div>
                          </div>
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                        </OwlCarousel>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row2-common-p">
                  <div className="col-12">
                    <div className="best-featured">
                      <h5>AMAZON BEST OFFERS</h5>
                    </div>
                    <div className="see-all">
                      SEE ALL
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-8 col-md-12 col-sm-12 bestOffer-hideDiv">
                    <div className="row">
                      <div className="col-xl-12" style={{height:"224px"}}>
                        <OwlCarousel {...maxdisc} className="owl-theme ">
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                        </OwlCarousel>
                        <div className="hp-a1">
                      <ArrowForwardIosIcon style={{marginleft:"0"}}/>
                    </div>
                      </div>
                      <div className="col-xl-12">
                        <OwlCarousel {...maxdisc} className="owl-theme">
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Buy now</button>
                            </div>
                          </div>
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                        </OwlCarousel>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-sm-12 bestOffer-div">
                    <div className="best-offer">
                      <div
                        
                        // style={{
                        //   backgroundImage: "url(/Cashback/head-img.png)",
                        // }}
                      >
                        {/* <img src="/HomePage/himg.png" className="refbox1-title"/> */}
                        <img src="/HomePage/himg.png" className="refbox1-title"/>

                        <div>
                          <p className="refbox1-name2 bestHome">Best offer of the day </p>
                        </div>
                      </div>
                     <div className="hps-ImgDiv">
                      <img 
                        src="/HomePage/Amazon-big.png"
                        className="amazon-img"
                      />
                      </div>
                      <p className="hp-amazon-card2-para">
                        UPTO 50% CASHBACK & REWARDS
                      </p>
                      <div className="hp-btn3">
                        <Link to="/CashbackStore">
                      <button>
                      Get the deal
                        <SkipNextIcon />
                      </button>
                      </Link>
                      </div>
                    </div>
                  </div>
                  <div className="bestOffer-hideDiv2">
                  <div className="col-xl-8 col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-xl-12">
                        <OwlCarousel {...maxdisc} className="owl-theme ">
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                        </OwlCarousel>
                        <div className="hp-a1 me-0">
                          <ArrowForwardIosIcon/>
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <OwlCarousel {...maxdisc} className="owl-theme">
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Buy now</button>
                            </div>
                          </div>
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                          <div className="max-disc">
                            <img src="./Rectangle 85.png" />
                            <div className="get-buy-btn-pos">
                              <button>Get deal</button>
                            </div>
                          </div>
                        </OwlCarousel>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="sale-banner">
                      <img src="./Group 330.png" style={{width:"85%"}}/>
                    </div>
                  </div>
                </div>
                
                <div className="row row2-common-p">
                  <div className="col-12">
                    <div className="all-above-div2">
                      <div className="text-center-div2">
                        <img src="./54790 1.png" />
                        <span>
                          Subscribe to get the best offers in your email
                        </span>
                        <div className="input-container input-icons">
                          <i className="fa fa-envelope icon"></i>
                          {/* <input
                            className="input-field"
                            type="text"
                            placeholder="Enter your email please..."
                            name="email"
                          /> */}
                          <input type="email" className="input-field" placeholder="Enter your email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <Link to="/Signup">
                          <button className="btn-sub">SUBSCRIBE NOW</button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-12">
                    <div className="all-above-div2">
                      <div className="text-center-div2">
                        <div className="row mob-ofc-email">

                        <div className="col-xl-12">
                        <div className="row mob-ofc-email">


                        <div className="col-sm-8 ">
                        <span style={{fontSize:"0.7rem"}}>
                          Subscribe to get the best offers in your email
                        </span>
                        
                        <div className="input-container input-icons">
                          <i className="fa fa-envelope icon"></i>
                          <input
                            className="m-inp-field"
                            type="text"
                            placeholder="Enter your email please..."
                            name="email"
                          />
                        </div>
                        <Link to="/Signup">
                          <button className="btn-mobile">SUBSCRIBE NOW</button>
                        </Link>
                        </div>
                        <div className="col-sm-4" style={{width:"0%"}}>
                        <img src="./54790 1.png" />
                        </div>



                        </div>
                        </div>

                      </div>
                      </div>
                    </div>
                  </div> */}

                </div>

                <div className="row row2-common-p">
                  <div className="col-12">
                    <div className="best-featured">
                      <h5>BEST SELLER IN MOBILE PHONES</h5>
                    </div>
                  </div>
                </div>
                <div className="row card-flex row2-common-p">
                  <div className="col-xl-12 padding-checking">
                    <OwlCarousel {...mobsell} className="owl-theme hp-owl1" style={{marginRight:"5px"}}>
                      <Link to="/Bestsellerpage">
                      <div className="mobile-cards hp-mr">
                        <div className="mobile-card-body">
                          <img src="./Rectangle 20.png" />
                        </div>
                        <div className="card-bottom">
                          <div className="base-icons">
                            <img src="./Group 275.png" />
                            <p>
                              Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM,
                              32 GB Storage...)
                            </p>
                            <div>
                              <span className="disc-span">9,999</span>
                              <span className="current-span">
                                &#x20b9;7,999
                              </span>
                              <span className="amount-off">(20% off)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                      <Link to="/Bestsellerpage">

                      <div className="mobile-cards">
                        <div className="mobile-card-body">
                          <img src="./Rectangle 20.png" />
                        </div>
                        <div className="card-bottom">
                          <div className="base-icons">
                            <img src="./Group 275.png" />
                            <p>
                              Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM,
                              32 GB Storage...)
                            </p>
                            <div>
                              <span className="disc-span">9,999</span>
                              <span className="current-span">
                                &#x20b9;7,999
                              </span>
                              <span className="amount-off">(20% off)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                      <Link to="/Bestsellerpage">

                      <div className="mobile-cards">
                        <div className="mobile-card-body">
                          <img src="./Rectangle 20.png" />
                        </div>
                        <div className="card-bottom">
                          <div className="base-icons">
                            <img src="./Group 275.png" />
                            <p>
                              Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM,
                              32 GB Storage...)
                            </p>
                            <div>
                              <span className="disc-span">9,999</span>
                              <span className="current-span">
                                &#x20b9;7,999
                              </span>
                              <span className="amount-off">(20% off)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                      <Link to="/Bestsellerpage">

                      <div className="mobile-cards">
                        <div className="mobile-card-body">
                          <img src="./Rectangle 20.png" />
                        </div>
                        <div className="card-bottom">
                          <div className="base-icons">
                            <img src="./Group 275.png" />
                            <p>
                              Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM,
                              32 GB Storage...)
                            </p>
                            <div>
                              <span className="disc-span">9,999</span>
                              <span className="current-span">
                                &#x20b9;7,999
                              </span>
                              <span className="amount-off">(20% off)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                      <Link to="/Bestsellerpage">

                      <div className="mobile-cards">
                        <div className="mobile-card-body">
                          <img src="./Rectangle 20.png" />
                        </div>
                        <div className="card-bottom">
                          <div className="base-icons">
                            <img src="./Group 275.png" />
                            <p>
                              Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM,
                              32 GB Storage...)
                            </p>
                            <div>
                              <span className="disc-span">9,999</span>
                              <span className="current-span">
                                &#x20b9;7,999
                              </span>
                              <span className="amount-off">(20% off)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                      <Link to="/Bestsellerpage">
                      
                      <div className="mobile-cards">
                        <div className="mobile-card-body">
                          <img src="./Rectangle 20.png" />
                        </div>
                        <div className="card-bottom">
                          <div className="base-icons">
                            <img src="./Group 275.png" />
                            <p>
                              Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM,
                              32 GB Storage...)
                            </p>
                            <div>
                              <span className="disc-span">9,999</span>
                              <span className="current-span">
                                &#x20b9;7,999
                              </span>
                              <span className="amount-off">(20% off)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                      <Link to="/Bestsellerpage">

                      <div className="mobile-cards">
                        <div className="mobile-card-body">
                          <img src="./Rectangle 20.png" />
                        </div>
                        <div className="card-bottom">
                          <div className="base-icons">
                            <img src="./Group 275.png" />
                            <p>
                              Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM,
                              32 GB Storage...)
                            </p>
                            <div>
                              <span className="disc-span">9,999</span>
                              <span className="current-span">
                                &#x20b9;7,999
                              </span>
                              <span className="amount-off">(20% off)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      </Link>
                      
                    </OwlCarousel>
                    <div className="hp-arrow1">
                      <ArrowForwardIosIcon/>
                    </div>
                  
                  </div>
                  
                  {/* <div className="col-xl-2 col-md-6 padding-checking">
                  <div className="mobile-cards">
                    <div className="mobile-card-body">
                      <img src="./Rectangle 20.png" />
                    </div>
                    <div className="card-bottom">
                      <div className="base-icons">
                        <img src="./Group 275.png" />
                        <p>Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM, 32 GB Storage...)</p>
                        <div>
                          <span className="disc-span">9,999</span>
                          <span className="current-span">&#x20b9;7,999</span>
                          <span className="amount-off">(20% off)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-6 padding-checking">
                  <div className="mobile-cards">
                    <div className="mobile-card-body">
                      <img src="./Rectangle 20.png" />
                    </div>
                    <div className="card-bottom ">
                      <div className="base-icons">
                        <img src="./Group 275.png" />
                        <p>Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM, 32 GB Storage...)</p>
                        <div>
                          <span className="disc-span">9,999</span>
                          <span className="current-span">&#x20b9;7,999</span>
                          <span className="amount-off">(20% off)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-6 padding-checking">
                  <div className="mobile-cards">
                    <div className="mobile-card-body">
                      <img src="./Rectangle 20.png" />
                    </div>
                    <div className="card-bottom">
                      <div className="base-icons">
                        <img src="./Group 275.png" />
                        <p>Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM, 32 GB Storage...)</p>
                        <div>
                          <span className="disc-span">9,999</span>
                          <span className="current-span">&#x20b9;7,999</span>
                          <span className="amount-off">(20% off)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-md-6 padding-checking">
                  <div className="mobile-cards">
                    <div className="mobile-card-body">
                      <img src="./Rectangle 20.png" />
                    </div>
                    <div className="card-bottom">
                      <div className="base-icons">
                        <img src="./Group 275.png" />
                        <p>Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM, 32 GB Storage...)</p>
                        <div>
                          <span className="disc-span">9,999</span>
                          <span className="current-span">&#x20b9;7,999</span>
                          <span className="amount-off">(20% off)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                </div>
                <div className="row row3-p">
                  <div className="col-x1-12">
                    <div className="image-375">
                      <img src="./Group 375.png" style={{height:"250px"}}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="earn-cashback">
                      <p className="how-span">
                        HOW TO EARN THE CASHBACK
                        <span className="know-more">
                            Know more
                          </span>
                      </p>
                      <div className="row check-flex">
                        <div className="col-xl-2">
                          <div className="information-div">
                            <span>1.</span>
                            <div className="texting-check">
                             <img src="/HomePage/note.svg" className="imgIcon"/>
                              <p className="join-us">Join us</p>
                              <p className="signuplogin">
                                Signup/Login on Shop 2 earn. This step is
                                required to avail cashbacks.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2">
                          <div className="information-div position-check">
                            <span>2.</span>
                            <div className="texting-check">
                            <img src="/HomePage/search.svg" className="imgIconSearch"/>
                              <p className="join-us">Select offer</p>
                              <p className="signuplogin">
                                Click through Deal/Coupan and you’ll be
                                redirected to the best offer available.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2">
                          <div className="information-div">
                            <span>3.</span>
                            <div className="texting-check">
                              <ShoppingCartIcon/>
                              <p className="join-us">Shopping</p>
                              <p className="signuplogin">
                                Buy your favourite item as per your choice, from
                                the offers. You are safe to buy.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2">
                          <div className="information-div position-check">
                            <span>4.</span>
                            <div className="texting-check">
                            <img src="/HomePage/game.svg" className="imgIcon"/>
                              <p className="join-us">Play games</p>
                              <p className="signuplogin">
                                Play the games to get the rewards/casback.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-2">
                          <div className="information-div">
                            <span>5.</span>
                            <div className="texting-check">
                            <img src="/HomePage/money.svg" className="imgIcon" />

                              {/* <i className="fa-sharp fa-solid fa-money-bill"></i> */}
                              <p className="join-us">Earn cashback</p>
                              <p className="signuplogin">
                                Your cashback will be credited at the moment you
                                place the order.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        </div>
        {/* <Footer /> */}
        <FooterNew />
    </>
  );
};

export default HomePage;
