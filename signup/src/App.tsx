import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./loginPage"
import SignupPage from "./signUpPage";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage/>}>
        </Route>
        <Route path="/signup" element={<SignupPage/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;