import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import signupBg from "../../assets/signupBg2.jpg";

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let valid = true;
    const newErrors = { password: "", confirmPassword: "" };

    if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must contain: 8+ characters, uppercase, lowercase, number, and special character";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      navigate("/dashboard");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="mt-16 min-h-screen flex items-center justify-center p-4 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-200"
      >
        {/* Left Panel - Form */}
        <div className="w-full md:w-1/2 p-12">
          <div className="max-w-md mx-auto">
            <div className="mb-10">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
                Join <span className="text-[#f26524]">ACE</span> Community
              </h1>
              <p className="text-gray-600">Start managing your padel bookings like a pro</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <FaUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f26524] focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f26524] focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div className="relative">
                  <FaLock className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Create Password"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f26524] focus:border-transparent transition-all"
                    required
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-2">{errors.password}</p>}
                </div>

                <div className="relative">
                  <FaLock className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Confirm Password"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f26524] focus:border-transparent transition-all"
                    required
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-2">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                  className="w-4 h-4 text-[#f26524] rounded focus:ring-[#f26524]"
                  required
                />
                <label className="ml-2 text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="/terms" className="text-[#f26524] hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="/privacy" className="text-[#f26524] hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#f26524] to-[#d4521e] text-white py-3 px-6 rounded-xl font-semibold hover:from-[#528DAB] hover:to-[#2A7D9B] transition-all transform hover:scale-105 disabled:opacity-75"
              >
                {isSubmitting ? "Creating Account..." : "Get Started Free"}
              </button>
            </form>

            <div className="mt-8 text-center text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login")}
                className="text-[#f26524] font-semibold hover:underline"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel - Graphic */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-[#051b23] to-[#112534] relative hidden md:block">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url(${signupBg})` }}
          />
        <div className="relative z-10 h-full flex items-center justify-center p-12 text-center">
  <div className="max-w-md">
    <h2 className="text-5xl font-extrabold text-white leading-tight mb-6">
      Elevate Your <span className="text-[#f26524]">Padel</span> Experience
    </h2>
    <p className="text-lg text-gray-200 mb-6">
      Join a thriving community of passionate players and take your game to the next level.
    </p>
  
  </div>
</div>

        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
