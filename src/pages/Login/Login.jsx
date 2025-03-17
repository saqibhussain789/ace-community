import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaEnvelope, FaLock, FaApple } from "react-icons/fa"; // Added Apple icon
import bgimg from "../../assets/bgimg.png"; // Replace with your image path

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginError(""); // Reset error on new attempt

    // Mock login logic (Replace this with actual authentication logic)
    if (
      formData.email !== "test@example.com" ||
      formData.password !== "Test@123"
    ) {
      setLoginError("Incorrect email or password.");
      return;
    }

    console.log("Login successful:", formData);
  };

  return (
    <div className=" mt-12 min-h-screen flex items-center justify-center p-4">
      <div
        className="w-full max-w-6xl overflow-hidden rounded-xl shadow-lg flex flex-col md:flex-row border border-[#2A7D9B]/30"
        style={{ boxShadow: "0 0 15px rgba(42, 125, 155, 0.3)" }} 
      >
        {/* Left Panel - Image with Gradient */}
        <div
          className="w-full md:w-5/12 text-white p-8 flex flex-col items-center justify-center text-center relative"
          style={{
            backgroundImage: `url(${bgimg})`, // Replace with your image path
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#2A7D9B]/80 to-[#112534]/80"
            aria-hidden="true"
          ></div>

          {/* Content */}
          <div className="relative z-10 max-w-xs mx-auto">
            <h1 className="text-3xl font-bold mb-6">
              Capture, Share, and Elevate Your Padel Game
            </h1>
            <p className="text-gray-200 text-sm">
              Step onto the court and experience the thrill of Padel. Play,
              compete, and have fun!
            </p>
          </div>
        </div>

        {/* Right Panel - Input Fields */}
        <div className="w-full md:w-7/12 bg-white p-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-2">
              Welcome Back!
            </h1>
            <p className="text-center text-gray-600 text-sm mb-8">
              Log in to book courts, track your matches, and elevate your Padel
              game!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 mb-2 text-sm"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A7D9B] text-sm"
                    placeholder="example@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 mb-2 text-sm"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A7D9B] text-sm"
                    placeholder="••••••••"
                    required
                  />
                </div>
                {loginError && (
                  <p className="text-red-500 text-xs mt-1">{loginError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#2A7D9B] text-white py-2 px-4 rounded-md hover:bg-[#528DAB] focus:outline-none focus:ring-2 focus:ring-[#2A7D9B] focus:ring-opacity-50 transition-colors text-sm"
              >
                Login
              </button>

              <div className="mt-3 text-center">
                <a href="#" className="text-[#2A7D9B] hover:underline text-xs">
                  Forgot your password?
                </a>
              </div>
            </form>

            <div className="mt-6 text-center text-gray-600 text-xs">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => navigate("/signup")} // Redirect to signup page
                className="text-[#2A7D9B] hover:underline"
              >
                Register
              </button>
            </div>

            <div className="mt-6 text-center">
              <div className="relative flex items-center justify-center">
                <div className="border-t border-gray-300 absolute w-full"></div>
                <div className="bg-white px-2 relative text-gray-500 text-xs">
                  OR
                </div>
              </div>

              {/* Sign in with Apple */}
              <button className="mt-4 flex items-center justify-center w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 text-sm">
                <FaApple className="h-4 w-4 mr-2 text-[#2A7D9B]" />{" "}
                {/* Apple Icon */}
                Sign in with Apple
              </button>

              {/* Sign in with Samsung */}
              <button className="mt-4 flex items-center justify-center w-full border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-50 text-sm">
                Sign in with Samsung
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
