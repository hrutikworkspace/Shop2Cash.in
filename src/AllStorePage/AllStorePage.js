import React from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import FooterNew from "../FooterNew/FooterNew";
import HeaderNew from "../HeaderNew/HeaderNew";
import Header from "../Header/Header";
import "./AllPageStore.css";
import MobileHeader from "../MobileHeader/MobileHeader";
import Scrollbars from "react-custom-scrollbars";

function AllStorePage() {
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
            <li className="breadcrumb-item active">All Stores</li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-xl-3 padding-bottom-check Allstorewidth1">
                <div className="card astr-shadow">
                  <div className="card-body cardBodySide">
                    <div className="allstr-card-head">
                      <p className="allstr-filter">Filters</p>
                      <p className="allstr-clear">Clear</p>
                    </div>
                    <div className="asp-category">
                      <nav className="navbar navbar-light nav-item">
                        <form className="form-inline col-md-10">
                          <div>
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
                    <Scrollbars
                      className="scrollbar"

                      style={{
                        width: "100%",
                        height: "420px",
                        maximalThumbSize: "20px",
                      }}
                    >
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

              <div className="col-xl-9 Allstorewidth">
                <div className="row">
                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <Link to="/CashbackStore">
                          <h3 className="card-title allstr-title">Acer</h3>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />

                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-3 col-sm-6 allstr-ac">
                    <div className="card allstr-cb astr-shadow">
                      <div className="card-body allstr-body">
                        <img
                          src="/AllStore/acer.png"
                          alt=""
                          className="allstr-icon"
                        />
                        <h3 className="card-title allstr-title">Acer</h3>
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

export default AllStorePage;
