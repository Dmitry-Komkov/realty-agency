import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Container from '../elements/Container'
import RichText from '../elements/RichText'
import Section from '../elements/Section'
import Typography from '../elements/Typography'

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
        <div>
          <RichText content={content} />
        </div>
      </Container>
    </Section>
  )
}

export default Privacy
