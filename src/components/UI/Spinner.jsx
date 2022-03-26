import React from "react";

function Spinner() {
  return (
    <div className="h-max flex justify-center mt-32">
      <svg className="animate-spin h-20 w-20 mr-3 border-t-4 border-b-4 border-l-4 rounded-full"></svg>
    </div>
  );
}

export default Spinner;
