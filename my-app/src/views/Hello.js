const Hello = ({name, color}) => {
  return (
    <div className="App">
      <p style={ color === "pink" ? "pink" : "blue"}>Hello {name}!!!!!!</p>
      <p>
        {name === "React" ? name: "World"}
      </p>
    </div>
  );
}

Hello.defaultProps = {
  name: "World",
  color: "blue"
}

export default Hello;