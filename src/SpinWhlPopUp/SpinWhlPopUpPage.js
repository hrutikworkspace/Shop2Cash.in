import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import FooterNew from '../FooterNew/FooterNew';
import HeaderNew from '../HeaderNew/HeaderNew';
import MiniHeader from '../Mini-header/MiniHeader';
import MobileHeader from '../MobileHeader/MobileHeader';
import './SpinWhlPopUp.css';

function SpinWhlPopUpPage() {
  return (
    <>
        <MobileHeader/>
        <HeaderNew/>
        
        <div className='container-fluid p-whole'>
         

            <div className='swp1-rect'>            

            <div className='' style={{textAlign:"center"}}>
            <div className='swp1-img'>  
                <img src='./SpinWheelPopUpPage/winning-pop.png' alt='' className='swp1-img' style={{width:"35%"}}/>
                           <div className='swp1-main'>
                   <p className='swp1-text'>+50 Cashback</p>
 
                <div className='swp-p'> 
               <Link to='/PlayGamePage2'><button className='swp1-btn'>Collect reward</button></Link> 
                </div>
                </div> 
                </div>           
            </div>
            
            </div>
            
        </div>
        <FooterNew/>
    </>
  )
}

export default SpinWhlPopUpPage;