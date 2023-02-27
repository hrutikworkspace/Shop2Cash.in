import React from "react";
import "./App.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/privateRoute";
import GoToTop from './TopofPage/TopofPage';
import SignIn from "./SignIn/Sign-In";
import Signup from "./SignUp/Signup";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CashBack from "./CashBack/CashBack";
import LuckyBoxGame from "./LuckyBox/luckyBoxGame";
import Tables from "./table/table";
import MiniHeader from "./Mini-header/MiniHeader";
import PlayGames from "./PlayGamesPage-1/PlayGames";
import PlayGamePage2 from "./PlayGamesPage-2/PlayGamePage2";
import AccountsPage1 from "./AccountPage1/AccountPage1";
import SpinWheelPage from "./SpinWheelPage/SpinWheelPage";
import WithdrawPage from "./WithdrawPage/WithdrawPage";
import TermsCondition from "./Terms&Condition/Terms&Condition";
import ReferEarn from "./Refer&Earn/Refer&Earn";
import HeaderNew from "./HeaderNew/HeaderNew";
import SupportPage1 from "./SupportPage1/SupportPage1";
import SupportPage2 from "./SupportPage2/SupportPage2";
import PaymentSettingPage from "./PaymentSettingPage/PaymentSettingPage";
import AllStorePage from "./AllStorePage/AllStorePage";
import AccountPage1 from "./AccountPage1/AccountPage1";
import OrderHistory from "./OrderHistory/OrderHistory";
import AccountPage2 from "./AccountPage2/AccountPage2";
import HomePageSignup from "./Homepagesignup/HomePageSignup";
import SpinWhlPopUpPage from "./SpinWhlPopUp/SpinWhlPopUpPage";
import CashbackStore from "./CashbackStore/CashbackStore";
import SidebarAccount from "./SidebarAccount/SidebarAccount";
import FooterNew from "./FooterNew/FooterNew";
import Bestsellerpage from "./Bestsellerpage/Bestsellerpage";
import MobileHeader from './MobileHeader/MobileHeader';
import ImageSlider from "./ImageSlider/ImageSlider";
import WinningPopUp from "./WinningPopUp/WinningPopUp";
import HomePage from "./HomePage/HomePage";
import AccountPage from "./AccountPage/AccountPage";
import Spinwheel from "./SpinWheelPage/Spinwheel";
import Spin from "./SpinWheelPage/Spin";
import Newspin from "./SpinWheelPage/NewSpin/Newspin";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";



function App() {
 
  
  return (
    <>
    <GoToTop/>
    {/* <Newspin/> */}
    {/* <Spin/> */}
    {/* <Spinwheel/> */}
    {/* <AccountPage/> */}
    <PrivateRoute/>
    {/* <HomePage/> */}
    {/* <Bestsellerpage/> */}
     {/* <SidebarAccount/>  */}
      {/* <ReferEarn/> */}
      {/* <OrderHistory/> */}
      {/* <MobileHeader /> */}
      {/* {<SpinWheelPage/>} */}
      {/* <Header/> */}
      {/* <Footer/> */}
      {/* <SignIn/> */}
      {/* <Signup/> */}
      {/* <AccountPage1/> */}
      {/* <SupportPage1/> */}
      {/* <FooterNew/> */}
      {/* <SupportPage2/> */}
      {/* <PaymentSettingPage/> */}
      {/* <AllStorePage/>    */}
      {/* <MiniHeader/> */}
      {/* <HeaderNew/> */}
      {/* <AccountPage2/> */}
      {/* <CashBack/> */}
      {/* <LuckyBoxGame/> */}
      {/* <PlayGamePage2/> */}
      {/* <PlayGames/> */}
      {/* <ReferEarn/> */}
      {/* <SpinWheelPage/> */}
      {/* <SpinWhlPopUpPage/> */}
      {/* <WinningPopUp/> */}
      {/* <TermsCondition/> */}
      {/* <WithdrawPage/> */}
      {/* <CashbackStore/> */}
      {/* <HomePageSignup/> */}
      {/* <ImageSlider/> */}
    </>
  );
}

export default App;
