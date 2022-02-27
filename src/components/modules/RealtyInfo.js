import React from 'react'
import tw, { styled, css } from 'twin.macro';

import Container from '../elements/Container';
import Section from '../elements/Section';
import SideSlides from './sliders/SideSlides';
import Typography from '../elements/Typography';
import Button from '../elements/Button';
import RealtyDescription from './RealtyDescription';

const GridBox = tw.div`
  flex flex-col-reverse gap-6
  md:(grid grid-cols-3 gap-8)
`
const Slider = tw.div`
  w-full
  md:(col-span-2)
`
const Info = tw.div`
  md:(col-span-1)
`
const InfoContainer = tw.div``
const InfoTitle = tw.div`mb-4 md:mb-6`
const ObjectInfo = styled.div(() => [
  tw`mb-4 rounded shadow p-2 md:p-4 md:mb-6`,
  css`
    li {
      ${tw`text-sm flex gap-4 font-normal md:text-lg`}
    }

    li:not(:last-of-type) {
      ${tw`mb-2 md:mb-3`}
    }

    li span:first-of-type {
      ${tw`flex-[0 1 150px] text-gray`}
    }

    li span:last-of-type {
      ${tw`flex-[1 0]`}
    }
  `
])

const PriceBox = styled.div(() => [
  tw`flex justify-center gap-6 items-center`
])
const Price = styled.span(() => [
  tw`text-secondary text-xl font-medium md:text-3xl`
])

const RealtyInfo = ({info}) => {
  const { address, name, level, object_code, square, rooms, description, photos, price } = info

  const formatPrice = (num, sep=" ") => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep)
  }

  return (
    <>
    <Section>
      <Container>
        <GridBox>
          <Slider>
            <SideSlides photos={photos} name={name} />
          </Slider>
          <Info>
            <InfoContainer>
              <InfoTitle>
                <Typography as="h1" variant="h2" tw="text-primary text-center md:text-left">{name}</Typography>
              </InfoTitle>
              <ObjectInfo>
                <ul>
                  <li>
                    <span>Адрес</span>
                    <span>{address}</span>
                  </li>
                  <li>
                    <span>Код объекта</span>
                    <span>{object_code}</span>
                  </li>
                  <li>
                    <span>Общая площадь</span>
                    <span>{square} м<sup>2</sup></span>
                  </li>
                  <li>
                    <span>Кол-во комнат</span>
                    <span>{rooms}</span>
                  </li>
                  <li>
                    <span>Этаж</span>
                    <span>{level}</span>
                  </li>
                </ul>
              </ObjectInfo>
              <PriceBox>
                <Price>
                  {formatPrice(price, ' ')}
                  <span className="rub-symbol"> &#8381;</span>
                </Price>
                <Button>Оставить заявку</Button>
              </PriceBox>
            </InfoContainer>
          </Info>
        </GridBox>
      </Container>
    </Section>
    <RealtyDescription description={description} />
    </>
  )
}

export default RealtyInfo
