import React, { useEffect, useRef } from "react";
import Item from "../../assets/Path 31.svg";
import "./Details.css";
import { gsap } from "gsap";
const Details = () => {
  let detailsRef1 = useRef();
  let detailsRef2 = useRef();
  let detailsRef3 = useRef();
  // const detailsText = [
  //   { title: "Speed", text: "80.6KM/H" },
  //   { title: "Material", text: "CARBON (CF)" },
  //   { title: "Sizes", text: "S, M, L, XL" },
  // ];
  useEffect(() => {
    playAnimation();
  }, []);

  function playAnimation() {
    gsap.from(detailsRef1, 0.8, {
      opacity: 0,
      y: 100,
      ease: "power3.inOut",
      delay: 0.2,
    });
    gsap.from(detailsRef2, 0.8, {
      opacity: 0,
      y: 100,
      ease: "power3.inOut",
      delay: 0.4,
    });
    gsap.from(detailsRef3, 0.8, {
      opacity: 0,
      y: 100,
      ease: "power3.inOut",
      delay: 0.6,
    });
  }
  return (
    <div className="details">
      {/* Details Item Start */}

      <div className="details__item" ref={(el) => (detailsRef1 = el)}>
        <div className="details__svg__container">
          <img src={Item} alt="" />
        </div>
        <div className="details__text">
          <div className="details__text__header">Speed</div>
          <div className="details__text__desc">80.6KM/H</div>
        </div>
      </div>
      <div className="details__item" ref={(el) => (detailsRef2 = el)}>
        <div className="details__svg__container">
          <img src={Item} alt="" />
        </div>
        <div className="details__text">
          <div className="details__text__header">Material</div>
          <div className="details__text__desc">CARBON (CF)</div>
        </div>
      </div>
      <div className="details__item" ref={(el) => (detailsRef3 = el)}>
        <div className="details__svg__container">
          <img src={Item} alt="" />
        </div>
        <div className="details__text">
          <div className="details__text__header">Sizes</div>
          <div className="details__text__desc">S, M, L, XL</div>
        </div>
      </div>

      {/* Details Item End */}
    </div>
  );
};

export default Details;
