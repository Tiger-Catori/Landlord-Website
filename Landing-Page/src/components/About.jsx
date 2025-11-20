import React from "react";
import "../css/About.css";

const teamCardData = [
  {
    id: 1,
    images: [{ id: 1, img: "team-2.webp", alt: "team-2" }],
    text: { text_name: "Michael Adeleye", text_job: "Founder & CEO" },
  },
  {
    id: 2,
    images: [{ id: 1, img: "team-3.webp", alt: "team-3" }],
    text: { text_name: "Sera Adeleye", text_job: "Co-Founder" },
  },
  {
    id: 3,
    images: [{ id: 1, img: "team-6.webp", alt: "team-6" }],
    text: { text_name: "Blest Adeleye", text_job: "Manager" },
  },
];

const AboutComponent = () => {
  return <AboutSection />;
};
export default AboutComponent;

const AboutSection = () => {
  return (
    <div className="about__section" id="about">
      <div className="about__container">
        <AboutText />
        <div className="about__cards-wrapper">
          {teamCardData.map((card, index) => (
            <AboutCard
              key={card.id}
              images={card.images}
              text={card.text}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutText = () => {
  return (
    <div className="about__text">
      <h2 className="about__text__title" id="about-title">
        About Help4Landlords
      </h2>
      <p className="=about__text__description" id="about__p">
        As industry leaders, we offer guaranteed rent and outstanding value for
        landlords. Our expertise is in delivering high-quality shared (HMO) and
        serviced accommodation that keeps your property fully managed and
        completely hassle-free.
      </p>
      <p className="=about__text__description" id="about__p">
        We recognise the importance of providing tenants with a comfortable,
        safe, and welcoming living environment, while ensuring landlords enjoy a
        profitable and hands-off investment.
      </p>
      <p className="=about__text__description" id="about__p">
        Partner with Help4Landlords and see the difference a dedicated,
        experienced, and professional team can make.
      </p>
    </div>
  );
};

const AboutCard = ({ images, text, index }) => {
  return (
    <div
      className="about__card"
      data-aos="flip-left"
      data-aos-duration="1200"
      data-aos-easing="ease-out-quart"
      data-aos-delay={index * 800} // 0ms, 1000ms, 2000ms
    >
      <TeamImage teamImages={images} />
      <TeamText teamText={text} />
    </div>
  );
};

const TeamImage = ({ teamImages }) => {
  return (
    <div className="team__card__image">
      {teamImages.map((item) => (
        <img
          key={item.id}
          src={`/images/team-members/${item.img}`}
          alt={item.alt}
          className="about__img"
        />
      ))}
    </div>
  );
};

const TeamText = ({ teamText }) => {
  return (
    <div className="team__card__text">
      <h2 className="team__name">{teamText.text_name}</h2>
      <p className="team__job">{teamText.text_job}</p>
    </div>
  );
};
