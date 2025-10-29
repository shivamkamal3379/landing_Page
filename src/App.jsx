import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SalesPage from "./Pages/salesPage";
  import HrPage from "./Pages/HrPage";
import AdminPage from "./Pages/AdminPage";
function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/hr" element={<HrPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
