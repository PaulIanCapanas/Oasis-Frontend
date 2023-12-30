import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./loginPage";
import SignupPage from "./signUpPage";
import CustomerHomePage from "./customerHomePage";
import OwnerHomePage from "./ownerHomePage";
import ResultsPage from "./searchResults"
import UserType from "./pickUserTypePage"
import UserPage from "./userPage"
import ChatPage from "./messages"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-user" element={<SignupPage />} />
        <Route path="/customer-home-page" element={<CustomerHomePage/>} />
        <Route path="/owner-home-page" element={<OwnerHomePage/>} />
        <Route path="/results" element={<ResultsPage/>}/>
        <Route path="/user-type" element={<UserType/>} />
        <Route path="/user-page" element={<UserPage/>} />
        <Route path="/chat" element={<ChatPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
