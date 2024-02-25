// Remove this line
// import { destinationData } from "./Data";

import React from "react";
import DestinationContent from "./DestinationContent";
import Tabs from "./Tabs";
import { destinationData } from "./Data";

import "./DestinationBanner.css";

const DestinationBanner = () => {
  return (
    <div className="destinationBanner">
      {/* <Navbar /> */}
      <div>
        <h5>
          <span>01</span> Pick your destination
        </h5>
      </div>
      <DestinationContent data={destinationData} />
      <Tabs data={destinationData} />
      {/* Pass the data as props */}
    </div>
  );
};

export default DestinationBanner;
