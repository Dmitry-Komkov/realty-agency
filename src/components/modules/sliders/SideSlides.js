import React, { useState } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs, Autoplay } from 'swiper';
import tw, { styled, css } from 'twin.macro';

// Import Swiper styles
import "swiper/css";

const Wrapper = styled.div(() => [
  tw`flex gap-1`,
  css`

    .swiper {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      ${tw`h-[170px] md:h-[430px]`}
    }
    
    .mySwiper .swiper-slide {
      opacity: 0.4;
    }

    .mySwiper .swiper-slide > * {
      width: 100%;
      height: 100%;
    }
    
    .mySwiper .swiper-slide-thumb-active {
      opacity: 1;
    }
    
    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `
])
const ThumbSwiper = styled.div(() => [
  tw`w-[80px] md:w-[200px]`
])
const MainSwiper = styled.div(() => [
  tw`w-[calc(100% - 80px)] md:w-[calc(100% - 200px)]`
])

const SideSlides = ({photos, name}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Wrapper>
      <ThumbSwiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          direction={"vertical"}
          spaceBetween={4}
          slidesPerView={3}
          autoplay={{
            delay: 5000
          }}
          watchSlidesProgress={true}
          modules={[ Thumbs, Autoplay ]}
          className="mySwiper"
        >
          {
            photos.map((photo, idx) => {
              const imgData = getImage(photo.localFile)

              return (
                <SwiperSlide key={`${photo.localFile.id}-1`}>
                  <GatsbyImage image={imgData} alt={`${name}-${idx}`} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </ThumbSwiper>
      <MainSwiper>
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          autoplay={{
            delay: 5000
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Thumbs, Autoplay]}
          className="mySwiper2"
        >
          {
            photos.map((photo, idx) => {
              const imgData = getImage(photo.localFile)

              return (
                <SwiperSlide key={`${photo.localFile.id}-2`}>
                  <GatsbyImage image={imgData} alt={`${name}-${idx}`} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </MainSwiper>
    </Wrapper>
  )
}

export default SideSlides
