import { Link } from 'gatsby';
import React from 'react'
import tw, { styled, css } from 'twin.macro';
import { nanoid } from 'nanoid'

const Box = styled.div(({ menu }) => [
  tw`fixed bg-white transform -translate-x-full top-0 left-0 shadow py-8 px-4 w-[70vw] h-full duration-500 ease-in-out`,
  tw`lg:relative lg:translate-x-0 lg:shadow-none lg:w-auto lg:p-0`,
  menu && tw`translate-x-0`,
])

const CloseButton = styled.button(() => [
  tw`w-[30px] h-[30px] absolute top-2 right-2 lg:hidden`,
  css`
    span {
      ${tw`w-full h-[3px] bg-textDark absolute top-1/2 left-0 transform -translate-y-1/2 rotate-45 rounded-sm`}

      &:last-child{
        ${tw`-rotate-45`}
      }
    }
  `
])

const Nav = styled.nav(() => [
  tw`flex flex-col gap-4 text-lg`,
  tw`lg:flex-row lg:gap-10`
])

const StyledLink = tw(Link)`transition duration-300 hover:text-secondary`;

const links = [
  {id: nanoid(), url: '#!', text: 'Главная'},
  {id: nanoid(), url: '#!', text: 'Каталог'},
  {id: nanoid(), url: '#!', text: 'Квартиры'},
  {id: nanoid(), url: '#!', text: 'Дома'},
  {id: nanoid(), url: '#!', text: 'Участки'},
  {id: nanoid(), url: '#!', text: 'Дачи'},
]

const menuHandler = (handler, menu) => {
  handler(!menu);
}

const MainNav = ({ menu, toggleMenu }) => {
  return (
    <Box menu={menu}>
      <CloseButton type="button" onClick={() => menuHandler(toggleMenu, menu)}>
        <span></span>
        <span></span>
      </CloseButton>
      <Nav>
        {
          links.map(link => {
            return (
              <StyledLink key={link.id} to={link.url}>{link.text}</StyledLink>
            )
          })
        }
      </Nav>
    </Box>
  )
}

export default MainNav
