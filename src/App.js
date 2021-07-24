import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Details from "./components/Details/Details";
import Cta from "./components/Cta/Cta";
import Bike from "./components/Bike/Bike";
import { useState, useRef, useEffect } from "react";
import BikeDetail from "./components/BikeDetail/BikeDetail";
import BikeInfo from "./components/BikeInfo/BikeInfo";

function App() {
  const [changePage, setChangePage] = useState(false);
  // const [scrollUp, setScrollUp] = useState(false);
  const upRef = useRef(null);
  const downRef = useRef(null);

  function scrollUp() {
    console.log("In scroll UP");
    upRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }
  function scrollDown() {
    console.log("In scroll Down");
    downRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  }

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
          <div className="old-section" onClick={() => scrollDown()}>
            <div className="" ref={upRef}></div>
            <BikeDetail
              changePage={changePage}
              // ref={upRef}
              // scrollDown={scrollDown}
            />
          </div>
          <div className="new-section" onClick={() => scrollUp()}>
            <BikeInfo />
            <div className="" ref={downRef}></div>
          </div>
        </div>
        {/* EO First Section */}
      </div>
    </div>
  );
}

export default App;
