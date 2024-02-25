import React from "react";
import "./DestinationContent.css";
function DestinationContent({ selectedDestination }) {
  if (!selectedDestination) {
    return <div>No data available.</div>;
  }

  return (
    <div className="destination-container">
      <img src={selectedDestination.image} />

      <div className="destination-content-container">
        <h1>{selectedDestination.h1}</h1>
        <p>{selectedDestination.p}</p>
        <div className="line-two"></div>
        <div className="dest-Time">
          <h4>
            <span>Avg. Distance</span> <br /> {selectedDestination.distance}
          </h4>
          <div className="destination-Time">
            <span>Est. travel time</span> <br />
            {selectedDestination.time}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationContent;
