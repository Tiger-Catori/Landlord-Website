import React from "react";
import "../css/Featured.css";

const cardData = [
  {
    id: 1,
    images: [{ id: 1, img: "featured-image-1.webp", alt: "Image 1A" }],
    text: {
      text_h2: "No More Voids",
      text_p1:
        "Our landlords receive a constant monthly rental payment throughout the entire duration of our agreement. Once we take your property on long-term (typically 3–5 years), all tenants become our responsibility. We handle every aspect of the tenancy — including sourcing, vetting, contracts, and legal obligations — ensuring full compliance and professional management. As our client, you enjoy a smooth, effortless experience with no day-to-day involvement required.",
      text_p2:
        "Your property is professionally managed by our experienced team and occupied by high-quality professionals. Professional cleaning ensures it remains in great condition, protecting your investment.",
    },
  },
  {
    id: 2,
    images: [{ id: 1, img: "featured-image-2.webp", alt: "Image 2A" }],
    text: {
      text_h2: "Complimentary Cosmetic Upgrades",
      text_p1:
        "Our dedicated team carries out complimentary cosmetic upgrades and fully furnishes and stages the property to maximise its appeal to high-quality tenants. We take responsibility for the ongoing management of the property, ensuring it is well cared for and occupied by reliable residents. Regular cleaning keeps your home in excellent condition throughout the term of our agreement, helping to protect and preserve your investment.",
      text_p2:
        "This adds value to your property, and our regular professional cleaning ensures it will be returned to you in excellent condition, giving you peace of mind.",
    },
  },
  {
    id: 3,
    images: [{ id: 1, img: "featured-image-3.webp", alt: "Image 3A" }],
    text: {
      text_h2: "Flexible Ownership Options",
      text_p1:
        "At the conclusion of our agreement, you will have multiple options. You can renew, or if it suits your long-term goals, Help4Landlords can even purchase your property directly, ensuring a smooth, hassle-free transaction with no estate agent fees.",
      text_p2:
        "This straightforward process involves no additional fees or unnecessary complications.",
    },
  },
];

const FeaturedComponent = () => {
  return <FeaturedSection />;
};
export default FeaturedComponent;

const FeaturedSection = () => {
  return (
    <div className="featured__section" id="how-it-works">
      <h2 className="featured__text__title" id="featured-title">
        Quick wins, rewarding outcomes
      </h2>
      <p className="featured__text__description" id="featured__p">
        Help4Landlords delivers a level of service that goes beyond traditional
        letting. Our modern, all-in-one solution removes the usual burdens
        landlords face—ensuring properties are expertly cared for while
        providing a genuinely hands-off, passive income.
      </p>
      <div className="featured__cards-wrapper">
        {cardData.map((card) => (
          <FeaturedCard key={card.id} images={card.images} text={card.text} />
        ))}
      </div>
    </div>
  );
};

const FeaturedCard = ({ images, text }) => {
  return (
    <div className="featured__card">
      <FeaturedImage featuredImages={images} />
      <FeaturedText featuredText={[text]} />
    </div>
  );
};

const FeaturedText = ({ featuredText }) => {
  return (
    <div className="featured__text">
      {featuredText.map((item, index) => (
        <React.Fragment key={index}>
          <h2 className="featured__text__title">{item.text_h2}</h2>
          <p className="featured__text__description">{item.text_p1}</p>
          <p className="featured__text__description">{item.text_p2}</p>
        </React.Fragment>
      ))}
    </div>
  );
};

const FeaturedImage = ({ featuredImages }) => {
  return (
    <div className="featured__image">
      {featuredImages.map((item) => (
        <img
          key={item.id}
          src={`/images/propertyimages/${item.img}`}
          alt={item.alt}
          className="featured__img"
        />
      ))}
    </div>
  );
};
