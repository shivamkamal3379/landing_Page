import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Sun,
  Moon,
  ChevronDown,
  Banknote,
  TrendingUp,
  FileText,
  BarChart3,
  User,
  CheckCircle,
  Clock,
  XCircle,
  Menu,
} from "lucide-react";

// --- Dummy Data ---
const monthlySalesData = [
  { month: "Jan", Cash: 20, Cheque: 10 },
  { month: "Feb", Cash: 28, Cheque: 15 },
  { month: "Mar", Cash: 25, Cheque: 12 },
  { month: "Apr", Cash: 30, Cheque: 20 },
  { month: "May", Cash: 35, Cheque: 25 },
  { month: "Jun", Cash: 40, Cheque: 30 },
];

// --- Utility ---
const StatRow = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span>{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

// --- Dashboard Cards (No change) ---
const DashboardCards = ({ isDarkMode }) => {
  const cardStyle = `p-5 rounded-xl shadow-md transition-all duration-300 ${
    isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
  }`;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      {/* Bounced Cheques */}
      <div className={cardStyle}>
        <div className="flex items-center mb-3">
          <Banknote className="w-5 h-5 text-red-400 mr-2" />
          <h3 className="font-semibold text-lg">Bounced Cheques</h3>
        </div>
        <StatRow label="Amit Sharma — HDFC" value="₹32,000" />
        <StatRow label="Karan Patel — ICICI" value="₹18,000" />
        <StatRow label="Riya Singh — SBI" value="₹25,500" />
      </div>

      {/* RPT Cash vs Bank Stats */}
      <div className={cardStyle}>
        <div className="flex items-center mb-3">
          <TrendingUp className="w-5 h-5 text-indigo-400 mr-2" />
          <h3 className="font-semibold text-lg">RPT Cash vs Bank</h3>
        </div>
        <StatRow label="Cash Deposited" value="₹1.2L" />
        <StatRow label="Bank Transfers" value="₹2.4L" />
        <StatRow label="Pending Clearance" value="₹48K" />
      </div>

      {/* RPT Instruments */}
      <div className={cardStyle}>
        <div className="flex items-center mb-3">
          <FileText className="w-5 h-5 text-yellow-400 mr-2" />
          <h3 className="font-semibold text-lg">RPT Instruments</h3>
        </div>
        <StatRow label="Total Instruments" value="123" />
        <StatRow label="Processed" value="110" />
        <StatRow label="Pending" value="13" />
      </div>

      {/* Bank Tally Entries */}
      <div className={cardStyle}>
        <div className="flex items-center mb-3">
          <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
          <h3 className="font-semibold text-lg">Bank Tally Entries</h3>
        </div>
        <StatRow label="Entries Completed" value="540" />
        <StatRow label="Discrepancies" value="6" />
        <StatRow label="Reconciled %" value="98.8%" />
      </div>
    </div>
  );
};

