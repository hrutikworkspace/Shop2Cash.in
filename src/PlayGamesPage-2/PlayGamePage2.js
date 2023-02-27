import React from "react";
import Footer from "../Footer/Footer";
import FooterNew from "../FooterNew/FooterNew";
import MiniHeader from "../Mini-header/MiniHeader";
import "./PlayGamePage2.css";
import Header from "../Header/Header";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from "react-router-dom";
import MobileHeader from "../MobileHeader/MobileHeader";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CopyrightIcon from "@mui/icons-material/Copyright";



function PlayGamePage2() {
  return (
    <>
    <MobileHeader/>
      {/* <MiniHeader /> */}
      {/* <HeaderNew/> */}
 
      {/* <img
            src="./PlayGames/play-header.png"
            alt=""
            className="play2-back-img"
          />
          <div>
            
            <img src='./PlayGames/Shop2Cash.png' alt='' className='play2-shop2cash'/>
            <img src='./PlayGames/My-Acc.png' alt='' className='play2-myacc'/>
            <p className='play2-myacc-text'><a href='#'>My Account</a></p> 
            <p className="header2-text">Play Games & Earn Rewards</p>
          </div> */}
      {/* <div>
            <img
              src="./PlayGames/play-back-1.png"
              alt=""
              className="play2-back-img1"
            />
            <img
              src="./PlayGames/play-footer.png"
              alt=""
              className="play2-footer-1"
            />
            <img
              src="./PlayGames/play-img-1.png"
              alt=""
              className="play2-img-1"
            />
            <p className="play2img-1-text1">SPIN TO EARN</p>
            <p className="play2img-1-text2">Start the game to earn reward.</p>
            <img
              src="./PlayGames/play-arrow.png"
              alt=""
              className="play2-arrow-1"
            /> */}

      {/* <img
              src="./PlayGames/play-back-2.png"
              alt=""
              className="play2-back-img2"
            />
            <img
              src="./PlayGames/play-footer.png"
              alt=""
              className="play2-footer-2"
            />
            <img
              src="./PlayGames/play-img-2.png"
              alt=""
              className="play2-img-2"
            />
            <p className="play2img-2-text1">MYSTERY BOX</p>
            <p className="play2img-2-text2">Start the game to earn reward.</p>
            <img
              src="./PlayGames/play-arrow.png"
              alt=""
              className="play2-arrow-2"
            />
            <img
              src="./PlayGames/play-back-3.png"
              alt=""
              className="play2-back-3"
            />
            <p className="comming2-soon-1">COMING SOON...</p>
            <img
              src="./PlayGames/play-back-3.png"
              alt=""
              className="play2-back-4"
            />
            <p className="comming2-soon-2">COMING SOON...</p>
          </div> */}
      <div className="container-flex pg2">
        <div className="play2-header">

          <img
            src="./PlayGames/play-header.png"
            alt=""
            className="play2-back-img"
          />
          <div className='pg-icons'>
           <img src='./PlayGames/Kling.png' alt='' className='play-kling'/>
            {/* <img src='./PlayGames/Shop2Cash.png' alt='' className='play-shop2cash'/> */}
            <Link to="/HomePageSignup">
            <p className='play-shop2cash'>Shop2Cash</p>
            </Link>
            </div>
            <ul class="navbar-nav mb-2 mb-lg-0 pg-myacc">
             
             <li class="nav-item">
               <AccountCircleIcon className="iconAcc"/>
               <Link to="/AccountPage2">
                 <a
                   class="nav-link active right-side-textH pg1-h-i ps-3"
                   aria-current="page"
                   href="#"
                 >
                   My Account
                 </a>
               </Link>
             </li>
           </ul>
          <p className="pg2-text1">Play Games & Earn Rewards</p>
        </div>

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
                        <ChevronRightIcon className="ms-4 pgarrow" />
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
                        <ChevronRightIcon className="ms-4 pgarrow" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
           
            </Link>
            </div>
            <div className="col-md-6 pt-3">
            
              <div class="card pg2-card3">
                <div class="card-body comming2-soon-1">COMING SOON...</div>
              </div>
            </div>
            <div className="col-md-6 pt-3 pb-5 pg2-cs">
              <div class="card pg2-card3">
                <div class="card-body comming2-soon-1">COMING SOON...</div>
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
        {/* <div>
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
            <p className="pg2-p2">Start the game to earn reward.</p>
            </div>
              </div>
            </div>
            </div> */}

        {/* <div class="card pg2-card1" style={{width: "18rem"}}>
  <div className="ps-5">
  <img class="card-img-top pg2-card1-img1 mt-3" src="/PlayGames/play-img-1.png" alt="Card image cap"/>
  </div>
  <div class="card-body">

          <img
              src="./PlayGames/play-footer.png"
              alt=""
              className="play2-footer-1"
            />
    
    
  </div>
</div> */}

        {/* <div class="card ms-5" >
                
            </div> */}

        {/* <div className="pg2-cards2">
          
              

           
            
          </div>
         */}
      </div>
      {/* <Footer /> */}
      {/* <FooterNew /> */}
    </>
  );
}

export default PlayGamePage2;
