import React from 'react'
import tw, { styled, css } from 'twin.macro';
import Typography from '../elements/Typography';

const Wrapper = tw.article`text-center`
const ImageBox = styled.div(() => [
  tw`h-[290px] w-2/3 mx-auto`,
  css`
    .gatsby-image-wrapper {
      ${tw`h-full`}
    }  
  `
])
const CardBody = styled.div(() => [
  css`
    .accent-text span {
      ${tw`text-primary`}
    }
  `
])

const TeamCard = ({name, position, exp, education, photo}) => {
  return (
    <Wrapper>
      <ImageBox>
        {photo}
      </ImageBox>
      <CardBody>
        <Typography variant="h3" tw="font-semibold my-2 text-base lg:text-xl">{name}</Typography>
        <Typography as="h3" variant="h3" tw="font-bold mb-2 text-base lg:text-xl">{position}</Typography>
        <Typography tw="mb-2" className="accent-text"><span>Опыт работы: </span>{exp}</Typography>
        <Typography tw="mb-2" className="accent-text"><span>Образование: </span>{education}</Typography>
      </CardBody>
    </Wrapper>
  )
}

export default TeamCard
