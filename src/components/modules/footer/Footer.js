import React from 'react'
import { nanoid } from 'nanoid'
import tw from 'twin.macro'
import Container from '../../elements/Container'
import Menu from '../navigation/menu'
import Typography from '../../elements/Typography';
import Button from '../../elements/Button'
import InstagramLogo from '../../../assets/icons/instagram-logo.com.svg'
import { Link } from 'gatsby';

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
  {id: nanoid(), url: '#!', text: 'Каталог'},
  {id: nanoid(), url: '#!', text: 'Квартиры'},
  {id: nanoid(), url: '#!', text: 'Дома'},
  {id: nanoid(), url: '#!', text: 'Участки'},
  {id: nanoid(), url: '#!', text: 'Дачи'},
]

const Footer = () => {

  return (
    <Wrapper>
      <Container>
        <FooterTop>
          <MenuBox>
            <Menu links={links} />
          </MenuBox>
          <ContactsBox>
            <a href="tel:+7 (499) 000-00-00" className="contact--link contact--link-phone" tw="font-bold lg:text-2xl">+7 (499) 000-00-00</a>
            <a href="mailto:info@фаворит-чехов.рф" className="contact--link contact--link-phone" tw="text-sm font-bold lg:text-xl">info@фаворит-чехов.рф</a>
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
                Наш офис:<br/>МО, г. Чехов, ул. Почтовая, д. 8, офис 104
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
