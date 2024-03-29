import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import tw, { css, styled } from "twin.macro"
import Container from "../../elements/Container"

const Box = styled.div(() => [
  tw`flex items-center justify-between gap-x-3
  `,
])

const ImageBox = styled.div(() => [tw`max-w-[120px] lg:max-w-[300px]`])

const Contacts = styled.div(() => [
  tw`
    flex-grow text-right text-lg font-bold
    lg:text-xl lg:flex lg:gap-x-20 lg:justify-end lg:items-center
  `,
  css`
    span {
      ${tw`text-sm font-light lg:block lg:text-left`}
    }

    a {
      ${tw`transition duration-300 ease-in-out hover:text-primaryDark`}
    }
  `,
])

const HeaderMid = () => {
  const data = useStaticQuery(graphql`
    query SiteData {
      allStrapiGeneral {
        nodes {
          phone
        }
      }
    }
  `)

  const { phone } = data.allStrapiGeneral.nodes[0]

  return (
    <div tw="bg-primary py-3 text-white lg:py-5">
      <Container>
        <Box>
          <ImageBox>
            <Link to="/">
              <StaticImage
                src="../../../assets/images/logo-white-new.png"
                alt="АН Фаворит"
                placeholder="blurred"
              />
            </Link>
          </ImageBox>
          <Contacts>
            <div>
              <a href={`tel:${phone}`}>{phone}</a>
            </div>
            <div>
              <p>
                <span>ежедневно</span> 9:00-20:00
              </p>
            </div>
          </Contacts>
        </Box>
      </Container>
    </div>
  )
}

export default HeaderMid
