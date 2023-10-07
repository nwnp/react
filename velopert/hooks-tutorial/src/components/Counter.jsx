import React, { useState } from "react";

const Counter = () => {
  // variables
  const [value, setValue] = useState(0);

  // functions
  const plus = () => {
    setValue(value + 1);
  };

  const minus = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <p>
        현재 카운터 값: <b>{value}</b>
      </p>
      <button onClick={plus}> + 1 </button>
      <button onClick={minus}> - 1 </button>
    </div>
  );
};

export default Counter;
