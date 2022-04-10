import React from "react";
import tw, {css, styled} from "twin.macro";
import Typography from "../elements/Typography";
import ButtonLink from "../elements/ButtonLink";

const CardWrap = styled.div(() => [
  tw`shadow bg-white text-center rounded-lg overflow-hidden`,
  css`
    .gatsby-image-wrapper {
      width: 100%;
    }
  `
])

const CardBody = tw.div`
  py-4 px-4
`

const CategoryCard = ({data}) => {

  return (
   <CardWrap>
     {data.image}
     <CardBody>
       <Typography as="h2" variant="h4" tw="mb-4">{data.name}</Typography>
       <ButtonLink to={`/realty/${data.slug}`}>Перейти</ButtonLink>
     </CardBody>
   </CardWrap>
  )
}

export default CategoryCard