import React, { useEffect, useRef } from 'react'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
import './bannerSwiper.scss'


const BannerSwiper = ({ images }) => {
  const swiperRef = useRef(null)

  useEffect(() => {
    // register Swiper custom elements
    register()

    const params = {
      // Swiper parameters
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      }
    }

    // Assign it to swiper element
    Object.assign(swiperRef.current, params)

    // initialize swiper
    swiperRef.current.initialize()
  }, [])

  return (
    <section className='banner__swiper'>
      {images &&
        <swiper-container init='false' ref={swiperRef}>
          {images.map((image, index) => (
            <swiper-slide class='swiper__slide' key={index}>
              <img src={image} alt={`logement picture`} />
            </swiper-slide>
          ))}
        </swiper-container>
      }
      <div className='swiper-button-next'></div>
      <div className='swiper-button-prev'></div>
      <div className='swiper-pagination'></div>
    </section>
  )
}

export default BannerSwiper
