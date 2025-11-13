import "../css/Banner.css";

const BannerComponent = () => {
  return <Banner />;
};
export default BannerComponent;

const Banner = () => {
  // Banner Item Data with image and filenames.
  const bannerItems = [
    { id: 1, img: "excel-logo.webp", alt: "London Excel Arena" },
    { id: 2, img: "nhs-logo.webp", alt: "NHS" },
  ];
  return (
    <section className="section__banner">
      <div className="banner__container">
        <BannerItem bannerItems={bannerItems} />
      </div>
    </section>
  );
};

const BannerItem = ({ bannerItems }) => {
  return (
    <div className="banner__items">
      {bannerItems.map((item) => (
        <img
          key={item.id}
          src={`/images/banner/${item.img}`}
          alt={item.alt}
          className="banner__img"
        />
      ))}
    </div>
  );
};
