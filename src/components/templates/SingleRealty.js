import React from 'react'
import { graphql } from 'gatsby';
import RealtyInfo from '../modules/RealtyInfo'
import Offers from '../modules/Offers';
import FreeConsult from '../modules/FreeConsult';
import Default from '../layouts/Default';
import Seo from '../seo';

const SingleRealty = ({data}) => {
  const { realty } = data

  const description = `Купить ${realty.name}. Покупка и продажа ${realty.category.name} в Чехове и Чеховском районе. Команда экспертов. Юридическое сопровождение сделки`

  return (
    <Default>
      <Seo title={realty.name} description={description} />
      <main>
        <RealtyInfo info={realty} />
        <Offers />
        <FreeConsult />
      </main>
    </Default>
  )
}

export default SingleRealty

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
