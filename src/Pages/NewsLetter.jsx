import React from "react";

const IMAGE_URLS = {
  hero: "https://c.ndtvimg.com/2019-05/t1tccppg_mg-hector_625x300_15_May_19.jpg",
  news1: "https://mgmotor.scene7.com/is/image/mgmotor/zs-img-dsc-0319?$mg-rgb-tablet-image-responsive$&fmt=png-alpha",
  news2: "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Cyberster/12221/1758802623039/front-left-side-47.jpg?tr=w-664",
  news3: "https://www.just-auto.com/wp-content/uploads/sites/30/2025/02/Xd2EQ-global-light-vehicle-market-1024x913.png",
  review1: "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Windsor-EV/11848/1755845275936/front-left-side-47.jpg?impolicy=resize&imwidth=480",
  review2: "https://www.carblogindia.com/wp-content/uploads/2020/01/MG-Sedan-2020.jpeg",
};

// ⭐ Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex text-lg mt-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-400"}>
          ★
        </span>
      ))}
    </div>
  );
};

// 🧱 Section Header
const SectionHeader = ({ title }) => (
  <h2 className="text-2xl md:text-3xl font-semibold mt-10 mb-5 text-center md:text-left">
    {title}
  </h2>
);

// 📰 Card Component
const Card = ({ image, title, description, rating }) => (
  <div className="flex flex-col bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
    <img src={image} alt={title} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {description && <p className="text-gray-400 text-sm flex-grow">{description}</p>}
      {rating && <StarRating rating={rating} />}
    </div>
  </div>
);

// 💌 Newsletter Component
const NewsLetter = ({ onClose }) => {
  const latestNews = [
    {
      id: 1,
      img: IMAGE_URLS.news1,
      title: "New Model Announcement: The Future Is Here",
      description:
        "The MG ZS EV is a compact, fully electric SUV with up to 461 km range, fast charging, and a modern infotainment system.",
    },
    {
      id: 2,
      img: IMAGE_URLS.news2,
      title: "Tech Breakthrough: The Engine of Tomorrow",
      description:
        "The MG Cyberster is an all-electric two-door roadster featuring scissor doors, futuristic interior, and 0–100 km/h in 3.2s.",
    },
    {
      id: 3,
      img: IMAGE_URLS.news3,
      title: "Corporate News: Expanding Our Global Reach",
      description:
        "MG Motor expands globally through electric innovation and a strong dealer network in India and Europe.",
    },
  ];

  const expertReviews = [
    { id: 4, img: IMAGE_URLS.review1, title: "MG Hector - Reviewed by Car and Driver", rating: 4 },
    { id: 5, img: IMAGE_URLS.review2, title: "MG Sedan - Reviewed by Top Gear", rating: 3.5 },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-gray-950 bg-opacity-90 flex justify-center items-start pt-10 px-2 sm:px-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-gray-900 rounded-lg shadow-2xl my-10 animate-fade-in-up text-white">
        {/* ❌ Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-3xl"
          aria-label="Close"
        >
          &times;
        </button>

        {/* 🏎️ Hero Section */}
        <header className="relative w-full h-64 sm:h-80 md:h-96 rounded-t-lg overflow-hidden">
          <img
            src={IMAGE_URLS.hero}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4 backdrop-blur-sm">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Stay in the Fast Lane
            </h1>
            <p className="text-gray-300 max-w-2xl mb-6 text-sm sm:text-base">
              Get the latest news, exclusive offers, and behind-the-scenes stories from MG Motors.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="your-email@example.com"
                className="flex-1 p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm sm:text-base"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors text-sm sm:text-base">
                Subscribe
              </button>
            </div>
          </div>
        </header>

        {/* 📰 Main Content */}
        <main className="p-4 sm:p-6 md:p-10">
          {/* Latest News */}
          <section className="mb-12">
            <SectionHeader title="Latest from the Track" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestNews.map((item) => (
                <Card key={item.id} image={item.img} title={item.title} description={item.description} />
              ))}
            </div>
          </section>

          <hr className="border-gray-700 my-8" />

          {/* Reviews */}
          <section>
            <SectionHeader title="Expert Reviews" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertReviews.map((item) => (
                <Card key={item.id} image={item.img} title={item.title} rating={item.rating} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default NewsLetter;
