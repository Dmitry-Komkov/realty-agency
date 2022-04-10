import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';
import { nanoid } from 'nanoid'
import tw from 'twin.macro'
import Container from '../../elements/Container'
import Menu from '../navigation/Menu'
import Typography from '../../elements/Typography'
import Button from '../../elements/Button'
import InstagramLogo from '../../../assets/icons/instagram-logo.com.svg'

const Wrapper = tw.footer`bg-primaryDark text-white py-6 text-sm lg:text-base`
const FooterTop = tw.div`
  grid grid-cols-6 items-center gap-4 border-b pb-6 mb-6
`
const MenuBox = tw.div`
  col-span-3
  [ul]:(flex flex-wrap gap-x-4 gap-y-2 lg:gap-x-8)
  [ul li a]:(p-2 hover:text-secondary)
`
const ContactsBox = tw.div`
  text-right col-span-3 flex flex-col gap-2 items-end
  [.contact--link]:(inline hover:text-secondary)
`
const FooterMiddle = tw.div`
  mb-6
  lg:(grid grid-cols-2 gap-12)
`
const InfoBox = tw.div`
  flex gap-4 mb-6
`
const InfoCol = tw.div`
  w-1/2
`
const ButtonsContainer = tw.div`
  grid grid-cols-5 gap-4 items-center
  lg:( grid-cols-1 gap-2 justify-end justify-items-end )
`
const ButtonBox = tw.div`
  col-span-3
`
const SocialsBox = tw.div`
  col-span-2 flex gap-2 flex-wrap
  [a]:(flex text-primary p-2 hover:text-white)
  [svg]:(fill-current w-[25px])
`
const FooterBottom = tw.div`
  flex justify-between gap-4
`
const PolicyBox = tw.div`
  [a]:(text-sm text-primary)
`
const StyledLink = tw(Link)`lg:text-base`
const DevelopedBox = tw.div`text-right`

const links = [
  {id: nanoid(), url: '/realty', text: 'Каталог'},
]

const Footer = () => {

  const data = useStaticQuery(graphql`
    query SiteDataFooter {
      allStrapiGeneral {
        nodes {
          phone
          mail
          address
        }
      }
    }
  `)

  const {phone, mail, address} = data.allStrapiGeneral.nodes[0]

  const extraLinks = [
    {
      name: 'Каталог',
      url: '/realty',
      id: nanoid(),
    },
  ]

  return (
    <Wrapper id="footer">
      <Container>
        <FooterTop>
          <MenuBox>
            <Menu extraLinks={extraLinks} />
          </MenuBox>
          <ContactsBox>
            <a href={`tel:${phone}`} className="contact--link contact--link-phone" tw="font-bold lg:text-2xl">{phone}</a>
            <a href={`mailto:${mail}`} className="contact--link contact--link-phone" tw="text-sm font-bold lg:text-xl">{mail}</a>
          </ContactsBox>
        </FooterTop>
        <FooterMiddle>
          <InfoBox>
            <InfoCol>
              <Typography>
                © 2012–{new Date().getFullYear()} «Фаворит» Агентство недвижимости в Чехове. Все права защищены.
              </Typography>
            </InfoCol>
            <InfoCol>
              <Typography>
                Наш офис:<br/>{address}
              </Typography>
            </InfoCol>
          </InfoBox>
          <ButtonsContainer>
            <ButtonBox>
              <Button color="secondary" tw="text-sm lg:text-lg">Написать в WhatsApp</Button>
            </ButtonBox>
            <SocialsBox>
              <a href="#!" target="_blank" rel="noopener noreferrer">
                <InstagramLogo />
              </a>
            </SocialsBox>
          </ButtonsContainer>
        </FooterMiddle>
        <FooterBottom>
          <PolicyBox>
            <StyledLink to="#!">Политика конфиденциальности</StyledLink>
          </PolicyBox>
          <DevelopedBox>
            <span>Сайт разработан: </span>
            <a href="https://ascentweb.ru" target="_blank" rel="noopener noreferrer" tw="font-bold">ASCENT</a>
          </DevelopedBox>
        </FooterBottom>
      </Container>
    </Wrapper>
  )
}

export default Footer
