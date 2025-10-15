import React, { useState, useEffect } from "react";

export default function LoginPopup({ onClose }) {
  const [username, setUsername] = useState("");
  const [department, setDepartment] = useState("");
  const dropdownOptions = ["@hr", "@admin", "@sales"];

   useEffect(() => {
     document.body.style.overflow = 'hidden';

     return () => {
      document.body.style.overflow = 'unset';
    };
  }, []); 

  const handleDepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  const getFullEmail = () => {
    // This function can be used to retrieve the full email when submitting the form
    return `${username}${department}`;
  };

  return (
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      {/* Login Card - max-w-md for rectangular shape */}
      <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg max-w-md w-full text-white">
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-gray-400 mb-6">
          Log in to your AutoERP account.
        </p>

        <form>
           <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="w-full p-3 rounded-md bg-[#2d3748] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

           <div className="mb-4">
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Department
            </label>
            <select
              value={department}
              onChange={handleDepartmentChange}
              className="w-full p-3 rounded-md bg-[#2d3748] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Department</option>
              {dropdownOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

           <div className="mb-6">
            <label className="block text-sm font-medium text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-md bg-[#2d3748] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="text-right mb-6">
            <a href="#" className="text-blue-400 hover:underline text-sm">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-md font-bold"
          >
            Log In
          </button>
        </form>

        <div className="text-center mt-6 text-sm">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <a href="#" className="text-blue-400 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
          aria-label="Close"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
