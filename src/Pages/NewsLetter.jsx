import React from 'react';


const IMAGE_URLS = {
  hero: " https://c.ndtvimg.com/2019-05/t1tccppg_mg-hector_625x300_15_May_19.jpg",
  // https://images.autox.com/uploads/2024/06/MG-Cloud-EV.webp
  news1: "https://mgmotor.scene7.com/is/image/mgmotor/zs-img-dsc-0319?$mg-rgb-tablet-image-responsive$&fmt=png-alpha",
  news2: "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Cyberster/12221/1758802623039/front-left-side-47.jpg?tr=w-664",
  news3: "https://www.just-auto.com/wp-content/uploads/sites/30/2025/02/Xd2EQ-global-light-vehicle-market-1024x913.png",
  review1: "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Windsor-EV/11848/1755845275936/front-left-side-47.jpg?impolicy=resize&imwidth=480",
  review2: "https://www.carblogindia.com/wp-content/uploads/2020/01/MG-Sedan-2020.jpeg"
};

// Reusable component for the star rating
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    } else {
      stars.push(<span key={i} className="text-gray-400">★</span>);
    }
  }
  return <div className="flex text-lg">{stars}</div>;
};

 const SectionHeader = ({ title }) => (
  <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-6">
    {title}
  </h2>
);

 const Card = ({ image, title, description, rating }) => (
  <div className="flex flex-col bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm flex-grow">{description}</p>
      {rating && <StarRating rating={rating} />}
    </div>
  </div>
);

 const NewsLetter = ({ onClose }) => {
  const latestNews = [
    { id: 1, img: IMAGE_URLS.news1, title: "New Model Announcement: The Future Is Here", description: "The MG ZS EV is a compact, fully electric SUV known for its practicality, modern technology, and safety features. Key features include an electric powertrain with a range of up to 461 km on a full charge, fast charging capabilities, and a connected infotainment system with a 10.1-inch touchscreen." },


    { id: 2, img: IMAGE_URLS.news2, title: "Tech Breakthrough: The Engine of Tomorrow", description: "he MG Cyberster is an all-electric, two-door roadster featuring a futuristic design with scissor doors and an electric soft-top roof. Its interior includes a driver-focused cockpit with a three-screen digital display, a fighter-jet-inspired dashboard, and premium materials. Performance comes from a dual-motor, all-wheel-drive setup, delivering up to \(510\) hp and a \(0-100\) km/h time of \(3.2\) seconds.   " },


    { id: 3, img: IMAGE_URLS.news3, title: "Corporate News: Expanding Our Global Reach", description: "MG Motor's market expansion, spearheaded by its parent company SAIC Motor, is driven by a strategy of strategic joint ventures, a heavy focus on electric vehicles (EVs), and rapid dealer network growth in new markets like India and Europe. This allows the brand to adapt to local market dynamics and accelerate its footprint globally." },
  ];

  const expertReviews = [
    { id: 4, img: IMAGE_URLS.review1, title: "MG Hector - Reviewed by Car and Driver", rating: 4 },
    { id: 5, img: IMAGE_URLS.review2, title: "MG Sedan  - Reviewed by Top Gear", rating: 3.5 },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-gray-950 bg-opacity-90 flex justify-center items-start pt-10 px-4 overflow-y-auto">
      <div className="relative w-full max-w-6xl bg-gray-900 rounded-lg shadow-2xl my-10 animate-fade-in-up text-white">
        
         <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
        >
          &times;
        </button>

        {/* Hero Section */}
        <header className="relative w-full h-80 rounded-t-lg overflow-hidden">
          <img
            src={IMAGE_URLS.hero}
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4 backdrop-blur-sm">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Stay in the Fast Lane
            </h1>
            <p className="text-gray-300 max-w-2xl mb-8">
              Get the latest news, exclusive offers, and behind-the-scenes content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
              <input
                type="email"
                placeholder="your-email@example.com"
                className="flex-1 p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </header>

        <main className="p-6 md:p-10">
           <section className="mb-12">
            <SectionHeader title="Latest from the Track" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestNews.map(item => (
                <Card key={item.id} image={item.img} title={item.title} description={item.description} />
              ))}
            </div>
          </section>

          <hr className="border-gray-700 my-8" />

           <section>
            <SectionHeader title="Expert Reviews" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expertReviews.map(item => (
                <Card key={item.id} image={item.img} title={item.title} rating={item.rating} />
              ))}
            </div>
          </section>
        </main>
      </div>
    <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
          aria-label="Close"
        >
          &times;
        </button>
    </div>
  );
};

export default NewsLetter;
