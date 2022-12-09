import React from 'react'
import { nanoid } from 'nanoid';
import tw from 'twin.macro';
import Container from '../elements/Container';
import Section from '../elements/Section';
import Typography from '../elements/Typography';
import ServiceCard from './ServiceCard';
import PromoCard from "./PromoCard";

const Cards = tw.div`
  pt-10 flex flex-col gap-8
  md:(grid grid-cols-2)
  xl:(pt-14 grid-cols-3)
`

const list1 = [
  'Продать квартиру, комнату, загородную недвижимость',
  'Помощь в обмене квартир',
  'Сдать дом, дачу, коттедж',
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
  'Коммерческая недвижимость',
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

const list5 = [
  'Материнский капитал',
  'Сделки участием несовершеннолетних',
  'Недвижимость с обременением',
  'Сделки с недофинансированием',
  'Сделки с завышением цены объекта'
]

const Services = () => {

  const cardsData = [
    {
      title: 'Владельцам',
      list: list1
    },
    {
      title: 'Покупателям',
      list: list2
    },
    {
      title: 'Арендаторам',
      list: list3
    },
    {
      title: 'Сопровождение сделок',
      list: list4
    },
    {
      title: 'Сложные сделки с недвижимостью',
      list: list5
    },
  ]

  return (
    <Section id="services2" tw="bg-grayLightest">
      <Container>
        <div>
          <Typography as="h2" variant="h2" align="center" tw="mb-4 uppercase">Наши услуги</Typography>
          <Typography align="center">Мы знаем своё дело. Обращаясь к нам, вы доверяетесь профессионалам</Typography>
        </div>
        <Cards>
          {
            cardsData.map(card => (
              <ServiceCard
                key={nanoid()}
                title={card.title}
                list={card.list}
              />
            ))
          }
          <PromoCard link="/realty" text="Посмотреть каталог недвижимости" />
        </Cards>
      </Container>
    </Section>
  )
}

export default Services
