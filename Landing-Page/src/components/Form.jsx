import "../css/Form.css";

const FormComponent = () => {
  return <FormSection />;
};

export default FormComponent;

const FormSection = () => {
  return (
    <>
      <section className="section section__form">
        <div className="form__container">
          <Form />

          <div
            className="container__image"
            data-aos="flip-left"
            data-aos-duration="1500"
          >
            <img src="images/general/form-image.webp" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

const Form = () => {
  return (
    <div
      className="form__section"
      id="form2__box"
      data-aos="flip-right"
      data-aos-duration="1500"
    >
      {/* <form action="submit_form.php" method="POST" className="web__form">*/}
      <form action="" method="POST" className="web__form">
        <FormHeading />

        <div className="input__box">
          {/* <StrategyDropdown />*/}
          <FormInputs />
        </div>

        <AgreementCheckbox />

        <button className="button red-button btn__form">
          <div className="button-content">
            <span className="text">Get Started</span>
          </div>
        </button>

        <HowItWorks />
      </form>
    </div>
  );
};

const FormHeading = () => (
  <div className="heading__container">
    <h1 className="heading">GET STARTED TODAY!</h1>
    <p>Let us know about you and your goals</p>
  </div>
);

const strategies = [
  "Simple BTL",
  "HMO",
  "Rent 2 Rent",
  "Serviced Accommodation",
  "Other",
];

const StrategyDropdown = () => (
  <div className="dropdown">
    <div className="select-menu">
      <div className="select-btn">
        <span className="selected">What strategy are you looking to do?</span>
        <i className="bx bxs-chevron-down"></i>
      </div>
    </div>

    <ul className="options">
      {strategies.map((strategy) => (
        <li key={strategy} className="option">
          <span>{strategy}</span>
        </li>
      ))}
    </ul>
  </div>
);

const FormInputs = () => (
  <>
    <input type="text" className="input" name="name" placeholder="Full name" />
    <input
      type="email"
      className="input"
      name="email"
      placeholder="Email address"
    />
    <input
      type="tel"
      className="input"
      name="phone"
      placeholder="Phone number"
    />
    <textarea
      id="message"
      name="message"
      className="textarea"
      placeholder="Message..."
      autoComplete="off"
    />
  </>
);

const AgreementCheckbox = () => (
  <div className="checkbox-container">
    <input type="checkbox" id="subscribe" name="subscribe" />
    <label htmlFor="subscribe" className="label">
      I agree to have my information stored&nbsp;
      <span>
        <a href="#">Privacy Policy.</a>
      </span>
    </label>
  </div>
);

const HowItWorks = () => (
  <div className="how-it-works">
    <h1>How it works</h1>
    <div className="steps">
      <img src="images/general/form-steps.webp" alt="" />
    </div>
  </div>
);
