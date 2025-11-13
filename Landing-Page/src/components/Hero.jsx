// Hero.jsx
import "../css/Hero.css";
import "../css/Button.css";

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
    <div className="hero__text">
      <h2 className="heading hero__head">
        Manage <span>Less,</span> Earn <span>More</span>
      </h2>
      <p className="hero__p">
        Are you are looking for a passive, stress-free approach to your property
        investment
      </p>
      <div className="hero__btn hero__btn-link">
        <a href="help4propertydeals@gmx.com">Speak to the Team</a>
      </div>
    </div>
  );
};

const HeroImage = () => {
  return (
    <div className="hero__image">
      <div className="container__img">
        <img
          className="hero__img"
          src="images/general/form-image.webp"
          alt="Terraced Houses (Hero Image)"
        />
      </div>
    </div>
  );
};
