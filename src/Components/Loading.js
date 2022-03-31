import React from "react";
// import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";

// const ovveride = css`
//   border-color: #d0021b;
//   background_color: red;
// `;

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen	">
      <CircleLoader color={"#619CE0"} size={50} />
    </div>
  );
};

export default Loading;
