import React from "react";
import Flip from "react-reveal/Flip";

import propTypes from "prop-types";

import "./index.scss";
export default function Star({ className, value, height, width, spacing }) {
  const decimals = Number(value) % 1;

  const star = [];
  let leftPos = 0;
  for (let index = 0; index < 5 && index < value - decimals; index++) {
    leftPos = leftPos + width;
    star.push(
      <Flip left delay={200 * index}>
        <div
          className="star"
          key={`star-${index}`}
          style={{
            left: index * width,
            height: height,
            width: width,
            marginRight: spacing,
          }}
        ></div>
      </Flip>
    );
  }
  if (decimals > 0 && value <= 5)
    star.push(
      <Flip left delay={200 * value}>
        <div
          className="star"
          key={`starWithDecimal`}
          style={{
            left: leftPos,
            height: height,
            width: decimals * width - spacing,
          }}
        ></div>
      </Flip>
    );

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${index}`}
        style={{
          left: index * width,
          height: height,
          width: width,
          marginRight: spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={["stars", className].join(" ")}
        style={{ height: height }}
      >
        {starPlaceholder}
        {star}
      </div>
    </>
  );
}

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
