import React, { useState } from "react";
import "./Navbar.css";
import HomeBanner from "../HomePage/HomeBanner";
import DestinationBanner from "../Destination/DestinationBanner";
import CrewBanner from "../Crew/CrewBanner";
import TechBanner from "../Technology/TechBanner";

const Navbar = ({ navigateTo }) => {
  const [activePage, setActivePage] = useState("Home");

  const handleNavigation = (component, page) => {
    navigateTo(component);
    setActivePage(page);
  };

  return (
    <div className="navbar">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
        <g fill="none" fillRule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>

      <div className="line"></div>

      <ul>
        <li
          className={activePage === "Home" ? "active" : ""}
          onClick={() => handleNavigation(<HomeBanner />, "Home")}
        >
          <span>00</span> Home
        </li>
        <li
          className={activePage === "Destination" ? "active" : ""}
          onClick={() => handleNavigation(<DestinationBanner />, "Destination")}
        >
          <span>01</span> Destination
        </li>
        <li
          className={activePage === "Crew" ? "active" : ""}
          onClick={() => handleNavigation(<CrewBanner />, "Crew")}
        >
          <span>02</span> Crew
        </li>
        <li
          className={activePage === "Tech" ? "active" : ""}
          onClick={() => handleNavigation(<TechBanner />, "Tech")}
        >
          <span>03</span> Technology
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
