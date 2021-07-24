import React, { useRef, useEffect } from "react";
import "./BikeDetail.css";
// import BikeImage from "../../assets/bikeweb_05-Current-View.png";
import BikeImage from "../../assets/bikeweb_05-Current-View.png";
import { gsap } from "gsap";
const BikeDetail = ({ changePage, scrollDown, upRef }) => {
  console.log(scrollDown);
  let detailTitle = useRef();
  let detailSubtitle = useRef();
  let detailText = useRef();
  let detailImg = useRef();

  useEffect(() => {
    if (changePage) playAnimation();
    else {
      // scrollDown();
      scrollHere();
    }
  }, [changePage]);

  const el = useRef(null);
  function scrollHere() {
    el.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }
  // const el = useRef(null);
  // function scrollHere() {
  //   el.current.scrollIntoView({ block: "end", behavior: "smooth" });
  // }

  function playAnimation() {
    gsap.from(detailTitle, 0.8, { opacity: 0, x: -200, ease: "power3.inOut" });
    gsap.from(detailSubtitle, 0.8, {
      opacity: 0,
      x: -100,
      ease: "power3.inOut",
      delay: 0.2,
    });
    gsap.from(detailText, 0.8, {
      opacity: 0,
      x: -100,
      ease: "power3.inOut",
      delay: 0.4,
    });
    gsap.from(detailImg, 0.8, {
      opacity: 0,
      y: 60,
      ease: "power3.inOut",
      delay: 0.6,
    });
  }

  return (
    <div>
      <div className="" ref={el}></div>
      {/* <div className="" ref={upRef}></div> */}
      <div className="cover-text__header">
        <div
          className="cover-text__title"
          ref={(el) => (detailTitle = el)}
          // onClick={() => scrollHere()}
        >
          The best Brakes <br /> in the world
        </div>
        <div
          className="cover-text__subtitle"
          ref={(el) => (detailSubtitle = el)}
        >
          SRAM CODE R
        </div>
      </div>
      <div className="cover-text__split" ref={(el) => (detailText = el)}>
        <div className="cover-text__left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quas
          sapiente cupiditate facilis deserunt iure? quas sapiente cupiditate
          facilis deserunt iure?
        </div>
        <div className="cover-text__right">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quas
          sapiente cupiditate facilis deserunt iure? quas sapiente cupiditate
          facilis deserunt iure?
        </div>
      </div>
      <div className="img_container" ref={(el) => (detailImg = el)}>
        <img src={BikeImage} alt="" />
        <div className="img_container__content">
          <div className="img_container__symbol"></div>
          <div className="img_container__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetail;
