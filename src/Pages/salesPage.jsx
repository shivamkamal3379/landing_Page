import React, { useState } from 'react';

 
const TruckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 18H3c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h4l3-3h6l3 3h4c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>
    <path d="M19 18H9V6h6"/><path d="M11 6V3"/>
  </svg>
);

const UsersIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const FileTextIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 12h4"/><path d="M10 16h4"/><path d="M10 20h4"/>
  </svg>
);

const DollarSignIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>
);

const SettingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 0-2 0l-.15-.08a2 2 0 0 0-2.73 1.04l-.19.33a2 2 0 0 0 .58 2.22l.11.12a2 2 0 0 1-.39 1.9L3 14v.24a2 2 0 0 0 .97 1.77l.42.25a2 2 0 0 1 1.73 1l.15.34a2 2 0 0 0 2.2 1.43h.2a2 2 0 0 0 2-1.07l.34-.65a2 2 0 0 1 1.73-1l.62-.27a2 2 0 0 0 1.25-1.55l.04-.42a2 2 0 0 0-.8-1.8l-.13-.1a2 2 0 0 1-.38-1.92l.14-.34a2 2 0 0 0-.2-2.22l-.3-.3a2 2 0 0 0-2.17-.58l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
);

const BellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
);


const MetricCard = ({ icon, title, isDarkMode }) => {
    // Dynamic styling based on dark mode state
    const cardClasses = isDarkMode 
        ? "bg-gray-800 hover:bg-gray-700/80 shadow-lg" 
        : "bg-white hover:bg-gray-100/90 border border-gray-200 shadow-md";
    
    const titleClasses = isDarkMode ? "text-white" : "text-gray-900";

    return (
        <div className={`flex items-center space-x-4 p-6 rounded-xl transition duration-300 ${cardClasses}`}>
            <div className="p-3 rounded-full bg-blue-600 text-white flex-shrink-0">
                {icon}
            </div>
            <div>
                <p className={`text-base font-bold ${titleClasses}`}>{title}</p>
            </div>
        </div>
    );
};


const NavItem = ({ name, isDarkMode }) => {
    const textClasses = isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900";
    const bgClasses = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200";
    return (
        <a href="#" className={`px-3 py-2 text-sm font-medium rounded-lg transition duration-150 ${textClasses} ${bgClasses}`}>
            {name}
        </a>
    );
};

const UserAvatar = () => (
    <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-xs font-bold text-white cursor-pointer hover:ring-2 ring-pink-400">
        S
    </div>
);

