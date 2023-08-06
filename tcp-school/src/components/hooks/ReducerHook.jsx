import { useReducer } from 'react';

/**
 * Reducer Hook
 * useReducer(reducer, initialState, init?)
 * - useReducer는 useState보다 좀 더 복잡한 상황에서 state를 사용할 수 있도록 
 *    컴퍼넌트와 state의 업데이트 로직을 서로 분리시켜 관리할 수 있다.
 * 
 * - useReducer는 state와 dispatch를 반환한다.
 * - state: 현재 가리키고 있는 상태
 * - dispatch: 액션을 발생시키는 함수
 * - useReducer(reducer, initialState)
 *  - reducer: 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환하는 함수
 * - initialState: 초기 상태
 * - useReducer는 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있다.
 * 
 * useReducer를 사용했을 때 가장 큰 장점으로
 *    state 업데이트 로직을 컴포넌트 외부로 분리시킬 수 있다는 것이다.
 *    (이게 굳이 왜 좋은 거지?)
 */

// 컴포넌트와 분리된 state 업데이트 로직
const reducer = (state, action) => {
  if (action.type === "increment") {
    return {
      count: state.count + 10
    }
  } else if (action.type === 'decrement') {
    return {
      count: state.count - 5
    }
  }
}

export const ReducerHook = () => {
  // reducer 함수와 count의 기본값을 0으로 전달
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return (
    <div>
      <h5>Reducer Hook: {state.count}</h5>
      {/* dispatch 함수에 action.type 값으로 'increment'를 전달하여 re-rendering */}
      <button onClick={increment}>10씩 증가</button>
      {/* dispatch 함수에 action.type 값으로 'decrement'를 전달하여 re-rendering */}
      <button onClick={decrement}>5씩 감소</button>
    </div>
  )
};