// --- Line Chart (No change) ---
const CashSalesChart = ({ isDarkMode }) => (
  <div
    className={`mt-10 p-6 rounded-xl shadow-md ${
      isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
    }`}
  >
    <h3 className="text-lg font-semibold mb-4">Cash Sales Trend (₹ in Thousands)</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={monthlySalesData}>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke={isDarkMode ? "#4b5563" : "#e5e7eb"}
        />
        <XAxis dataKey="month" stroke={isDarkMode ? "#d1d5db" : "#374151"} />
        <YAxis stroke={isDarkMode ? "#d1d5db" : "#374151"} />
        <Tooltip
          contentStyle={{
            backgroundColor: isDarkMode ? "#1f2937" : "#fff",
            color: isDarkMode ? "#fff" : "#000",
          }}
        />
        <Line type="monotone" dataKey="Cash" stroke="#6366f1" strokeWidth={3} />
        <Line type="monotone" dataKey="Cheque" stroke="#22c55e" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

// --- Bank Tally Entries Table (Custom Table) ---
const BankTallyEntriesTable = ({ isDarkMode }) => {
    const entries = [
        { account: "HDFC Savings", date: "24 Oct", tally: "₹1,50,000", bank: "₹1,50,000", status: "Reconciled" },
        { account: "ICICI Current", date: "23 Oct", tally: "₹85,000", bank: "₹84,500", status: "Discrepancy" },
        { account: "SBI Business", date: "22 Oct", tally: "₹3,20,000", bank: "₹3,20,000", status: "Reconciled" },
        { account: "Axis Corp", date: "21 Oct", tally: "₹45,000", bank: "₹45,000", status: "Reconciled" },
    ];

    const tableStyle = isDarkMode
        ? "bg-gray-800 text-gray-100"
        : "bg-white text-gray-900";

    return (
        <div className={`p-6 mt-6 rounded-xl shadow-md overflow-x-auto ${tableStyle}`}>
            <h3 className="text-lg font-semibold mb-4">Bank Tally Reconciliation Details</h3>
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"} text-left`}>
                        <th className="p-3">Account</th>
                        <th className="p-3">Date</th>
                        <th className="p-3">Tally Balance</th>
                        <th className="p-3">Bank Balance</th>
                        <th className="p-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {entries.map((e, idx) => (
                        <tr
                            key={idx}
                            className={`border-b ${
                                isDarkMode ? "border-gray-700" : "border-gray-200"
                            } hover:bg-gray-700/30`}
                        >
                            <td className="p-3">{e.account}</td>
                            <td className="p-3">{e.date}</td>
                            <td className="p-3 font-medium">{e.tally}</td>
                            <td className="p-3 font-medium">{e.bank}</td>
                            <td className="p-3">
                                {e.status === "Reconciled" ? (
                                    <span className="flex items-center gap-1 text-green-400">
                                        <CheckCircle size={16} /> {e.status}
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-1 text-red-400">
                                        <XCircle size={16} /> {e.status}
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


// --- Payment Management Table (Original Recent Transactions Table) ---
const PaymentTable = ({ isDarkMode }) => {
  const payments = [
    {
      invoice: "#INV001",
      client: "Amit Traders",
      amount: "₹42,000",
      mode: "UPI",
      status: "Completed",
      date: "24 Oct 2025",
    },
    {
      invoice: "#INV002",
      client: "Bright Motors",
      amount: "₹58,500",
      mode: "Cheque",
      status: "Pending",
      date: "25 Oct 2025",
    },
    {
      invoice: "#INV003",
      client: "KJ Auto Parts",
      amount: "₹33,200",
      mode: "Cash",
      status: "Completed",
      date: "22 Oct 2025",
    },
    {
      invoice: "#INV004",
      client: "Nova Agencies",
      amount: "₹19,800",
      mode: "Bank Transfer",
      status: "Failed",
      date: "20 Oct 2025",
    },
    {
      invoice: "#INV005",
      client: "Global Wheels",
      amount: "₹61,400",
      mode: "UPI",
      status: "Pending",
      date: "26 Oct 2025",
    },
  ];

  const tableStyle = isDarkMode
    ? "bg-gray-800 text-gray-100"
    : "bg-white text-gray-900";

  return (
    <div className={`p-6 mt-6 rounded-xl shadow-md overflow-x-auto ${tableStyle}`}>
      <h3 className="text-lg font-semibold mb-4">Recent Payment Transactions</h3>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className={`${isDarkMode ? "bg-gray-700" : "bg-gray-100"} text-left`}>
            <th className="p-3">Invoice</th>
            <th className="p-3">Client Name</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Mode</th>
            <th className="p-3">Status</th>
            <th className="p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p, idx) => (
            <tr
              key={idx}
              className={`border-b ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              } hover:bg-gray-700/30`}
            >
              <td className="p-3">{p.invoice}</td>
              <td className="p-3">{p.client}</td>
              <td className="p-3">{p.amount}</td>
              <td className="p-3">{p.mode}</td>
              <td className="p-3">
                {p.status === "Completed" && (
                  <span className="flex items-center gap-1 text-green-400">
                    <CheckCircle size={16} /> {p.status}
                  </span>
                )}
                {p.status === "Pending" && (
                  <span className="flex items-center gap-1 text-yellow-400">
                    <Clock size={16} /> {p.status}
                  </span>
                )}
                {p.status === "Failed" && (
                  <span className="flex items-center gap-1 text-red-400">
                    <XCircle size={16} /> {p.status}
                  </span>
                )}
              </td>
              <td className="p-3">{p.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


// --- Left Sidebar Component ---
const PaymentSidebar = ({ isDarkMode, setActiveMenu, showSidebar }) => {
  const sidebarItems = [
    { label: "RPT Cash vs Bank", icon: TrendingUp },
    { label: "Bounced Cheques", icon: Banknote },
    { label: "RPT Instruments", icon: FileText },
    { label: "Bank Tally Entries", icon: BarChart3 },
    { label: "Recent Transactions", icon: Clock },
  ];

  const sidebarBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const itemStyle = (label) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors duration-200 ${
      isDarkMode ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"
    }`;

  
  return (
    <AnimatePresence>
      {showSidebar && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-y-0 left-0 z-40 w-64 p-4 shadow-xl ${sidebarBg} lg:static lg:h-auto lg:w-64`}
        >
          <h3 className="text-xl font-semibold mb-6">Payment Sections</h3>
          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                className={itemStyle(item.label)}
                onClick={() => setActiveMenu(item.label)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main Component ---
export default function SalesPage() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false); 

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  
  const handlePaymentManagementClick = () => {
    // 1. Set the active menu to "Recent Transactions" (which shows the original table)
    setActiveMenu("Recent Transactions"); 
    // 2. Toggle the sidebar
    setShowSidebar(prev => !prev); 
  };
  
  // Close the sidebar when navigating to a different main section
  const handleNavigation = (menuItem) => {
    setActiveMenu(menuItem);
    setShowSidebar(false);
  }

  const renderPaymentSubContent = () => {
    // List of sidebar items that should only show the generic placeholder message (blank screen)
    const sidebarPlaceholders = [
        "RPT Cash vs Bank", 
        "Bounced Cheques", 
        "RPT Instruments", 
    ];
    
    // Condition 3: Show Bank Tally Table
    if (activeMenu === "Bank Tally Entries") {
        return (
            <div className="p-6 flex-grow">
                <h2 className="text-3xl font-bold mb-4">Bank Tally Entries</h2>
                <BankTallyEntriesTable isDarkMode={isDarkMode} />
            </div>
        );
    }
    
    // Condition 1 & 2: Show Recent Transactions Table
    if (activeMenu === "Recent Transactions") {
        return (
            <div className="p-6 flex-grow">
                {/* Note: PaymentTable component now includes the title "Recent Payment Transactions" */}
                <PaymentTable isDarkMode={isDarkMode} />
            </div>
        );
    }

    // Condition 4: Show Blank Placeholder for others
    if (sidebarPlaceholders.includes(activeMenu)) {
        return (
            <div className="p-6 flex-grow">
                <h2 className="text-3xl font-bold mb-4">{activeMenu}</h2>
                <p className="text-gray-400">Content for **{activeMenu}** will be displayed here.</p>
            </div>
        );
    }
    
    // Default fallback if a payment menu is active but not one of the specific ones above
    return (
        <div className="p-6 flex-grow">
            <h2 className="text-3xl font-bold mb-4">Payment Management</h2>
            <p className="text-gray-400">Please select an option from the sidebar.</p>
        </div>
    );
  }


  const renderMainContent = () => {
    if (activeMenu === "Dashboard") {
      return (
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">Dashboard Overview</h2>
          <DashboardCards isDarkMode={isDarkMode} />
          <CashSalesChart isDarkMode={isDarkMode} />
        </div>
      );
    }

    // Check if the current menu is any of the payment/sidebar items
    const isPaymentSection = activeMenu.includes("RPT") || activeMenu.includes("Bounced") || activeMenu.includes("Bank Tally") || activeMenu.includes("Recent Transactions");

    if (isPaymentSection) {
        return renderPaymentSubContent();
    }

    return (
        <div className="p-8">
            <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
            <p className="text-gray-400">Please select an option from the navigation bar.</p>
        </div>
    );
  };

  const appBg = isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900";
  const navbarBg = isDarkMode ? "bg-gray-800" : "bg-white";

  return (
    <div className={`min-h-screen flex flex-col ${appBg}`}>
      {/* Navbar */}
      <nav className={`flex justify-between items-center px-6 py-4 shadow-md ${navbarBg}`}>
        {/* Logo and Sidebar Toggle */}
        <div className="flex items-center">
            {/* Show Menu button only when in a 'Payment' section */}
            {(activeMenu.includes("RPT") || activeMenu.includes("Bounced") || activeMenu.includes("Bank Tally") || activeMenu.includes("Recent Transactions")) && (
                <motion.button
                    onClick={() => setShowSidebar(!showSidebar)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 mr-4 rounded-full ${
                        isDarkMode ? "text-white hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                    <Menu size={24} />
                </motion.button>
            )}
            <span className={`text-2xl font-black ${isDarkMode ? "text-indigo-400" : "text-indigo-700"}`}>
                Sales Pro
            </span>
        </div>

        {/* Navigation */}
        <div className="flex space-x-4 items-center relative">
          {/* Dashboard */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavigation("Dashboard")}
            className={`px-4 py-2 rounded-lg ${
              activeMenu === "Dashboard"
                ? "bg-indigo-600 text-white"
                : isDarkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Dashboard
          </motion.button>

          {/* Payment Management (Main clickable menu) */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePaymentManagementClick} // Toggles sidebar and sets active menu to 'Recent Transactions'
            className={`px-4 py-2 rounded-lg ${
              (activeMenu.includes("RPT") || activeMenu.includes("Bounced") || activeMenu.includes("Bank Tally") || activeMenu.includes("Recent Transactions"))
                ? "bg-indigo-600 text-white"
                : isDarkMode
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Payment Management
          </motion.button>
        </div>

        {/* Right Controls (User Card and Dark Mode Toggle) */}
        <div className="flex items-center gap-3 relative">
          <button
            onClick={() => setShowUserDropdown(!showUserDropdown)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
              R
            </div>
            <span className="font-medium text-sm">Ravi Verma</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <AnimatePresence>
            {showUserDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`absolute right-0 top-12 w-64 rounded-xl shadow-lg p-4 z-50 ${
                  isDarkMode
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="mb-3">
                  <h4 className="font-semibold text-lg">Ravi Verma</h4>
                  <p className="text-sm text-gray-400">Cluster Head</p>
                  <p className="text-xs text-gray-500 mt-1">Member since April 2022</p>
                </div>
                <div className="border-t border-gray-600 mt-2 pt-2 flex flex-col space-y-2">
                  <button
                    className={`text-left w-full px-3 py-2 rounded-md ${
                      isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                    }`}
                  >
                    Profile
                  </button>
<button
  onClick={() => navigate("/")}  
  className={`text-left w-full px-3 py-2 rounded-md ${
    isDarkMode
      ? "hover:bg-gray-700 text-red-400"
      : "hover:bg-gray-100 text-red-600"
  }`}
>
  Logout
</button>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ scale: 1.1 }}
            className={`p-2 rounded-full ${
              isDarkMode
                ? "text-yellow-400 hover:bg-gray-700"
                : "text-indigo-600 hover:bg-gray-100"
            }`}
          >
            {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>
        </div>
      </nav>

      {/* Main Content Area with Sidebar */}
      <div className="flex flex-grow overflow-hidden"> 
        {/* Sidebar Component */}
        {(activeMenu.includes("RPT") || activeMenu.includes("Bounced") || activeMenu.includes("Bank Tally") || activeMenu.includes("Recent Transactions")) && (
            <PaymentSidebar 
                isDarkMode={isDarkMode} 
                setActiveMenu={setActiveMenu} 
                showSidebar={showSidebar}
            />
        )}
        
         <main className="flex-grow overflow-y-auto">{renderMainContent()}</main>
      </div>
    </div>
  );
}