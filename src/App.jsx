import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./pages/Login/Login";
import SignupPage from "./pages/Signup/Signup";
import HomePage from "./pages/Home/Home";
import "./App.css";

function App() {
  const location = useLocation(); // Get the current route

  // Define routes where Header & Footer should be hidden
  const hideHeaderFooter = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />} {/* Show only if NOT on login/signup */}
      
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      {!hideHeaderFooter && <Footer />} {/* Show only if NOT on login/signup */}
    </>
  );
}

export default App;
