import React, { useState } from "react";

export default function Hero({ handleScroll }) {
  function handleClick() {
    handleScroll();
  }

  return (
    <div className="hero-container">
      <h1>
        the site & the guy
        <br /> you're looking for <br />
        is here
      </h1>
      <p className="hero-para">
        it's the demo project and all the forms and other
        <br /> things don't reach or submit to any other
        <br /> third party website
      </p>

      <img
        className="hero-img"
        src={require("./images/hero.jpg")}
        alt="social media icons"
      />
      <button onClick={handleClick} className="btn">
        let's go &darr;
      </button>
    </div>
  );
}