// Updated: Now handles Dark Mode state and the new branding
const Header = ({ isDarkMode, toggleDarkMode }) => {
    const headerClasses = isDarkMode 
        ? "bg-gray-900 border-b border-blue-600/50 shadow-xl"
        : "bg-white border-b border-gray-300 shadow-md";
    
    const titleColor = isDarkMode ? "text-blue-400" : "text-blue-600";
    const iconColor = isDarkMode ? "text-gray-300" : "text-gray-700";
    const iconHoverBg = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200";

    return (
        <header className={`flex items-center justify-between p-4 fixed w-full z-10 top-0 transition-colors duration-500 ${headerClasses}`}>
            {/* Left Section: Logo/Title - Updated to AutoCrop Sales */}
            <div className="flex items-center space-x-6">
                <h1 className={`text-xl font-extrabold tracking-wider ${titleColor}`}>
                    AutoCrop Sales
                </h1>
            </div>

            {/* Center Section: Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
                <NavItem name="Dashboard" isDarkMode={isDarkMode} />
                <NavItem name="Administrator" isDarkMode={isDarkMode} />
                <NavItem name="Payment Mgmt" isDarkMode={isDarkMode} />
                <NavItem name="Setting" isDarkMode={isDarkMode} />
            </nav>

            {/* Right Section: Utility Icons (Toggle, Bell, Setting, Avatar) */}
            <div className={`flex items-center space-x-4 ${iconColor}`}>
                {/* Dark Mode Toggle Button */}
                <button 
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full transition duration-150 ${iconHoverBg}`}
                    aria-label="Toggle dark/light mode"
                >
                    {/* Dynamic Sun/Moon icon based on state */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                        className={isDarkMode ? "text-yellow-300" : "text-blue-600"}>
                        {isDarkMode ? (
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/> // Moon icon
                        ) : (
                            // Sun icon elements
                            <>
                                <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/> 
                            </>
                        )}
                    </svg>
                </button>
                
                {/* Other Icons remain the same */}
                <button className={`p-2 rounded-full transition duration-150 ${iconHoverBg}`} aria-label="Notifications">
                    <BellIcon />
                </button>
                <button className={`p-2 rounded-full transition duration-150 ${iconHoverBg}`} aria-label="Settings">
                    <SettingIcon />
                </button>
                <UserAvatar />
            </div>
        </header>
    );
};

// --- Main Sales Page Component ---

export const SalesPage = () => {
    // State for dark mode toggle, defaulting to dark (true) as in the image
    const [isDarkMode, setIsDarkMode] = useState(true);
    
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Conditional styling for the whole application container
    const appClassName = isDarkMode 
        ? "min-h-screen bg-gray-900 font-sans text-white flex flex-col transition-colors duration-500"
        : "min-h-screen bg-gray-100 font-sans text-gray-900 flex flex-col transition-colors duration-500";
        
    // Conditional text colors for the Dashboard section
    const primaryText = isDarkMode ? "text-gray-100" : "text-gray-900";
    const secondaryText = isDarkMode ? "text-gray-400" : "text-gray-500";
    
    // Updated metrics array without values
    const metrics = [
        { icon: <TruckIcon className="w-6 h-6" />, title: "Total Vehicles" },
        { icon: <UsersIcon className="w-6 h-6" />, title: "Total Customers" },
        { icon: <FileTextIcon className="w-6 h-6" />, title: "Invoices" },
        { icon: <DollarSignIcon className="w-6 h-6" />, title: "Revenue" },
    ];

    // Placeholder content area dynamic styling
    const placeholderClasses = isDarkMode 
        ? "bg-gray-800 border border-gray-700/50" 
        : "bg-white border border-gray-300";

    return (
        <div className={appClassName}>
            
            {/* 1. Header/Navigation Bar */}
            <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

            {/* 2. Main Content Area */}
            <main className="flex-grow p-4 sm:p-8 pt-24 max-w-7xl mx-auto w-full"> 
                {/* Dashboard Title Section */}
                <section className="mb-8">
                    <h2 className={`text-4xl font-bold mb-1 ${primaryText}`}>Dashboard</h2>
                    <p className={secondaryText}>Welcome to your AutoCrop Sales dashboard.</p>
                </section>

                {/* Key Metrics Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric, index) => (
                        <MetricCard 
                            key={index} 
                            icon={metric.icon} 
                            title={metric.title} 
                            isDarkMode={isDarkMode}
                            // Note: Value is no longer passed or used in MetricCard
                        />
                    ))}
                </section>

                {/* Placeholder for future charts/tables */}
                <section className="mt-8">
                    <div className={`p-8 rounded-xl min-h-[500px] flex items-center justify-center ${placeholderClasses}`}>
                        <p className={secondaryText}>
                            Content goes here (Charts, Tables, Activity Feed, etc.)
                        </p>
                    </div>
                </section>

            </main>

            {/* 3. Footer */}
            <footer className={`w-full py-4 text-center text-xs mt-auto ${isDarkMode ? "bg-gray-900 text-gray-500 border-t border-gray-800" : "bg-gray-100 text-gray-600 border-t border-gray-300"}`}>
                AutoCrop Sales Copyright 2025
            </footer>
        </div>
    );
};

export default SalesPage;
