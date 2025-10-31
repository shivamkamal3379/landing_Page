import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import LoginPopup from "../Pages/LoginPopup";
import Gallery from "../Pages/Gallery";
import NewsLetter from "../Pages/NewsLetter";
import AboutUs from "../Pages/AboutUs";
import videoFile from "../assets/VideoLanding-.mp4";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";

const cars = [
  {
    name: "MG Astor ",
    desc: "Experience the thrill of driving.",
    img: "https://images.91wheels.com/assets/b_images/main/models/profile/profile1747391995.jpg?w=840&q=50",
  },
  {
    name: "MG Comet EV",
    desc: "Drive the future with electric.",
    img: "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Comet-EV/11556/1755844102300/front-left-side-47.jpg?imwidth=420&impolicy=resize",
  },
  {
    name: " MG Hector",
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
  const [soundEnabled, setSoundEnabled] = useState(false);
  const videoRef = useRef(null);

  const enableSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      videoRef.current.play();
      setSoundEnabled(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* 🧭 Navbar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-[#0b1320] bg-opacity-90 backdrop-blur-sm">
        <div className="text-xl font-bold flex items-center gap-2">
          <div className="bg-blue-600 w-3 h-3 rotate-45"></div>
          AutoCorp
        </div>
        <div className="space-x-6 text-sm">
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
      </nav>

      {/* 🌅 Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
        <img
          src="https://mgmotor.scene7.com/is/image/mgmotor/windsor-bn-dsc-011?hei=1920&qlt=90&resMode=bisharp"
          alt="Car background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Experience the Future of Driving
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-300 mb-8"
          >
            Explore our range of innovative and high-performance vehicles designed for the modern driver.
          </motion.p>
        </div>

        {/* 🌈 Subtle Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>

        {/* ⬇️ Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-300 text-sm cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        >
          <div className="flex flex-col items-center">
            <span>Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* 🎥 Autoplay Video Section */}
      <section className="relative w-full h-[90vh] overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={videoFile}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>

        {!soundEnabled && (
          <div
            onClick={enableSound}
            className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer transition-opacity duration-700 hover:bg-black/50"
          >
            <div className="px-6 py-3 bg-white/10 border border-white/30 text-white text-lg font-medium rounded-full hover:scale-105 transition-transform duration-300">
              🔊 Tap to Enable Sound
            </div>
          </div>
        )}
      </section>

      {/* 🖼️ Three Images Section */}
      <section className="bg-[#0b1320] py-12 flex flex-col items-center gap-10">
        {[pic1, pic2, pic3].map((pic, index) => (
          <motion.img
            key={index}
            src={pic}
            alt={`pic${index + 1}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-[90%] md:w-[70%] rounded-2xl shadow-lg hover:scale-[1.02] transition-transform duration-500"
          />
        ))}
      </section>

      {/* 🚗 Cars Section */}
      <section className="bg-[#0f172a] py-12 overflow-hidden">
        <div className="relative w-full">
          <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">
            {[...cars, ...cars].map((car, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 rounded-xl min-w-[250px] flex-shrink-0 transition-transform duration-300"
              >
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-40 object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{car.name}</h3>
                  <p className="text-gray-400 text-sm">{car.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popups */}
      {showLogin && <LoginPopup onClose={() => setShowLogin(false)} />}
      {showGallery && <Gallery onClose={() => setShowGallery(false)} />}
      {showNewsLetter && <NewsLetter onClose={() => setShowNewsLetter(false)} />}
      {showAboutUs && <AboutUs onClose={() => setShowAboutUs(false)} />}
    </div>
  );
}
