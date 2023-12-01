import React, { useState } from "react";
import "./App.css"
import user_icon from "./assets/user-png.png" 
import password_icon from "./assets/password-png.png" 

const App = () => {
  return (
    <div>
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Username"/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password"/>
            </div>
        </div>
    <div className="signUp">
      <button className="submit">Sign Up</button>
    </div>
    </div>
    </div>
  );
};

export default App;

