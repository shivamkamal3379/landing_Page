import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";



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
  Building,
  Users,
  Wallet,
  ClipboardList,
  Briefcase,
  MapPin,
  Settings,
} from "lucide-react";
 import { PlusCircle, Edit3, Trash2, RotateCcw } from "lucide-react";
 
 const monthlySalesData = [
  { month: "Jan", Cash: 20, Cheque: 10 },
  { month: "Feb", Cash: 28, Cheque: 15 },
  { month: "Mar", Cash: 25, Cheque: 12 },
  { month: "Apr", Cash: 30, Cheque: 20 },
  { month: "May", Cash: 35, Cheque: 25 },
  { month: "Jun", Cash: 40, Cheque: 30 },
];

 const StatRow = ({ label, value }) => (
  <div className="flex justify-between text-sm">
    <span>{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);


 const DashboardCards = ({ isDarkMode }) => {
  const cardStyle = `p-5 rounded-xl shadow-md transition-all duration-300 ${
    isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
  }`;
  

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <div className={cardStyle}>
        <div className="flex items-center mb-3">
          <Banknote className="w-5 h-5 text-red-400 mr-2" />
          <h3 className="font-semibold text-lg"></h3>
        </div>
        <StatRow label="Amit Sharma — HDFC" value="₹32,000" />
        <StatRow label="Karan Patel — ICICI" value="₹18,000" />
        <StatRow label="Riya Singh — SBI" value="₹25,500" />
      </div>

      <div className={cardStyle}>
        <div className="flex items-center mb-3">
          <TrendingUp className="w-5 h-5 text-indigo-400 mr-2" />
          <h3 className="font-semibold text-lg"></h3>
        </div>
        <StatRow label="Cash Deposited" value="₹1.2L" />
        <StatRow label="Bank Transfers" value="₹2.4L" />
        <StatRow label="Pending Clearance" value="₹48K" />
      </div>

      <div className={cardStyle}>
        <div className="flex items-center mb-3">
          <FileText className="w-5 h-5 text-yellow-400 mr-2" />
          <h3 className="font-semibold text-lg"></h3>
        </div>
        <StatRow label="Total Instruments" value="123" />
        <StatRow label="Processed" value="110" />
        <StatRow label="Pending" value="13" />
      </div>

      <div className={cardStyle}>
        <div className="flex items-center mb-3">
          <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
          <h3 className="font-semibold text-lg"></h3>
        </div>
        <StatRow label="Entries Completed" value="540" />
        <StatRow label="Discrepancies" value="6" />
        <StatRow label="Reconciled %" value="98.8%" />
      </div>
    </div>
  );
};

// --- Line Chart (unchanged for brevity) ---
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

