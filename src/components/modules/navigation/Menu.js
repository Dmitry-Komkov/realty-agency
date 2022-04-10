import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';

const Menu = ({extraLinks}) => {

  const data = useStaticQuery(graphql`
    query MenuCategories {
      allStrapiCategories {
        nodes {
          name
          slug
          id
        }
      }
    }
  `)

  const links = data.allStrapiCategories.nodes

  return (
    <nav>
      <ul>
        {
          extraLinks.map(link => {
            return (
              <li key={link.id}>
                <Link to={link.url}>{link.name}</Link>
              </li>
            )
          })
        }
        {
          links.map(link => {
            return (
              <li key={`${link.id}-${link.name}`}>
                <Link to={`/realty/${link.slug}`}>{link.name}</Link>
              </li>
            )
          })
        }
      </ul>
    </nav>
  );
};

export default Menu
