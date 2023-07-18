import "./App.css";
import A from "./components/A";
import B from "./components/B";
import React, { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <div style={{ display: "flex" }}>
        <A message={value} posts={posts} />
        <B />
      </div>
    </div>
  );
};

export default App;
