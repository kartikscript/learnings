import React, { useState, useEffect, useRef } from "react";
import SliderItems from "./SliderItems";
import { SliderData } from "./Data";

export default function Slider({ isIntersecting }) {
  const headRef = useRef();
  useEffect(() => {
    if (isIntersecting) {
      headRef.current.classList.remove("slider-reveal");
    } else {
      headRef.current.classList.add("slider-reveal");
    }
  }, [isIntersecting]);
  return (
    <div className="slider-container">
      <h1 ref={headRef} className="slider-head slider-reveal">
        founders
        <br /> of
        <span className="pop">
          <br /> social
          <br /> media
        </span>
      </h1>

      {SliderData.map((data, i) => (
        <SliderItems key={data.id} {...data} curIndex={i} />
      ))}
    </div>
  );
}