// --- Bank Tally Entries Table (Custom Table) ---
const BankTallyEntriesTable = ({ isDarkMode }) => {
  const entries = [
    {
      account: "HDFC Savings (RPT)",
      date: "24 Oct",
      tally: "₹1,50,000",
      bank: "₹1,50,000",
      status: "Reconciled",
    },
    {
      account: "ICICI Current (Main)",
      date: "23 Oct",
      tally: "₹85,000",
      bank: "₹84,500",
      status: "Discrepancy",
    },
    {
      account: "SBI Business (Petty)",
      date: "22 Oct",
      tally: "₹3,20,000",
      bank: "₹3,20,000",
      status: "Reconciled",
    },
    {
      account: "Axis Corp (Cheques)",
      date: "21 Oct",
      tally: "₹45,000",
      bank: "₹46,000",
      status: "Discrepancy",
    },
    {
      account: "PNB (Branch A)",
      date: "20 Oct",
      tally: "₹95,000",
      bank: "₹95,000",
      status: "Reconciled",
    },
  ];

  const tableStyle = isDarkMode
    ? "bg-gray-800 text-gray-100"
    : "bg-white text-gray-900";

  return (
    <div
      className={`p-6 mt-6 rounded-xl shadow-md overflow-x-auto ${tableStyle}`}
    >
      <h3 className="text-lg font-semibold mb-4">
        Bank Tally Entries
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
  ];

  const tableStyle = isDarkMode
    ? "bg-gray-800 text-gray-100"
    : "bg-white text-gray-900";

  return (
    <div
      className={`p-6 mt-6 rounded-xl shadow-md overflow-x-auto ${tableStyle}`}
    >
      <h3 className="text-lg font-semibold mb-4">
         Bank Tally   Transactions
      </h3>
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr
            className={`${
              isDarkMode ? "bg-gray-700" : "bg-gray-100"
            } text-left`}
          >
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

 const AdminDataTable = ({ isDarkMode, title, columns, data }) => {
  const tableStyle = isDarkMode
    ? "bg-gray-800 text-gray-100"
    : "bg-white text-gray-900";

  return (
    <div
      className={`p-6 mt-6 rounded-xl shadow-md overflow-x-auto ${tableStyle}`}
    >
      <h3 className="text-lg font-semibold "> </h3>
              <IconHeaderBar isDarkMode={isDarkMode} />

      <table className="w-full text-sm border-collapse">
        <thead>
          <tr
            className={`${
              isDarkMode ? "bg-gray-700" : "bg-gray-100"
            } text-left`}
          >
            {columns.map((col) => (
              <th key={col.key} className="p-3">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={idx}
              className={`border-b ${
                isDarkMode ? "border-gray-700" : "border-gray-200"
              } hover:bg-gray-700/30`}
            >
              {columns.map((col) => (
                <td key={col.key} className="p-3">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// --- Dynamic Sidebar Component (Used for Payment, Cash, and Settings) ---
 

const DynamicSidebar = ({
  isDarkMode,
  setActiveMenu,
  showSidebar,
  type,
  activeMenu, 
}) => {
  // Payment Sidebar Options
  const paymentItems = [
    { label: "Cash", icon: Wallet },
    { label: "Instruments", icon: FileText },
    { label: "Posting", icon: ClipboardList },
    { label: "Bank Tally Entries", icon: BarChart3 },
    { label: "Bounced Cheque", icon: Banknote },
    { label: "RPT Closing Cash", icon: TrendingUp },
  ];

  // Cash Sidebar Options
  const cashItems = [
    { label: "Company Group", icon: Briefcase },
    { label: "Company", icon: Building },
    { label: "Branch", icon: MapPin },
    { label: "Bank / Bank Allow", icon: Banknote },
    { label: "User", icon: Users },
  ];

  // Settings Sidebar Options
  const settingsItems = [
    { label: "Global Settings", icon: Settings },
    { label: "User Roles", icon: Users },
    { label: "System Logs", icon: ClipboardList },
  ];

  const sidebarConfig = {
    payment: { title: "Payment Sections", items: paymentItems },
    cash: { title: "Admin", items: cashItems },
    settings: { title: "Global Settings", items: settingsItems },
  };

  const config = sidebarConfig[type] || { title: "Menu", items: [] };

  const sidebarBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const inactiveStyle = isDarkMode
    ? "text-gray-200 hover:bg-gray-700"
    : "text-gray-700 hover:bg-gray-100";

  const activeStyle = isDarkMode
    ? "bg-indigo-600 text-white"
    : "bg-indigo-100 text-indigo-700 font-semibold";

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
          <h3 className="text-xl font-semibold mb-6 font-medium text-indigo-400">
            {config.title}
          </h3>
          <div className="space-y-2">
            {config.items.map((item) => {
              const fullKey = `${type}__${item.label}`;
              const isActive = activeMenu === fullKey;

              return (
                <button
                  key={item.label}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 w-full ${
                    isActive ? activeStyle : inactiveStyle
                  }`}
                  onClick={() => setActiveMenu(fullKey)}
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
const IconHeaderBar = ({ isDarkMode }) => {
  const iconButtons = [
    { icon: PlusCircle, label: "Create" },
    { icon: Edit3, label: "Edit" },
    { icon: Trash2, label: "Delete" },
    { icon: RotateCcw, label: "Reload" },
  ];

  const tooltipBg = isDarkMode ? "bg-gray-800 text-gray-200" : "bg-white text-gray-800";
  const buttonHover = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200";

  return (
    <div
      className={`flex items-center justify-center space-x-8 py-3 shadow-sm ${
        isDarkMode ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      {iconButtons.map(({ icon: Icon, label }) => (
        <motion.div
          key={label}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <button
            className={`p-2 rounded-full transition-all ${buttonHover}`}
            aria-label={label}
          >
            <Icon size={22} />
          </button>

          {/* Tooltip */}
          <div
            className={`absolute bottom-[-35px] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all px-2 py-1 rounded-md text-xs font-medium shadow-md ${tooltipBg}`}
          >
            {label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};


// --- Main Component ---
export default function AdminPage() {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarType, setSidebarType] = useState(null); // 'payment', 'cash', or 'settings'

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const handleSidebarToggle = (menuType, defaultSubmenu) => {
    if (sidebarType === menuType) {
      setShowSidebar((prev) => !prev);
    } else {
      setSidebarType(menuType);
      setActiveMenu(defaultSubmenu);
      setShowSidebar(true);
    }
  };

  const handleNavigation = (menuItem) => {
    setActiveMenu(menuItem);
    setShowSidebar(false);
    setSidebarType(null);
  };

  // ---------- Payment Content ----------
  const renderPaymentSubContent = () => {
    const submenu = activeMenu.split("__")[1] || "Cash";

    if (submenu === "Bank Tally Entries") {
      return (
        <div className="p-6 flex-grow">
          <h2 className="text-3xl font-bold mb-4">{submenu}</h2>
            <IconHeaderBar isDarkMode={isDarkMode} />
          <BankTallyEntriesTable isDarkMode={isDarkMode} />
        </div>
      );
    }

    if (submenu === "Cash") {
      return (
        <div className="p-6 flex-grow">  <IconHeaderBar isDarkMode={isDarkMode} />
          <PaymentTable isDarkMode={isDarkMode} />
        </div>
      );
    }

    return (
      <div className="p-6 flex-grow">
        <h2 className="text-3xl font-bold mb-4">{submenu}</h2>
        <p className="text-gray-400">
          Content for <strong>{submenu}</strong> will be displayed here.
        </p>
      </div>
    );
  };


  // ---------- Cash Content ----------
  const renderCashSubContent = () => {
    const submenu = activeMenu.split("__")[1] || "Company Group";

    const dataSets = {
      "Company Group": {
        title: "Company Groups Setup",
        columns: [
          { key: "id", label: "ID" },
          { key: "name", label: "Group Name" },
          { key: "companies", label: "Companies Count" },
          { key: "status", label: "Status" },
        ],
        data: [
          { id: 1, name: "North Zone", companies: 4, status: "Active" },
          { id: 2, name: "South Zone", companies: 3, status: "Active" },
          { id: 3, name: "HQ Support", companies: 1, status: "Inactive" },
        ],
      },
      Company: {
        title: "Company List",
        columns: [
          { key: "id", label: "ID" },
          { key: "name", label: "Company Name" },
          { key: "group", label: "Group" },
          { key: "branches", label: "Branches" },
        ],
        data: [
          { id: 101, name: "Apex Motors Pvt Ltd", group: "North Zone", branches: 8 },
          { id: 102, name: "Global Wheels Ltd", group: "South Zone", branches: 5 },
          { id: 103, name: "RPT Finances", group: "HQ Support", branches: 1 },
        ],
      },
      Branch: {
        title: "Branch Locations",
        columns: [
          { key: "id", label: "ID" },
          { key: "name", label: "Branch Name" },
          { key: "city", label: "City" },
          { key: "manager", label: "Manager" },
        ],
        data: [
          { id: 501, name: "Rajpura Main", city: "Rajpura", manager: "Vikas Sharma" },
          { id: 502, name: "Ambala Hub", city: "Ambala", manager: "Ria Singh" },
          { id: 503, name: "Delhi West", city: "New Delhi", manager: "Amit Verma" },
        ],
      },
      "Bank / Bank Allow": {
        title: "Bank Configuration",
        columns: [
          { key: "id", label: "ID" },
          { key: "bank", label: "Bank Name" },
          { key: "account", label: "Account Type" },
          { key: "status", label: "Allow Posting" },
        ],
        data: [
          { id: 801, bank: "HDFC Bank", account: "Current (RPT)", status: "Yes" },
          { id: 802, bank: "ICICI Bank", account: "Savings (Cheque)", status: "Yes" },
          { id: 803, bank: "SBI Bank", account: "Current (Cash)", status: "No" },
        ],
      },
      User: {
        title: "System Users List",
        columns: [
          { key: "id", label: "ID" },
          { key: "name", label: "Name" },
          { key: "role", label: "Role" },
          { key: "branch", label: "Branch ID" },
        ],
        data: [
          { id: 901, name: "Ravi Verma", role: "Cluster Head", branch: 501 },
          { id: 902, name: "Suman Devi", role: "Accountant", branch: 502 },
          { id: 903, name: "Rajesh Kumar", role: "Teller", branch: 503 },
        ],
      },
    };

    const currentData = dataSets[submenu];

    if (!currentData) {
      return (
        <div className="p-6 flex-grow">
          <h2 className="text-3xl font-bold mb-4">Cash Admin: {submenu}</h2>
          <p className="text-gray-400">
            Please select a setup option from the sidebar.
          </p>
        </div>
      );
    }

    return (
      <div className="p-6 flex-grow">
        <h2 className="text-3xl font-bold mb-4"> {submenu}</h2>
        <AdminDataTable
          isDarkMode={isDarkMode}
          title={currentData.title}
          columns={currentData.columns}
          data={currentData.data}
        />
      </div>
    );
  };

  // ---------- Settings ----------
  const renderSettingsSubContent = () => {
    const submenu = activeMenu.split("__")[1] || "Global Settings";
    return (
      <div className="p-6 flex-grow">
        <h2 className="text-3xl font-bold mb-4">Settings: {submenu}</h2>
        <p className="text-gray-400">
          Configuration content for <strong>{submenu}</strong> will be managed here.
        </p>
      </div>
    );
  };

  // ---------- Main Content ----------
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

    if (activeMenu.startsWith("payment__") || sidebarType === "payment")
      return renderPaymentSubContent();
    if (activeMenu.startsWith("cash__") || sidebarType === "cash")
      return renderCashSubContent();
    if (activeMenu.startsWith("settings__") || sidebarType === "settings")
      return renderSettingsSubContent();

    return (
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-2">Welcome</h2>
        <p className="text-gray-400">
          Please select an option from the navigation bar.
        </p>
      </div>
    );
  };

  const appBg = isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900";
  const navbarBg = isDarkMode ? "bg-gray-800/90 backdrop-blur-md" : "bg-white/80 backdrop-blur-md";

  const isSidebarActive =
    activeMenu.startsWith("payment__") ||
    activeMenu.startsWith("cash__") ||
    activeMenu.startsWith("settings__");

  // ---------- Render ----------
  return (
    <div className={`min-h-screen flex flex-col ${appBg}`}>
      {/* Navbar */}
      <nav className={`flex justify-between items-center px-6 py-4 shadow-md ${navbarBg}`}>
        {/* Left: Logo and Sidebar Toggle */}
        <div className="flex items-center">
          {(isSidebarActive || showSidebar) && (
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
          <span className={`text-2xl font-black ${
            isDarkMode ? "text-indigo-400" : "text-indigo-700"
          }`}>
            Sales Pro
          </span>
        </div>

        {/* Center: Navigation Buttons */}
        <div className="flex space-x-4 items-center">
          {["Dashboard", "Payment Management", "Administrator"].map((label, index) => {
            const sidebarKeys = ["payment", "cash"];
            const handleClick =
              index === 0
                ? () => handleNavigation("Dashboard")
                : () => handleSidebarToggle(sidebarKeys[index - 1], `${sidebarKeys[index - 1]}__${index === 1 ? "Cash" : "Company Group"}`);

            const isActive =
              (index === 0 && activeMenu === "Dashboard") ||
              sidebarType === sidebarKeys[index - 1];

            return (
              <motion.button
                key={label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClick}
                className={`px-4 py-2 rounded-lg ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : isDarkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {label}
              </motion.button>
            );
          })}
        </div>

        {/* Right: Icons and User */}
        <div className="flex items-center gap-3 relative" ref={dropdownRef}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSidebarToggle("settings", "settings__Global Settings")}
            className={`p-2 rounded-full ${
              isDarkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Settings size={22} />
          </motion.button>

          {/* User Dropdown */}
          <button
            onClick={() => setShowUserDropdown(!showUserDropdown)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
              isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
              A
            </div>
            <span className="font-medium text-sm">Administrator</span>
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
                  <h4 className="font-semibold text-lg">Administrator</h4>
                  <p className="text-sm text-gray-400">CEO</p>
                  <p className="text-xs text-gray-500 mt-1">Member since 1990</p>
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

          {/* Dark Mode Toggle */}
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

      {/* Main Layout */}
      <div className="flex flex-grow overflow-hidden">
        {sidebarType && (
          <DynamicSidebar
            isDarkMode={isDarkMode}
            setActiveMenu={setActiveMenu}
            showSidebar={showSidebar}
            type={sidebarType}
           activeMenu={activeMenu}  

          />
        )}
        <main className="flex-grow overflow-y-auto">{renderMainContent()}</main>
      </div>
    </div>
  );
}