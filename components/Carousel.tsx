import React from 'react';
import Card from './Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';

export default function Carousel({ applicants }) {
    SwiperCore.use([Autoplay, EffectCoverflow]);

    return (
        <div>
            <Swiper effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": false
                    }}
                    autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                    }}
                    className="mySwiper">
                {applicants.map((applicant: any, index: number) => {
                    return (<SwiperSlide key={index}>
                        <Card applicant={applicant} index={index}/>
                    </SwiperSlide>);
                })}
            </Swiper>
        </div>
    );
}