import heroStyles from '../styles/Hero.module.scss';
import TypingComponent from './Typing.component';
import { ReactElement } from 'react';

function HeroComponent({ children }: { children: ReactElement<any, any>[] }): ReactElement {
    return (
        <section id="hero" className={heroStyles.hero}>
            <div className={heroStyles.hero__header}>
                <div className={heroStyles.hero__header__title}>
                    Grab that dev
                </div>
                <div className={heroStyles.hero__header__typing}>
                    <TypingComponent/>
                </div>
            </div>
            <div className={heroStyles.hero__children}>
                {children}
            </div>
        </section>
    );
}

export default HeroComponent;