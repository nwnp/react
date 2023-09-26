import React from "react";
import PropTypes from "prop-types";

const MyComponent = ({ name, setName, favoriteNumber, arr }) => {
  return (
    <div>
      <div>{name}</div>
      <div>{favoriteNumber}</div>
      {arr.map((item, index) => (
        <div key={index}>{item * item}</div>
      ))}
      <button onClick={() => setName("j2w")}>button</button>
    </div>
  );
};

MyComponent.defaultProps = {
  name: "default props",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func.isRequired,
  favoriteNumber: PropTypes.number.isRequired,
  arr: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MyComponent;
