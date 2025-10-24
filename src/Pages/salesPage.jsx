import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const formatIndianCurrency = (num) => {
    if (num >= 10000000) { 
        return `₹${(num / 10000000).toLocaleString('en-IN', { maximumFractionDigits: 2 })} Cr`;
    }
    if (num >= 100000) { 
        return `₹${(num / 100000).toLocaleString('en-IN', { maximumFractionDigits: 2 })} L`;
    }
    return `₹${num.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
};

const monthlySalesData = [
    { month: 'Jan', Revenue: 10, pv: 1000000 },
    { month: 'Feb', Revenue: 15, pv: 1500000 },
    { month: 'Mar', Revenue: 12, pv: 1200000 },
    { month: 'Apr', Revenue: 18, pv: 1800000 },
    { month: 'May', Revenue: 16, pv: 1600000 },
    { month: 'Jun', Revenue: 21, pv: 2100000 },
    { month: 'Jul', Revenue: 23, pv: 2300000 },
    { month: 'Aug', Revenue: 27, pv: 2700000 },
    { month: 'Sep', Revenue: 25, pv: 2500000 },
    { month: 'Oct', Revenue: 30, pv: 3000000 },
    { month: 'Nov', Revenue: 32, pv: 3200000 },
    { month: 'Dec', Revenue: 38, pv: 3800000 },
];

const performanceSummaryData = [
    { rep: 'Ramesh K.', deals: 45, revenue: 1550000, target: 1800000, status: '90%' },
    { rep: 'Priya S.', deals: 32, revenue: 1220000, target: 1200000, status: '102%' },
    { rep: 'Amit M.', deals: 50, revenue: 950000, target: 1000000, status: '95%' },
    { rep: 'Deepa V.', deals: 28, revenue: 780000, target: 900000, status: '87%' },
];

const NAV_OPTIONS = {
    Dashboard: ['Sales Metrics', 'Performance Summary', 'Activity Feed'],
    'Payment Management': [
        'Invoices & Bills',
        'Transaction History',
        'Payment Gateways',
        'Subscription Management',
        'Refunds & Credits',
    ],
    Settings: ['User & Security', 'System Configuration', 'Data Import/Export', 'Integrations'],
};

const Icon = ({ children }) => <span className="mr-2 text-xl">{children}</span>;

const sidebarVariants = {
    hidden: { x: '-100%' },
    visible: { 
        x: 0, 
        transition: { type: "spring", stiffness: 100, damping: 20 } 
    },
};

const KPICards = ({ isDarkMode }) => {
    const revenueValue = 5423400;
    const cardBg = isDarkMode ? 'bg-gray-700/80 shadow-lg' : 'bg-white shadow-md';
    const textBase = isDarkMode ? 'text-gray-100' : 'text-gray-900';

    const kpiData = [
        { title: "Total Revenue", value: formatIndianCurrency(revenueValue), change: "+12%", changeColor: 'text-emerald-400', themeColor: 'border-indigo-500', bg: isDarkMode ? 'bg-gray-800' : 'bg-indigo-50' },
        { title: "New Leads", value: "1,230", change: "+5%", changeColor: 'text-emerald-400', themeColor: 'border-green-500', bg: isDarkMode ? 'bg-gray-800' : 'bg-green-50' },
        { title: "Deals Closed", value: "312", change: "-2%", changeColor: 'text-red-400', themeColor: 'border-red-500', bg: isDarkMode ? 'bg-gray-800' : 'bg-red-50' },
        { title: "Conversion Rate", value: "25.3%", change: "+15%", changeColor: 'text-emerald-400', themeColor: 'border-purple-500', bg: isDarkMode ? 'bg-gray-800' : 'bg-purple-50' },
    ];
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((kpi, index) => (
                <motion.div
                    key={kpi.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, zIndex: 5, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)' }}
                    className={`${kpi.bg} p-4 sm:p-6 rounded-xl border-l-4 ${kpi.themeColor} ${cardBg} transition-all duration-300`}
                >
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} font-medium`}>{kpi.title}</p>
                    <p className={`text-2xl sm:text-3xl font-bold ${textBase} mt-1`}>{kpi.value}</p>
                    <p className={`text-xs ${kpi.changeColor} mt-2`}>{kpi.change} from last month</p>
                </motion.div>
            ))}
        </div>
    );
};

const SalesTrendChart = ({ isDarkMode }) => {
    const chartBg = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
    const chartText = isDarkMode ? '#e5e7eb' : '#374151';
    const gridStroke = isDarkMode ? '#4b5563' : '#e0e0e0';

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className={`mt-8 p-4 sm:p-6 rounded-xl border shadow-md ${chartBg}`}
        >
            <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Sales Performance Trend (Revenue in Lakhs)</h3>
            
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlySalesData} margin={{ top: 5, right: 10, left: -15, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} vertical={false} />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} stroke={chartText} />
                    <YAxis 
                        tickFormatter={(value) => `${value}L`}
                        axisLine={false} 
                        tickLine={false}
                        stroke={chartText}
                        domain={[0, 40]}
                    />
                    <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: '1px solid #ccc', backgroundColor: isDarkMode ? '#1f2937' : '#fff', color: isDarkMode ? '#f9fafb' : '#1f2937', fontSize: '12px' }}
                        formatter={(value) => [formatIndianCurrency(value * 100000), 'Revenue']} 
                    />
                    <Line type="monotone" dataKey="Revenue" stroke="#6366f1" strokeWidth={3} animationDuration={1500} dot={false} activeDot={{ r: 8, stroke: '#6366f1', strokeWidth: 4 }} />
                </LineChart>
            </ResponsiveContainer>
        </motion.div>
    );
};

