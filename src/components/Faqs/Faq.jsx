import React, { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const FaqSection = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in full-stack web development using the MERN stack (MongoDB, Express.js, React.js, Node.js). I build responsive websites, REST APIs, admin dashboards, and dynamic web applications tailored to business needs.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on complexity. A simple landing page takes 3–5 days, while a full-stack web application may take 2–4 weeks.",
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Yes, I offer revisions to ensure the final product meets your expectations. Client satisfaction is my priority.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and maintain clear communication through meetings, emails, and messaging platforms.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. All websites I build are fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <div className="section">
        <h1>FAQs</h1>
      {FaqSection.map((faq, index) => (
        <div key={index} className="container">
          <div className="question">
            <p onClick={() => toggleFaq(index)}>{faq.question}</p>
          </div>
          {openIndex === index && (
            <div className="answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
