import React from 'react'
import Container from '../elements/Container'
import { StaticImage } from 'gatsby-plugin-image';
import tw, { styled, css } from 'twin.macro';
import Button from '../elements/Button';
import Typography from '../elements/Typography';
import {useDispatch} from "react-redux";
import {showModal} from "../../redux/slices/modalSlice";
import {Link} from "gatsby";

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

const ButtonsGroup = tw.div``

const StyledLink = tw(Link)`transition duration-300 ease-in-out ml-4 px-6 py-1.5 bg-white rounded-lg border-2 border-secondary hover:bg-secondary hover:text-white`

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
              <Typography as="h2" tw="uppercase font-medium text-xl md:text-2xl">Агентство недвижимости в Чехове</Typography>
              <Description>
                <Typography as="p" tw="text-lg">Решим все ваши вопросы с недвижимостью. Быстро, профессионально</Typography>
              </Description>
              <ButtonsGroup>
                <Button onClick={() => dispatch(showModal({title: 'Получить консультацию специалиста', hiddenField: 'Форма главный баннер'}))}>Получить консультацию</Button>
                <StyledLink to={'#offers'}>Перейти в каталог</StyledLink>
              </ButtonsGroup>
            </Col>
          </Content>
        </Container>
      </Box>
    </Wrapper>
  )
}

export default HeroBanner
