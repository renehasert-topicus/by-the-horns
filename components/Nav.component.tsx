import React, { CSSProperties, ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.scss';
import { useRouter } from 'next/router';

function NavComponent(): ReactElement {
    const [navOpen, toggleNav] = useState(false);
    const [scrollY, setScrollY] = useState(0.0);
    const router = useRouter();

    function setScroll(): void {
        setScrollY(window.scrollY < 50 ? window.scrollY : 50);
    }

    function getNavStyle(): CSSProperties {
        const percentage = scrollY * 0.02;
        const blackToWhite = 255 * percentage;
        return {
            background: `rgba(97, 218, 251, ${percentage})`,
            color: `rgb(${blackToWhite},${blackToWhite},${blackToWhite})`,
            borderBottom: `1px solid rgba(255,255,255, ${percentage})`
        };
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener('scroll', setScroll);
        }

        watchScroll();
        return watchScroll();
    });

    useEffect(() => {
        toggleNav(false);
    }, [router.pathname]);

    const handleLogoClick = (event: React.MouseEvent) => {
        event.preventDefault();
        router.pathname === '/'
            ? router.push('#home')
            : router.push('/');
    };

    return (
        <div className={navStyles.nav} style={getNavStyle()}>
            <div className={`${navOpen ? navStyles.backdrop : ''}`}
                 onClick={navOpen ? () => toggleNav(false) : undefined}></div>
            <div className={navStyles.nav__container}>
                <div onClick={e => handleLogoClick(e)} className={navStyles.nav__container__logo}>
                    byTheHorns ( )
                </div>
                <div
                    className={`${navStyles.nav__container__links} ${navOpen ? navStyles['nav__container__links--open'] : ''}`}>
                    <ul className={navStyles.nav__container__links__list}>
                        <li className={router.pathname == '/'
                            ? `${navStyles.nav__container__links__list__item} ${navStyles['nav__container__links__list__item--active']}`
                            : navStyles.nav__container__links__list__item}
                            style={navOpen ? { animation: `${navStyles.fadeAndSlideInFromRight} .9s ease forwards` } : {}}>
                            <Link href={'/'}>home</Link>
                        </li>
                        <li className={router.pathname == '/applicants'
                            ? `${navStyles.nav__container__links__list__item} ${navStyles['nav__container__links__list__item--active']}`
                            : navStyles.nav__container__links__list__item}
                            style={navOpen ? { animation: `${navStyles.fadeAndSlideInFromRight} 1.1s ease forwards` } : {}}>
                            <Link href={'/applicants'}>applicants</Link>
                        </li>
                        <li className={router.pathname == '/about'
                            ? `${navStyles.nav__container__links__list__item} ${navStyles['nav__container__links__list__item--active']}`
                            : navStyles.nav__container__links__list__item}
                            style={navOpen ? { animation: `${navStyles.fadeAndSlideInFromRight} 1.3s ease forwards` } : {}}>
                            <Link href={'/about'}>about</Link>
                        </li>
                    </ul>
                </div>
                <div
                    className={`${navStyles.nav__container__burger} ${navOpen ? navStyles['nav__container__burger--open'] : ''}`}
                    onClick={() => toggleNav(!navOpen)}>
                    <div className={`${navOpen ? navStyles.nav__container__burger__lineOne : ''}`}></div>
                    <div className={`${navOpen ? navStyles.nav__container__burger__lineTwo : ''}`}></div>
                    <div className={`${navOpen ? navStyles.nav__container__burger__lineThree : ''}`}></div>
                </div>
            </div>
        </div>
    );
}

export default NavComponent;