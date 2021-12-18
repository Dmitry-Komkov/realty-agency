import React from 'react'
import tw, { styled, css } from 'twin.macro';
import { useDispatch } from 'react-redux'
import { showMenu } from '../../redux/slices/headerMenuSlice'

const Button = styled.button(() => [
  tw`
    w-[30px] h-[25px] flex flex-col justify-between
    lg:hidden
  `,
  css`
    span { ${tw`w-full h-[4px] bg-secondary rounded-sm`} }
  `
])

const Burger = () => {
  const dispatch = useDispatch()

  return (
    <Button onClick={() => dispatch(showMenu())}>
      <span></span>
      <span></span>
      <span></span>
    </Button>
  )
}

export default Burger
