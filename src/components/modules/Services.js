import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { nanoid } from 'nanoid';
import tw from 'twin.macro';
import Container from '../elements/Container';
import Section from '../elements/Section';
import Typography from '../elements/Typography';
import ServiceCard from './ServiceCard';

const Cards = tw.div`
  pt-10 flex flex-col gap-8
  lg:pt-14 lg:grid lg:grid-cols-2
`

const list1 = [
  'Поможем вам продать квартиру, комнату или загородную недвижимость',
  'Помощь в обмене квартир',
  'Сдать квартиру, комнату, дом, дачу, коттедж',
  'Оценка стоимости недвижимости',
]
const list2 = [
  'Покупка квартир и комнат',
  'Квартиры в новостройках',
  'Загородная недвижимость',
  'Коммерческая недвижимость',
  'Помощь в получении ипотеки',
  'Программа лояльности',
]
const list3 = [
  'Квартиры и комнаты',
  'Аренда коттеджей',
  'Нежилые помещения',
  'Аренда домов и дач',
]
const list4 = [
  'Юридическая проверка документов',
  'Составление договора купли-продажи',
  'Помощь в сборе пакета документов',
  'Представление интересов в разных инстанциях',
]

const Services = () => {

  const {images} = useStaticQuery(
    graphql`
      query ServicesImagesQuery {
        images: allFile(filter: {relativeDirectory: {eq: "content/services"}}) {
          edges {
            node {
              id
              childImageSharp {
                gatsbyImageData (
                  width: 216
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    `
  )

  const cardsData = [
    {
      image: '',
      title: 'Владельцам',
      list: list1
    },
    {
      image: '',
      title: 'Покупателям',
      list: list2
    },
    {
      image: '',
      title: 'Арендаторам',
      list: list3
    },
    {
      image: '',
      title: 'Сопровождение сделок',
      list: list4
    },
  ]

  images.edges.forEach((image, idx) => {
    const data = getImage(image.node)
    cardsData[idx].image =
    <GatsbyImage
      key={image.node.id}
      image={data}
      alt={cardsData[idx].title}
    />
  })

  return (
    <Section id="services">
      <Container>
        <div>
          <Typography as="h2" variant="h2" align="center" tw="mb-4 uppercase">Наши услуги</Typography>
          <Typography align="center">Мы знаем своё дело. Обращаясь к нам, вы доверяетесь профессионалам.</Typography>
        </div>
        <Cards>
          {
            cardsData.map(card => (
              <ServiceCard
                key={nanoid()}
                img={card.image}
                title={card.title}
                list={card.list}
              />
            ))
          }
        </Cards>
      </Container>
    </Section>
  )
}

export default Services
