import React, { useEffect, useState } from "react";

const Info = () => {
  // variables
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // rendering
  useEffect(() => {
    console.log("마운트 된 후");
    console.log(name);
    return () => {
      console.log("언마운트 되기 전");
      console.log(name);
    };
  }, [name]);

  // functions
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>name: {name}</b>
        </div>
        <div>
          <b>nickname: {nickname}</b>
        </div>
      </div>
    </div>
  );
};

export default Info;
