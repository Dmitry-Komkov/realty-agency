import React from 'react'
import Button from '../elements/Button';
import Container from '../elements/Container';
import tw, { styled } from 'twin.macro';
import Burger from '../elements/Burger';
import MainNav from './MainNav';

const Wrapper = styled.div(() => [
  tw`
    bg-white shadow py-2 lg:py-4
  `
])

const Box = styled.div(() => [
  tw`flex items-center justify-between`
])

const NavBox = styled.div(() => [
  tw``
])

const ButtonContainer = styled.div(() => [
  tw`text-right`
])

const HeaderBottom = ({ toggleMenu, menu }) => {

  return (
    <Wrapper>
      <Container>
        <Box>
          <NavBox>
            <Burger toggleMenu={toggleMenu} menu={menu} />
            <MainNav toggleMenu={toggleMenu} menu={menu} />
          </NavBox>
          <ButtonContainer>
            <Button color="secondary">Мы в WhatsApp</Button>
          </ButtonContainer>
        </Box>
      </Container>
    </Wrapper>
  )
}

export default HeaderBottom