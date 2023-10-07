import React from "react";

const IteractionSample = () => {
  const arr = [
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ];

  const list = arr.map((item) => <li key={item.id}>{item.text}</li>);

  return <ul>{list}</ul>;
};

export default IteractionSample;
