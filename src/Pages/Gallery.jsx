import React, { useState, useMemo, useCallback } from 'react';
import { Search, ChevronDown, Facebook, Twitter, Instagram, Car, X } from 'lucide-react';

const ALL_VEHICLES = [
  { id: 1, name: 'MG 5', type: 'SEDAN', model: 'MG 5', year: 2025, imageUrl: 'https://www.cartoq.com/wp-content/uploads/2024/03/mg-5-sedan-featured.jpg' },
  { id: 2, name: 'MG Cyberster', type: 'SUV', model: 'Sports car / roadster, electric (BEV)', year: 2020, imageUrl: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/193375/cyberster-exterior-right-front-three-quarter-9.jpeg?isig=0&q=80' },
  { id: 3, name: 'MG 4', type: 'PERFORMANCE', model: 'Compact hatchback (BEV)', year: 2025, imageUrl: 'https://img.autocarindia.com/News/2025-MG-4-front.jpg?w=700&c=0' },
  { id: 4, name: 'MG ZS EV', type: 'ELECTRIC', model: 'Subcompact SUV / crossover', year: 2024, imageUrl: 'https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Flarge%2Fmg%2Fzs-ev%2Fmg-zs-ev.jpg%3Fv%3D25&w=1600&q=75' },
  { id: 5, name: 'MG Gloster', type: 'SUV', model: 'Full-size / premium SUV', year: 2024, imageUrl: 'https://etimg.etb2bimg.com/photo/109350742.cms' },
  { id: 6, name: 'MG MGS5 EV', type: 'ELECTRIC', model: 'Subcompact SUV, electric (BEV)', year: 2025, imageUrl: 'https://mg.com.sg/images/model/mgs5/Exterior/Flare-Red.jpg' },
  { id: 7, name: 'MG Astor', type: 'SUV', model: 'Compact / mid-SUV', year: 2021, imageUrl: 'https://stimg.cardekho.com/images/carexteriorimages/930x620/MG/Astor/11413/1719383205969/front-left-side-47.jpg' },
  { id: 8, name: 'MG Hector', type: 'SEDAN', model: 'Mid-size SUV / crossover', year: 2023, imageUrl: 'https://images.91wheels.com/assets/b_images/main/models/profile/profile1746506676.jpg?w=840&q=50' },
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
    if (sourceUrl) window.open(sourceUrl, '_blank');
  }, [sourceUrl]);

  const labelColor = useMemo(() => {
    switch (type) {
      case 'ELECTRIC': return 'bg-blue-600';
      case 'PERFORMANCE': return 'bg-red-600';
      case 'SEDAN': return 'bg-lime-600';
      case 'SUV': return 'bg-cyan-600';
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

      <img
        src={imageUrl}
        alt={name}
        className="w-full h-56 sm:h-64 object-cover transition-opacity duration-500 group-hover:opacity-80"
        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/171717/ffffff?text=Image+Unavailable"; }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">{name}</h3>
      </div>
    </div>
  );
};

const CustomSelect = ({ label, options, value, onChange }) => (
  <div className="relative w-full">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="appearance-none w-full bg-gray-800 text-white py-2 pl-4 pr-10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-200 border border-gray-700 text-sm"
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
    return ALL_VEHICLES.filter(v => {
      const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) || v.model.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesModel = selectedModel === 'All' || v.model === selectedModel;
      const matchesYear = selectedYear === 'All' || v.year.toString() === selectedYear.toString();
      const matchesType = selectedType === 'All' || v.type === selectedType;
      return matchesSearch && matchesModel && matchesYear && matchesType;
    });
  }, [searchQuery, selectedModel, selectedYear, selectedType]);

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen bg-gray-900 font-sans text-gray-100 flex flex-col">
        
        {/* Header */}
        <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-2">
              <Car className="w-5 sm:w-6 h-5 sm:h-6 text-blue-500" />
              <span className="text-lg sm:text-xl font-bold uppercase tracking-wide">AUTOCORP GALLERY</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              {['Models', 'Brand', 'Innovation'].map(item => (
                <a key={item} href="#" className="text-gray-300 hover:text-blue-500 transition">{item}</a>
              ))}
            </nav>

            <div className="flex items-center space-x-3 sm:space-x-4">
              <button className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition">Build & Price</button>
              <button onClick={onClose} className="p-2 rounded-full bg-gray-800 hover:bg-red-600 transition text-white focus:ring-2 focus:ring-red-500">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 text-center sm:text-left">
            Our Vehicle <span className="text-blue-500">Lineup</span>
          </h1>

          {/* Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 text-white py-2 pl-10 pr-4 rounded-lg focus:ring-2 focus:ring-blue-500 border border-gray-700 text-sm"
              />
            </div>
            <CustomSelect label="Model" options={filterOptions.model} value={selectedModel} onChange={setSelectedModel} />
            <CustomSelect label="Year" options={filterOptions.year} value={selectedYear} onChange={setSelectedYear} />
            <CustomSelect label="Type" options={filterOptions.type} value={selectedType} onChange={setSelectedType} />
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.length > 0 ? (
              filteredVehicles.map(vehicle => <VehicleCard key={vehicle.id} vehicle={vehicle} />)
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-lg sm:text-2xl text-gray-500 font-medium">No vehicles match your filters.</p>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-950 border-t border-gray-800 mt-12 sm:mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center md:justify-start space-x-4 text-gray-400 text-sm">
                <a href="#" className="hover:text-blue-500">Privacy Policy</a>
                <a href="#" className="hover:text-blue-500">Terms</a>
                <a href="#" className="hover:text-blue-500">Contact</a>
              </div>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram].map((Icon, i) => (
                  <a key={i} href="#" className="text-gray-400 hover:text-blue-500">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <p className="text-center text-xs text-gray-600 pt-4 border-t border-gray-800 mt-6">
              © 2025 Autocorp. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