const PerformanceTable = ({ isDarkMode }) => {
    const tableBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
    const headerBg = isDarkMode ? 'bg-gray-700' : 'bg-indigo-50';
    const headerText = isDarkMode ? 'text-indigo-400' : 'text-indigo-700';
    const bodyText = isDarkMode ? 'text-gray-300' : 'text-gray-500';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 overflow-x-auto"
        >
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Sales Rep Performance</h3>
            <table className={`min-w-full ${tableBg} shadow-md rounded-lg overflow-hidden`}>
                <thead className={`${headerBg} border-b ${isDarkMode ? 'border-gray-700' : 'border-indigo-200'}`}>
                    <tr>
                        {['Sales Rep', 'Deals Closed', 'Revenue', 'Target', 'Achieved'].map((header) => (
                            <th key={header} className={`py-3 px-4 sm:px-6 text-left text-xs font-medium uppercase tracking-wider ${headerText}`}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={`divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                    {performanceSummaryData.map((row) => (
                        <tr key={row.rep} className={isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                            <td className={`py-3 px-4 sm:px-6 whitespace-nowrap text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{row.rep}</td>
                            <td className={`py-3 px-4 sm:px-6 whitespace-nowrap text-sm ${bodyText}`}>{row.deals}</td>
                            <td className={`py-3 px-4 sm:px-6 whitespace-nowrap text-sm ${bodyText}`}>{formatIndianCurrency(row.revenue)}</td>
                            <td className={`py-3 px-4 sm:px-6 whitespace-nowrap text-sm ${bodyText}`}>{formatIndianCurrency(row.target)}</td>
                            <td className="py-3 px-4 sm:px-6 whitespace-nowrap text-sm font-semibold" style={{ color: row.status.includes('100') ? '#10B981' : '#F59E0B' }}>
                                {row.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
};

 
function SalesPage() {
    const [isDarkMode, setIsDarkMode] = useState(true); 
    const [activeMenu, setActiveMenu] = useState('Dashboard');
    const [activeSubMenu, setActiveSubMenu] = useState('Sales Metrics'); 
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
     const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

    const sidebarOptions = useMemo(() => NAV_OPTIONS[activeMenu] || [], [activeMenu]);
    const hasSidebar = activeMenu !== 'Administrator';

    const handleTopMenuClick = (key) => {
        setActiveMenu(key);
        if (NAV_OPTIONS[key] && NAV_OPTIONS[key].length > 0) {
            setActiveSubMenu(NAV_OPTIONS[key][0]);
        } else {
            setActiveSubMenu('');
        }
        setIsUserDropdownOpen(key === 'Administrator');
    };
    
     const handleSubMenuClick = (option) => {
        setActiveSubMenu(option);
        setIsMobileSidebarOpen(false); 
    };

    const renderMainContent = () => {
        let contentTitle = activeSubMenu || `${activeMenu} Overview`;
        const contentBg = isDarkMode ? 'bg-gray-800 shadow-xl' : 'bg-white shadow-lg';
        const titleColor = isDarkMode ? 'text-white' : 'text-gray-800';
        
        return (
            <div className={`p-4 sm:p-8 rounded-xl ${contentBg} min-h-[700px]`}>
                <h2 className={`text-2xl sm:text-3xl font-extrabold mb-6 ${titleColor}`}>{contentTitle}</h2>

                 {activeMenu === 'Dashboard' && activeSubMenu === 'Sales Metrics' && (
                    <>
                        <KPICards isDarkMode={isDarkMode} />
                        <SalesTrendChart isDarkMode={isDarkMode} />
                    </>
                )}
                
                {activeMenu === 'Dashboard' && activeSubMenu === 'Performance Summary' && (
                    <>
                        <KPICards isDarkMode={isDarkMode} /> 
                        <PerformanceTable isDarkMode={isDarkMode} />
                    </>
                )}
                
                {activeMenu === 'Payment Management' && activeSubMenu === 'Invoices & Bills' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className={isDarkMode ? "text-gray-300 mt-4 p-4 border border-gray-700 rounded-lg" : "text-gray-600 mt-4"}>
                        **Invoices & Bills:** Dedicated section for creating, viewing, and managing all outstanding and paid customer invoices.
                    </motion.p>
                )}
                
                {activeMenu === 'Payment Management' && activeSubMenu === 'Transaction History' && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className={isDarkMode ? "text-gray-300 mt-4 p-4 border border-gray-700 rounded-lg" : "text-gray-600 mt-4"}>
                        **Transaction History:** Detailed chronological ledger of all money in (payments) and money out (refunds/payouts).
                    </motion.p>
                )}

                 {(activeMenu === 'Settings' || activeSubMenu === 'Activity Feed' || (activeMenu === 'Payment Management' && !['Invoices & Bills', 'Transaction History'].includes(activeSubMenu))) && (
                    <p className={isDarkMode ? "text-gray-400 mt-4" : "text-gray-600 mt-4"}>
                        Content for **{activeSubMenu || activeMenu}** will be developed here.
                    </p>
                )}
            </div>
        );
    };

     const appBg = isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900';
    const navbarBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
    const sidebarBg = isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200';
    const logoColor = isDarkMode ? 'text-indigo-400' : 'text-indigo-700';
    const menuIconColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';


    return (
        <div className={`min-h-screen flex flex-col transition-colors duration-500 ${appBg}`}>
             <nav className={`sticky top-0 flex justify-between items-center px-4 sm:px-6 py-4 shadow-md z-20 ${navbarBg}`}>
                
                <div className="flex items-center space-x-4">
                     <button 
                        onClick={() => setIsMobileSidebarOpen(true)}
                        className={`p-2 rounded-full lg:hidden transition-colors ${menuIconColor} ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                        aria-label="Open sidebar menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/>
                        </svg>
                    </button>

                    <span className={`text-xl sm:text-2xl font-black ${logoColor}`}> Sales Pro </span>
                </div>
                
                <div className="flex space-x-2 relative items-center">
                     <div className="hidden lg:flex space-x-2">
                        {Object.keys(NAV_OPTIONS).map((key) => (
                             
                            <motion.button
                                key={key}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 
                                    ${activeMenu === key 
                                    ? 'bg-indigo-600 text-white shadow-md' 
                                    : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                onClick={() => handleTopMenuClick(key)}
                            >
                                {key}
                            </motion.button>
                        ))}
                    </div>
                    
                     <motion.button
                        onClick={toggleDarkMode}
                        whileHover={{ scale: 1.1 }}
                        className={`p-2 rounded-full transition-colors duration-200 ${isDarkMode ? 'text-yellow-400 hover:bg-gray-700' : 'text-indigo-600 hover:bg-gray-100'}`}
                    >
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {isDarkMode ? (
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                            ) : (
                                <><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></>
                            )}
                        </svg>
                    </motion.button>

                 </div>
            </nav>

             <div className="flex flex-grow overflow-hidden relative">
                
                 {hasSidebar && sidebarOptions.length > 0 && (
                    <motion.aside
                        initial={false}
                        animate="visible"
                        variants={sidebarVariants}
                        className={`hidden lg:block lg:w-64 border-r p-6 flex-shrink-0 ${sidebarBg}`}
                    >
                        <h3 className={`text-xl font-semibold mb-4 border-b pb-2 ${isDarkMode ? 'text-indigo-400 border-gray-700' : 'text-indigo-600 border-gray-200'}`}>{activeMenu} Menu</h3>
                        <ul>
                            {sidebarOptions.map((option, index) => (
                                <motion.li
                                    key={option}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ x: 5, backgroundColor: isDarkMode ? '#374151' : '#ede9fe' }} 
                                    className={`py-2 px-3 rounded-md cursor-pointer transition-colors duration-150 
                                        ${activeSubMenu === option 
                                            ? 'bg-indigo-600 text-white font-semibold shadow-md' 
                                            : isDarkMode ? 'text-gray-300 hover:text-indigo-300' : 'text-gray-700 hover:text-indigo-700'
                                        }`}
                                    onClick={() => handleSubMenuClick(option)}
                                >
                                    <Icon>•</Icon> {option}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.aside>
                )}

                 <AnimatePresence>
                    {isMobileSidebarOpen && hasSidebar && (
                        <>
                             <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMobileSidebarOpen(false)}
                                className="fixed inset-0 bg-black z-30 lg:hidden"
                            />

                             <motion.aside
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={sidebarVariants}
                                className={`fixed top-0 left-0 h-full w-64 border-r p-6 flex-shrink-0 z-40 ${sidebarBg} lg:hidden`}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{activeMenu} Menu</h3>
                                    <button onClick={() => setIsMobileSidebarOpen(false)} className={`p-1 rounded-full ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                                    </button>
                                </div>
                                
                                <ul>
                                    {sidebarOptions.map((option, index) => (
                                        <motion.li
                                            key={option}
                                            whileHover={{ scale: 1.02 }} 
                                            className={`py-2 px-3 rounded-md cursor-pointer transition-colors duration-150 
                                                ${activeSubMenu === option 
                                                    ? 'bg-indigo-600 text-white font-semibold shadow-md' 
                                                    : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                            onClick={() => handleSubMenuClick(option)}
                                        >
                                            <Icon>•</Icon> {option}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.aside>
                        </>
                    )}
                </AnimatePresence>


                 <main className="flex-grow p-4 sm:p-8 overflow-y-auto">
                    {renderMainContent()}
                </main>
            </div>
        </div>
    );
}

export default SalesPage;