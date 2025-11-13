import "../css/Home.css";
import NavbarComponment from "../components/Navbar";
import HeroComponent from "../components/Hero";
import BannerComponent from "../components/Banner";

const Home = () => {
  return (
    <>
      <NavbarComponment />
      <HeroComponent />
      <BannerComponent />
    </>
  );
};

export default Home;
