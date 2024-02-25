// App.js
import React, { useState } from "react";
import HomeBanner from "./components/HomePage/HomeBanner";
import Navbar from "./components/Navbar/Navbar";
import DestinationBanner from "./components/Destination/DestinationBanner";
import CrewBanner from "./components/Crew/CrewBanner";
import "./App.css";
function App() {
  const [selectedPage, setSelectedPage] = useState(<HomeBanner />);

  function navigateTo(element) {
    setSelectedPage(element);
  }

  return (
    <div>
      <Navbar navigateTo={navigateTo} />
      {selectedPage}
    </div>
  );
}

export default App;
