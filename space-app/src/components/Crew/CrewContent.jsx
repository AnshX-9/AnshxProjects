import React from "react";
import "./CrewContent.css";

function CrewContent({ selectedCrew }) {
  if (!selectedCrew) {
    return <div>Data Not Found</div>;
  }

  return (
    <div className="crew-container">
      <img src={selectedCrew.image} alt="Crew Member" />
      <div className="crew-content-container">
        <div className="crewDetail">{selectedCrew.detail}</div>
        <div className="crewDName">{selectedCrew.Dname}</div>
        <p className="crew-Para">{selectedCrew.para}</p>
        <div className="line-three"></div>
      </div>
    </div>
  );
}

export default CrewContent;
