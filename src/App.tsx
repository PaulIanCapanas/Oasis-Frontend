import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/loginPage";
import SignupPage from "./components/SignUpPage";
import CustomerHomePage from "./components/customerHomePage";
import ResultsPage from "./components/searchResults"
import UserType from "./components/pickUserTypePage"
import ImageUploadForm from "./components/ImageUploadForm"
import Description from "./components/descriptionPage";
import UserMapComponent from "./components/userMapComponent";
import BuildingRegistration from "./components/buildingRegisterPage"
import { useState } from "react";
import BuildingMapComponent from "./components/buildingMapComponent";
import ChatEntry from "./components/messaging/chatEntry";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/image-upload" element={<ImageUploadForm />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-user" element={<SignupPage />} />
        <Route path="/customer-home-page" element={<CustomerHomePage/>} />
        <Route path="/results/:id" element={<ResultsPage/>}/>
        <Route path="/user-type" element={<UserType/>} />
        <Route path="/description" element={<Description/>} />
        <Route path="/map" element={<UserMapComponent/>} />
        <Route path="/building-register" element={<BuildingRegistration/>} />
        <Route path="chat-entry" element={<ChatEntry/>} />
        {/* <Route path="/user-page" element={<UserPage/>} />
        <Route path="/chat" element={<ChatPage/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
