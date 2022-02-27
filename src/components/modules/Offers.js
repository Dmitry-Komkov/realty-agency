import React from 'react'
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';
import Container from '../elements/Container';
import Section from '../elements/Section';
import Typography from '../elements/Typography';
import EstateProject from './EstateProject';

const Cards = tw.div`pt-8 pb-4 flex flex-1 gap-6 overflow-x-scroll`

const Offers = () => {
  const data = useStaticQuery(graphql`
    query Realties {
      allStrapiRealties(filter: {featured: {eq: true}}) {
        nodes {
          address
          level
          name
          square
          price
          strapiId
          category {
            slug
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
    }
  `)

  return (
    <Section>
      <Container>
        <div>
          <Typography as="h2" variant="h2" align="center" tw="mb-4 uppercase">Лучшие предложения дня &#128293;&#128293;&#128293;</Typography>
          <Typography align="center">Мы подобрали для вас самые актуальные и выгодные предложения</Typography>
        </div>
        <Cards>
          {
            data.allStrapiRealties.nodes.map(project => {
              return (
                <EstateProject data={project} key={project.photos[0].localFile.id} />
              )
            })
          }
        </Cards>
      </Container>
    </Section>
  )
}

export default Offers
