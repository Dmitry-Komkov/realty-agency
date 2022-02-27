import React from 'react'
import tw from 'twin.macro';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Container from '../elements/Container';
import Section from '../elements/Section';
import Typography from '../elements/Typography';
import TeamCard from './TeamCard';

import 'swiper/css';
import 'swiper/css/navigation';

const SwiperBox = tw.div`py-12`

const OurTeam = () => {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      allStrapiExperts {
        nodes {
          education
          experience
          name
          photo {
            localFile {
              childImageSharp {
                gatsbyImageData (
                  height: 288
                  placeholder: BLURRED
                  quality: 90
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
          position
          strapiId
          id
        }
      }
    }
  `)

  const staff = data.allStrapiExperts.nodes

  return (
    <Section>
      <Container>
        <div>
          <Typography as="h2" variant="h2" align="center" tw="mb-4 uppercase">Наши специалисты</Typography>
          <Typography align="center">Наши эксперты выслушают вас помогут в любом вопросе.</Typography>
        </div>
        <SwiperBox>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 3000
            }}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 50
              }
            }}
          >
            {
              staff.map(expert => {
                const { name, position, experience, education, photo } = expert
                const imgData = getImage(photo.localFile)
                const avatar =  <GatsbyImage image={imgData} alt={name} />

                return (
                  <SwiperSlide key={`${expert.id}_${expert.strapiId}`}>
                    <TeamCard
                      name={name}
                      position={position}
                      exp={experience}
                      education={education}
                      photo={avatar}
                    />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </SwiperBox>
      </Container>
    </Section>
  )
}

export default OurTeam
