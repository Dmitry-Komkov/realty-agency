import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';
import tw, { styled, css } from 'twin.macro';
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from 'react-redux'
import { showMenu } from '../../../redux/slices/headerMenuSlice'

const Box = styled.div(({ menu }) => [
  tw`fixed z-50 bg-white transform -translate-x-full top-0 left-0 shadow py-8 px-4 w-[70vw] h-full duration-500 ease-in-out`,
  tw`lg:relative lg:translate-x-0 lg:shadow-none lg:w-auto lg:p-0 lg:bg-transparent`,
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

const mainLinks = [
  {id: nanoid(), url: '/', text: 'Главная'},
  {id: nanoid(), url: '/realty', text: 'Каталог'},
]

const MainNav = () => {
  const state = useSelector(state => state.menu.show)
  const dispatch = useDispatch()

  const categoriesQuery = useStaticQuery(graphql`
    query Categories {
      allStrapiCategories {
        nodes {
          name
          slug
          id
        }
      }
    }
  `)

  const categories = categoriesQuery.allStrapiCategories.nodes

  return (
    <Box menu={state}>
      <CloseButton type="button" onClick={() => dispatch(showMenu())}>
        <span></span>
        <span></span>
      </CloseButton>
      <Nav>
        {
          mainLinks.map(link => {
            return (
              <StyledLink key={link.id} to={link.url}>{link.text}</StyledLink>
            )
          })
        }
        {
          categories.map(link => {
            return (
              <StyledLink key={link.id} to={`/realty/${link.slug}`}>{link.name}</StyledLink>
            )
          })
        }
      </Nav>
    </Box>
  )
}

export default MainNav
