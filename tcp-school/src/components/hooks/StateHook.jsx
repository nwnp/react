import { useState } from 'react';

/**
 * State Hook
 *  - useState는 처음 렌더리을 수행할 때 초기 상태 값(initialState)을 인수로 전달 받고, 최신 state의
 *    값을 유지하는 변수와 그 값을 업데이트할 수 있는 함수를 반환한다.
 */

export const StateHook = () => {
  // state: 초기 상태 값
  // setValue: state의 값을 업데이트할 수 있는 함수
  const [value, setValue] = useState(0);
  const onClick = () => setValue(value + 2);

  return (
    <div>
      <h5>Initial State 값: {value}</h5>
      <button onClick={onClick}>State 값을 2씩 증가</button>
    </div>
  )
}