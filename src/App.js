import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Details from "./components/Details/Details";
import Cta from "./components/Cta/Cta";
import Bike from "./components/Bike/Bike";
import { useState } from "react";
import BikeImage from "./assets/bikeweb_05-Current-View.png";
import BikeInfo from "./components/BikeInfo/BikeInfo";

function App() {
  const [changePage, setChangePage] = useState(false);
  const value = {
    changePage,
    setChangePage,
  };
  return (
    <div className="main">
      <Navbar />
      <div className="two-page">
        <div className={`App ${changePage ? "shift" : ""}`}>
          <div className="hero-grid">
            {changePage ? null : <Details />}
            <Cta changePage={changePage} />
            <Bike value={value} />
          </div>
        </div>
        <div className="cover-text">
          {/* First Section */}
          <div className="old-section">
            <div className="cover-text__header">
              <div className="cover-text__title">
                The best Brakes <br /> in the world
              </div>
              <div className="cover-text__subtitle">SRAM CODE R</div>
            </div>
            <div className="cover-text__split">
              <div className="cover-text__left">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                quas sapiente cupiditate facilis deserunt iure? quas sapiente
                cupiditate facilis deserunt iure?
              </div>
              <div className="cover-text__right">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
                quas sapiente cupiditate facilis deserunt iure? quas sapiente
                cupiditate facilis deserunt iure?
              </div>
            </div>
            <div className="img_container">
              <img src={BikeImage} alt="" />
              <div className="img_container__content">
                <div className="img_container__symbol"></div>
                <div className="img_container__text">
                  Lorem ipsum dolor, sit amet consectetur adipisicing.
                </div>
              </div>
            </div>
          </div>
          <div className="new-section">
            <BikeInfo />
          </div>
        </div>
        {/* EO First Section */}
      </div>
    </div>
  );
}

export default App;
