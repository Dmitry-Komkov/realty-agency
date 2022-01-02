import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { nanoid } from 'nanoid';
import tw from 'twin.macro';
import Container from '../elements/Container';
import Section from '../elements/Section';
import Typography from '../elements/Typography';
import Advantage from './Advantage';
import InNumbers from './InNumbers';

const Title = tw.div`mb-12 lg:mb-20`
const Cards = tw.div`grid gap-x-4 gap-y-8 grid-cols-2 lg:grid-cols-4 lg:gap-12`

const advantagesData = [
  {
    id: nanoid(),
    title: 'Безопасная сделка',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
  },
  {
    id: nanoid(),
    title: 'Полное сопровождение',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
  },
  {
    id: nanoid(),
    title: 'Проверенные объекты',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
  },
  {
    id: nanoid(),
    title: 'Команда профессионалов',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'
  },
]

const stats = [
  {
    id: nanoid(),
    num: '> 10 лет',
    desc: 'на рынке недвижимости'
  },
  {
    id: nanoid(),
    num: '> 300',
    desc: 'довольных клиентов'
  },
  {
    id: nanoid(),
    num: '> 20',
    desc: 'профессионалов в штате'
  },
  {
    id: nanoid(),
    num: '> 50',
    desc: 'закрытых сделок в месяц'
  },
]

const Advantages = () => {
  const {icons} = useStaticQuery(
    graphql`
      query AdvantagesIconsQuery {
        icons: allFile(filter: {relativeDirectory: {eq: "content/icons"}}) {
          edges {
            node {
              id
              childImageSharp {
                gatsbyImageData (
                  width: 92
                  placeholder: BLURRED
                  quality: 100
                  formats: [AUTO, WEBP, AVIF]
                )
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
        <Title>
          <Typography as="h2" variant="h2" align="center" tw="uppercase">Почему нам доверяют?</Typography>
        </Title>
        <Cards>
          {
            advantagesData.map((item, idx) => {
              const imgData = getImage(icons.edges[idx].node)
              const image = <GatsbyImage image={imgData} alt={item.title} />
              
              return (
                <Advantage key={item.id} image={image} title={item.title} text={item.text} />
              )
            })
          }
        </Cards>
        <div tw="mt-12 lg:mt-20">
          <InNumbers stats={stats} />
        </div>
      </Container>
    </Section>
  )
}

export default Advantages
