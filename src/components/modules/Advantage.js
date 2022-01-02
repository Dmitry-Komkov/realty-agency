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

const Advantage = ({image, title, text}) => {
  return (
    <Wrapper>
      {image}
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
