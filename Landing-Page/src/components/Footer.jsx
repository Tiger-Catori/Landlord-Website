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
      <p>
        Lorem ipsum dolor sit amet consectetur. Leo lectus posuere tellus auctor
        non ac in. Tristique feugiat senectus ultrices m
      </p>
    </div>
  );
};

const FooterLinks = () => {
  return (
    <div className="footer-col col-one">
      <h4>Sitemap</h4>
      <ul className="footer-links site-map">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#hero">About me</a>
        </li>
        <li>
          <a href="#how-it-works">How it works</a>
        </li>
        <li>
          <a href="mailto:help4propertydeals@gmx.com" class="footer-link">
            Contact us
          </a>
        </li>
      </ul>
    </div>
  );
};

const FooterSocialLinks = () => {
  return (
    <div className="footer-col col-two">
      <h4>Follow me</h4>
      <ul className="footer-links social-links">
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
            <ion-icon name="logo-facebook"></ion-icon>Facebook
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com">
            <ion-icon name="logo-instagram"></ion-icon>Instagram
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.twitter.com">
            <ion-icon name="logo-twitter"></ion-icon>Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://web.telegram.org/a/"
          >
            <ion-icon name="navigate-circle-outline"></ion-icon>Telegram
          </a>
        </li>
      </ul>
    </div>
  );
};

const FooterAppLinks = () => {
  return (
    <div className="footer-col col-three">
      <h4>DOWNLOAD THE APP</h4>
      <div className="app-buttons">
        <a href="#google-play">
          <img src="/images/general/googleplay.webp" alt="Google Play" />
        </a>
        <a href="#app-store">
          <img src="/images/general/appstore.webp" alt="App Store" />
        </a>
      </div>
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
        &copy; <span id="current-year"></span> Michael Adeleye. All rights
        reserved.
      </p>
      {/* <p><a href="https://webmagnetism.com/">Powered by WebMagnetism.com</a></p> */}
      <p>
        <a href="#">Terms & Conditions</a>
      </p>
      <p>
        <a href="#">Privacy Policy</a>
      </p>
    </div>
  );
};
