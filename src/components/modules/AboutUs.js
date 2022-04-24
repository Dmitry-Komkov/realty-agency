import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import tw, { styled, css } from 'twin.macro';
import Container from '../elements/Container';
import Section from '../elements/Section';
import Typography from '../elements/Typography';


const StyledSection = styled(Section)(() => [
  css`
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  `
])
const Box = tw.div`
  lg:grid lg:grid-cols-3 lg:gap-4 lg:items-center
`
const TitleBox = tw.div`mb-4 lg:col-start-1 lg:col-end-3`
const ImageBox = tw.div`
  lg:h-full
  [.gatsby-image-wrapper]:(lg:h-full)
`

const AboutUs = () => {
  return (
    <StyledSection id="about">
      <Container>
        <Box>
          <TitleBox className="content-box">
            <Typography as="h2" variant="h2" tw="text-lg mb-4 uppercase">Агентство недвижимости «Фаворит» в Чехове</Typography>
            <Typography>Ищете надежные риэлторские агентства Чехова? Обратитесь в "Фаворит". Мы предоставляем комплексное риэлторское, брокерское, юридическое сопровождение. Компания оказывает услуги на рынке с 2010 года. <br/><br/>Важное отличие "Фаворит" от других риэлторских компаний - гарантийный сертификат. В случае проблем мы компенсируем ваши потери по сделке из собственного фонда. Также мало какое агентство по продаже недвижимости может предложить эффективное оформление заявки на ипотеку, а также дополнительные скидки и бонусы. С нами шанс на одобрение ипотеки на 25% выше! <br/><br/>Мало какая риэлторская фирма может сравниться по количеству объявлений в базе, организации работы с применением ИТ и качеству обслуживания. Вы можете посмотреть отзывы клиентов о специалистах компании и их рейтинг. <br/><br/>Свяжитесь с нами любым удобным способом. Например, позвоните или оставьте свой номер телефона — перезвоним в течение 5 минут. Адрес и телефон указаны на странице контактов.</Typography>
          </TitleBox>
          <ImageBox>
            <StaticImage
              src="../../assets/images/content/zhk-vivat-1.jpg"
              alt="Недвижимость в Чехове"
            />
          </ImageBox>
        </Box>
      </Container>
    </StyledSection>
  );
};

export default AboutUs;
