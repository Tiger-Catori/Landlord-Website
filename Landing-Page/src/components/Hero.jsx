// Hero.jsx
import "../css/Hero.css";
import "../css/Button.css";
import ButtonLink from "./ButtonLink";

const HeroComponent = () => {
  return <Hero />;
};

export default HeroComponent;

const Hero = () => {
  return (
    <section className="section__hero" id="hero">
      <div className="hero__container">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
};

const HeroText = () => {
  return (
    <div
      className="hero__text"
      data-aos-delay="100"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <h2 className="heading hero__head">
        Passive <span>Income,</span> The <span>Easy</span> Way
      </h2>
      <p className="hero__p">
        Looking for a passive, stress-free solution for your property
        investments?
      </p>
      <ButtonLink href="mailto:info@help4landlords.org">
        Speak to our Team
      </ButtonLink>
    </div>
  );
};

const HeroImage = () => {
  return (
    <div
      className="hero__image"
      data-aos-delay="100"
      data-aos="flip-left"
      data-aos-duration="1500"
    >
      <div className="container__img">
        <img
          className="hero__img"
          src="images/general/form-image3.webp"
          alt="Terraced Houses (Hero Image)"
        />
      </div>
    </div>
  );
};
