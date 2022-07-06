import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  fillOpacity = "0.5",
  width = "100%",
  height = "76%",
  // className = "",
  viewBox = "0 0 683.26 517.25"
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    fillOpacity={fillOpacity}
    xmlns="http://www.w3.org/2000/svg"
    // className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g transform="translate(-555.69 -8.9013)">
      <g fill={fill} fill-opacity={fillOpacity}>
      <path d="m1060.3 518.1c-129.02 50.567-166.29-152.38-504.65-175.69 290.36-43.396 347.35 84.258 504.65 175.69z" opacity=".98171" stroke-width="5.227"/>
      <path d="m1214.5 100.39c-129.02 50.567-144.78 247.39-483.14 224.09 290.36-43.396 325.84-315.52 483.14-224.09z" opacity=".98171" stroke-width="5.227"/>
      <path d="m1239 174.23c-81.749 32.04-91.733 156.75-306.12 141.99 183.98-27.496 206.46-199.92 306.12-141.99z" opacity=".98171" stroke-width="3.3119"/>
      <path d="m1180.5 32.959c-243.33 62.659-227.56 308.15-615.8 285.62 395.19-60.69 415.31-402.15 615.8-285.62z" opacity=".98171" stroke-width="6.6622"/>
      <path d="m1115.9 478.21c-63.049 77.944-114.37-117.87-336.13-137.27 190.31-36.121 216.9 77.303 336.13 137.27z" opacity=".98171" stroke-width="3.8607"/>
      <path d="m1193 415.1c-60.392 83.337-113.45-40.711-259.05-77.498 148.02-28.442 123.29 71.357 259.05 77.498z" opacity=".98171" stroke-width="3.0213"/>
      </g>
    </g>
  </svg>
);

export default SVG;