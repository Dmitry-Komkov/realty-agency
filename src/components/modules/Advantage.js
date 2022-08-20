import React from 'react'
import tw, { styled, css} from 'twin.macro';
import Typography from '../elements/Typography';

const Wrapper = tw.div`text-center`

const Title = styled.div(() => [
  tw`mt-4 mb-4 pb-4 relative`,
  css`
    &::after {
      content: '';
      position: absolute;
      width: 30%;
      height: 2px;
      transform: translateX(-50%);
      bottom: 0;
      left: 50%;
      ${tw`bg-primary`}
    }
  `
])

const IconBox = styled.div(() => [
  tw`w-20 h-20 mx-auto p-3 rounded-full`,
  css`
    background: linear-gradient(126deg, rgba(0,129,254,1) 30%, rgba(0,97,187,1) 100%);
    svg {
      fill: white;
    }
  `
])

const Advantage = ({image, title, text}) => {
  return (
    <Wrapper>
      <IconBox>
        {image}
      </IconBox>
      <Title>
        <Typography as="h3" align="center" variant="h3" tw="font-bold">{title}</Typography>
      </Title>
      <div>
        <Typography align="center" tw="font-normal">{text}</Typography>
      </div>
    </Wrapper>
  )
}

export default Advantage
