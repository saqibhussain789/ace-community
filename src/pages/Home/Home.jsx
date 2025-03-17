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
      <section className="bg-yellow-50 overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
                    <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                        <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                            <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">Get it done.<br /> Fast, Easy.</h1>
                            <p className="mt-8 text-xl text-black">We help you to make your remote work life easier. Build a distraction-free working experience.</p>
                            <form className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                                <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                                    <div className="flex flex-col items-start sm:flex-row">
                                        <div className="flex-1 w-full min-w-0">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter email to get started"
                                                className="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:ml-4 sm:mt-0 hover:bg-orange-600">Try 14 days free</button>
                                    </div>
                                </div>
                            </form>
                            <p className="mt-5 text-base text-black">Instant access. No credit card required.</p>
                        </div>
                    </div>
                    <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                        <div className="absolute inset-0">
                            <img className="object-cover w-full h-full scale-150" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/man-working-on-laptop.jpg" alt="Man working on laptop" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8">
                            <div className="flex items-center">
                                <svg className="w-10 h-10 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                                <h2 className="font-bold text-white text-7xl ml-2.5">395</h2>
                            </div>
                            <p className="max-w-xs mt-1.5 text-xl text-white">Professionals have organized their desk via PostCra</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-white to-[#F8FAFC]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <span className="inline-block mb-4 text-sm font-semibold text-[#F26524] uppercase tracking-wide">
        Why Choose Us
      </span>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Transform Your Club Management Experience
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Advanced solutions designed to streamline operations and enhance player engagement
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f0f4f7]">
        <div className="w-14 h-14 mb-6 rounded-lg bg-[#2A7D9B]/10 flex items-center justify-center">
          <svg className="w-7 h-7 text-[#2A7D9B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Smart Automation</h3>
        <p className="text-gray-600 mb-6">Automate bookings, payments, and member coordination with AI-driven solutions</p>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-[#F26524] mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Real-time availability tracking
          </li>
        </ul>
      </div>

      {/* Feature 2 */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f0f4f7]">
        <div className="w-14 h-14 mb-6 rounded-lg bg-[#2A7D9B]/10 flex items-center justify-center">
          <svg className="w-7 h-7 text-[#2A7D9B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h11V3l9 11h-7v7H3V10z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Seamless Communication</h3>
        <p className="text-gray-600 mb-6">Keep members informed with instant notifications and updates</p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#f0f4f7]">
        <div className="w-14 h-14 mb-6 rounded-lg bg-[#2A7D9B]/10 flex items-center justify-center">
          <svg className="w-7 h-7 text-[#2A7D9B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7 16V6h10v10H7z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Reporting</h3>
        <p className="text-gray-600 mb-6">Get detailed insights on member activity and club performance</p>
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



      <section className="py-20 bg-gradient-to-b from-[#F8FAFC] to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
      {/* Left Content */}
      <div className="space-y-6">
        <div className="inline-block px-4 py-2 bg-[#2A7D9B]/10 rounded-full text-[#2A7D9B] font-medium mb-4">
          Contact Us
        </div>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Optimize Your Venue Operations with ACE Community
        </h2>
        <p className="text-lg text-gray-600">
          Discover how our innovative solutions can transform your club management 
          and elevate player experiences. Complete the form to schedule a personalized demo.
        </p>
        
        <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">For Clubs & Organizations</h3>
          <p className="text-gray-600">
            Looking for enterprise solutions?{" "}
            <a href="#contact" className="text-[#2A7D9B] font-medium hover:underline">
              Contact our sales team →
            </a>
          </p>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
        {submitted ? (
          <div className="text-center p-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received</h3>
            <p className="text-gray-600">
              We'll contact you within 24 hours. In the meantime, check our{" "}
              <a href="/faq" className="text-[#2A7D9B] hover:underline">FAQ page</a>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <div className="relative">
                  <input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A7D9B] focus:border-transparent peer"
                    placeholder="John"
                    required
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none peer-required:block">
                    <span className="text-red-500">*</span>
                  </div>
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A7D9B] focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A7D9B] focus:border-transparent peer"
                    placeholder="john@example.com"
                    required
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none peer-required:block">
                    <span className="text-red-500">*</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A7D9B] focus:border-transparent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Club & Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Club Name *
                </label>
                <div className="relative">
                  <input
                    name="clubName"
                    value={formData.clubName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A7D9B] focus:border-transparent peer"
                    placeholder="ACME Sports Club"
                    required
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none peer-required:block">
                    <span className="text-red-500">*</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A7D9B] focus:border-transparent appearance-none bg-select-arrow bg-no-repeat bg-right-4"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Spain">Spain</option>
                  {/* Add more countries */}
                </select>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                name="otherInfo"
                value={formData.otherInfo}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#2A7D9B] focus:border-transparent"
                placeholder="Tell us about your specific needs..."
              ></textarea>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="agreeCommunications"
                    checked={formData.agreeCommunications}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#2A7D9B] border-gray-300 rounded focus:ring-[#2A7D9B]"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="text-gray-600">
                    I agree to receive marketing communications from ACE Community
                  </label>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="agreePrivacy"
                    checked={formData.agreePrivacy}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#2A7D9B] border-gray-300 rounded focus:ring-[#2A7D9B] peer"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="text-gray-600">
                    I accept the{" "}
                    <a href="/terms" className="text-[#2A7D9B] hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="text-[#2A7D9B] hover:underline">
                      Privacy Policy
                    </a>{" "}
                    *
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#F26524] hover:bg-[#E55B1A] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-[1.02]"
            >
              Schedule Free Consultation
            </button>
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
