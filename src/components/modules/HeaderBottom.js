import React from 'react'
import Button from '../elements/Button';
import Container from '../elements/Container';
import tw, { styled } from 'twin.macro';
import Burger from '../elements/Burger';
import MainNav from './MainNav';

const Wrapper = styled.div(() => [
  tw`
    bg-white shadow py-2
  `
])

const Box = styled.div(() => [
  tw`flex items-center justify-between`
])

const HeaderBottom = ({ toggleMenu, menu }) => {

  return (
    <Wrapper>
      <Container>
        <Box>
          <div>
            <Burger toggleMenu={toggleMenu} menu={menu} />
            <MainNav toggleMenu={toggleMenu} menu={menu} />
          </div>
          <div>
            <Button color="secondary">Мы в WhatsApp</Button>
          </div>
        </Box>
      </Container>
    </Wrapper>
  )
}

export default HeaderBottom