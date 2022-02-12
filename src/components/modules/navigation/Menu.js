import React from 'react';
import { Link } from 'gatsby';

const Menu = ({links}) => {
  return (
    <ul>
      {
        links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          )
        })
      }
    </ul>
  );
};

export default Menu
