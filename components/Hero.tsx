import heroStyles from '../styles/Hero.module.scss'
import Typing from './Typing';

export default function Hero({ children }) {
    return (
        <section id='hero' className={heroStyles.hero}>
            <div className={heroStyles.hero__header}>
                <div className={heroStyles.hero__header__title}>
                    Grab that dev
                </div>
                <div className={heroStyles.hero__header__typing}>
                   <Typing />
                </div>
            </div>
            <div className={heroStyles.hero__children}>
                {children}
            </div>
        </section >
    )
}