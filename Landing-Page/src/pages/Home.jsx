import "../css/Home.css";
import NavbarComponment from "../components/Navbar";
import HeroComponent from "../components/Hero";
import BannerComponent from "../components/Banner";
import FeaturedSection from "../components/Featured";
import AboutComponent from "../components/About";
import FaqComponent from "../components/Faqs";
import VideoComponent from "../components/Video";
import FormComponent from "../components/Form";
import FooterComponent from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavbarComponment />
      <HeroComponent />
      <BannerComponent />
      <FeaturedSection />
      <AboutComponent />
      <VideoComponent />
      <FaqComponent />
      {/* <VideoComponent />*/}
      <FormComponent />
      <FooterComponent />
    </>
  );
};

export default Home;
