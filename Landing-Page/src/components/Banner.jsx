import "../css/Banner.css";

const BannerComponent = () => {
  return <Banner />;
};
export default BannerComponent;

const Banner = () => {
  const bannerItems = [
    { id: 1, img: "prs-logo.svg", alt: "Property Redress Scheme" },
    { id: 2, img: "nhs-logo.svg", alt: "National Health Service" },
    { id: 3, img: "property-ombudsman-logo.svg", alt: "Property Ombudsman" },
    { id: 4, img: "ico-logo.svg", alt: "Information Commissioner's Office" },
    {
      id: 5,
      img: "nrla2-logo.webp",
      alt: "National Residential Landlords Association",
    },
    {
      id: 6,
      img: "tds-logo.webp",
      alt: "Tenancy Deposit Scheme",
    },
  ];

  return (
    <section className="section__banner">
      <div className="banner__track" id="banner">
        {/* FIRST COPY */}
        <div className="banner__items">
          {bannerItems.map((item) => (
            <img
              key={`a-${item.id}`}
              src={`/images/banner/svg/${item.img}`}
              alt={item.alt}
              className="banner__img"
            />
          ))}
        </div>

        {/* SECOND COPY — required for seamless loop */}
        <div className="banner__items" aria-hidden="true">
          {bannerItems.map((item) => (
            <img
              key={`b-${item.id}`}
              src={`/images/banner/svg/${item.img}`}
              alt={item.alt}
              className="banner__img"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
