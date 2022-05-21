import React from 'react'
import { Global, css } from '@emotion/react'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  html {
    ${tw`text-textDark`}
  }
`

const customStylesModalOpen = css`
  html {
    ${tw`text-textDark`}
  }
  
  body {
    overflow: hidden;
  }
`

const GlobalStyles = ({state}) => (
  <>
    <BaseStyles />
    <Global styles={state ? customStylesModalOpen : customStyles} />
  </>
)

export default GlobalStyles
