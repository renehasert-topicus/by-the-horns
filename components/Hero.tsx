import heroStyles from '../styles/Hero.module.scss'

export default function Hero({ children }) {
    return (
        <section id='hero' className={heroStyles.hero}>
            <div className={heroStyles.hero__header}>
                <div className={heroStyles.hero__header__title}>
                    Grab that dev
                </div>
            </div>
            <div className={heroStyles.hero__children}>
                {children}
            </div>
        </section >
    )
}