import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import signup from "../../assets/bgimg.png"; 

const SignupPage = ({ onLoginClick }) => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!validatePassword(formData.password)) {
      setPasswordError(
        "Password must be at least 8 characters long and contain uppercase, lowercase, numbers, and special characters."
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    if (formData.password !== formData.confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }

    if (valid) {
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div
        className="w-full max-w-7xl overflow-hidden rounded-xl shadow-lg flex flex-col md:flex-row border border-[#2A7D9B]/30"
        style={{ boxShadow: "0 0 15px rgba(42, 125, 155, 0.3)" }} 
      >
        {/* Left Panel - Input Fields */}
        <div className="w-full md:w-7/12 bg-white p-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-700 mb-2">
              Register Your Free Account!
            </h1>
            <h2 className="text-2xl text-center text-gray-600 mb-8">
              Create an Account
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A7D9B]"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
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
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A7D9B]"
                    placeholder="example@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 mb-2">
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
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A7D9B]"
                    placeholder="••••••••"
                    required
                  />
                </div>
                {passwordError && (
                  <p className="text-red-500 text-sm mt-1">{passwordError}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2A7D9B]"
                    placeholder="••••••••"
                    required
                  />
                </div>
                {confirmPasswordError && (
                  <p className="text-red-500 text-sm mt-1">
                    {confirmPasswordError}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#2A7D9B] text-white py-2 px-4 rounded-md hover:bg-[#528DAB] focus:outline-none focus:ring-2 focus:ring-[#2A7D9B] focus:ring-opacity-50 transition-colors"
              >
                Register
              </button>
            </form>

            <div className="mt-6 text-center text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")} // Redirect to login page
                className="text-[#2A7D9B] hover:underline"
              >
                Login
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Image with Gradient */}
        <div
          className="w-full md:w-5/12 text-white p-8 flex flex-col items-center justify-center text-center relative"
          style={{
            backgroundImage: `url(${signup})`, // Replace with your image path
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
              Streamline Your Padel Bookings & Matches
            </h1>
            <p className="text-gray-200 text-sm">
              We prioritize your privacy and security on and off the court. Your
              personal data is always protected and never shared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
