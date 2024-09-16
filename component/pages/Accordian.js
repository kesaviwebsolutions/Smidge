"use client";
import React, { useState } from "react";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container ">
      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(0)}>
          <span className="icon">{activeIndex === 0 ? "..." : "▼"}</span>
          <h3>Who is SANCHO?</h3>
        </div>
        {activeIndex === 0 && (
          <div className="accordion-content fs2 pa2">
            <p className="fs15">
              SANCHO is a tiny, adorable version of Pepe the Frog, known for his
              exaggerated expressions and popularity on social media platforms
              like Reddit.
            </p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(1)}>
          <span className="icon">{activeIndex === 1 ? "..." : "▼"}</span>
          <h3>Who is the team behind $SANCHO?</h3>
        </div>
        {activeIndex === 1 && (
          <div className="accordion-content fs2 pa2">
            <p className="fs15">
              The team behind $SANCHO consists of blockchain enthusiasts and
              meme culture lovers.
            </p>
          </div>
        )}
      </div>

      <div className="accordion-item">
        <div className="accordion-header" onClick={() => toggleAccordion(2)}>
          <span className="icon">{activeIndex === 2 ? "..." : "▼"}</span>
          <h3>Where can I buy $SANCHO?</h3>
        </div>
        {activeIndex === 2 && (
          <div className="accordion-content fs2 pa2">
            <p className="fs15">
              You can buy $SANCHO on various decentralized exchanges and trading
              platforms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
