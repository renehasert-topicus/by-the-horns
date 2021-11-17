import React from 'react';
import testimonialsStyles from '../styles/Testimonials.module.scss';
import Tooltip from './Tooltip';
import { useMediaQuery } from 'react-responsive'

export default function Testimonials() {
    const desktopScreen = useMediaQuery({ query: '(min-width: 768px)' })
    return (
        <div className={testimonialsStyles.testimonials}>
            <Tooltip message="This number is probably accurate." direction={desktopScreen ? 'left' : 'bottom'}>
                <div className={testimonialsStyles.testimonials__testimonial}>
                <span className={testimonialsStyles.testimonials__testimonial__number}>
                    97%
                </span>
                    satisfaction rate
                </div>
            </Tooltip>
            <Tooltip message="*if you hire 1 person, guaranteed!" direction={desktopScreen ? 'left' : 'bottom'}>
                <div className={testimonialsStyles.testimonials__testimonial}>
                    at least
                    <span className={testimonialsStyles.testimonials__testimonial__number}>
                    1
                </span>
                    hire per visit
                </div>
            </Tooltip>
        </div>
    );
}