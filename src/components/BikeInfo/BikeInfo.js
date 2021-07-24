import React, { useEffect, useRef, useState } from "react";
import "./BikeInfo.css";
import BikeImage from "../../assets/img_bike1.png";
import { gsap } from "gsap";
const BikeInfo = () => {
  let infoTitle = useRef();
  let infoDesc = useRef();
  let infoImg = useRef();
  let infoPoints = useRef();
  let infoImgText = useRef();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const coverText = document.querySelector(".cover-text");
    coverText.addEventListener("scroll", () => {
      // console.log(coverText.scrollTop);
      if (coverText.scrollTop > 100) setScroll(true);
      else setScroll(false);
    });
  }, []);
  const features = [
    "4-Piston Caliper",
    "All-new Code design based on Guide Architecture",
    "Designed specifically to handle heavy-duty demands",
  ];
  const sectionRef = useRef();
  useEffect(() => {
    playAnimation();
  }, [scroll]);

  function playAnimation() {
    gsap.from(infoTitle, 0.8, { opacity: 0, x: -200, ease: "power3.inOut" });
    gsap.from(infoDesc, 0.8, {
      opacity: 0,
      x: -100,
      ease: "power3.inOut",
      delay: 0.2,
    });
    gsap.from(infoImg, 0.8, {
      opacity: 0,
      // rotateY: 180,
      scale: 1,
      ease: "power3.inOut",
      delay: 0.4,
    });
    gsap.from(infoImgText, 0.4, {
      opacity: 0,
      rotateY: 180,
      // scale: 1,
      ease: "power3.inOut",
      delay: 0.4,
    });
    gsap.from(infoPoints, 0.8, {
      opacity: 0,
      x: -100,
      ease: "power3.inOut",
      delay: 0.4,
    });
  }

  return (
    <div className="bikeinfo__parent" ref={sectionRef}>
      <div className=""></div>
      <div className="bikeinfo__content">
        <div
          className="bikeinfo__content__title"
          ref={(el) => (infoTitle = el)}
        >
          Rear brakes
        </div>
        <div className="bikeinfo__content__desc" ref={(el) => (infoDesc = el)}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
          voluptatibus? Perspiciatis molestias Perspiciatis molestias, ipsa, nam
          tempora ipsa, nam tempora!
        </div>
      </div>
      <div className="bikeinfo__img__container" ref={(el) => (infoImg = el)}>
        <div className="bike__info__text" ref={(el) => (infoImgText = el)}>
          R
        </div>
        <img src={BikeImage} alt="" />
      </div>
      <div className="bikeinfo__info" ref={(el) => (infoPoints = el)}>
        <div className="bikeinfo__info__header">Features</div>
        <div className="bikeinfo__info__points">
          {features.map((feat) => {
            return <li>{feat}</li>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BikeInfo;
