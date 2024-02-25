import React, { useState } from "react";
import CrewContent from "./CrewContent";
import "./CrewTabs.css";

const CrewTabs = ({ CrewData }) => {
  const [selectedCrew, setSelectedCrew] = useState(CrewData[0]);

  function clickCrew(crew) {
    setSelectedCrew(crew);
  }

  return (
    <div>
      <div className="CrewNavTabs">
        {CrewData.map((crew) => (
          <div
            className="crewDots"
            key={crew.id}
            onClick={() => clickCrew(crew)}
          ></div>
        ))}
      </div>

      {/* Render CrewContent component with the selected crew */}
      <CrewContent selectedCrew={selectedCrew} />
    </div>
  );
};

export default CrewTabs;
