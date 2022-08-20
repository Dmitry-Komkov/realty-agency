import React from 'react'
import { nanoid } from 'nanoid';
import tw from 'twin.macro';
import Container from '../elements/Container';
import Section from '../elements/Section';
import Typography from '../elements/Typography';
import Advantage from './Advantage';
import IconSecure from '../../assets/icons/secure.svg'
import IconDocument from '../../assets/icons/document.svg'
import IconRoute from '../../assets/icons/route.svg'
import IconHandsShake from '../../assets/icons/shake-hands.svg'
import IconCertificate from '../../assets/icons/certificate.svg'
import IconGraphic from '../../assets/icons/graphic.svg'

const Title = tw.div`mb-12 lg:mb-20`
const Cards = tw.div`
  flex flex-wrap justify-center
  [> div]:(w-1/2 p-4 mb-4 lg:(w-1/3) xl:(w-1/4 mb-8 p-6))
`

const advantagesData = [
  {
    id: nanoid(),
    title: 'Гарантируем безопасную сделку',
    text: 'Наши юристы заключают с каждым клиентом официальный договор, который гарантирует соблюдение всех обязательств и договоренностей.',
    icon: <IconSecure />
  },
  {
    id: nanoid(),
    title: 'Проводим полное сопровождение',
    text: 'Сопровождаем на всех этапах сделки от внесения предоплаты до передачи ключей, юридическая проверка чистоты объекта, организация способа расчетов.',
    icon: <IconRoute />
  },
  {
    id: nanoid(),
    title: 'Проверяем юридическую чистоту объектов недвижимости',
    text: 'Тщательно проверяем каждый продаваемый и покупаемый нами объект, чтобы обеспечить максимально безопасную и прозрачную сделку.',
    icon: <IconDocument />
  },
  {
    id: nanoid(),
    title: 'Помогаем с выбором',
    text: 'Тщательно подбираем недвижимость с учетом ваших пожеланий.',
    icon: <IconHandsShake />
  },
  {
    id: nanoid(),
    title: 'Предоставляем гарантийный сертификат',
    text: 'В случае проблем  компенсируем ваши потери по сделке из собственного фонда.',
    icon: <IconCertificate />
  },
  {
    id: nanoid(),
    title: 'Предлагаем эффективное оформление заявки на ипотеку',
    text: 'Поможем получить ипотечный кредит на льготных условиях. С нами шанс на одобрение ипотеки на 25% выше!',
    icon: <IconGraphic />
  },
]

const Advantages = () => {

  return (
    <Section>
      <Container>
        <Title>
          <Typography as="h2" variant="h2" align="center" tw="uppercase">Наши преимущества</Typography>
        </Title>
        <Cards>
          {
            advantagesData.map((item) => {
              return (
                <Advantage key={item.id} image={item.icon} title={item.title} text={item.text} />
              )
            })
          }
        </Cards>
      </Container>
    </Section>
  )
}

export default Advantages
