import React, { useEffect, useRef } from "react";
import "./Cta.css";
import CtaButton from "../CtaButton/CtaButton";
import { gsap } from "gsap";
const Cta = ({ changePage }) => {
  let ctaTitle = useRef(null);
  let ctaSubTitle = useRef(null);
  let ctaText = useRef(null);
  let ctaButton = useRef(null);
  useEffect(() => {
    playRerverseAnimation();
  }, []);
  useEffect(() => {
    if (changePage) {
      playAnimation();
    } else {
      console.log("playing reverse animation");
      replayAnimation();
    }
    console.log("In useEffect", changePage);
  }, [changePage]);

  function playAnimation() {
    gsap.to(ctaTitle, 0.4, { opacity: 0, x: -100, ease: "power3.inOut" });
    gsap.to(ctaSubTitle, 0.4, {
      opacity: 0,
      x: -100,
      ease: "power3.inOut",
      delay: 0.2,
    });
    gsap.to(ctaText, 0.2, {
      opacity: 0,
      x: -100,
      ease: "power3.inOut",
      delay: 0.4,
    });
    gsap.to(ctaButton, 0.2, {
      opacity: 0,
      x: -100,
      ease: "power3.inOut",
      delay: 0.6,
    });
  }
  function playRerverseAnimation() {
    gsap.from(ctaTitle, 0.8, { opacity: 0, x: -200, ease: "power3.inOut" });
    gsap.from(ctaSubTitle, 0.8, {
      opacity: 0,
      x: -100,
      ease: "power3.inOut",
      delay: 0.2,
    });
    gsap.from(ctaText, 0.8, {
      opacity: 0,
      x: -100,
      ease: "power3.inOut",
      delay: 0.4,
    });
    gsap.from(ctaButton, 0.8, {
      opacity: 0,
      x: -100,
      ease: "power3.inOut",
      delay: 0.6,
    });
  }
  function replayAnimation() {
    gsap.to(ctaTitle, 0.8, { opacity: 1, x: 0, ease: "power3.inOut" });
    gsap.to(ctaSubTitle, 0.8, {
      opacity: 1,
      x: 0,
      ease: "power3.inOut",
      delay: 0.2,
    });
    gsap.to(ctaText, 0.8, {
      opacity: 1,
      x: 0,
      ease: "power3.inOut",
      delay: 0.4,
    });
    gsap.to(ctaButton, 0.8, {
      opacity: 1,
      x: 0,
      ease: "power3.inOut",
      delay: 0.6,
    });
  }
  return (
    <div className="cta__wrapper">
      <div className="cta">
        <div className="cta__header">
          <div className="cta__title" ref={(el) => (ctaTitle = el)}>
            odyssey
          </div>
          <div className="cta__subtitle" ref={(el) => (ctaSubTitle = el)}>
            ONE
          </div>
        </div>
        <div className="cta__desc" ref={(el) => (ctaText = el)}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          magnam obcaecati, nam vel voluptatem veritatis aliquid unde ratione
          quod voluptates.
        </div>
        {/* <CtaButton ref={(el) => (ctaButton = el)} /> */}
        <button className="cta__btn" ref={(el) => (ctaButton = el)}>
          BUY ONE
        </button>
      </div>
    </div>
  );
};

export default Cta;
