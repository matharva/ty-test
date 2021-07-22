import React from "react";
import Item from "../../assets/Path 31.svg";
import "./Details.css";

const Details = () => {
  const detailsText = [
    { title: "Speed", text: "80.6KM/H" },
    { title: "Material", text: "CARBON (CF)" },
    { title: "Sizes", text: "S, M, L, XL" },
  ];
  return (
    <div className="details">
      {/* Details Item Start */}
      {detailsText.map((item) => {
        return (
          <div className="details__item">
            <div className="details__svg__container">
              <img src={Item} alt="" />
            </div>
            <div className="details__text">
              <div className="details__text__header">{item.title}</div>
              <div className="details__text__desc">{item.text}</div>
            </div>
          </div>
        );
      })}

      {/* Details Item End */}
    </div>
  );
};

export default Details;
