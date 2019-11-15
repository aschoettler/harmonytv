import React from "react";
import "./metadata-tags.css"

const betterThanResolution = (sizes, resolution) => {
  for (const size of sizes) {
    if (size.width && size.width > resolution) {
      return true;
    }
  }
  return false;
}

export default (props) => {
  const metadata = props.metadata;

  const flags = [];

  if (metadata.sizes && betterThanResolution(metadata.sizes, 1920)) {
    flags.push(
      <div className="tag">4K</div>
    )
  } 

  return (
    <div className="metadata-tags">
      {flags}
    </div>
  );
}