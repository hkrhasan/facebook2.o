import React from "react";

function Avatar({ src, width }) {
  return (
    <div className="rounded-full overflow-hidden">
      <img src={src} width={width || "43px"} />
    </div>
  );
}

export default Avatar;
