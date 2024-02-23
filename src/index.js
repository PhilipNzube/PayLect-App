import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './Pages/CreateAccount.js';
import SignIn from './Pages/SignIn.js';
import ForgotPassword from './Pages/ForgotPassword.js';
import DashBoard from './Pages/DashBoard.js';

import DashBoardPage from './dashboardPages/DashBoardPage';
import TransactionPage from './dashboardPages/TransactionPage';
import SwapCurrencyPage from './dashboardPages/SwapCurrencyPage';
import AnalyticsPage from './dashboardPages/AnalyticsPage';
import AccountPage from './dashboardPages/AccountPage';
import './index.css';
import AuthenticationPage from './Pages/AuthenticationPage.js';
// import swDev from './swDev.js';


function START() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthenticationPage/>}>
            <Route index element={<CreateAccount />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
          </Route>
          <Route path="/DashBoard" element={<DashBoard />} >
            <Route path="/DashBoard/" element={<DashBoardPage />} />
            <Route path="/DashBoard/TransactionPage" element={<TransactionPage />} />
            <Route path="/DashBoard/SwapCurrencyPage" element={<SwapCurrencyPage />} />
            <Route path="/DashBoard/AnalyticsPage" element={<AnalyticsPage />} />
            <Route path="/DashBoard/AccountPage" element={<AccountPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )

}

// swDev();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< START />);