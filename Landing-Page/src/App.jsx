import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container__body" id="home">
      <main className="main__content">
        <Home />
      </main>
    </div>
  );
}

export default App;
