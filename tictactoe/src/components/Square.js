/** Class형 Component */
import React from "react";
import "./Square.css";

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    const clicked = () => this.setState({ value: "X" });

    return (
      <button className="square" onClick={clicked}>
        {this.state.value == null ? this.props.value : this.state.value}
      </button>
    );
  }
}
