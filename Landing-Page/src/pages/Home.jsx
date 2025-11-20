import "../css/Home.css";
import NavbarComponment from "../components/Navbar";
import HeroComponent from "../components/Hero";
import BannerComponent from "../components/Banner";
import FeaturedSection from "../components/Featured";
import FooterComponent from "../components/Footer";
import FormComponent from "../components/Form";
import AboutComponent from "../components/About";

const Home = () => {
  return (
    <>
      <NavbarComponment />
      <HeroComponent />
      <BannerComponent />
      <FeaturedSection />
      <AboutComponent />
      <FormComponent />
      <FooterComponent />
    </>
  );
};

export default Home;
