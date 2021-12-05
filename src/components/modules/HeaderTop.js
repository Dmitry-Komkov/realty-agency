import React from 'react'
import tw, { styled, css } from 'twin.macro'
import { Link } from "gatsby"
import Container from '../elements/Container'
import { nanoid } from 'nanoid'

const links = [
  {id: nanoid(), url: '#!', text: 'Услуги'},
  {id: nanoid(), url: '#!', text: 'О нас'},
  {id: nanoid(), url: '#!', text: 'Контакты'},
  {id: nanoid(), url: '#!', text: 'Команда'}
]

const Links = styled.nav(
  css`
    a:not(:last-child) {${tw`pr-3 lg:pr-10`}}
  `
)

const StyledLink = tw(Link)`transition duration-300 hover:text-secondary`;

const HeaderTop = () => {
  return (
    <div tw="bg-primaryDark text-white text-xs font-light py-3 lg:text-lg">
      <Container>
        <Links>
          {
            links.map((link) => {
              return (
                <StyledLink key={link.id} to={link.url}>{link.text}</StyledLink>
              )
            })
          }
        </Links>
      </Container>
    </div>
  )
}

export default HeaderTop