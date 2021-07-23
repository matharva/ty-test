import React, { useState } from "react";
import "./HoverMarker.css";
import ArrowSVG from "../../assets/Path 25.svg";
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
  return (
    <>
      <div
        // className={`hovermarker ${isVisible ? "hovermarker-style" : ""}`}
        className="hovermarker hovermarker-style"
        style={styleObject}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={handleClick}
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
