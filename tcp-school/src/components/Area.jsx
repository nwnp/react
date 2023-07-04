import { useState } from "react";
import '../style.scss';

export const Area = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  const increaseWidth = () => {
    setSize({
      ...size,
      width: size.width + 1,
    });
  };
  const increaseHeight = () => {
    setSize({
      ...size,
      height: size.height + 1,
    });
  };

  return(
    <div className="area">
      <p>
        넓이: {size.width * size.height}
      </p>
      <p>width: {size.width}</p>
      <p>height: {size.height}</p>
      <button onClick={increaseWidth}>width 1 증가</button>
      <button onClick={increaseHeight}>height 1 증가</button>
    </div>
  )
};