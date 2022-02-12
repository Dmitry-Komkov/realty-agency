import React from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import tw, { styled, css } from 'twin.macro';
import Typography from '../elements/Typography';
import Button from '../elements/Button';

const Wrapper = styled.article(() => [
  tw`max-w-md min-w-[340px]`
])
const Body = tw.section`py-4 px-2 bg-grayLightest`
const PriceBox = tw.div``
const FeaturesBox = styled.div(() => [
  tw`flex justify-between items-center my-6`,
  css`
    & > div:not(:last-child) {
      ${tw`border-r`}
    }
  `
])
const Feature = tw.div`text-center px-4 py-1`
const DescriptionBox = tw.div`mb-6`
const ButtonBox = tw.div`text-center`

const EstateProject = () => {
  return (
    <Wrapper>
      <StaticImage
        src="../../assets/images/content/estates/test-estate.png"
        alt="Test"
      />
      <Body>
        <PriceBox>
          <Typography as="p" variant="h3" align="center" tw="text-secondary">3 000 000 ₽</Typography>
        </PriceBox>
        <FeaturesBox>
          <Feature>1-комн. квартира</Feature>
          <Feature>50 м2</Feature>
          <Feature>3/12 эт.</Feature>
        </FeaturesBox>
        <DescriptionBox>
          <Typography as="p" align="center">г. Чехов, ул. Московская, д. 100</Typography>
        </DescriptionBox>
        <ButtonBox>
          <Button>Подробнее</Button>
        </ButtonBox>
      </Body>
    </Wrapper>
  )
}

export default EstateProject
