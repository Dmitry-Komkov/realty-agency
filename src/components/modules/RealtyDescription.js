import React from 'react'
import tw from 'twin.macro';
import Container from '../elements/Container';
import Section from '../elements/Section';
import Typography from '../elements/Typography';

const StyledSection = tw(Section)`pt-0 md:pt-0`
const DescriptionBox = tw.div`shadow-md rounded-md p-4 md:p-6`

const RealtyDescription = ({description}) => {
  return (
    <StyledSection>
      <Container>
        <DescriptionBox>
          <Typography as="h3" variant="h3" tw="uppercase mb-4">Описание объекта</Typography>
          <Typography>{description}</Typography>
        </DescriptionBox>
      </Container>
    </StyledSection>
  )
}

export default RealtyDescription