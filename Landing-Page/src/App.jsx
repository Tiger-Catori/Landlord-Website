import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Animation only triggers once on scroll
      easing: "ease-out-quad",
    });

    // Optional: Refresh AOS when routes change (useful for SPA navigation)
    const handleRouteChange = () => {
      AOS.refresh();
    };

    handleRouteChange(); // Refresh on initial load

    // If you later add route changes that load new animated content,
    // you’d call AOS.refresh() again via a router listener.
  }, []);

  return (
    <div className="container__body" id="home">
      <main className="main__content">
        <Home />
      </main>
    </div>
  );
}

export default App;
