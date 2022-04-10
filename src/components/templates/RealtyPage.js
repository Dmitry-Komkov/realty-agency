import React from 'react'
import Container from '../elements/Container';
import Typography from '../elements/Typography';
import Categories from '../modules/Categories';
import tw from "twin.macro";
import Offers from "../modules/Offers";
import FreeConsult from "../modules/FreeConsult";

const Wrapper = tw.div`py-10`

const RealtyTemplate = () => {
  return (
    <Wrapper>
      <Container>
        <Typography as="h1" variant="h2">Каталог недвижимости в Чехове и Чеховском районе</Typography>
      </Container>
      <Categories />
      <Offers />
      <FreeConsult />
    </Wrapper>
  )
}

export default RealtyTemplate