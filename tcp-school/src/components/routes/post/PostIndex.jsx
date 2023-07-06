import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Post } from './Post';
import { PostCreate } from './PostCreate';

export const PostIndex = () => {
  return (
    <Routes>
      <Route path="/posts" element={<Post />}></Route>
      <Route path="/post/create" element={<PostCreate />}></Route>
    </Routes>
  );
};
