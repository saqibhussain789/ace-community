import { Link } from "react-router-dom";
import { useState } from "react";
import Hero from "../../assets/Hero.jpeg";
import Phone from "../../assets/phones.png";
import Stats from '../../assets/data.jpg'
import Managment from '../../assets/Management.jpg'
import Match from '../../assets/Match.jpg'

const HomePage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    clubName: "",
    country: "",
    otherInfo: "",
    agreeCommunications: false,
    agreePrivacy: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (replace with actual API call)
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Before the Fold (BTF) Banner */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('${Hero}')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[#000000] opacity-70"></div>

        {/* Banner Content */}
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl font-bold mb-6">
            Elevate Your Club Management with Our Innovative Solutions
          </h1>
          <p className="text-xl mb-8">
            Streamline operations, enhance member experiences, and grow your
            club with our cutting-edge platform.
          </p>
          <Link
            to="/request-demo"
            className="bg-[#F26524] hover:bg-[#F26524]/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
          >
            Request a Demo
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white relative">
  <div className="max-w-7xl mx-auto px-6">
    {/* Section Heading */}
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
      Why Choose Us?
    </h2>

    {/* Feature 1 */}
    <div className="relative flex flex-col md:flex-row items-center mb-20">
      <div className="w-full md:w-1/2 px-6 order-2 md:order-1">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Effortless Club Management
        </h3>
        <p className="text-lg text-gray-600 mb-4">
          Say goodbye to manual scheduling! Our platform automates bookings,
          payments, and member management, allowing you to focus on creating
          an engaging club environment.
        </p>
        <ul className="list-disc text-gray-600 text-lg ml-5 space-y-2">
          <li>Automated court reservations</li>
          <li>Secure online payments</li>
          <li>Performance analytics for clubs</li>
        </ul>
        <button className="mt-6 bg-[#2A7D9B] hover:bg-[#2A7D9B]/90 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-lg hover:shadow-xl">
          Learn More
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <img
          src={Managment}
          alt="Effortless Club Management"
          className="w-full max-w-lg transform hover:scale-105 transition-all duration-500 rounded-xl shadow-lg"
        />
      </div>
    </div>

    {/* Feature 2 */}
    <div className="relative flex flex-col md:flex-row items-center mb-20">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={Match}
          alt="Smart Matchmaking"
          className="w-full max-w-lg transform hover:scale-105 transition-all duration-500 rounded-xl shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 px-6">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Smart Matchmaking
        </h3>
        <p className="text-lg text-gray-600 mb-4">
          Finding the right opponent has never been easier! Our AI-powered
          matchmaking system pairs you with players of similar skill levels
          for fair and exciting matches.
        </p>
        <ul className="list-disc text-gray-600 text-lg ml-5 space-y-2">
          <li>AI-based skill-level matching</li>
          <li>Personalized game recommendations</li>
          <li>Nearby player discovery</li>
        </ul>
        <button className="mt-6 bg-[#008080] hover:bg-[#008080]/90 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-lg hover:shadow-xl">
          Learn More
        </button>
      </div>
    </div>

    {/* Feature 3 */}
    <div className="relative flex flex-col md:flex-row items-center mb-20">
      <div className="w-full md:w-1/2 px-6 order-2 md:order-1">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Real-Time Performance Tracking
        </h3>
        <p className="text-lg text-gray-600 mb-4">
          Keep track of your game progress with detailed analytics. Monitor
          your strengths, weaknesses, and match history to continuously improve.
        </p>
        <ul className="list-disc text-gray-600 text-lg ml-5 space-y-2">
          <li>Live match statistics</li>
          <li>Track wins, losses, and progress</li>
          <li>Personalized improvement tips</li>
        </ul>
        <button className="mt-6 bg-[#F26524] hover:bg-[#F26524]/90 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-lg hover:shadow-xl">
          Learn More
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
        <img
          src={Stats}
          alt="Performance Tracking"
          className="w-full max-w-lg transform hover:scale-105 transition-all duration-500 rounded-xl shadow-lg"
        />
      </div>
    </div>
  </div>
</section>


      {/* App Download Section */}
      <section className="py-16 bg-gradient-to-b from-[#528DAB] via-[#2A7D9B] to-[#F26524]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Side - App Image and Text */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Transform your Padel journey with effortless matches and nonstop
                fun!
              </h2>
              <p className="mb-4">
                Effortless Padel Bookings, Maximum Play—Join Padel Mates Today!
              </p>
              <p className="mb-6">
                ACE COMMUNITY is your all-in-one booking solution for racket
                sports worldwide. With years of expertise, we bring you the
                perfect mix of user-friendly technology and powerful
                functionality. Whether you play padel, tennis, badminton,
                pickleball, or squash, we’ve got you covered. Our platform
                seamlessly connects venues and players, ensuring you get the
                most out of every match!
              </p>
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Download Our App
              </h3>
              <p className=" text-black mb-8">
                Manage your club on the go with our mobile app. Available on
                both Android and iOS.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                {/* Google Play Button */}
                <a
                  href="https://play.google.com/store" // Replace with your Google Play link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2A7D9B] hover:bg-[#2A7D9B]/90 text-white px-6 py-3 rounded-md flex items-center space-x-2 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                  </svg>
                  <span>Google Play</span>
                </a>

                {/* Apple Store Button */}
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#008080] hover:bg-[#008080]/90 text-white px-6 py-3 rounded-md flex items-center space-x-2 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.702z" />
                  </svg>
                  <span>Apple Store</span>
                </a>
              </div>
            </div>

            {/* Right Side - App Screenshot */}
            <div className="flex justify-center md:justify-end">
              <img
                src={Phone} 
                alt="App Screenshot"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16" style={{background: "linear-gradient(135deg, #E5F0F4, #F0F7FA)", }}>
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left Side - Informative Text */}
      <div className="flex flex-col justify-start"> {/* Changed justify-center to justify-start */}
        <h2 className="text-3xl font-bold text-gray-800">
          Are you interested in exploring ACE COMMUNITY's offerings to optimize
          your venue's operations and management?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          If you're keen on discovering what ACE COMMUNITY can provide for you,
          your players, and your venue, complete the form!
        </p>
        <p className="text-lg text-gray-600">
          Are you a club?{" "}
          <span className="text-[#2A7D9B] font-semibold hover:underline">
            Connect with us
          </span>
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="bg-gray-100 p-8 rounded-xl shadow-2xl border border-gray-100">
        {submitted ? (
          <div className="text-center text-green-600">
            <p className="text-xl font-semibold">
              Thank you for your request! We'll get back to you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A7D9B] focus:border-[#2A7D9B]"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A7D9B] focus:border-[#2A7D9B]"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            {/* Email and Phone Number */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A7D9B] focus:border-[#2A7D9B]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A7D9B] focus:border-[#2A7D9B]"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Club Name and Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="clubName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Club Name*
                </label>
                <input
                  type="text"
                  id="clubName"
                  name="clubName"
                  value={formData.clubName}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A7D9B] focus:border-[#2A7D9B]"
                  placeholder="Enter your club name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Choose Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A7D9B] focus:border-[#2A7D9B]"
                  required
                >
                  <option value="">Select your country</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Spain">Spain</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
            </div>

            {/* Other Information */}
            <div>
              <label
                htmlFor="otherInfo"
                className="block text-sm font-medium text-gray-700"
              >
                Other Information
              </label>
              <textarea
                id="otherInfo"
                name="otherInfo"
                value={formData.otherInfo}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2A7D9B] focus:border-[#2A7D9B]"
                placeholder="Enter any additional information"
              ></textarea>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeCommunications"
                  name="agreeCommunications"
                  checked={formData.agreeCommunications}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#2A7D9B] bg-white border-gray-300 rounded focus:ring-[#2A7D9B]"
                />
                <label
                  htmlFor="agreeCommunications"
                  className="ml-2 text-sm text-gray-600"
                >
                  I agree to receive other communications from ACE COMMUNITY.
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreePrivacy"
                  name="agreePrivacy"
                  checked={formData.agreePrivacy}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#2A7D9B] border-gray-300 rounded focus:ring-[#2A7D9B]"
                  required
                />
                <label
                  htmlFor="agreePrivacy"
                  className="ml-2 text-sm text-gray-600"
                >
                  I agree to allow ACE COMMUNITY to store and process my personal
                  data.*
                </label>
              </div>
            </div>

            {/* Privacy Policy Link */}
            <p className="text-sm text-gray-600">
              For more information, please look at our{" "}
              <a
                href="/privacy-policy"
                className="text-[#2A7D9B] hover:underline"
              >
                Privacy Policy
              </a>
              .
            </p>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#2A7D9B] hover:bg-[#2A7D9B]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
              >
                Send
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default HomePage;
