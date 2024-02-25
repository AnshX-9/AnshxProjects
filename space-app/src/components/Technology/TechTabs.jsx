import React, { useState } from "react";
import TechContent from "./TechContent";
import "./TechTabs.css";

const TechTabs = ({ TechData }) => {
  const [selectedTech, setSelectedTech] = useState(TechData[0]);

  function TechHandler(element) {
    setSelectedTech(element);
  }

  return (
    <div>
      <div className="tech-tab-container">
        {TechData.map((Tech) => (
          <div
            key={Tech.id}
            onClick={() => TechHandler(Tech)}
            className="Tech-Tab"
          >
            {Tech.id + 1}
          </div>
        ))}
      </div>
      <TechContent selectedTech={selectedTech} />
    </div>
  );
};

export default TechTabs;
