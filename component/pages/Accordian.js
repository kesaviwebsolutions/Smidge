"use client";
import React, { useState } from "react";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(0)}>
          <span className="icon">{activeIndex === 0 ? "..." : "▼"}</span>
          <h3>Who is SMIDGE?</h3>
        </div>
        {activeIndex === 0 && (
          <div className="accordion-content">
            <p>
              SMIDGE is a tiny, adorable version of Pepe the Frog, known for his
              exaggerated expressions and popularity on social media platforms
              like Reddit.
            </p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(1)}>
          <span className="icon">{activeIndex === 1 ? "..." : "▼"}</span>
          <h3>Who is the team behind $SMIDGE?</h3>
        </div>
        {activeIndex === 1 && (
          <div className="accordion-content">
            <p>
              The team behind $SMIDGE consists of blockchain enthusiasts and
              meme culture lovers.
            </p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(2)}>
          <span className="icon">{activeIndex === 2 ? "..." : "▼"}</span>
          <h3>Where can I buy $SMIDGE?</h3>
        </div>
        {activeIndex === 2 && (
          <div className="accordion-content">
            <p>
              You can buy $SMIDGE on various decentralized exchanges and trading
              platforms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
