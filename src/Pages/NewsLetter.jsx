import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const IMAGE_URLS = {
  hero: "https://c.ndtvimg.com/2019-05/t1tccppg_mg-hector_625x300_15_May_19.jpg",
  news1:
    "https://mgmotor.scene7.com/is/image/mgmotor/zs-img-dsc-0319?$mg-rgb-tablet-image-responsive$&fmt=png-alpha",
  news2:
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Cyberster/12221/1758802623039/front-left-side-47.jpg?tr=w-664",
  news3:
    "https://www.just-auto.com/wp-content/uploads/sites/30/2025/02/Xd2EQ-global-light-vehicle-market-1024x913.png",
  review1:
    "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Windsor-EV/11848/1755845275936/front-left-side-47.jpg?impolicy=resize&imwidth=480",
  review2:
    "https://www.carblogindia.com/wp-content/uploads/2020/01/MG-Sedan-2020.jpeg",
};

// === Motion Variants ===
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// === Star Rating Component ===
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-400"}>
        ★
      </span>
    );
  }
  return <div className="flex text-lg">{stars}</div>;
};

// === Section Header ===
const SectionHeader = ({ title }) => (
  <motion.h2
    variants={fadeInUp}
    className="text-2xl md:text-3xl font-semibold mt-12 mb-6 text-white"
  >
    {title}
  </motion.h2>
);

// === Card Component ===
const Card = ({ image, title, description, rating }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold mb-1 text-white">{title}</h3>
      {description && <p className="text-gray-400 text-sm flex-grow">{description}</p>}
      {rating && <StarRating rating={rating} />}
    </div>
  </motion.div>
);

// === Newsletter Component ===
const NewsLetter = ({ onClose }) => {
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const latestNews = [
    {
      id: 1,
      img: IMAGE_URLS.news1,
      title: "New Model Announcement: The Future Is Here",
      description:
        "The MG ZS EV is a compact, fully electric SUV known for its practicality, modern technology, and safety features.",
    },
    {
      id: 2,
      img: IMAGE_URLS.news2,
      title: "Tech Breakthrough: The Engine of Tomorrow",
      description:
        "The MG Cyberster is an all-electric, two-door roadster featuring futuristic design and powerful dual-motor performance.",
    },
    {
      id: 3,
      img: IMAGE_URLS.news3,
      title: "Corporate News: Expanding Our Global Reach",
      description:
        "MG Motor’s expansion, backed by SAIC Motor, accelerates global EV adoption through strategic joint ventures.",
    },
  ];

  const expertReviews = [
    { id: 4, img: IMAGE_URLS.review1, title: "MG Hector - Reviewed by Car and Driver", rating: 4 },
    { id: 5, img: IMAGE_URLS.review2, title: "MG Sedan - Reviewed by Top Gear", rating: 3.5 },
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-gray-950 bg-opacity-90 flex justify-center items-start pt-10 px-4 overflow-y-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative w-full max-w-6xl bg-gray-900 rounded-lg shadow-2xl my-10 text-white overflow-hidden"
      >
        {/* HERO SECTION */}
        <header className="relative w-full h-96 overflow-hidden rounded-t-lg">
          <motion.img
            src={IMAGE_URLS.hero}
            alt="Hero background"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />

          {/* Blurred Text Area */}
          <motion.div
            variants={fadeIn}
            className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4 backdrop-blur-sm bg-black/40"
          >
            {/* Close Icon Inside Hero Section */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.2 }}
              transition={{ duration: 0.3 }}
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-800/70 hover:bg-red-600"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Stay in the Fast Lane
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-300 max-w-2xl mb-8"
            >
              Get the latest news, exclusive offers, and behind-the-scenes content delivered straight to your inbox.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 w-full max-w-lg"
            >
              <input
                type="email"
                placeholder="your-email@example.com"
                className="flex-1 p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        </header>

        {/* MAIN CONTENT */}
        <motion.main
          variants={fadeInUp}
          className="p-6 md:p-10"
        >
          {/* LATEST NEWS */}
          <section className="mb-12">
            <SectionHeader title="Latest from the Track" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestNews.map((item) => (
                <Card key={item.id} image={item.img} title={item.title} description={item.description} />
              ))}
            </div>
          </section>

          <hr className="border-gray-700 my-8" />

          {/* REVIEWS */}
          <section>
            <SectionHeader title="Expert Reviews" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertReviews.map((item) => (
                <Card key={item.id} image={item.img} title={item.title} rating={item.rating} />
              ))}
            </div>
          </section>
        </motion.main>
      </motion.div>
    </div>
  );
};

export default NewsLetter;
