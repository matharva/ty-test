import React, { useEffect, useRef } from "react";
import "./Cta.css";
import CtaButton from "../CtaButton/CtaButton";
import Rect from "../../assets/Rectangle 3.svg";
// import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { gsap } from "gsap";
const Cta = ({ changePage }) => {
  let ctaTitle = useRef(null);
  let ctaSubTitle = useRef(null);
  let ctaText = useRef(null);
  let ctaButton = useRef(null);
  let svgRef = useRef();

  // useEffect(() => {
  //   gsap.fromTo(
  //     svgRef.current,
  //     { drawSVG: "10% 40%" },
  //     { drawSVG: "100%", duration: 2 }
  //   );
  // }, []);

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
        <div className="ctaButton" ref={(el) => (ctaButton = el)}>
          <svg
            width="176"
            height="64"
            viewBox="0 0 176 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ref={svgRef}
          >
            <rect
              className="animateBtn"
              x="1"
              y="1"
              width="174"
              height="62"
              rx="31"
              stroke="#00FFFF"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Cta;
