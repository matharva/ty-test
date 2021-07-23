import React, { useState, useRef, useEffect } from "react";
import "./HoverMarker.css";
import ArrowSVG from "../../assets/Path 25.svg";
import { gsap } from "gsap";
const HoverMarker = ({ props, value }) => {
  // console.log(props, value);
  const styleObject = {
    top: props.top,
    right: props.right,
    down: props.down,
    left: props.left,
  };
  function handleClick() {
    value.setChangePage(true);
  }
  const [isVisible, setIsVisible] = useState(false);
  let markerRef = useRef();
  useEffect(() => {
    if (value.changePage) {
      playAnimation();
    } else replayAnimation();
    console.log("In useEffect", value.changePage);
  }, [value.changePage]);

  // useEffect(() => {
  //   playReverseAnimation();
  // }, []);

  function playAnimation() {
    gsap.to(markerRef, 0.8, {
      opacity: 0,
      x: props.markerX,
      y: props.markerY,
      ease: "power3.inOut",
    });
  }
  // function playReverseAnimation() {
  //   gsap.from(markerRef, 0.4, { opacity: 1, x: 0, ease: "power3.inOut" });
  // }
  function replayAnimation() {
    gsap.to(markerRef, 0.8, { opacity: 1, x: 0, y: 0, ease: "power3.inOut" });
  }
  return (
    <>
      <div
        // className={`hovermarker ${isVisible ? "hovermarker-style" : ""}`}
        className="hovermarker hovermarker-style"
        style={styleObject}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={handleClick}
        ref={(el) => (markerRef = el)}
      >
        {/* <div className="arrow__svg"></div> */}
        <div className="arrow__svg__container">
          <img src={ArrowSVG} alt="" className="arrow__svg rotate-0" />
          <img src={ArrowSVG} alt="" className="arrow__svg rotate-90" />
          <img src={ArrowSVG} alt="" className="arrow__svg rotate-270" />
          <img src={ArrowSVG} alt="" className="arrow__svg rotate-180" />
        </div>
        <div className="hovermarker__svg"></div>
        <div className={`hovermarker__text ${isVisible ? "" : "disp-none"}`}>
          <div className="hovermarker__title">{props.title}</div>
          <div className="hovermarker__subtitle">{props.subtitle}</div>
        </div>
      </div>
    </>
  );
};

export default HoverMarker;
