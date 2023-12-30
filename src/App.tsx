import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import LoginPage from "./components/loginPage";
import SignupPage from "./components/signUpPage";
import CustomerHomePage from "./components/customerHomePage";
import OwnerHomePage from "./components/ownerHomePage";
import ResultsPage from "./components/searchResults"
import UserType from "./components/pickUserTypePage"
import ImageUploadForm from "./components/ImageUploadForm"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/image-upload" element={<ImageUploadForm />}></Route>
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
