import React, { useRef, useEffect, useState } from "react";
import "./Bike.css";
import HoverMarker from "../HoverMarker/HoverMarker";
import ArrowSVG from "../../assets/WhiteArrow.svg";
import BlueArrowSVG from "../../assets/Path 25.svg";
import CtaButton from "../CtaButton/CtaButton";
import { gsap } from "gsap";
const Bike = ({ value }) => {
  let backBtnAnim = useRef(null);
  let buyBtnAnim = useRef(null);

  const [isBlueArrow, setIsBlueArrow] = useState(false);

  const items = [
    {
      title: "Brake",
      subtitle: "SRAM CODE R",
      top: "155px",
      left: "693px",
    },
    {
      title: "Light Seat",
      subtitle: "Crygolite Hotrod 50",
      top: "305px",
      left: "363px",
    },
    {
      title: "Motor",
      subtitle: "Yahama PW-X2",
      top: "630px",
      left: "240px",
    },
    {
      title: "Battery",
      subtitle: "Juiced 52V Battery Pack",
      top: "520px",
      left: "538px",
    },
    {
      title: "Wheels",
      subtitle: "DT Swiss Mission HYBRID",
      top: "420px",
      left: "868px",
    },
  ];
  useEffect(() => {
    if (value.changePage) playAnimation();
  }, [value.changePage]);

  function playAnimation() {
    gsap.from(backBtnAnim.current, 0.8, {
      opacity: 0,
      y: 100,
      ease: "power3.inOut",
      delay: 0.2,
    });
    gsap.from(buyBtnAnim.current, 0.8, {
      opacity: 0,
      y: 100,
      ease: "power3.inOut",
      delay: 0.2,
    });
  }
  return (
    <div className="bike">
      {value.changePage ? (
        <>
          <div
            className="back__button"
            onClick={() => value.setChangePage(false)}
            ref={backBtnAnim}
            onMouseEnter={() => setIsBlueArrow(true)}
            onMouseLeave={() => setIsBlueArrow(false)}
          >
            <img
              src={isBlueArrow ? BlueArrowSVG : ArrowSVG}
              className="rotate-45 arrow45deg"
              alt=""
            />
            <div className="arrowbtntext">BACK</div>
          </div>
          <div className="cta__left__btn">
            <div className="ctaButton" ref={buyBtnAnim}>
              <svg
                width="176"
                height="64"
                viewBox="0 0 176 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
        </>
      ) : null}

      {!value.changePage &&
        items.map((item) => {
          return <HoverMarker props={item} value={value} />;
        })}
    </div>
  );
};

export default Bike;
