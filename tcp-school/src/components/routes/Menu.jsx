import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
