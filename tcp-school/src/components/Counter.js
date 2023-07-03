import { useState } from 'react';

export const Counter = () => {
  const [state, setCount] = useState(1);

  const increase = () => {
    setCount(state + 1);
  }

  const decrease = () => {
    setCount(state - 1);
  }

  return(
    <div>
      <h5>State 값: {state}</h5>
      <button onClick={increase}>1씩 증가</button>
      <button onClick={decrease}>1씩 감소</button>
    </div>
  )
}