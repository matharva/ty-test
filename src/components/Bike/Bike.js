import React from "react";
import "./Bike.css";
import HoverMarker from "../HoverMarker/HoverMarker";
import ArrowSVG from "../../assets/WhiteArrow.svg";
import CtaButton from "../CtaButton/CtaButton";
const Bike = ({ value }) => {
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
  return (
    <div className="bike">
      {value.changePage ? (
        <>
          <button
            className="back__button"
            onClick={() => value.setChangePage(false)}
          >
            <img src={ArrowSVG} className="rotate-45 arrow45deg" alt="" />
            <div className="arrowbtntext">BACK</div>
          </button>
          <button className="cta__left__btn">BUY ONE</button>
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
