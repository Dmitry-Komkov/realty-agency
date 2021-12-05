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
    a:not(:last-child) {${tw`pr-3`}}
  `
)

const HeaderTop = () => {
  return (
    <div tw="bg-primaryDark text-white text-xs py-3">
      <Container>
        <Links>
          {
            links.map((link) => {
              return (
                <Link key={link.id} to={link.url}>{link.text}</Link>
              )
            })
          }
        </Links>
      </Container>
    </div>
  )
}

export default HeaderTop