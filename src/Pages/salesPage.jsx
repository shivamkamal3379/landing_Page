import React, { useState, useEffect, useRef } from "react";
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
  CheckCircle,
  Clock,
  XCircle,
  Menu,
} from "lucide-react";

// Dummy data
const monthlySalesData = [
  { month: "Jan", Cash: 20, Cheque: 10 },
  { month: "Feb", Cash: 28, Cheque: 15 },
  { month: "Mar", Cash: 25, Cheque: 12 },
  { month: "Apr", Cash: 30, Cheque: 20 },
  { month: "May", Cash: 35, Cheque: 25 },
  { month: "Jun", Cash: 40, Cheque: 30 },
];

// Utility Component
const StatRow = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span>{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

// Dashboard Cards
const DashboardCards = ({ isDarkMode }) => {
  const cardStyle = `p-5 rounded-xl shadow-md transition-all duration-300 ${
    isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
  }`;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <div className={cardStyle}>
        <div className="flex items-center mb-3">
          <Banknote className="w-5 h-5 text-red-400 mr-2" />
          <h3 className="font-semibold text-lg">Bounced Cheques</h3>
        </div>
        <StatRow label="Amit Sharma — HDFC" value="₹32,000" />
        <StatRow label="Karan Patel — ICICI" value="₹18,000" />
        <StatRow label="Riya Singh — SBI" value="₹25,500" />
      </div>

      <div className={cardStyle}>
        <div className="flex items-center mb-3">
          <TrendingUp className="w-5 h-5 text-indigo-400 mr-2" />
          <h3 className="font-semibold text-lg">RPT Cash vs Bank</h3>
        </div>
        <StatRow label="Cash Deposited" value="₹1.2L" />
        <StatRow label="Bank Transfers" value="₹2.4L" />
        <StatRow label="Pending Clearance" value="₹48K" />
      </div>

      <div className={cardStyle}>
        <div className="flex items-center mb-3">
          <FileText className="w-5 h-5 text-yellow-400 mr-2" />
          <h3 className="font-semibold text-lg">RPT Instruments</h3>
        </div>
        <StatRow label="Total Instruments" value="123" />
        <StatRow label="Processed" value="110" />
        <StatRow label="Pending" value="13" />
      </div>

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

// Cash Sales Chart
const CashSalesChart = ({ isDarkMode }) => (
  <div
    className={`mt-10 p-6 rounded-xl shadow-md ${
      isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
    }`}
  >
    <h3 className="text-lg font-semibold mb-4">
      Cash Sales Trend (₹ in Thousands)
    </h3>
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
        <Line
          type="monotone"
          dataKey="Cheque"
          stroke="#22c55e"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

// Bank Tally Entries Table
const BankTallyEntriesTable = ({ isDarkMode }) => {
  const entries = [
    {
      account: "HDFC Savings",
      date: "24 Oct",
      tally: "₹1,50,000",
      bank: "₹1,50,000",
      status: "Reconciled",
    },
    {
      account: "ICICI Current",
      date: "23 Oct",
      tally: "₹85,000",
      bank: "₹84,500",
      status: "Discrepancy",
    },
    {
      account: "SBI Business",
      date: "22 Oct",
      tally: "₹3,20,000",
      bank: "₹3,20,000",
      status: "Reconciled",
    },
    {
      account: "Axis Corp",
      date: "21 Oct",
      tally: "₹45,000",
      bank: "₹45,000",
      status: "Reconciled",
    },
  ];

  return (
    <div
      className={`p-6 mt-6 rounded-xl shadow-md overflow-x-auto ${
        isDarkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h3 className="text-lg font-semibold mb-4">
        Bank Tally Reconciliation Details
      </h3>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr
            className={`${
              isDarkMode ? "bg-gray-700" : "bg-gray-100"
            } text-left`}
          >
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

// Payment Sidebar (with active highlight)
const PaymentSidebar = ({ isDarkMode, activeMenu, setActiveMenu, showSidebar }) => {
  const sidebarItems = [
    { label: "RPT Cash vs Bank", icon: TrendingUp },
    { label: "Bounced Cheques", icon: Banknote },
    { label: "RPT Instruments", icon: FileText },
    { label: "Bank Tally Entries", icon: BarChart3 },
    { label: "Recent Transactions", icon: Clock },
  ];

  return (
    <AnimatePresence>
      {showSidebar && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-y-0 left-0 z-40 w-64 p-4 shadow-xl ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } lg:static lg:h-auto lg:w-64`}
        >
          <h3 className="text-xl font-semibold mb-6">Payment Sections</h3>
          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const isActive = activeMenu === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => setActiveMenu(item.label)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-sm transition-all duration-200 ${
                    isActive
                      ? isDarkMode
                        ? "bg-blue-600 text-white"
                        : "bg-blue-100 text-blue-700"
                      : isDarkMode
                      ? "text-gray-200 hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main Page ---
export default function SalesPage() {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showSidebar, setShowSidebar] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowUserDropdown(false);
      }
    };
    if (showUserDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showUserDropdown]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const renderMainContent = () => {
    if (activeMenu === "Dashboard")
      return (
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">Dashboard Overview</h2>
          <DashboardCards isDarkMode={isDarkMode} />
          <CashSalesChart isDarkMode={isDarkMode} />
        </div>
      );

    if (activeMenu === "Bank Tally Entries")
      return <BankTallyEntriesTable isDarkMode={isDarkMode} />;

    return (
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-2">{activeMenu}</h2>
        <p className="text-gray-400">
          Content for <b>{activeMenu}</b> will appear here.
        </p>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`flex justify-between items-center px-6 py-4 shadow-md ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="flex items-center">
          <motion.button
            onClick={() => setShowSidebar(!showSidebar)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 mr-4 rounded-full ${
              isDarkMode
                ? "text-white hover:bg-gray-700"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Menu size={24} />
          </motion.button>
          <span
            className={`text-2xl font-black ${
              isDarkMode ? "text-indigo-400" : "text-indigo-700"
            }`}
          >
            Sales Pro
          </span>
        </div>

        <div className="flex items-center gap-3 relative" ref={dropdownRef}>
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
                  <p className="text-xs text-gray-500 mt-1">
                    Member since April 2022
                  </p>
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

      <div className="flex flex-grow overflow-hidden">
        <PaymentSidebar
          isDarkMode={isDarkMode}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          showSidebar={showSidebar}
        />
        <main className="flex-grow overflow-y-auto">{renderMainContent()}</main>
      </div>
    </div>
  );
}
