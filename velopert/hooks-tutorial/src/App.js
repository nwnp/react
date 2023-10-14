import { useState } from "react";
import Counter from "./components/Counter";
import Info from "./components/Info";
import CounterReducer from "./components/CounterReducer";
import InfoReducer from "./components/InfoReducer";
import Average from "./components/Average";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <Counter />
      <div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "숨기기" : "보이기"}
        </button>
        <hr />
        {visible && <Info />}
        <CounterReducer />
        <InfoReducer />
        <Average />
      </div>
    </div>
  );
}

export default App;
