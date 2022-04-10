import React from "react"
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby"
import Section from "../elements/Section"
import Container from "../elements/Container"
import CategoryCard from "./CategoryCard";
import tw, {css, styled} from "twin.macro";

const CategoryCards = styled.div(() => [
  tw`grid gap-12 justify-center lg:justify-start `,
  css`
    grid-template-columns: repeat(auto-fill, minmax(170px, 225px));
  `
])

const Categories = () => {
  const { categories } = useStaticQuery(
    graphql`
      query CategoriesQuery {
        categories: allStrapiCategories {
          nodes {
            id
            strapiId
            name
            slug
            featured_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(height: 150)
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Section>
      <Container>
        <CategoryCards>
          {categories.nodes.map(cat => {
            const imageData = getImage(cat.featured_image.localFile)
            const categoryImage = <GatsbyImage alt={cat.name} image={imageData} />
            const categoryData = {
              name: cat.name,
              slug: cat.slug,
              image: categoryImage
            }

            return (
              // <GatsbyImage alt={cat.name} image={imageData} />
              <CategoryCard key={`${cat.id}-${cat.strapiId}`} data={categoryData} />
            )
          })}
        </CategoryCards>
      </Container>
    </Section>
  )
}

export default Categories
