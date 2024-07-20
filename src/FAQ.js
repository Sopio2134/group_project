// src/FAQ.js
import React, { useState, useEffect } from 'react'; 
import './FAQ.css';
import faqImage from './faq.jpg'; // Import the FAQ image
import icon from './icon.svg'; // Import the new icon

const FAQ = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const questions = [
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also offer alternative payment options such as PayPal and Apple Pay for your convenience." },
    { question: "How long will it take to receive my order?", answer: "Delivery times vary depending on your location and the items you've ordered. In general, most orders are processed and shipped within 1-2 business days." },
    { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to select countries. Please note that additional shipping fees and customs duties may apply. Contact our customer service team for more information about shipping options." },
    { question: "What is your return policy?", answer: "We want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, you can return it within 30 days for a full refund or exchange." },
    { question: "Do you offer assembly services for furniture?", answer: "While most of our furniture is designed for easy assembly and comes with detailed instructions, we also offer optional assembly services for an additional fee." },
    { question: "Are your products covered by a warranty?", answer: "Yes, all of our products are covered by a warranty against defects in materials and workmanship. The length and terms of the warranty may vary depending on the product." },
  ];

  const toggleVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  useEffect(() => {
    // Update the document title when the component mounts
    document.title = 'FAQ - Vaseb Webflow Ecommerce';
  }, []);

  return (
    <div className="faq-container">
      <div className="faq-header-container">
        <div className="faq-subtitle">
          <img src={icon} alt="FAQ Icon" className="faq-icon" />
          FAQ's
        </div>
        <h1 className="faq-main-title">Frequently Asked Questions</h1>
      </div>
      <div className="faq-content">
        <div className="faq-image">
          <img src={faqImage} alt="FAQ Illustration" />
        </div>
        <div className="faq-questions">
          {questions.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleVisibility(index)}>
                {item.question}
                <span className="faq-toggle">{visibleIndex === index ? '-' : '+'}</span>
              </div>
              {visibleIndex === index ? (
                <>
                  <div className="faq-answer">{item.answer}</div>
                  <div className="faq-divider faq-divider-black"></div>
                </>
              ) : (
                <div className="faq-divider faq-divider-gray"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;