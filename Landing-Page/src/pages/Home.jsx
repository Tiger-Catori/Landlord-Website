import "../css/Home.css";
import NavbarComponment from "../components/Navbar";
import HeroComponent from "../components/Hero";
import BannerComponent from "../components/Banner";
import FeaturedSection from "../components/Featured";
import FooterComponent from "../components/Footer";
import FormComponent from "../components/Form";

const Home = () => {
  return (
    <>
      <NavbarComponment />
      <HeroComponent />
      {/* <BannerComponent />*/}
      <FeaturedSection />
      <FormComponent />
      <FooterComponent />
    </>
  );
};

export default Home;
