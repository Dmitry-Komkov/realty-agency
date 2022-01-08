import React from 'react'
import tw, { styled } from 'twin.macro';

const StyledFormControl = tw.div`p-2`

const FormControl = ({children, ...other}) => {
  return (
    <StyledFormControl {...other}>{children}</StyledFormControl>
  )
}

export default FormControl
