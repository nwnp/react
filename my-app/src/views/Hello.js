const Hello = ({name, color}) => {
  return (
    <div className="App">
      <p style={{color}}>Hello {name}</p>
    </div>
  );
}

Hello.defaultProps = {
  name: "world",
  color: "blue"
}

export default Hello;