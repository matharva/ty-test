import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Details from "./components/Details/Details";
import Cta from "./components/Cta/Cta";
import Bike from "./components/Bike/Bike";
import { useState } from "react";
import BikeDetail from "./components/BikeDetail/BikeDetail";
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
            <BikeDetail changePage={changePage} />
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
