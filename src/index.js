import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './CreateAccount.js';
import SignIn from './SignIn.js';
import ForgotPassword from './ForgotPassword.js';
import DashBoard from './DashBoard.js';
import './index.css';
// import swDev from './swDev.js';


function START() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/DashBoard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

// swDev();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< START />);