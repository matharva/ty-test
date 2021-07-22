import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Details from "./components/Details/Details";
import Cta from "./components/Cta/Cta";
import Bike from "./components/Bike/Bike";
import { useState } from "react";

function App() {
  const [changePage, setChangePage] = useState(false);
  const value = {
    changePage,
    setChangePage,
  };
  return (
    <div className="main">
      <Navbar />
      <div className={`App ${changePage ? "shift" : ""}`}>
        <div className="hero-grid">
          {changePage ? null : <Details />}
          <Cta />
          <Bike value={value} />
        </div>
      </div>
    </div>
  );
}

export default App;
