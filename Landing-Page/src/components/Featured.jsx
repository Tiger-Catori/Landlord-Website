import React from "react";
import "../css/Featured.css";

const cardData = [
  {
    id: 1,
    images: [{ id: 1, img: "featured-image-1.webp", alt: "Image 1A" }],
    text: {
      text_h2: "We offer guaranteed rental income",
      text_p1:
        "We look to let properties long-term, typically for 3-5 years, giving landlords security over their property investment while ensuring no void periods. During that time, we take care of everything, providing you with a completely hands-off investment.",
      text_p2:
        "Your property will be professionally managed and occupied by high-quality professional tenants, with weekly professional cleaning to keep it in the best possible condition.",
    },
  },
  {
    id: 2,
    images: [{ id: 1, img: "featured-image-2.webp", alt: "Image 2A" }],
    text: {
      text_h2: "We complete free cosmetic refurbs",
      text_p1:
        "Our power team will carry out a free cosmetic upgrade and fully furnish your property to attract high-end professional tenants.",
      text_p2:
        "This means you benefit from added value to your property, which is maintained through weekly professional cleaning—giving you peace of mind that your property will be returned to you in great condition.",
    },
  },
  {
    id: 3,
    images: [{ id: 1, img: "featured-image-3.webp", alt: "Image 3A" }],
    text: {
      text_h2: "We provide purchase options",
      text_p1:
        "At the end of our agreement, we offer several options, including the possibility for Rent4U to purchase your property if it aligns with your long-term goals.",
      text_p2: "No fees, no agents, and no hassle!",
    },
  },
];

const FeaturedComponent = () => {
  return <FeaturedSection />;
};
export default FeaturedComponent;

const FeaturedSection = () => {
  return (
    <div className="featured__section">
      <h2 className="featured__text__title" id="featured-title">
        Minimal effort, maximum reward
      </h2>
      <p className="featured__text__description" id="featured__p">
        Help4Landlords offers landlords an unparalleled service, far exceeding
        traditional letting. Our comprehensive, modern solution tackles the
        challenges landlords encounter, ensuring their properties are impeccably
        maintained while generating a truly passive income.
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
