import React from 'react'
import tw, { styled } from 'twin.macro';
import { graphql, useStaticQuery } from 'gatsby';

import Container from '../../elements/Container';
import Burger from '../../elements/Burger';
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

const HeaderBottom = () => {

  const data = useStaticQuery(graphql`
    query SiteDataHeaderBot {
      allStrapiGeneral {
        nodes {
          WhatsApp
        }
      }
    }
  `)

  const { WhatsApp } = data.allStrapiGeneral.nodes[0]

  return (
    <Wrapper>
      <Container>
        <Box>
          <NavBox>
            <Burger />
            <MainNav />
          </NavBox>
          <ButtonContainer>
            <a
              tw="text-sm lg:text-lg bg-secondary text-white border-secondary hover:bg-secondaryDarker hover:border-secondaryDarker rounded-lg transition duration-300 ease-in-out px-6 py-1.5"
              href={`https://wa.me/${WhatsApp}`}
              target="_blank"
              rel="noreferrer nofollow"
            >
              Написать в WhatsApp
            </a>
          </ButtonContainer>
        </Box>
      </Container>
    </Wrapper>
  )
}

export default HeaderBottom