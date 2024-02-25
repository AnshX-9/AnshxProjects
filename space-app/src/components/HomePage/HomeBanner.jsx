import "./HomeBanner.css";
import Navbar from "../Navbar/Navbar";
import React from "react";

const HomeBanner = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="bannerContainer">
        <div className="contentContainer">
          <div className="content">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div>
            <button>Explore</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
