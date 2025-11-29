import "../css/Faqs.css";
import { useState } from "react";

const data = [
  {
    id: 1,
    question: "What are the main benefits for me as a landlord?",
    answer:
      "You receive guaranteed monthly rent with no voids, significantly less admin, and minimal involvement in day-to-day issues, while the operator manages tenants and maintenance to keep the property running smoothly.",
  },
  {
    id: 2,
    question: "What risks should I be aware of?",
    answer:
      "The main risks involve choosing a reliable operator and ensuring compliance with licensing, mortgage conditions, and insurance, which is why due diligence and a clear contract are essential to protect your interests.",
  },
  {
    id: 3,
    question: "How do you ensure the properties are taken care of?",
    answer:
      "Our business model relies on maintaining properties in excellent condition. We include regular maintenance and handle tenant-caused repairs to protect the property's value and ensure smooth tenancies. We also conduct rigorous screening to attract high-quality tenants.",
  },
  {
    id: 4,
    question: "Who is responsible for HMO licensing?",
    answer:
      "Responsibility varies by agreement, but both landlord and operator must ensure the correct HMO licence is in place, with roles clearly defined in the contract to prevent compliance issues or fines.",
  },
  {
    id: 5,
    question: "Do I still have legal responsibilities?",
    answer:
      "Yes, you remain responsible for the property's overall compliance, ensuring safety standards, certifications, and HMO regulations are met, even though the operator handles daily management.",
  },
  {
    id: 6,
    question: "How long are rent-to-HMO contracts?",
    answer:
      "Contracts typically last between 3 and 5 years, offering stable and predictable income, with clearly defined terms for renewals, responsibilities, and what happens at the end of the term.",
  },
  {
    id: 7,
    question: "Will this affect my mortgage or insurance?",
    answer:
      "Yes, your lender and insurer must be informed because some products restrict subletting or HMO use; getting written consent protects your cover and avoids breaching policy conditions.",
  },
  {
    id: 8,
    question: "What happens at the end of the contract?",
    answer:
      "The agreement specifies whether it ends, renews, or transitions, and outlines exactly how tenants, property condition, and handover will be managed to ensure a smooth and predictable process.",
  },
];

const FaqComponent = () => {
  return <FaqWrapper />;
};
export default FaqComponent;

const FaqWrapper = () => {
  return (
    <div className="faq__wrapper" id="faqs">
      <Accordion />
    </div>
  );
};

const Accordion = () => {
  const [activeIndices, setActiveIndices] = useState([]); // Tracks all open item indices

  const toggleAccordion = (index) => {
    setActiveIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        // Remove index if it's already active
        return prevIndices.filter((i) => i !== index);
      } else {
        // Add index to active indices
        return [...prevIndices, index];
      }
    });
  };

  return (
    <div className="accordion">
      <FaqText />

      {data.map((item, index) => {
        const animation = index % 2 === 0; // index 0,2,4,... = odd numbered items

        return (
          <FaqItem
            key={item.id}
            item={item}
            index={index}
            isActive={activeIndices.includes(index)}
            onClick={() => toggleAccordion(index)}
            data-aos={animation ? "fade-right" : "fade-left"}
            data-aos-duration="2000"
            data-aos-delay={index * 250}
            data-aos-easing="ease-in-out"
            // data-aos-easing="ease-out-quart"
          />
        );
      })}
    </div>
  );
};

const FaqItem = ({ item, isActive, onClick, ...props }) => {
  return (
    <div className="faq-item" {...props}>
      <FaqQuestion
        question={item.question}
        isActive={isActive}
        onClick={onClick}
      />
      <FaqAnswer answer={item.answer} isActive={isActive} />
    </div>
  );
};

const FaqQuestion = ({ question, isActive, onClick }) => {
  return (
    <div
      className={`faq__question ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <h3>{question}</h3>
      <span className="toggle-icon">{isActive ? "−" : "+"}</span>
    </div>
  );
};

const FaqAnswer = ({ answer, isActive }) => {
  return (
    <div className={`faq__answer ${isActive ? "open" : ""}`}>
      <p>{answer}</p>
    </div>
  );
};

const FaqText = () => {
  return (
    <div className="faq__text">
      <h2
        className="faq__text__title"
        id="faq-title"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Frequently Asked Questions
      </h2>
      {/* <p className="faq__text__description" id="faq__p">

      </p>*/}
    </div>
  );
};
