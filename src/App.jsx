import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SalesPage from './Pages/salesPage';
import LandingPage from './Pages/LandingPage';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sales" element={<SalesPage />} />
        {/* <Route path="/admin" element={<AdminPage />} />
        <Route path="/hr" element={<HRPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App; 