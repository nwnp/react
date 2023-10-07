import { useState } from "react";
import MyComponent from "./components/MyComponent";
import MySecondComponent from "./components/MySecondComponent";
import Counter from "./components/Counter";
import Say from "./components/Say";
import EventPractice from "./components/EventPractice";
import IteractionSample from "./components/IteractionSample";

function App() {
  const [name, setName] = useState("J2W");
  const [age, setAge] = useState(30);
  const arr = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <MyComponent
        name={name}
        setName={setName}
        favoriteNumber={23}
        arr={arr}
      />
      <div>-------------------------------</div>
      <MySecondComponent age={age} setAge={setAge} />
      <Counter />
      <Say />
      <EventPractice />
      <IteractionSample />
    </div>
  );
}

export default App;
