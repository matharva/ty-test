import React from "react";
import "./Bike.css";
import HoverMarker from "../HoverMarker/HoverMarker";
import ArrowSVG from "../../assets/Path 25.svg";
const Bike = ({ value }) => {
  const items = [
    {
      title: "Brake",
      subtitle: "SRAM CODE R",
      top: "175px",
      left: "710px",
    },
    {
      title: "Light Seat",
      subtitle: "Crygolite Hotrod 50",
      top: "325px",
      left: "380px",
    },
    {
      title: "Motor",
      subtitle: "Yahama PW-X2",
      top: "650px",
      left: "250px",
    },
    {
      title: "Battery",
      subtitle: "Juiced 52V Battery Pack",
      top: "540px",
      left: "550px",
    },
    {
      title: "Wheels",
      subtitle: "DT Swiss Mission HYBRID",
      top: "440px",
      left: "885px",
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
