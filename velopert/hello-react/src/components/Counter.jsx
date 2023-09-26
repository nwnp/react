import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     number: 0,
  //     name: '',
  //   }
  // }

  state = {
    number: 0,
    name: "J2W",
  };

  render() {
    const { number, name } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <div>{name}</div>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          + 1
        </button>
      </div>
    );
  }
}

export default Counter;
