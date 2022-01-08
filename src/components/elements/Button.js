import PropTypes from 'prop-types'
import tw, { styled } from 'twin.macro'

const buttonVariantsColor = {
  primary: tw`bg-primary text-white border-primary hover:bg-primaryDarker hover:border-primaryDarker`,
  secondary: tw`bg-secondary text-white border-secondary hover:bg-secondaryDarker hover:border-secondaryDarker`
}

const buttonVariantsSize = {
  small: tw`text-xs px-3.5 py-0.5`,
  regular: tw`text-base px-6 py-1.5`,
  large: tw`text-xl px-10 py-3.5`
}

const buttonVariantsType = {
  outlined: tw`bg-transparent border-2 hover:bg-transparent`,
  filled: tw``,
}

const Button = styled.button(({color, size, type, ...other}) => [
  tw`rounded-lg transition duration-300 ease-in-out`,
  {...other},
  buttonVariantsColor[color],
  buttonVariantsSize[size],
  buttonVariantsType[type],
])

Button.defaultProps = {
  color: 'primary',
  size: 'regular',
  type: 'filled',
}

Button.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string
}

export default Button
