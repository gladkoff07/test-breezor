import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import { Icon } from '../icon'

import 'swiper/css'
import 'swiper/css/navigation'
import './slider.scss'

SwiperCore.use([Navigation])

export const Slider = ({ slides }) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      navigation={{
        prevEl: prevRef.current ? prevRef.current : undefined,
        nextEl: nextRef.current ? nextRef.current : undefined,
      }}
      onBeforeInit={swiper => {
        swiper.params.navigation.prevEl = prevRef.current
        swiper.params.navigation.nextEl = nextRef.current
      }}
      modules={[Navigation]}
      className='slider-country intro__slider'
    >
      {slides.map(slide => (
        <SwiperSlide key={slide}>{slide}</SwiperSlide>
      ))}
      <div ref={prevRef} className='swiper-button-prev'>
        <Icon name='arrow-prev' color='#fcfcfc' size={24} />
      </div>
      <div ref={nextRef} className='swiper-button-next'>
        <Icon name='arrow-next' color='#fcfcfc' size={24} />
      </div>
    </Swiper>
  )
}
