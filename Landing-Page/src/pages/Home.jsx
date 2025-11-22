import "../css/Home.css";
import NavbarComponment from "../components/Navbar";
import HeroComponent from "../components/Hero";
import BannerComponent from "../components/Banner";
import FeaturedSection from "../components/Featured";
import FaqComponent from "../components/Faqs";
import FormComponent from "../components/Form";
import AboutComponent from "../components/About";
import FooterComponent from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavbarComponment />
      <HeroComponent />
      <BannerComponent />
      <FeaturedSection />
      <AboutComponent />
      <FaqComponent />
      <FormComponent />
      <FooterComponent />
    </>
  );
};

export default Home;
