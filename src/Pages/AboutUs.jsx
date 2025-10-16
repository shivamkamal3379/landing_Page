import { Leaf, Zap, Award, CheckCircle, Target, Users, TrendingUp, X } from 'lucide-react';

const CORE_VALUES = [
  {
    icon: Zap,
    title: 'Innovation',
    description: "Pushing the boundaries of what's possible in automotive technology.",
  },
  {
    icon: CheckCircle,
    title: 'Safety',
    description: 'Prioritizing the well-being of our drivers, passengers, and pedestrians.',
  },
  {
    icon: Users,
    title: 'Customer Satisfaction',
    description: 'Delivering an exceptional ownership experience from start to finish.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Committed to a greener future with eco-friendly manufacturing and vehicles.',
  },
];

const JOURNEY_STEPS = [
  { year: 2015, title: 'The Spark of an Idea', description: 'Our founders conceived a new vision for mobility.' },
  { year: 2019, title: 'The First Electric Revolution', description: 'Launched our flagship fully electric model, changing the market.' },
  { year: 2021, title: 'Autonomous Driving Milestone', description: 'Achieved Level 3 autonomous driving capability in select models.' },
  { year: 2023, title: 'Global Expansion', description: 'Opened manufacturing and R&D facilities across three new continents.' },
];

const TimelineStep = ({ year, title, description, isLast }) => (
  <div className="flex relative">
    <div className="flex flex-col items-center mr-6 md:mr-10">
      <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900 z-10 shadow-md flex-shrink-0" />
      {!isLast && <div className="h-full w-0.5 bg-gray-700 absolute top-4" />}
    </div>
    <div className="pb-8 pt-0.5">
      <p className="text-gray-400 text-sm font-semibold">{year}</p>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 mt-1 max-w-md">{description}</p>
    </div>
  </div>
);

const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="text-center p-6 border border-gray-700 rounded-xl bg-gray-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 h-full flex flex-col items-center">
    <div className="p-3 mb-4 rounded-full bg-blue-900/50 text-blue-400">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const RecognitionItem = ({ icon: Icon, title, year }) => (
  <div className="flex flex-col items-center p-6 rounded-lg bg-gray-700 hover:bg-gray-700/80 transition duration-200">
    <Icon className="w-10 h-10 text-yellow-400 mb-2" />
    <p className="text-white font-semibold">{title}</p>
    <p className="text-gray-300 text-sm mt-1">{year}</p>
  </div>
);

export default function AboutUs({ onClose }) {
  
  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex justify-center overflow-y-auto">
        
      <div className="bg-gray-900 font-sans text-white w-full max-w-7xl mx-auto my-0 sm:my-8 relative min-h-screen sm:min-h-0 sm:rounded-xl shadow-2xl">

        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 p-3 rounded-full bg-gray-800/80 text-white hover:bg-red-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Close About Us"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative h-[450px] overflow-hidden">
          <img
            src="https://www.shutterstock.com/image-illustration/futuristic-car-driving-tunnel-abstract-600nw-2321057487.jpg"
            alt="Modern sports car driving on a scenic highway at dusk."
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg mb-4">
              Driving the Future of Mobility
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl drop-shadow-md">
              We are committed to creating innovative, **sustainable**, and high-performance vehicles—transforming the driving experience.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-16">

          <section className="mb-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-lg font-semibold uppercase text-blue-400 tracking-wider mb-2">Our Vision</h2>
              <h3 className="text-4xl font-extrabold text-white leading-tight mb-6">
                A New Era of Automotive Excellence
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our brand was born from a vision to revolutionize the automotive industry. We believe in a future where high-performance meets responsibility, where cutting-edge technology with timeless design means our drivers are not only exhilarating to drive but also gentle on our planet.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://w0.peakpx.com/wallpaper/260/250/HD-wallpaper-car-headlight-light-black-dark.jpg"
                alt="Cvehicle headlight"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8">Our Journey</h2>
            <div className="relative pl-6 md:pl-10">
              {JOURNEY_STEPS.map((step, index) => (
                <TimelineStep
                  key={step.year}
                  {...step}
                  isLast={index === JOURNEY_STEPS.length - 1}
                />
              ))}
            </div>
          </section>

          
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white mb-8">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((value, index) => (
                <ValueCard key={index} {...value} />
              ))}
            </div>
          </section>
        </div> 

        <section className="bg-gray-800 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-10">
              Recognized Excellence
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <RecognitionItem icon={Award} title="Design Innovation Award" year="2022" />
              <RecognitionItem icon={Target} title="5-Star Safety Rating" year="2023" />
              <RecognitionItem icon={TrendingUp} title="Green Technology Award" year="2023" />
            </div>
          </div>
        </section>

        <section className="py-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us on the Journey
          </h2>
          <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
            We are more than just a car company; we are pioneers in a mission to build a better future. Our commitment to innovation, sustainability, and performance drives us forward. Experience the next generation of driving with us.
          </p>
          <button onClick={onClose} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-200">
            Explore Our Vehicles
          </button>
        </section>
        
      </div>
    </div>
  );
}