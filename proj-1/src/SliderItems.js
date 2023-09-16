import React, { useEffect, useState } from "react";
export default function SliderItems({
  authorImg,
  authorName,
  post,
  text,
  curIndex,
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > 2) setIndex(0);
  }, [index]);
  useEffect(() => {
    const slide = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slide);
  }, [index]);

  let position = "nextSlide";
  if (curIndex === index) {
    position = "activeSlide";
  }
  if (curIndex === index - 1 || (index === 0 && curIndex === 2)) {
    position = "prevSlide";
  }
  return (
    <>
      <div className={`slideritems-container ${position}`}>
        <img
          className="author-img"
          src={require(`./images/${authorImg}.jpg`)}
          alt={authorName}
        />
        <div className="slider-texts">
          <h2 className="author-name">{authorName}</h2>
          <h3 className="author-post">{post}</h3>
          <p className="author-text">{text}</p>
        </div>
      </div>
    </>
  );
}
