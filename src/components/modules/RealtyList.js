import React from "react";
import EstateProject from "./EstateProject";
import tw, { css, styled } from "twin.macro";

const ListGrid = styled.div(() => [
  tw`
    md:(grid grid-cols-2 gap-8 justify-between)
    xl:(grid-cols-3)
  `,
  css`
    article {
      &:not(:last-of-type) {
        ${tw`mb-10 md:mb-0`}
      }
    }
  `
])

const RealtyList = ({data, catSlug}) => {
  const { nodes } = data
  return (
    <ListGrid>
      {
        nodes.map(item => {
          return (
            <EstateProject data={item} categorySlug={catSlug} key={`${item.name}-${item.id}`} />
          )
        })
      }
    </ListGrid>
  )
}

export default RealtyList
