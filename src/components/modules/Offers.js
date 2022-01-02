import React from 'react'
import tw from 'twin.macro';
import Container from '../elements/Container';
import Section from '../elements/Section';
import Typography from '../elements/Typography';
import EstateProject from './EstateProject';

const Cards = tw.div`pt-8 pb-4 flex flex-1 gap-6 overflow-x-scroll`

const Offers = () => {
  return (
    <Section>
      <Container>
        <div>
          <Typography as="h2" variant="h2" align="center" tw="mb-4 uppercase">Лучшие предложения дня &#128293;&#128293;&#128293;</Typography>
          <Typography align="center">Мы подобрали для вас самые актуальные и выгодные предложения</Typography>
        </div>
        <Cards>
          <EstateProject />
          <EstateProject />
          <EstateProject />
        </Cards>
      </Container>
    </Section>
  )
}

export default Offers
