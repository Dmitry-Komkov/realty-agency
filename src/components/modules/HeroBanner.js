import React from 'react'
import Container from '../elements/Container'
import { StaticImage } from 'gatsby-plugin-image';
import tw, { styled, css } from 'twin.macro';
import Button from '../elements/Button';
import Typography from '../elements/Typography';
import {useDispatch} from "react-redux";
import {showModal} from "../../redux/slices/modalSlice";

const Wrapper = styled.section(() => [
  tw`grid`
])

const Box = styled.div(() => [
  tw`m-auto z-10 w-full`,
  css`
    grid-area: 1/-1;
  `
])

const Content = styled.div(() => [
  tw``
])

const Col = tw.div`py-6`

const Description = tw.div`my-6 font-normal`

const List = tw.ul`list-disc list-inside my-4`

const HeroBanner = () => {
  const dispatch = useDispatch()

  return (
    <Wrapper>
      <StaticImage
        src="../../assets/images/content/hero-img.png"
        alt="Баннер"
        layout="fullWidth"
        css={css`
          grid-area: 1/-1;
          box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.25);
        `}
      />
      <Box>
        <Container>
          <Content>
            <Col>
              <Typography as="h2" tw="uppercase font-medium text-xl md:text-2xl">Команда профессионалов в сфере недвижимости</Typography>
              <Description>
                <p>Более 12 лет помогаем людям совершать сделки с недвижимостью.</p>
                <List>
                  <li>Тщательный подбор недвижимости</li>
                  <li>Честная оценка стоимости</li>
                  <li>Юридическое сопровождение сделки</li>
                  <li>Берем все на себя. Экономим ваше время</li>
                </List>
                <p>Станьте и вы нашим довольным клиентом! Оставьте заявку, и мы обсудим все детали по телефону.</p>
              </Description>
              <Button onClick={() => dispatch(showModal({title: 'Получить консультацию специалиста', hiddenField: 'Форма главный баннер'}))}>Получить консультацию</Button>
            </Col>
          </Content>
        </Container>
      </Box>
    </Wrapper>
  )
}

export default HeroBanner
