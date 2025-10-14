
import React from "react";

export default function LoginPopup({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-[#1a202c] p-8 rounded-lg shadow-lg max-w-sm w-full text-white">
        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-center text-gray-400 mb-6">
          Log in to your AutoERP account.
        </p>

        <form>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md bg-[#2d3748] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
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