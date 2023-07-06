import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className='menu'>
      <nav>
        <ul>
          <li>
            <Link to="/">main page</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/posts">post list</Link>
          </li>
          <li>
            <Link to="/post/create">post form</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
