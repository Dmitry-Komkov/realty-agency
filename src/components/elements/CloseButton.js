import React from 'react'
import tw, {css, styled} from "twin.macro";

const Button = styled.button(() => [
  tw`w-[30px] h-[30px] absolute top-2 right-2`,
  css`
    span {
      ${tw`w-full h-[3px] bg-textDark absolute top-1/2 left-0 transform -translate-y-1/2 rotate-45 rounded-sm`}

      &:last-child{
        ${tw`-rotate-45`}
      }
    }
  `
])

const CloseButton = ({...props}) => {
  return (
    <Button {...props}>
      <span></span>
      <span></span>
    </Button>
  )
}

export default CloseButton
