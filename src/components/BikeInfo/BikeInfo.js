import React from "react";
import "./BikeInfo.css";
import BikeImage from "../../assets/img_bike.png";
const BikeInfo = () => {
  const features = [
    "4-Piston Caliper",
    "All-new Code design based on Guide Architecture",
    "Designed specifically to handle heavy-duty demands",
  ];
  return (
    <div className="bikeinfo__parent">
      <div className="bikeinfo__content">
        <div className="bikeinfo__content__title">Rear brakes</div>
        <div className="bikeinfo__content__desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat,
          voluptatibus? Perspiciatis molestias, aut expedita veniam laborum
          delectus et esse laudantium ipsa, nam tempora!
        </div>
      </div>
      <div className="bikeinfo__img__container">
        <img src={BikeImage} alt="" />
      </div>
      <div className="bikeinfo__info">
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
