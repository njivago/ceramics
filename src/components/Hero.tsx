'use client';
import Image from 'next/image'
import 'swiper/css';
import { IMAGES_URL } from '@/constants'
import TitleSection from './hero/TitleSection'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [swiperRef, swiperInView] = useInView({ threshold: 0.2 });

  return (
    <section id='home' className="relative overflow-hidden h-screen px-16 bg-feature-bg bg-repeat">
      <TitleSection />
      <div ref={swiperRef} className={`transition-all duration-1000 ${swiperInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <Swiper
          className={'h-1/2 mt-20 w-screen py-5 !overflow-visible'}
          spaceBetween={10}
          freeMode
          speed={15050}
          grabCursor={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          breakpoints={{
            400: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1920: {
              slidesPerView: 6,
            },
            2560: {
              slidesPerView: 7,
            },
          }}
          loop
          modules={[FreeMode, Autoplay]}
          >
          {IMAGES_URL.map(url =>
            <SwiperSlide key={url} className='!h-auto'>
              <Image
                className="!h-3/4 inline-block"
                src={`/images${url}`}
                alt="person"
                width={300}
                height={340}
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </section>
  )
}

export default Hero;