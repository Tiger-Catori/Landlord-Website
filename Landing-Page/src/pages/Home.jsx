import "../css/Home.css";
import NavbarComponment from "../components/Navbar";
import HeroComponent from "../components/Hero";
import BannerComponent from "../components/Banner";
import FeaturedSection from "../components/Featured";
import FooterComponent from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavbarComponment />
      <HeroComponent />
      <BannerComponent />
      <FeaturedSection />
      <FooterComponent />
    </>
  );
};

export default Home;
