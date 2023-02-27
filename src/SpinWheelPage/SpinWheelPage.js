import React, { useState } from "react";
import "./SpinWheelPage.css";
import FooterNew from "../FooterNew/FooterNew";
import MiniHeader from "../Mini-header/MiniHeader";
import { Link } from "react-router-dom";
import MobileHeader from "../MobileHeader/MobileHeader";
import HeaderNew from "../HeaderNew/HeaderNew";
import Spinwheel from "./Spinwheel";
import Spin from "./Spin";
// import { Modal } from "reactstrap";
// import { ModalHeader } from "reactstrap";

const SpinWheelPage = () => {
  const [modal,setmodal]=useState(false);
  return (
    <>
      <HeaderNew/>
      <MobileHeader/>

    <div style={{overflowX:"hidden"}}>
      {/* <MiniHeader/> */}
      <div className="container-fluid p-whole">
      <nav aria-label="breadcrumb" class="main-breadcrumb accpg-2-link">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to="/PlayGamePage2">
             Play Games & Earn Rewards</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
            SPIN TO EARN
            </li>
          </ol>
        </nav>
        <div className="main-box1">
          <div>
            <p className="SpinWord">SPIN TO EARN</p>
          </div>
          <div className="spinImageCenter" style={{textAlign:"center"}}>
            {" "}
            <img src="/SpinWheelPage/Spin.png" className="spinImage" /> 
            {/* <Spinwheel/> */}
            {/* <Spin/> */}
            <div className="spinButtondiv">
              <div className="spin-top" style={{marginTop:"-5rem"}}>
              <Link to="/SpinWhlPopUpPage">
              {/* <Modal isOpen={modal}
              toggle={()=>setmodal(!Modal)}>
                <ModalHeader toggle={()=>setmodal(!modal)}>
                <div className='' style={{textAlign:"center"}}>
            <div className='swp1-img'>  
                <img src='./SpinWheelPopUpPage/winning-pop.png' alt='' className='swp1-img' style={{width:"35%"}}/>
                           <div className='swp1-main'>
                   <p className='swp1-text'>+50 Cashback</p>
 
                <div className='swp-p'> 
               <Link to='/PlayGames'><button className='swp1-btn'>Collect reward</button></Link> 
                </div>
                </div> 
                </div>           
            </div>
                </ModalHeader>
              </Modal> */}
              <button className="spinButton spinButtonName"
              >
                Click to spin
              </button>

              </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row bsp-divide">
          <div className="col-12 bsp-divide1">
            <div className="best-featuredstore">
              <h4>User's list</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="lb-row3">
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
                  <td data-label="Due date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
                <tr>
                  <td data-label="Account">1.Abhi prajapati</td>
                  <td data-label="Due date">abhiprajapati233@gmail.com</td>
                  <td data-label="Amount" className="amount-td">
                    &#x20b9;+2000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <FooterNew />
      </div>
    </>
  );
};

export default SpinWheelPage;
