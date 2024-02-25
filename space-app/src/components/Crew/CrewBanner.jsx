import React from "react";
import Navbar from "../Navbar/Navbar";
import CrewContent from "./CrewContent";
import CrewTabs from "./CrewTabs";
import { CrewData } from "./CrewData";
import "./CrewBanner.css";
const CrewBanner = () => {
  return (
    <div className="CrewBanner">
      {/* <Navbar /> */}
      <div>
        <h5>
          <span>01</span> Meet Your Crew
        </h5>
      </div>
      <CrewContent CrewData={CrewData} />
      <CrewTabs CrewData={CrewData} />
    </div>
  );
};

export default CrewBanner;
