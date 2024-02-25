import React, { useState } from "react";
import DestinationContent from "./DestinationContent";
import "./Tabs.css";

const Tabs = ({ data }) => {
  const [selectedDestination, setSelectedDestination] = useState(data[0]);
  function clickHandler(destinationId) {
    setSelectedDestination(destinationId);
  }

  return (
    <div className="destinationTabContainer">
      <div className="dest-tab-container">
        {data.map((destination) => (
          <div className="dest-tab">
            <a
              href="#"
              key={destination.id}
              onClick={() => clickHandler(destination)}
            >
              {destination.h1}
            </a>
          </div>
        ))}
      </div>

      <DestinationContent selectedDestination={selectedDestination} />
    </div>
  );
};
export default Tabs;
