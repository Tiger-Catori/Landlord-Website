import "../css/Banner.css";

const BannerComponent = () => {
  return <Banner />;
};
export default BannerComponent;

const Banner = () => {
  // Banner Item Data with image and filenames.
  // const bannerItems = [
  //   { id: 1, img: "prs-logo.webp", alt: "Property Redress Scheme" },
  //   { id: 2, img: "nhs-logo.webp", alt: "National Health Service" },
  //   { id: 3, img: "ico-logo.webp", alt: "Information Commissioner's Office" },
  //   { id: 4, img: "property-ombudsman-logo.webp", alt: "Property Ombudsman" },
  //   {
  //     id: 5,
  //     img: "nrla-logo.webp",
  //     alt: "National Residential Landlords Association",
  //   },
  // ];

  const bannerItems = [
    { id: 1, img: "prs-logo.svg", alt: "Property Redress Scheme" },
    { id: 2, img: "nhs-logo.svg", alt: "National Health Service" },
    { id: 3, img: "property-ombudsman-logo.svg", alt: "Property Ombudsman" },
    { id: 4, img: "ico-logo.svg", alt: "Information Commissioner's Office" },
    // { id: 4, img: "property-ombudsman-logo.svg", alt: "Property Ombudsman" },
    {
      id: 5,
      img: "nrla2-logo.webp",
      alt: "National Residential Landlords Association",
    },
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
          // src={`/images/banner/webp/${item.img}`}
          src={`/images/banner/svg/${item.img}`}
          alt={item.alt}
          className="banner__img"
        />
      ))}
    </div>
  );
};
