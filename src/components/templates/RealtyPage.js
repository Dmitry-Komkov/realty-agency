import React from 'react'
import { graphql } from 'gatsby';
import RealtyInfo from '../modules/RealtyInfo'
import Offers from '../modules/Offers';
import FreeConsult from '../modules/FreeConsult';
import Default from '../layouts/Default';
import Seo from '../seo';

const RealtyPage = ({data}) => {
  const { realty } = data

  return (
    <Default>
      <Seo title="Test" />
      <main>
        <RealtyInfo info={realty} />
        <Offers />
        <FreeConsult />
      </main>
    </Default>
  )
}

export default RealtyPage

export const PageQuery = graphql`
  query($id: Int!) {
    realty: strapiRealties(strapiId: {eq: $id}) {
      address
      level
      object_code
      name
      rooms
      square
      featured
      description
      price
      category {
        name
      }
      photos {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
          id
        }
      }
    }
  }
`
