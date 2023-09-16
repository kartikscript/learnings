import React, { useEffect, useRef, useState } from "react";

export default function Testimonial() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const refContainer = useRef(null);
  const quoteRef = useRef(null);
  useEffect(() => {
    const revealItem = function (entries) {
      const [entry] = entries;
      if (entry.isIntersecting) setIsIntersecting(true);
    };
    const sliderObserver = new IntersectionObserver(revealItem, {
      root: null,
      threshold: 0.5,
    });
    sliderObserver.observe(refContainer.current);
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      refContainer.current.classList.remove("quote-reveal");
    }
  }, [isIntersecting]);

  return (
    <div className="quote-reveal testimonial " ref={refContainer}>
      <div ref={quoteRef} className="quote-box box-left ">
        <img className="quote-img" src={require(`./images/fb.jpg`)} alt="" />
        <div className="quote">
          <img className="quote-logo" src={require("./icons/quote.png")} />
          <h2 className="quote-text">
            Life is a beautiful journey that is meant to be embraced to the
            fullest every day. However, that doesn't mean you always wake up
            ready to seize the day
          </h2>
        </div>
      </div>
      <div ref={quoteRef} className="quote-box box-right">
        <img className="quote-img" src={require(`./images/elon.jpg`)} alt="" />
        <div className="quote">
          <img className="quote-logo" src={require("./icons/quote.png")} />
          <h2 className="quote-text">
            Life is a beautiful journey that is meant to be embraced to the
            fullest every day. However, that doesn't mean you always wake up
            ready to seize the day
          </h2>
        </div>
      </div>
      <div ref={quoteRef} className="quote-box box-mid">
        <img
          className="quote-img"
          src={require(`./images/dustin.jpg`)}
          alt=""
        />
        <div className="quote">
          <img className="quote-logo" src={require("./icons/quote.png")} />
          <h2 className="quote-text">
            Life is a beautiful journey that is meant to be embraced to the
            fullest every day. However, that doesn't mean you always wake up
            ready to seize the day
          </h2>
        </div>
      </div>
    </div>
  );
}
