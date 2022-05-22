import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import tw, { styled, css }from 'twin.macro'
import Container from '../elements/Container'
import RichText from '../elements/RichText'
import Section from '../elements/Section'
import Typography from '../elements/Typography'

const PolicyBox = styled.div(() => [
  css`
    p {
      ${tw`mb-4`}
    }

    h1 {
      ${tw`text-3xl mb-4 font-medium`}
    }

    h2 {
      ${tw`text-2xl mb-4 font-medium`}
    }

    h3 {
      ${tw`text-2xl mb-4 font-medium`}
    }

    h4 {
      ${tw`text-xl mb-4 font-medium`}
    }

    h5 {
      ${tw`text-sm mb-4 font-medium`}
    }
  `
])

const Privacy = () => {

  const data = useStaticQuery(graphql`
    query PrivacyPolicyPage {
      allStrapiPrivacyPolicy {
        nodes {
          content
        }
      }
    }
  `)

  const { content } = data.allStrapiPrivacyPolicy.nodes[0]

  return (
    <Section>
      <Container>
        <Typography as="h1" variant="h2" tw="mb-6">
          Политика конфиденциальности
        </Typography>
        <PolicyBox>
          <RichText content={content} />
        </PolicyBox>
      </Container>
    </Section>
  )
}

export default Privacy
