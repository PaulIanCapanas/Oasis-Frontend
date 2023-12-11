import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./loginPage";
import SignupPage from "./signUpPage";
import HomePage from "./homePage";
import ResultsPage from "./searchResults"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/homePage" element={<HomePage/>} />
        <Route path="/results" element={<ResultsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
