import testimonialsStyles from '../styles/Testimonials.module.scss';

export default function Testimonials() {
    return (
        <div className={testimonialsStyles.testimonials}>
            <div className={testimonialsStyles.testimonials__testimonial}>
                <span className={testimonialsStyles.testimonials__testimonial__number}>
                    97%
                </span>
                satisfaction rate
            </div><div className={testimonialsStyles.testimonials__testimonial}>
                at least
                <span className={testimonialsStyles.testimonials__testimonial__number}>
                    1
                </span>
                hire per visit
            </div>
        </div>
    )
}