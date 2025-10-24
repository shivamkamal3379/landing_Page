import React, { useState, useMemo, useCallback } from 'react';
import { Search, ChevronDown, Facebook, Twitter, Instagram, Car, X } from 'lucide-react';

const ALL_VEHICLES = [
  { id: 1, name: 'MG 5', type: 'SEDAN', model: ' MG 5', year: 2025, imageUrl: 'https://www.cartoq.com/wp-content/uploads/2024/03/mg-5-sedan-featured.jpg' },
  { id: 2, name: 'MG Cyberster', type: 'SUV', model: 'Sports car / roadster, electric (BEV)', year: 2020, imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/193375/cyberster-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80' },
  { id: 3, name: 'MG 4 ', type: 'PERFORMANCE', model: 'Compact hatchback (BEV)', year: 2025, imageUrl: 'https://img.autocarindia.com/News/2025-MG-4-front.jpg?w=700&c=0' },
  { id: 4, name: 'MG ZS EV', type: 'ELECTRIC', model: 'Subcompact SUV / crossover (ICE / electric variant)', year: 2024, imageUrl: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Flarge%2Fmg%2Fzs-ev%2Fmg-zs-ev.jpg%3Fv%3D25&w=1600&q=75' },
  { id: 5, name: 'MG Gloster', type: 'SUV', model: 'Full-size / premium SUV', year: 2024, imageUrl: 'https://etimg.etb2bimg.com/photo/109350742.cms' },
  { id: 6, name: 'MG MGS5 EV', type: 'ELECTRIC', model: 'Subcompact SUV, electric (BEV)', year: 2025, imageUrl: 'https://mg.com.sg/images/model/mgs5/Exterior/Flare-Red.jpg' },
  { id: 7, name: 'MG Astor', type: 'SUV', model: 'Compact / mid-SUV', year: 2021, imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/MG/Astor/11413/1719383205969/front-left-side-47.jpg' },
  { id: 8, name: 'MG Hector ', type: 'SEDAN', model: 'Mid-size SUV / crossover', year: 2023, imageUrl: 'https://images.91wheels.com/assets/b_images/main/models/profile/profile1746506676.jpg?w=840&q=50' },
];

const getUniqueOptions = (key) => ['All', ...new Set(ALL_VEHICLES.map(v => v[key]))].sort();

const filterOptions = {
  model: getUniqueOptions('model'),
  year: getUniqueOptions('year').map(y => y.toString()),
  type: getUniqueOptions('type'),
};

const VehicleCard = ({ vehicle }) => {
   const { name, type, imageUrl, sourceUrl } = vehicle;

  const handleClick = useCallback(() => {
    if (sourceUrl) {
      window.open(sourceUrl, '_blank');
    }
  }, [sourceUrl]);

  const labelColor = useMemo(() => {
    switch (type) {
      case 'ELECTRIC': return 'bg-blue-600';
      case 'PERFORMANCE': return 'bg-red-600';
      case 'SEDAN': return 'bg-lime-600';
      case 'SUV': return 'bg-cyan-600';
      case 'TRUCK': return 'bg-orange-600';
      default: return 'bg-gray-700';
    }
  }, [type]);

  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-xl shadow-2xl transition duration-300 transform hover:scale-[1.02] hover:shadow-blue-500/30"
      onClick={handleClick}
    >
      <span className={`absolute top-4 right-4 z-10 px-3 py-1 text-xs font-semibold uppercase text-white rounded-full ${labelColor} tracking-wider shadow-lg`}>
        {type}
      </span>

      <div className="w-full h-auto">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/171717/ffffff?text=Image+Unavailable"; }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <h3 className="text-xl font-bold text-white tracking-wide">
          {name}
        </h3>
      </div>
    </div>
  );
};

const CustomSelect = ({ label, options, value, onChange }) => (
  <div className="relative">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="appearance-none w-full bg-gray-800 text-white py-2 pl-4 pr-10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200 cursor-pointer text-sm md:text-base border border-gray-700"
    >
      <option value="All">{label}</option>
      {options.map(opt => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
  </div>
);

 export default function Gallery({ onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filteredVehicles = useMemo(() => {
    return ALL_VEHICLES.filter(vehicle => {
      const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          vehicle.model.toLowerCase().includes(searchQuery.toLowerCase());

       const matchesModel = selectedModel === 'All' || vehicle.model === selectedModel;

       const matchesYear = selectedYear === 'All' || vehicle.year.toString() === selectedYear.toString();

     
      const matchesType = selectedType === 'All' || vehicle.type === selectedType;

      return matchesSearch && matchesModel && matchesYear && matchesType;
    });
  }, [searchQuery, selectedModel, selectedYear, selectedType]);


  return (
     <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm overflow-y-auto">
      
       <div className="min-h-screen bg-gray-900 font-sans text-gray-100 flex flex-col">
        
        <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
             <div className="flex items-center space-x-2">
              <Car className="w-6 h-6 text-blue-500" />
              <span className="text-xl font-bold tracking-wider uppercase text-white">
                AUTOCORP GALLERY
              </span>
            </div>
            
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              {['Models', 'Brand', 'Innovation'].map(item => (
                <a key={item} href="#" className="text-gray-300 hover:text-blue-500 transition duration-150">
                  {item}
                </a>
              ))}
            </nav>

             <div className='flex items-center space-x-4'>
              <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                Build & Price
              </button>

               <button 
                onClick={onClose} 
                className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition duration-200 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                aria-label="Close Gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* ... (rest of the main content and filtering logic) ... */}
          <h1 className="text-4xl font-extrabold mb-8 md:mb-12 tracking-tight">
            Our Vehicle <span className="text-blue-500">Lineup</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="relative lg:col-span-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 text-white py-2 pl-10 pr-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200 border border-gray-700 placeholder-gray-500 text-sm md:text-base"
              />
            </div>

            <CustomSelect
              label="Model"
              options={filterOptions.model}
              value={selectedModel}
              onChange={setSelectedModel}
            />

            <CustomSelect
              label="Year"
              options={filterOptions.year}
              value={selectedYear}
              onChange={setSelectedYear}
            />

            <CustomSelect
              label="Type"
              options={filterOptions.type}
              value={selectedType}
              onChange={setSelectedType}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))
            ) : (
              <div className="lg:col-span-3 text-center py-16">
                <p className="text-2xl text-gray-500 font-medium">
                  No vehicles match your current filters.
                </p>
              </div>
            )}
          </div>
        </main>

        <footer className="bg-gray-950 border-t border-gray-800 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Footer Links and Social */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
              {/* Links */}
              <div className="flex space-x-6 text-sm font-medium text-gray-400">
                <a href="#" className="hover:text-blue-500 transition duration-150">Privacy Policy</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="hover:text-blue-500 transition duration-150">Terms of Service</a>
                <span className="text-gray-600">|</span>
                <a href="#" className="hover:text-blue-500 transition duration-150">Contact Us</a>
              </div>

              <div className="flex space-x-5">
                <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition duration-150">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-500 transition duration-150">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-blue-500 transition duration-150">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="text-center text-xs text-gray-600 pt-4 border-t border-gray-800">
              &copy; 2025 Autocorp. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}