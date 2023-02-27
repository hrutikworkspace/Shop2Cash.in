import "./luckyBoxGame.css";
import React from "react";
import FooterNew from "../FooterNew/FooterNew";
import MiniHeader from "../Mini-header/MiniHeader";
import MobileHeader from "../MobileHeader/MobileHeader";
import { Link } from "react-router-dom";
import HeaderNew from "../HeaderNew/HeaderNew";

const LuckyBoxGame = () => {
  return (
    <><>
      <MobileHeader />
      {/* <MiniHeader/> */}
      <HeaderNew />
      <div className="container-fluid p-whole">
        <nav aria-label="breadcrumb" class="main-breadcrumb accpg-2-link">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to="/PlayGamePage2">
              <a href="index.html">Play Games & Earn Rewards</a></Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              MYSTERY BOX
            </li>
          </ol>
        </nav>
        <div className="row">
          <div className="col-12">
            <div className="row lb-row1">
              <div className="col-12">
                <div className="lbg-box">
                  <div className="lbg-imgbox">
                    <img className="lbg-stars" src="/7817461 1.svg" />
                  </div>
                  <div className="lbg-imgbox1">
                    <img className="lbg-circle" src="/circle 1.svg" />
                  </div>
                  <div className="lbg-text">
                    Win
                  </div>
                  <div className="lbg-text">
                    Rewards
                  </div>
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 lbg-luckgift">
                      <div className="row">
                        <div className="col-4 lbg-left">
                          <Link to="/WinningPopUp">
                            <img className="lbg-giftboximg" src="/giftbox.svg" style={{marginLeft:"60%"}} />
                          </Link>
                        </div>
                        <div className="col-4">
                          <Link to="/WinningPopUp">
                            <img className="lbg-giftboximg" src="/giftbox.svg" />
                          </Link>
                        </div>
                        <div className="col-4 lbg-right">
                          <Link to="/WinningPopUp">
                            <img className="lbg-giftboximg" src="/giftbox.svg" style={{marginLeft:"-80%"}} />
                          </Link>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 lbg-left">
                          <Link to="/WinningPopUp">
                            <img className="lbg-giftboximg" src="/giftbox.svg" style={{marginLeft:"60%"}}/>
                          </Link>
                        </div>
                        <div className="col-4">
                          <Link to="/WinningPopUp">
                            <img className="lbg-giftboximg" src="/giftbox.svg" />
                          </Link>
                        </div>
                        <div className="col-4 lbg-right">
                          <Link to="/WinningPopUp">
                            <img className="lbg-giftboximg" src="/giftbox.svg" style={{marginLeft:"-80%"}} />
                          </Link>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 lbg-left">
                          <Link to="/WinningPopUp">
                            <img className="lbg-giftboximg" src="/giftbox.svg" style={{marginLeft:"60%"}} />
                          </Link>
                        </div>
                        <div className="col-4">
                          <Link to="/WinningPopUp">
                            <img className="lbg-giftboximg" src="/giftbox.svg" />
                          </Link>
                        </div>
                        <div className="col-4 lbg-right">
                          <Link to="/WinningPopUp">
                            <img className="lbg-giftboximg" src="/giftbox.svg" style={{marginLeft:"-80%"}} />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-4"></div>
                  </div>


                </div>
              </div>

            </div>
          </div>
          <div className='row bsp-divide'>
            <div className='col-12 bsp-divide1'>

              <div className="best-featuredstore">
                <h4>User's list</h4>
              </div>

            </div>
          </div>


        </div>
      </div>
    </><div className="lb-row3">
        <div className="lb-background-table">

          <div className="col-xl-12">
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Reward</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due Date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due Date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due Date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due Date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due Date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due Date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due Date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due Date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due Date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due Date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div><FooterNew /></>
    
  );
};
export default LuckyBoxGame;
