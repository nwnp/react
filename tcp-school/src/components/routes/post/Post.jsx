import React from 'react';

export const Post = (props) => {
  const { dataLength, title, description } = props;
  console.log(dataLength, title, description)
  const posts = () => {
    const arr = [];
    for (let i = 0; i < dataLength; i++) {
      arr.push(
        <div className="post" key={i}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      );
    }
    return arr;
  }

  return (
    <div>{posts()}</div>
  );
};