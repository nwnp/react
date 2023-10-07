import React, { useState } from "react";

const EventPractice = () => {
  // variables
  const [message, setMessage] = useState("");

  // functions
  const onChangeInput = (e) => {
    setMessage(e.target.value);
  };

  const onClickButton = () => {
    alert(message);
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") onClickButton();
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
    </div>
  );
};

export default EventPractice;
