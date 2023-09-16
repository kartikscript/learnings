import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Section from "./Section";
import Slider from "./Slider";
import SectionModal from "./SectionModal";
import { Data } from "./Data";
import Testimonial from "./Testimonial";
import Footer from "./Footer";

export default function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const SectionRef = useRef(null);
  const SliderRef = useRef(null);
  // const [showModal, setShowModal] = useState(false);

  function handleScroll() {
    SectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    const revealItem = function (entries) {
      const [entry] = entries;

      if (entry.isIntersecting) setIsIntersecting(true);
      else setIsIntersecting(false);
    };
    const sliderObserver = new IntersectionObserver(revealItem, {
      root: null,
      threshold: 0.3,
    });
    sliderObserver.observe(SliderRef.current);
  }, []);

  return (
    <div className="allsec">
      <div className="top">
        <Navbar />
        <Hero handleScroll={handleScroll} />
      </div>
      <div className="section-container">
        <h1 ref={SectionRef}>history </h1>
        {Data.map((item) => {
          return (
            <>
              <Section
                key={item.id}
                title={item.title}
                src={item.src}
                desc={item.desc}
                icon={item.icon}
              />
            </>
          );
        })}
      </div>
      <div ref={SliderRef}>
        <Slider isIntersecting={isIntersecting} />
        <Testimonial />
      </div>
      <Footer />
    </div>
  );
}
