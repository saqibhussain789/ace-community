import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import SignupPage from "./pages/Signup/Signup";
import HomePage from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <>
      <Header /> {/* Always displayed */}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      
      <Footer /> {/* Always displayed */}
    </>
  );
}

export default App;
