import { graphql } from "gatsby"
import React from "react"
import tw from "twin.macro"
import Container from "../elements/Container"
import Section from "../elements/Section"
import Typography from "../elements/Typography"
import Default from "../layouts/Default"
import FreeConsult from "../modules/FreeConsult"
import RealtyList from "../modules/RealtyList"
import Seo from "../seo"

const Wrapper = tw.div`py-8`

const CategoryPage = ({ data }) => {
  const { category } = data
  const { realty } = data

  const catName = category.name.toLowerCase()
  let name

  switch (catName) {
    case "квартиры":
      name = "квартир"
      break
    case "дома":
      name = "домов"
      break
    case "участки":
      name = "участков"
      break
    case "дачи":
      name = "дач"
      break
    default:
      name = catName
      break
  }

  const description = `Покупка ${name} в Чехове и Чеховской районе. Помощь в получении ипотеки. Выгодные условия сделки и полное юридическое сопровождение. Опытные эксперты.`

  return (
    <Default>
      <Seo
        title={`Каталог ${name} в Чехове и Чеховской районе`}
        description={description}
      />
      <main>
        <Wrapper>
          <Container>
            <Typography as="h1" variant="h2">
              Каталог {name} в Чехове и чеховской районе
            </Typography>
            <Section>
              <RealtyList data={realty} catSlug={category.slug} />
            </Section>
          </Container>
          <FreeConsult />
        </Wrapper>
      </main>
    </Default>
  )
}

export default CategoryPage

export const PageQuery = graphql`
  query ($id: Int!, $slug: String!) {
    category: strapiCategories(strapiId: { eq: $id }) {
      id
      name
      slug
      strapiId
    }
    realty: allStrapiRealties(filter: { category: { slug: { eq: $slug } } }) {
      nodes {
        address
        id
        name
        rooms
        square
        level
        price
        strapiId
        photos {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
