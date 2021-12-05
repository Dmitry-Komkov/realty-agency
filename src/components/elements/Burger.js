import React from 'react'
import tw, { styled, css } from 'twin.macro';

const Button = styled.button(() => [
  tw`
    w-[30px] h-[25px] flex flex-col justify-between
    lg:hidden
  `,
  css`
    span { ${tw`w-full h-[4px] bg-secondary rounded-sm`} }
  `
])

const clickHandler = (toggleMenu, menu) => {
  toggleMenu(!menu)
}

const Burger = ({ toggleMenu, menu }) => {
  return (
    <Button onClick={() => clickHandler(toggleMenu, menu)}>
      <span></span>
      <span></span>
      <span></span>
    </Button>
  )
}

export default Burger
