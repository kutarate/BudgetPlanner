import React from 'react';
import { Link } from 'react-router-dom';

const MainNavigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/tips">Tips</Link>
      </li>
    </ul>
  </nav>
);

export default MainNavigation;
