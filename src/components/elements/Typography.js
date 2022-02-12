import React from 'react'
import tw, { styled } from 'twin.macro';
import { PropTypes } from 'prop-types';

const variants = {
  'h1': tw`text-3xl font-semibold lg:text-5xl`,
  'h2': tw`text-2xl font-medium lg:text-4xl`,
  'h3': tw`text-xl font-medium`,
  'h4': tw`text-lg font-medium`,
  'h5': tw`text-2xl font-medium`,
  'h6': tw`text-2xl font-medium`,
  'body': tw``
}

const aligns = {
  center: tw`text-center`,
  right: tw`text-right`
}

const Text = styled.p(({ variant, align }) => [
  variants[variant],
  aligns[align]
])

const Typography = ({as, variant, align, children, ...rest}) => (
  <Text as={as} variant={variant} align={align} {...rest}>{children}</Text>
)

export default Typography

Typography.defaultProps = {
  as: 'p',
  variant: 'body',
}

Typography.propTypes = {
  as: PropTypes.string,
  variant: PropTypes.string,
  align: PropTypes.string
}
