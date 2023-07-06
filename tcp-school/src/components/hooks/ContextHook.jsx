// import { createContext } from 'react';

/**
 * Context Hook
 * - 데이터를 다루는 방법에는 props와 state 외에도 context라는 기능이 있다.
 * - context는 전역적으로 데이터를 관리할 수 있도록 도와주는 리액트 내장 기능이다.
 * - context를 사용하면 프로젝트 안에서 전역적으로 사용할 데이터가 있을 때
 *   props를 통해 일일이 전달해주어야 하는 번거로움을 해결할 수 있다.
 * 
 * - 사용자의 계정 정보나 설정 파일 등 해당 애플리케이션에 포함된 모든 컴포넌트에서 접근할 필요가 있는
 *   데이터들을 context를 통해 관리할 수 있다.
 */

// props의 단점: PropsDrilling
// - 컴포넌트의 깊은 곳까지 전달해야 하는 번거로움이 있다.

// Context 생성
// - createContext() 함수를 사용하여 context를 만든다.
// - createContext() 함수의 파라미터에는 해당 context의 기본 상태를 지정한다.
// - createContext() 함수를 사용하여 만든 context는 다음과 같은 값을 가진다.
//   - Provider: context를 구독하는 컴포넌트들에게 context의 변화를 알려주는 역할을 한다.
//   - Consumer: context를 구독하는 컴포넌트들의 context를 사용할 수 있게 해주는 역할을 한다.

export const ContextHook = () => {
  return (
    <div>
      <h5>Context Hook</h5>
    </div>
  )
}