import React from 'react'
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import tw, { styled, css } from 'twin.macro';
import Typography from '../elements/Typography';
import { Link } from 'gatsby';

const Wrapper = styled.article(() => [
  tw`shadow rounded-md max-w-md min-w-[340px]`
])
const Body = tw.section`py-4 px-2 bg-grayLightest`
const PriceBox = tw.div``
const FeaturesBox = styled.div(() => [
  tw`flex justify-between items-center my-6`,
  css`
    & > div:not(:first-of-type) {
      ${tw`min-w-[90px]`}
    }

    & > div:not(:last-of-type) {
      ${tw`relative`}

      &::after {
        content: "";
        ${tw`bg-textDark absolute w-px h-8 -translate-y-1/2 top-1/2 right-0`};
      }
    }
  `
])
const Feature = tw.div`text-center px-4 py-1`
const DescriptionBox = tw.div`mb-6`
const ButtonBox = tw.div`text-center`
const StyledLink = tw(Link)`bg-primary text-white border-primary hover:bg-primaryDarker hover:border-primaryDarker rounded-lg transition duration-300 ease-in-out text-base px-6 py-1.5`

const EstateProject = ({data, categorySlug}) => {
  const {name, address, level, category, square, photos, price, strapiId} = data

  const slug = category ? category.slug : categorySlug

  const imgData = getImage(photos[0].localFile)

  const formatPrice = (num, sep=" ") => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep)
  }

  return (
    <Wrapper>
      <GatsbyImage image={imgData} alt={name} />
      <Body>
        <PriceBox>
          <Typography as="p" align="center" tw="text-secondary text-xl font-medium md:text-2xl">{formatPrice(price, ' ')} ₽</Typography>
        </PriceBox>
        <FeaturesBox>
          <Feature>{name}</Feature>
          <Feature>{square} м<sup>2</sup></Feature>
          <Feature>{level} эт.</Feature>
        </FeaturesBox>
        <DescriptionBox>
          <Typography as="p" align="center">{address}</Typography>
        </DescriptionBox>
        <ButtonBox>
          <StyledLink to={`/realty/${slug}/${strapiId}`}>
            Подробнее
          </StyledLink>
        </ButtonBox>
      </Body>
    </Wrapper>
  )
}

export default EstateProject
