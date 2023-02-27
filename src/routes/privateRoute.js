import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "./authRoute";
import SignIn from '../SignIn/Sign-In';
import Signup from "../SignUp/Signup";
import HomePageSignup from "../Homepagesignup/HomePageSignup"
import AllStorePage from "../AllStorePage/AllStorePage";
import WithdrawPage from "../WithdrawPage/WithdrawPage";
import OrderHistory from "../OrderHistory/OrderHistory";
import ReferEarn from "../Refer&Earn/Refer&Earn";
import SupportPage1 from "../SupportPage1/SupportPage1";
import PaymentSettingPage from "../PaymentSettingPage/PaymentSettingPage";
import AccountPage2 from "../AccountPage2/AccountPage2";
import AccountPage1 from "../AccountPage1/AccountPage1";
import TermsCondition from "../Terms&Condition/Terms&Condition";
import SupportPage2 from "../SupportPage2/SupportPage2";
import CashbackStore from "../CashbackStore/CashbackStore";
import Bestsellerpage from "../Bestsellerpage/Bestsellerpage";
import PlayGames from "../PlayGamesPage-1/PlayGames";
import CashBack from "../CashBack/CashBack";
import SpinWheelPage from "../SpinWheelPage/SpinWheelPage";
import LuckyBoxGame from "../LuckyBox/luckyBoxGame";
import PlayGamePage2 from "../PlayGamesPage-2/PlayGamePage2";
import SpinWhlPopUpPage from "../SpinWhlPopUp/SpinWhlPopUpPage";
import WinningPopUp from "../WinningPopUp/WinningPopUp";
import Homepage from "../HomePage/HomePage";

function PrivateRoute() {
  return (
    <Routes>
      <Route path="/" element={<AuthRoute />} />
      <Route path="/SignIn" element={<SignIn />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/HomePageSignup" element={<HomePageSignup />} />
      <Route path="/AllStorePage" element={<AllStorePage />} />
      <Route path="/AccountPage1" element={<AccountPage1/>} />
      <Route path="/WithdrawPage" element={<WithdrawPage/>} />
      <Route path="/OrderHistory" element={<OrderHistory/>} />
      <Route path="/ReferEarn" element={<ReferEarn/>} />
      <Route path="/SupportPage1" element={<SupportPage1/>} />
      <Route path="/PaymentSettingPage" element={<PaymentSettingPage/>} />
      <Route path="/AccountPage2" element={<AccountPage2/>} />
      <Route path="/TermsCondition" element={<TermsCondition/>} />
      <Route path="/ReferEarn" element={<ReferEarn/>} />
      <Route path="/SupportPage2" element={<SupportPage2/>} />
      <Route path="/CashbackStore" element={<CashbackStore/>} />
      <Route path="/Bestsellerpage" element={<Bestsellerpage/>} />
      <Route path="/PlayGames" element={<PlayGames/>} />
      <Route path="/CashBack" element={<CashBack/>} />
      <Route path="/SpinWheelPage" element={ <SpinWheelPage/>} />
      <Route path="/LuckyBoxGame" element={<LuckyBoxGame/>} />
      <Route path="/PlayGamePage2" element={<PlayGamePage2/>} />
      <Route path="/SpinWhlPopUpPage" element={<SpinWhlPopUpPage/>} />
      <Route path="/WinningPopUp" element={<WinningPopUp/>} />
      <Route path="/HomePage" element={<Homepage/>} />
    </Routes>
  );
}

export default PrivateRoute;
