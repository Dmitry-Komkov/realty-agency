import React from 'react'
import tw from 'twin.macro';

const StyledInput = tw.input`bg-white border border-grayLight p-4 rounded-md w-full`

const FormInput = React.forwardRef(({ onChange, onBlur, name, placeholder, type, as }, ref) => (
  <StyledInput as={as} placeholder={placeholder} type={type} name={name} ref={ref} onChange={onChange} onBlur={onBlur}/>
))

export default FormInput
