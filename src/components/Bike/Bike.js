import React from "react";
import "./Bike.css";
import HoverMarker from "../HoverMarker/HoverMarker";
const Bike = ({ value }) => {
  const items = [
    {
      title: "Brake",
      subtitle: "SRAM CODE R",
      top: "100px",
    },
    {
      title: "Light Seat",
      subtitle: "Crygolite Hotrod 50",
      top: "175px",
      left: "380px",
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
            Back
          </button>
        </>
      ) : null}

      {items.map((item) => {
        return <HoverMarker props={item} value={value} />;
      })}
    </div>
  );
};

export default Bike;
