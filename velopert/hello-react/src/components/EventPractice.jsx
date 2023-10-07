import React, { useState } from "react";

const EventPractice = () => {
  // variables
  const [message, setMessage] = useState("");
  const [added, setAdded] = useState([]);

  // functions
  const onChangeInput = (e) => {
    setMessage(e.target.value);
  };

  const onClickButton = () => {
    alert(message);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      setAdded([...added, message]);
      setMessage("");
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="message"
        placeholder="Anything enter"
        onChange={onChangeInput}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClickButton}>ALERT</button>
      <div>
        <ul>
          {added.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default EventPractice;
