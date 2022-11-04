import React from "react";
import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="text-center my-10 mx-10">
      <img src={loading} alt="loading" />
    </div>
  );
};

export default Spinner;
