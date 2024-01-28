import React from 'react'
import {graphql, useStaticQuery} from "gatsby";
import tw from 'twin.macro'
import Container from '../elements/Container';
import Section from '../elements/Section';
import Typography from '../elements/Typography';
import OneLineForm from './forms/OneLineForm';

const FormContainer = tw.div`bg-grayLightest mt-6 px-8 py-4 lg:px-16 lg:py-10`

const FreeConsult = () => {
  const data = useStaticQuery(graphql`
    query SiteDataFreeConsult {
      allStrapiGeneral {
        nodes {
          phone
        }
      }
    }
  `)

  const { phone } = data.allStrapiGeneral.nodes[0]

  return (
    <Section>
      <Container>
        <div>
          <Typography align="center" as="h2" tw="uppercase mb-4 text-xl font-medium lg:text-4xl">Бесплатная консультация с риэлтором</Typography>
          <Typography align="center" as="p" variant="p">Оставьте заявку на консультацию или звоните по телефону: <a href={`tel:${phone}`}>{phone}</a></Typography>
        </div>
        <FormContainer>
          <OneLineForm />
          <Typography align="center" tw="mt-6">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.</Typography>
        </FormContainer>
      </Container>
    </Section>
  )
}

export default FreeConsult
