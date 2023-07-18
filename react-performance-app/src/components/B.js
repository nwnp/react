import React, { memo, useCallback } from "react";

const Message = memo(({ message }) => {
  return <p>{message}</p>;
});

const ListItem = memo(({ post }) => {
  return (
    <li key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </li>
  );
});

const List = memo(({ posts, testFunction }) => {
  // 부모 컴포넌트가 리-렌더링이 되기 때문에 자식 컴포넌트도 리-렌더링이 됨
  testFunction("ListComponent is rendered");
  return (
    <ul>
      {posts.map((post) => {
        return <ListItem key={post.id} post={post} />;
      })}
    </ul>
  );
});

const B = ({ message, posts }) => {
  console.log("B component is rendered");
  // const testFunction = (str) => console.log(str); // 부모 컴포넌트에서 만든 함수

  // useCallback()으로 최초 실행 시에만 함수가 생성되도록 설정
  const testFunction = useCallback((str) => console.log(str), []);

  return (
    <div>
      <h1>B Componet</h1>
      <Message message={message} />
      <List posts={posts} testFunction={testFunction} />{" "}
      {/* 부모 컴포넌트에서 만든 함수를 props로 내려줌 */}
    </div>
  );
};

export default B;
