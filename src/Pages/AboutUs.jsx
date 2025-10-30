import React, { useEffect } from "react";
import {
  Leaf,
  Zap,
  Award,
  CheckCircle,
  Target,
  Users,
  TrendingUp,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

// === Motion Variants ===
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

// === Data ===
const CORE_VALUES = [
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Pushing the boundaries of what's possible in automotive technology.",
  },
  {
    icon: CheckCircle,
    title: "Safety",
    description:
      "Prioritizing the well-being of our drivers, passengers, and pedestrians.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description:
      "Delivering an exceptional ownership experience from start to finish.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Committed to a greener future with eco-friendly manufacturing and vehicles.",
  },
];

const JOURNEY_STEPS = [
  {
    year: 2015,
    title: "The Spark of an Idea",
    description: "Our founders conceived a new vision for mobility.",
  },
  {
    year: 2019,
    title: "The First Electric Revolution",
    description:
      "Launched our flagship fully electric model, changing the market.",
  },
  {
    year: 2021,
    title: "Autonomous Driving Milestone",
    description:
      "Achieved Level 3 autonomous driving capability in select models.",
  },
  {
    year: 2023,
    title: "Global Expansion",
    description:
      "Opened manufacturing and R&D facilities across three new continents.",
  },
];

// === Components ===
const TimelineStep = ({ year, title, description, isLast }) => (
  <motion.div variants={fadeInLeft} className="flex relative">
    <div className="flex flex-col items-center mr-6 md:mr-10">
      <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900 z-10 shadow-md" />
      {!isLast && <div className="h-full w-0.5 bg-gray-700 absolute top-4" />}
    </div>
    <div className="pb-10">
      <p className="text-blue-400 text-sm font-semibold">{year}</p>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 mt-1 max-w-md">{description}</p>
    </div>
  </motion.div>
);

const ValueCard = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.05, rotateX: 5 }}
    transition={{ duration: 0.4 }}
    className="text-center p-8 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-800/70 to-gray-900 hover:shadow-blue-500/20"
  >
    <div className="p-4 mb-4 rounded-full bg-blue-900/40 text-blue-400 inline-flex">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

const RecognitionItem = ({ icon: Icon, title, year }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.05, y: -5 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col items-center p-8 rounded-xl bg-gray-800/80 border border-gray-700"
  >
    <Icon className="w-10 h-10 text-yellow-400 mb-3" />
    <p className="text-white font-semibold">{title}</p>
    <p className="text-gray-400 text-sm mt-1">{year}</p>
  </motion.div>
);

// === Main Component ===
export default function AboutUs({ onClose }) {
  // Lock background scroll + close on ESC
  useEffect(() => {
    // Disable background scroll
    document.body.style.overflow = "hidden";

    // ESC key listener
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-gray-950 overflow-y-auto">
      <div className="bg-gray-950 w-full max-w-7xl mx-auto my-0 sm:my-8 relative sm:rounded-xl shadow-2xl">
        {/* Close Button */}
        <motion.button
          whileHover={{ rotate: 90, scale: 1.2 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 rounded-full bg-gray-800/80 hover:bg-red-600 transition"
        >
          <X className="w-6 h-6 text-white" />
        </motion.button>

        {/* HERO SECTION */}
        <section className="relative h-[85vh] overflow-hidden">
          <motion.img
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            src="https://www.shutterstock.com/image-illustration/futuristic-car-driving-tunnel-abstract-600nw-2321057487.jpg"
            alt="Futuristic car driving through tunnel"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black/90 flex flex-col justify-center items-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
            >
              Driving the Future of Mobility
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed"
            >
              Innovative. Sustainable. High-performance. We redefine the future
              of driving — where technology meets passion.
            </motion.p>
          </div>
        </section>

        {/* VISION SECTION */}
        <section className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center"
          >
            <motion.div variants={fadeInLeft} className="relative z-10">
              <h2 className="text-sm font-semibold uppercase text-blue-400 mb-3 tracking-wider">
                Our Vision
              </h2>
              <h3 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                A New Era of Automotive Excellence
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Born from innovation and driven by purpose — we envision a world
                where cutting-edge design, performance, and responsibility
                converge seamlessly. Our mission is to craft vehicles that
                excite, protect, and sustain.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="relative flex justify-center"
            >
              <motion.div
                whileHover={{ rotateY: 5, scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="relative w-[90%]"
              >
                <motion.img
                  src="https://w0.peakpx.com/wallpaper/144/274/HD-wallpaper-bmw-black-car-class-engine-turbo-thumbnail.jpg"
                  alt="Car headlight"
                  className="rounded-2xl shadow-2xl object-cover w-full h-[380px]"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* JOURNEY SECTION */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-white mb-10 text-center"
          >
            Our Journey
          </motion.h2>
          <div className="relative pl-8 md:pl-12">
            {JOURNEY_STEPS.map((step, index) => (
              <TimelineStep
                key={step.year}
                {...step}
                isLast={index === JOURNEY_STEPS.length - 1}
              />
            ))}
          </div>
        </motion.section>

        {/* VALUES SECTION */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="max-w-6xl mx-auto px-6 py-20"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-white mb-10 text-center"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_VALUES.map((value, i) => (
              <ValueCard key={i} {...value} />
            ))}
          </div>
        </motion.section>

        {/* RECOGNITION SECTION */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          className="bg-gradient-to-b from-gray-900 to-gray-950 py-20"
        >
          <motion.div variants={fadeInUp} className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Recognized Excellence
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <RecognitionItem
                icon={Award}
                title="Design Innovation Award"
                year="2022"
              />
              <RecognitionItem
                icon={Target}
                title="5-Star Safety Rating"
                year="2023"
              />
              <RecognitionItem
                icon={TrendingUp}
                title="Green Technology Award"
                year="2023"
              />
            </div>
          </motion.div>
        </motion.section>

        {/* CTA SECTION */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20 text-center bg-gray-950"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us on the Journey
          </h2>
          <p className="text-gray-400 mb-8 max-w-3xl mx-auto">
            We are more than just a car company; we are pioneers in a mission to
            build a better future. Experience the next generation of driving
            with us.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition"
          >
            Explore Our Vehicles
          </motion.button>
        </motion.section>
      </div>
    </div>
  );
}
