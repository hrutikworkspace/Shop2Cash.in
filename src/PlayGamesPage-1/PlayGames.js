import React from 'react'
import { Link } from 'react-router-dom';
import './PlayGames.css';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CopyrightIcon from "@mui/icons-material/Copyright";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import MobileHeader from '../MobileHeader/MobileHeader';


function PlayGames() {
  return (

    <div>
      {/* <MobileHeader/> */}
    <div className='container-flex'>
        <div className='play1-header'> 
            <img src='./PlayGames/play-header.png' alt='' className='play2-back-img'/>
           <div>
           <div className='pg-icons'>
           <img src='./PlayGames/Kling.png' alt='' className='play-kling'/>
            {/* <img src='./PlayGames/Shop2Cash.png' alt='' className='play-shop2cash'/> */}
            <p className='play-shop2cash'>Shop2Cash</p>
            </div>
            {/* <ul>
            <li className="nav-item icon-align">
                <AccountCircleIcon style={{ color: "white" }} />
                <Link to="/AccountPage2">
                  <a
                    className="nav-link active right-side-text"
                    aria-current="page"
                    href="#"
                  >
                    My Account
                  </a>
                </Link>
              </li>
            </ul> */}

            <ul className="navbar-nav mb-2 mb-lg-0 pg-myacc">
             
             <li className="nav-item">
               <AccountCircleIcon style={{ color: "white" }} />
               <Link to="/AccountPage2">
                 <a
                   className="nav-link active right-side-text pg1-h-i ps-3"
                   aria-current="page"
                   href="#"
                 >
                   My Account
                 </a>
               </Link>
             </li>
           </ul>
            {/* <img src='./PlayGames/My-Acc.png' alt='' className='play-myacc'/>
            <p className='play-myacc-text'><a href='#' style={{textDecoration:"none", color:"white"}}>My Account</a></p> */}
            <p className='header-text'>Play Games & Earn Rewards</p>
           </div>
           {/* <div>
                <img src='./PlayGames/play-back-1.png' alt='' className='play-back-img1'/>
                <img src='./PlayGames/play-footer.png' alt='' className='play-footer-1'/>
                <img src='./PlayGames/play-img-1.png' alt='' className='play-img-1'/>
                <p className='img-1-text1'>SPIN TO EARN</p>
                <p className='img-1-text2'>Start the game
                                            to earn reward.</p>
                <img src='./PlayGames/play-arrow.png' alt='' className='play-arrow-1'/>

                <img src='./PlayGames/play-back-2.png' alt='' className='play-back-img2'/>
                <img src='./PlayGames/play-footer.png' alt='' className='play-footer-2'/>
                <img src='./PlayGames/play-img-2.png' alt='' className='play-img-2'/>
                <p className='img-2-text1'>MYSTERY BOX</p>
                <p className='img-2-text2'>Start the game
                                            to earn reward.</p>
                <img src='./PlayGames/play-arrow.png' alt='' className='play-arrow-2'/>

                <img src='./PlayGames/play-back-3.png' alt='' className='play-back-3'/>
                <p className='comming-soon-1'>COMING SOON...</p>
                <img src='./PlayGames/play-back-3.png' alt='' className='play-back-4'/>
                <p className='comming-soon-2'>COMING SOON...</p>

                <div className='f-line'> </div>
                <img src='./PlayGames/copy-black.png' alt='' className='play-copy'/>
                <p className='play-foter-text'>2022 | Shop 2 Earn | All Rights reserved.</p>
           </div> */}

<div className="container">
          <div className="row p-all">
            <div className="col-md-6 pt-3">
             <Link to='/SpinWheelPage'> <div>
                <div className="pt-4 pg2-cards">
                  <div className="pg2-card1-img1">
                    <img
                      src="./PlayGames/play-img-1.png"
                      alt=""
                      className="pg2-img1"
                    />
                  </div>
                  <div className="pg2-card1-f">
                    <img
                      src="./PlayGames/play-footer.png"
                      alt=""
                      className="play2-footer-1"
                    />
                    <div className="pg2-card1-para1">
                      <p className="pg2-p1">SPIN TO EARN</p>
                      <span className="pg2-ta" style={{ textAlign: "left" }}>
                        <p className="pg2-p2">Start the game to earn reward.</p>
                        <div>
                        <ChevronRightIcon className="ms-4 pgarrow" />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
            <div className="col-md-6 pt-3">
            <Link to='/LuckyBoxGame'> 
              <div>
                <div className="pt-4 pg2-cards-2">
                  <div className="pg2-card1-img1">
                    <img
                      src="./PlayGames/play-img-2.png"
                      alt=""
                      className="pg2-img2"
                    />
                  </div>
                  <div className="pg2-card1-f">
                    <img
                      src="./PlayGames/play-footer.png"
                      alt=""
                      className="play2-footer-1"
                    />
                    <div className="pg2-card1-para1">
                      <p className="pg2-p1">MYSTERY BOX</p>
                      <span className="pg2-ta">
                        <p className="pg2-p2">Start the game to earn reward.</p>
                        <ChevronRightIcon className="ms-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
           
            </Link>
            </div>
            <div className="col-md-6 pt-3">
              
              <div className="card pg2-card3">
                <div className="card-body comming2-soon-1">COMING SOON...</div>
              </div>
            </div>
            <div className="col-md-6 pt-3 pb-5 pg2-cs">
              <div className="card pg2-card3">
                <div className="card-body comming2-soon-1">COMING SOON...</div>
              </div>
            </div>
          </div>
        </div>

        </div>
        <div className="pg-end-line"></div>
        <div className="pg-last-line">
              <CopyrightIcon
                style={{
                  color: "white",
                  background: "black",
                  borderRadius: "50%",
                }}
              />
              <p className="pg-end-text">
                2022 | Shop 2 Earn | All Rights reserved.
              </p>
            </div>
    </div>
    </div>
  )
}

export default PlayGames;