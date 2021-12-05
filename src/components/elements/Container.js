import tw, { styled } from 'twin.macro'

const Container = styled.div(({ fullWidth }) => [
  tw`mx-auto px-6 md:px-8 xl:px-10`,
  fullWidth ? tw`w-full max-w-full` : tw`container`,
])

export default Container
