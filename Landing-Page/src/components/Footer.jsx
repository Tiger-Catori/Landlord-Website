import React, { useEffect } from "react";
import "../css/Footer.css";

const FooterComponent = () => {
  <Footer />;
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer-row">
          <FooterLogo />
          <div className="footer-center">
            <FooterLinks /> {/* Sitemap column */}
            <FooterSocialLinks />
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

const FooterLogo = () => {
  return (
    <div className="footer-col logo-footer">
      <img src="/images/logos/Logo-icon.webp" alt="Help4Landlords Logo" />
      <p>Lorem ipsum dolor sit amet consectetur. Leo lectus petegs</p>
    </div>
  );
};

const FooterLinks = () => {
  const sitemapLinks = [
    { name: "Home", url: "#" },
    { name: "About me", url: "#hero" },
    { name: "How it works", url: "#how-it-works" },
    { name: "Contact us", url: "mailto:help4propertydeals@gmx.com" },
  ];

  return (
    <div className="footer-col col-one">
      <h4>Sitemap</h4>
      <ul className="footer-links site-map">
        {sitemapLinks.map((link) => (
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterSocialLinks = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "logo-facebook",
      url: "https://www.facebook.com",
    },
    {
      name: "Instagram",
      icon: "logo-instagram",
      url: "https://www.instagram.com",
    },
    {
      name: "Twitter",
      icon: "logo-twitter",
      url: "https://www.twitter.com",
    },
    {
      name: "Telegram",
      icon: "navigate-circle-outline",
      url: "https://web.telegram.org/a/",
    },
  ];

  return (
    <div className="footer-col col-two">
      <h4>Follow me</h4>
      <ul className="footer-links social-links">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <a target="_blank" rel="noreferrer" href={link.url}>
              <ion-icon name={link.icon}></ion-icon>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterBottom = () => {
  useEffect(() => {
    const currentYearElement = document.getElementById("current-year");
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <div className="footer__bottom">
      <p>
        &copy; <span id="current-year"></span> Help4Landlords. All rights
        reserved.
      </p>

      <p>
        <a href="#">Terms & Conditions</a>
      </p>
      <p>
        <a href="#">Privacy Policy</a>
      </p>
    </div>
  );
};
