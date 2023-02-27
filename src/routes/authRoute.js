import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePageSignup from "../Homepagesignup/HomePageSignup";
  // import HomePageSignup from "../Homepagesignup/HomePageSignup";
  import SignIn from '../SignIn/Sign-In';

function AuthRoute() {
  return (
    <Routes>
      <Route path="/" element={<HomePageSignup/>} />
    </Routes>
  );
}

export default AuthRoute;
