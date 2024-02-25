import React from "react";
import "./TechContent.css";

const TechContent = ({ selectedTech }) => {
  return (
    <div className="Tech-Container">
      <div className="Tech-Content-Container">
        <div className="techHeading">{selectedTech?.techHead}</div>
        <div className="techName">{selectedTech?.techName}</div>
        <div className="para">{selectedTech?.para}</div>
      </div>
      <img src={selectedTech?.image} alt="" />
    </div>
  );
};

export default TechContent;
