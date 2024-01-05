import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/loginPage";
import SignupPage from "./components/SignUpPage";
import CustomerHomePage from "./components/customerHomePage";
import OwnerHomePage from "./components/ownerHomePage";
import ResultsPage from "./components/searchResults"
import UserType from "./components/pickUserTypePage"
import ImageUploadForm from "./components/ImageUploadForm"
import UserMapComponent from "./components/userMapComponent";
import BuildingMapComponent from "./components/buildingMapComponent";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/image-upload" element={<ImageUploadForm />}></Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-user" element={<SignupPage />} />
        <Route path="/customer-home-page" element={<CustomerHomePage/>} />
        <Route path="/owner-home-page" element={<OwnerHomePage/>} />
        <Route path="/results/:id" element={<ResultsPage/>}/>
        <Route path="/user-type" element={<UserType/>} />
        <Route path="/map" element={<BuildingMapComponent/>}/>
        {/* <Route path="/user-page" element={<UserPage/>} />
        <Route path="/chat" element={<ChatPage/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;