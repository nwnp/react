import "./App.css";

type PropsType = {
  value: any;
  onIncrement: () => void;
  onDecrement: () => void;
};

function App({ value, onIncrement, onDecrement }: PropsType) {
  return (
    <div className="App">
      {/* Clicked: {value} times */}
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}

export default App;
