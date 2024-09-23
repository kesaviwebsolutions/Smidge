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
              Most of us degens are too caught up hunting for the "the next banger" to handle our women's needs, whether it’s emotional or... you know, the other stuff. That’s where Sancho comes in — perfect for the typical degen who’s always grinding and just doesnt have the time to put in the work
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
