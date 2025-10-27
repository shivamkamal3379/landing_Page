import React, { useState } from "react";
import LoginPopup from "../Pages/LoginPopup";
import Gallery from "../Pages/Gallery";
import NewsLetter from "../Pages/NewsLetter";
import AboutUs from "../Pages/AboutUs";

const cars = [
  {
    name: "MG Astor",
    desc: "Experience the thrill of driving.",
    img: "https://images.91wheels.com/assets/b_images/main/models/profile/profile1747391995.jpg?w=840&q=50",
  },
  {
    name: "MG Comet EV",
    desc: "Drive the future with electric.",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Comet-EV/11556/1755844102300/front-left-side-47.jpg?imwidth=420&impolicy=resize",
  },
  {
    name: "MG Hector",
    desc: "Indulge in luxury and performance.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTX-xySsDYGrOLL57VXa0aDtjd0Aq1sBamng&",
  },
  {
    name: "MG Windsor",
    desc: "Unleash the ultimate driving machine.",
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT0MlQQNtfM8i3Q7nVMbNcK0VeSfe9vIeGlQbEg9GS4jzMD1qiKc_TMps_zeqfAvC8m26n7wZBXTcltmbNxwyRWSvglDSdrWXnntK30F9mdkw",
  },
  {
    name: "MG Hector Plus",
    desc: "The Beast Of Electric era.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThub6C8TiaTwUoOLatM7qQwQKvb0IsyJjlGg&s",
  },
  {
    name: "MG Cyberster",
    desc: "Luxury meets innovation.",
    img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDR6kdjE9q9q-Wg7o8lnzRcpRw7EYWslJ1SKZBr7laqOFjFYhQiN-n97Qx6KdHvrslT4OzKDb-wleFblRIUBLaTq35yrGZo2LcEeCIcjQWHg",
  },
];

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [showNewsLetter, setShowNewsLetter] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex flex-wrap justify-between items-center px-6 md:px-12 py-4 bg-[#0b1320] bg-opacity-90 backdrop-blur-sm">
        <div className="text-xl font-bold flex items-center gap-2">
          <div className="bg-blue-600 w-3 h-3 rotate-45"></div>
          AutoCorp
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm">
          <button onClick={() => setShowLogin(true)} className="hover:text-blue-400">
            Login
          </button>
          <button onClick={() => setShowGallery(true)} className="hover:text-blue-400">
            Gallery
          </button>
          <button onClick={() => setShowNewsLetter(true)} className="hover:text-blue-400">
            News Letter
          </button>
          <button onClick={() => setShowAboutUs(true)} className="hover:text-blue-400">
            About Us
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-300 hover:text-blue-400 focus:outline-none"
        >
          ☰
        </button>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="w-full mt-4 flex flex-col space-y-3 md:hidden text-sm">
            <button onClick={() => setShowLogin(true)} className="hover:text-blue-400">
              Login
            </button>
            <button onClick={() => setShowGallery(true)} className="hover:text-blue-400">
              Gallery
            </button>
            <button onClick={() => setShowNewsLetter(true)} className="hover:text-blue-400">
              News Letter
            </button>
            <button onClick={() => setShowAboutUs(true)} className="hover:text-blue-400">
              About Us
            </button>
          </div>
        )}
      </nav>

      <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-[80vh] bg-linear-to-b from-gray-800 to-gray-900 overflow-hidden">
        <img
          src="https://mgmotor.scene7.com/is/image/mgmotor/windsor-bn-dsc-011?hei=1920&qlt=90&resMode=bisharp"
          alt="Car background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Experience the Future of Driving
          </h1>
          <p className="text-gray-300 mb-8 text-sm sm:text-base md:text-lg">
            Explore our range of innovative and high-performance vehicles
            designed for the modern driver.
          </p>
        </div>
      </section>

      <section className="bg-[#0f172a] py-10 overflow-hidden">
        <div className="relative w-full">
          <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused] px-4 sm:px-8">
            {[...cars, ...cars].map((car, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl min-w-[220px] sm:min-w-[260px] md:min-w-[280px]  shrink-0 hover:-translate-y-1 transition-transform duration-300"
              >
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-40 sm:h-48 object-cover rounded-t-xl"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-base sm:text-lg">{car.name}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{car.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
      {showGallery && <Gallery onClose={() => setShowGallery(false)} />}
      {showNewsLetter && <NewsLetter onClose={() => setShowNewsLetter(false)} />}
      {showAboutUs && <AboutUs onClose={() => setShowAboutUs(false)} />}

      <Footer />
    </div>
  );
}
