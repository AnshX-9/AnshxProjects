import React from "react";
import Navbar from "../Navbar/Navbar";
import TechContent from "./TechContent";
import TechTabs from "./TechTabs";
import { TechData } from "./TechData";
import "./TechBanner.css";

const TechBanner = () => {
  return (
    <div className="Tech-Banner-Container">
      {/* <Navbar /> */}
      <div>
        <h5>
          <span>01</span>
          SPACE LAUNCH 101
        </h5>
      </div>
      <TechContent TechData={TechData} />
      <TechTabs TechData={TechData} />
    </div>
  );
};

export default TechBanner;
