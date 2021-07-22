import React from "react";
import "./Cta.css";
import CtaButton from "../CtaButton/CtaButton";
const Cta = () => {
  return (
    <div className="cta__wrapper">
      <div className="cta">
        <div className="cta__header">
          <div className="cta__title">odyssey</div>
          <div className="cta__subtitle">ONE</div>
        </div>
        <div className="cta__desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          magnam obcaecati, nam vel voluptatem veritatis aliquid unde ratione
          quod voluptates.
        </div>
        <CtaButton />
      </div>
    </div>
  );
};

export default Cta;
