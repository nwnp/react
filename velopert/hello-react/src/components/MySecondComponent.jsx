import React, { Component } from "react";
import PropTypes from "prop-types";

class MySecondComponent extends Component {
  render() {
    const { age, setAge } = this.props;

    return (
      <div>
        <div>{age}</div>
        <button onClick={() => setAge(age - 10)}>button</button>
      </div>
    );
  }
}

MySecondComponent.propTypes = {
  age: PropTypes.number,
  setAge: PropTypes.func.isRequired,
};

MySecondComponent.defaultProps = {
  age: 30,
};

export default MySecondComponent;
