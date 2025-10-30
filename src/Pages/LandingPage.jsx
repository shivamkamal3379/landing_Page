import React, { useState } from "react";
import LoginPopup from  '../Pages/LoginPopup';
import Gallery from '../Pages/Gallery';
import NewsLetter from '../Pages/NewsLetter'
import AboutUs from '../Pages/AboutUs'

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

   const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  // Gallery o
  const handleGalleryClick = () => {
    setShowGallery(true);
  };
  const handleCloseGallery = () => {
    setShowGallery(false);
  };
  
  // Newsletter 
  const handleNewsLetterClick = () => {
    setShowNewsLetter(true);
  };
  const handleCloseNewsLetter = () => {
    setShowNewsLetter(false);
  };

  // About us
  const handleAboutUsClick = () => {
    setShowAboutUs(true);
  };
  const handleCloseAboutUs = () => {
    setShowAboutUs(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
       <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-[#0b1320] bg-opacity-90 backdrop-blur-sm">
        <div className="text-xl font-bold flex items-center gap-2">
          <div className="bg-blue-600 w-3 h-3 rotate-45"></div>
          AutoCorp
        </div>
        <div className="space-x-6 text-sm">
          <button onClick={handleLoginClick} className="hover:text-blue-400">
            Login
          </button>
           <button onClick={handleGalleryClick} className="hover:text-blue-400">
            Gallery
          </button>
          <button onClick={handleNewsLetterClick} className="hover:text-blue-400">
            News Letter
          </button>
          <button onClick={handleAboutUsClick} className="hover:text-blue-400">
            About Us
          </button> 
        </div>
      </nav>

       <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden">
        <img
          src="https://mgmotor.scene7.com/is/image/mgmotor/windsor-bn-dsc-011?hei=1920&qlt=90&resMode=bisharp"
          alt="Car background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Experience the Future of Driving
          </h1>
          <p className="text-gray-300 mb-8">
            Explore our range of innovative and high-performance vehicles
            designed for the modern driver.
          </p>
          </div>
      </section>

       <section className="bg-[#0f172a] py-12 overflow-hidden">
        <div className="relative w-full">
          <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">
            {[...cars, ...cars].map((car, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl min-w-[250px] flex-shrink-0 hover:-translate-y-1 transition-transform duration-300"
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
              </div>
            ))}
          </div>
        </div>

      </section>
      
     
      {showLogin && <LoginPopup onClose={handleCloseLogin} />}
      {showGallery && <Gallery onClose={handleCloseGallery} />}
      {showNewsLetter && <NewsLetter   onClose={handleCloseNewsLetter} />}
      {showAboutUs && <AboutUs onClose={handleCloseAboutUs} />} 
    </div>
  );
}