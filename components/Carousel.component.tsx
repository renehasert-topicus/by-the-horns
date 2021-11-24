import React from 'react';
import CardComponent from './Card.component';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper';

export default function CarouselComponent({ applicants }) {
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
                        <CardComponent applicant={applicant} index={index}/>
                    </SwiperSlide>);
                })}
            </Swiper>
        </div>
    );
}