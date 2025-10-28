// Layouts/RootLayout.jsx (Example)
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      {/* This content (Header/Navbar) will always be visible 
        on /, /sales, /admin, and /hr routes.
      */}
      <header className="app-header">
        <nav>Main Navigation Goes Here</nav>
      </header>

      <main className="app-content">
        {/* *** THIS IS THE CRITICAL PART ***
          The component for the current matching child route (e.g., SalesPage)
          will be rendered here.
        */}
        <Outlet />
      </main>

      <footer className="app-footer">
        © Autocorp {new Date().getFullYear()}
      </footer>
    </div>
  );
}