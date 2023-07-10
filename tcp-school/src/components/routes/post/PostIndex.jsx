import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Post } from './Post';
import { PostCreate } from './PostCreate';

export const PostIndex = () => {
  return (
    <Routes>
      <Route 
        path="/posts"
        dataLength="6"
        title="test title"
        description="test description"
        element={<Post />}
      ></Route>
      <Route path="/post/create" element={<PostCreate />}></Route>
    </Routes>
  );
};
