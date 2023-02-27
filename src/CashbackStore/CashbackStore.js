import React from "react";
import "./CashbackStore.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import FooterNew from "../FooterNew/FooterNew";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
import HeaderNew from "../HeaderNew/HeaderNew";
import { Link } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars";


const CashbackStore = () => {
  const cashback1Row = {
    margin: 30,
    responsiveClass: true,
    dots: false,
    // autoplay: true,
    smartSpeed: 1000,
    rewind: true,
    responsive: {
      0: {
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
      },
      400: {
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <>
      <MobileHeader />
      {/* <Header /> */}
      <HeaderNew/>
      <div className="container-fluid p-whole cbs-container">
        <nav aria-label="breadcrumb" className="main-breadcrumb accpg-2-link">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
            <Link to="/HomePageSignup">Home</Link>
            </li>
            <li className="breadcrumb-item cbs-amz">
              Amazon
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-xl-3">
                <div className="Amazon">
                  <div className="accpg2-rect1">
                    <div className="accpg2-all-img">
                      <div className="accpg2-head-img">
                        <img
                          className="accpg2-head-img1"
                          src="/CashBack/header.png"
                          alt=""
                        />
                      </div>
                      <div className="accpg2-amazon">
                        <img
                          className="accpg2-amazon1"
                          src="/CashBack/cashback-amazon.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar">
                  <div className="card">
                    <div className="card-body">
                      <div className="allstr-card-head">
                        <p className="allstr-filter">Filters</p>
                        <p className="allstr-clear">Clear</p>
                      </div>
                      <div className="asp-category">
                        <nav className="navbar navbar-light nav-item">
                          <form className="form-inline col-md-10">
                            <div>
                              {/* <i className="fa fa-search icon2" aria-hidden="true"></i> */}
                              <input
                                className="form-control mr-sm-2 allstr-search"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                              />
                            </div>
                          </form>
                        </nav>
                      </div>
                      <div className="allstr-categry">Categories</div>
                      <Scrollbars style={{width:"100%",height:"320px"}} className="scrollbar" >
                    <div className="">
                    <div className="allstr-menu scrollbox-inner">
                      <div className="form-check aligning-txt">
                        <input
                          className="form-check-input allstr-box"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label allstr-textmenu"
                          for="flexCheckDefault"
                        >
                          Air conditioners
                        </label>
                      </div>
                      <div className="form-check aligning-txt">
                        <input
                          className="form-check-input allstr-box"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked1"
                        />
                        <label
                          className="form-check-label allstr-textmenu"
                          for="flexCheckChecked1"
                        >
                          Air purifers
                        </label>
                      </div>

                      <div className="form-check aligning-txt">
                        <input
                          className="form-check-input allstr-box"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked2"
                        />
                        <label
                          className="form-check-label allstr-textmenu"
                          for="flexCheckChecked2"
                        >
                          Buy camera online
                        </label>
                      </div>
                      <div className="form-check aligning-txt">
                        <input
                          className="form-check-input allstr-box"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked3"
                        />
                        <label
                          className="form-check-label allstr-textmenu"
                          for="flexCheckChecked3"
                        >
                          Buy men T Shirts
                        </label>
                      </div>
                      <div className="form-check aligning-txt">
                        <input
                          className="form-check-input allstr-box"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked4"
                        />
                        <label
                          className="form-check-label allstr-textmenu"
                          for="flexCheckChecked4"
                        >
                          Baby products
                        </label>
                      </div>
                      <div className="form-check aligning-txt">
                        <input
                          className="form-check-input allstr-box"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked5"
                        />
                        <label
                          className="form-check-label allstr-textmenu"
                          for="flexCheckChecked5"
                        >
                          Clothings & Foo...
                        </label>
                      </div>
                      <div className="form-check aligning-txt">
                        <input
                          className="form-check-input allstr-box"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked6"
                        />
                        <label
                          className="form-check-label allstr-textmenu"
                          for="flexCheckChecked6"
                        >
                          Deodrants
                        </label>
                      </div>
                      <div className="form-check aligning-txt">
                        <input
                          className="form-check-input allstr-box"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked7"
                        />
                        <label
                          className="form-check-label allstr-textmenu"
                          for="flexCheckChecked7"
                        >
                          Electronics
                        </label>
                      </div>
                      <div className="form-check aligning-txt">
                        <input
                          className="form-check-input allstr-box"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked8"
                        />
                        <label
                          className="form-check-label allstr-textmenu"
                          for="flexCheckChecked8"
                        >
                          Haircare
                        </label>
                      </div>
                      <div className="form-check aligning-txt">
                        <input
                          className="form-check-input allstr-box"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked8"
                        />
                        <label
                          className="form-check-label allstr-textmenu"
                          for="flexCheckChecked8"
                        >
                          Haircare
                        </label>
                      </div>
                      <div className="form-check aligning-txt">
                        <input
                          className="form-check-input allstr-box"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked8"
                        />
                        <label
                          className="form-check-label allstr-textmenu"
                          for="flexCheckChecked8"
                        >
                          Haircare
                        </label>
                      </div>
                      <div className="form-check aligning-txt">
                        <input
                          className="form-check-input allstr-box"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked8"
                        />
                        <label
                          className="form-check-label allstr-textmenu"
                          for="flexCheckChecked8"
                        >
                          Haircare
                        </label>
                      </div>
                      <div className="form-check aligning-txt">
                        <input
                          className="form-check-input allstr-box"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked8"
                        />
                        <label
                          className="form-check-label allstr-textmenu"
                          for="flexCheckChecked8"
                        >
                          Haircare
                        </label>
                      </div>
                    </div>
                    </div>
                    </Scrollbars>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-9">
                <div className="row">
                  <OwlCarousel {...cashback1Row} className="owl-theme">
                    <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                      <div className="bsp-mobile-cards">
                        <div className="bsp-mobile-card-body">
                          <img
                            className="bsp-mobile-card-img1"
                            src="/Rectangle 20.png"
                          />
                        </div>
                        <div className="bsp-card-bottom">
                          <div className="bsp-base-icons">
                            <img src="/Group 275.png" />
                            <p>
                              Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM,
                              32 GB Storage...)
                            </p>
                            <div>
                              <span className="bsp-disc-span">9,999</span>
                              <span className="bsp-current-span">
                                &#x20b9;7,999
                              </span>
                              <span className="bsp-amount-off">(20% off)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                      <div className="bsp-mobile-cards">
                        <div className="bsp-mobile-card-body">
                          <img
                            className="bsp-mobile-card-img1"
                            src="/Rectangle 20.png"
                          />
                        </div>
                        <div className="bsp-card-bottom">
                          <div className="bsp-base-icons">
                            <img src="/Group 275.png" />
                            <p>
                              Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM,
                              32 GB Storage...)
                            </p>
                            <div>
                              <span className="bsp-disc-span">9,999</span>
                              <span className="bsp-current-span">
                                &#x20b9;7,999
                              </span>
                              <span className="bsp-amount-off">(20% off)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                      <div className="bsp-mobile-cards">
                        <div className="bsp-mobile-card-body">
                          <img
                            className="bsp-mobile-card-img1"
                            src="/Rectangle 20.png"
                          />
                        </div>
                        <div className="bsp-card-bottom">
                          <div className="bsp-base-icons">
                            <img src="/Group 275.png" />
                            <p>
                              Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM,
                              32 GB Storage...)
                            </p>
                            <div>
                              <span className="bsp-disc-span">9,999</span>
                              <span className="bsp-current-span">
                                &#x20b9;7,999
                              </span>
                              <span className="bsp-amount-off">(20% off)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                      <div className="bsp-mobile-cards">
                        <div className="bsp-mobile-card-body">
                          <img
                            className="bsp-mobile-card-img1"
                            src="/Rectangle 20.png"
                          />
                        </div>
                        <div className="bsp-card-bottom">
                          <div className="bsp-base-icons">
                            <img src="/Group 275.png" />
                            <p>
                              Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM,
                              32 GB Storage...)
                            </p>
                            <div>
                              <span className="bsp-disc-span">9,999</span>
                              <span className="bsp-current-span">
                                &#x20b9;7,999
                              </span>
                              <span className="bsp-amount-off">(20% off)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                      <div className="bsp-mobile-cards">
                        <div className="bsp-mobile-card-body">
                          <img
                            className="bsp-mobile-card-img1"
                            src="/Rectangle 20.png"
                          />
                        </div>
                        <div className="bsp-card-bottom">
                          <div className="bsp-base-icons">
                            <img src="/Group 275.png" />
                            <p>
                              Realme Narzo 50i (Carbon Black, 2GB <br></br> RAM,
                              32 GB Storage...)
                            </p>
                            <div>
                              <span className="bsp-disc-span">9,999</span>
                              <span className="bsp-current-span">
                                &#x20b9;7,999
                              </span>
                              <span className="bsp-amount-off">(20% off)</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                  <div className="hide-div">
                    <OwlCarousel {...cashback1Row} className="owl-theme">
                      <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                        <div className="bsp-mobile-cards">
                          <div className="bsp-mobile-card-body">
                            <img
                              className="bsp-mobile-card-img1"
                              src="/Rectangle 20.png"
                            />
                          </div>
                          <div className="bsp-card-bottom">
                            <div className="bsp-base-icons">
                              <img src="/Group 275.png" />
                              <p>
                                Realme Narzo 50i (Carbon Black, 2GB <br></br>{" "}
                                RAM, 32 GB Storage...)
                              </p>
                              <div>
                                <span className="bsp-disc-span">9,999</span>
                                <span className="bsp-current-span">
                                  &#x20b9;7,999
                                </span>
                                <span className="bsp-amount-off">
                                  (20% off)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                        <div className="bsp-mobile-cards">
                          <div className="bsp-mobile-card-body">
                            <img
                              className="bsp-mobile-card-img1"
                              src="/Rectangle 20.png"
                            />
                          </div>
                          <div className="bsp-card-bottom">
                            <div className="bsp-base-icons">
                              <img src="/Group 275.png" />
                              <p>
                                Realme Narzo 50i (Carbon Black, 2GB <br></br>{" "}
                                RAM, 32 GB Storage...)
                              </p>
                              <div>
                                <span className="bsp-disc-span">9,999</span>
                                <span className="bsp-current-span">
                                  &#x20b9;7,999
                                </span>
                                <span className="bsp-amount-off">
                                  (20% off)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                        <div className="bsp-mobile-cards">
                          <div className="bsp-mobile-card-body">
                            <img
                              className="bsp-mobile-card-img1"
                              src="/Rectangle 20.png"
                            />
                          </div>
                          <div className="bsp-card-bottom">
                            <div className="bsp-base-icons">
                              <img src="/Group 275.png" />
                              <p>
                                Realme Narzo 50i (Carbon Black, 2GB <br></br>{" "}
                                RAM, 32 GB Storage...)
                              </p>
                              <div>
                                <span className="bsp-disc-span">9,999</span>
                                <span className="bsp-current-span">
                                  &#x20b9;7,999
                                </span>
                                <span className="bsp-amount-off">
                                  (20% off)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                        <div className="bsp-mobile-cards">
                          <div className="bsp-mobile-card-body">
                            <img
                              className="bsp-mobile-card-img1"
                              src="/Rectangle 20.png"
                            />
                          </div>
                          <div className="bsp-card-bottom">
                            <div className="bsp-base-icons">
                              <img src="/Group 275.png" />
                              <p>
                                Realme Narzo 50i (Carbon Black, 2GB <br></br>{" "}
                                RAM, 32 GB Storage...)
                              </p>
                              <div>
                                <span className="bsp-disc-span">9,999</span>
                                <span className="bsp-current-span">
                                  &#x20b9;7,999
                                </span>
                                <span className="bsp-amount-off">
                                  (20% off)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                        <div className="bsp-mobile-cards">
                          <div className="bsp-mobile-card-body">
                            <img
                              className="bsp-mobile-card-img1"
                              src="/Rectangle 20.png"
                            />
                          </div>
                          <div className="bsp-card-bottom">
                            <div className="bsp-base-icons">
                              <img src="/Group 275.png" />
                              <p>
                                Realme Narzo 50i (Carbon Black, 2GB <br></br>{" "}
                                RAM, 32 GB Storage...)
                              </p>
                              <div>
                                <span className="bsp-disc-span">9,999</span>
                                <span className="bsp-current-span">
                                  &#x20b9;7,999
                                </span>
                                <span className="bsp-amount-off">
                                  (20% off)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                  <div className="hide-div">
                    <OwlCarousel {...cashback1Row} className="owl-theme">
                      <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                        <div className="bsp-mobile-cards">
                          <div className="bsp-mobile-card-body">
                            <img
                              className="bsp-mobile-card-img1"
                              src="/Rectangle 20.png"
                            />
                          </div>
                          <div className="bsp-card-bottom">
                            <div className="bsp-base-icons">
                              <img src="/Group 275.png" />
                              <p>
                                Realme Narzo 50i (Carbon Black, 2GB <br></br>{" "}
                                RAM, 32 GB Storage...)
                              </p>
                              <div>
                                <span className="bsp-disc-span">9,999</span>
                                <span className="bsp-current-span">
                                  &#x20b9;7,999
                                </span>
                                <span className="bsp-amount-off">
                                  (20% off)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                        <div className="bsp-mobile-cards">
                          <div className="bsp-mobile-card-body">
                            <img
                              className="bsp-mobile-card-img1"
                              src="/Rectangle 20.png"
                            />
                          </div>
                          <div className="bsp-card-bottom">
                            <div className="bsp-base-icons">
                              <img src="/Group 275.png" />
                              <p>
                                Realme Narzo 50i (Carbon Black, 2GB <br></br>{" "}
                                RAM, 32 GB Storage...)
                              </p>
                              <div>
                                <span className="bsp-disc-span">9,999</span>
                                <span className="bsp-current-span">
                                  &#x20b9;7,999
                                </span>
                                <span className="bsp-amount-off">
                                  (20% off)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                        <div className="bsp-mobile-cards">
                          <div className="bsp-mobile-card-body">
                            <img
                              className="bsp-mobile-card-img1"
                              src="/Rectangle 20.png"
                            />
                          </div>
                          <div className="bsp-card-bottom">
                            <div className="bsp-base-icons">
                              <img src="/Group 275.png" />
                              <p>
                                Realme Narzo 50i (Carbon Black, 2GB <br></br>{" "}
                                RAM, 32 GB Storage...)
                              </p>
                              <div>
                                <span className="bsp-disc-span">9,999</span>
                                <span className="bsp-current-span">
                                  &#x20b9;7,999
                                </span>
                                <span className="bsp-amount-off">
                                  (20% off)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                        <div className="bsp-mobile-cards">
                          <div className="bsp-mobile-card-body">
                            <img
                              className="bsp-mobile-card-img1"
                              src="/Rectangle 20.png"
                            />
                          </div>
                          <div className="bsp-card-bottom">
                            <div className="bsp-base-icons">
                              <img src="/Group 275.png" />
                              <p>
                                Realme Narzo 50i (Carbon Black, 2GB <br></br>{" "}
                                RAM, 32 GB Storage...)
                              </p>
                              <div>
                                <span className="bsp-disc-span">9,999</span>
                                <span className="bsp-current-span">
                                  &#x20b9;7,999
                                </span>
                                <span className="bsp-amount-off">
                                  (20% off)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-6 col-sm-6 cbs-card row1">
                        <div className="bsp-mobile-cards">
                          <div className="bsp-mobile-card-body">
                            <img
                              className="bsp-mobile-card-img1"
                              src="/Rectangle 20.png"
                            />
                          </div>
                          <div className="bsp-card-bottom">
                            <div className="bsp-base-icons">
                              <img src="/Group 275.png" />
                              <p>
                                Realme Narzo 50i (Carbon Black, 2GB <br></br>{" "}
                                RAM, 32 GB Storage...)
                              </p>
                              <div>
                                <span className="bsp-disc-span">9,999</span>
                                <span className="bsp-current-span">
                                  &#x20b9;7,999
                                </span>
                                <span className="bsp-amount-off">
                                  (20% off)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
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
};

export default CashbackStore;
