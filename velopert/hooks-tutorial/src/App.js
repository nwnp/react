import { useState } from "react";
import Counter from "./components/Counter";
import Info from "./components/Info";
import CounterReducer from "./components/CounterReducer";

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
      </div>
    </div>
  );
}

export default App;
