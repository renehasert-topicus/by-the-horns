import React, { ReactElement } from 'react';
import testimonialsStyles from '../styles/Testimonials.module.scss';
import TooltipComponent from './Tooltip.component';
import { useMediaQuery } from 'react-responsive'

function TestimonialsComponent(): ReactElement {
    const desktopScreen = useMediaQuery({ query: '(min-width: 768px)' })
    return (
        <div className={testimonialsStyles.testimonials}>
            <TooltipComponent message="This percentage is probably accurate." direction={desktopScreen ? 'left' : 'bottom'}>
                <div className={testimonialsStyles.testimonials__testimonial}>
                <span className={testimonialsStyles.testimonials__testimonial__number}>
                    97%
                </span>
                    satisfaction rate
                </div>
            </TooltipComponent>
            <TooltipComponent message="Terms and conditions apply." direction={desktopScreen ? 'left' : 'bottom'}>
                <div className={testimonialsStyles.testimonials__testimonial}>
                    at least
                    <span className={testimonialsStyles.testimonials__testimonial__number}>
                    1
                </span>
                    hire per visit
                </div>
            </TooltipComponent>
        </div>
    );
}

export default TestimonialsComponent;