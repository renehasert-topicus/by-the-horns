import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.scss'
import { useRouter } from 'next/router'

export default function Nav() {
    const [navOpen, toggleNav] = useState(false);
    const router = useRouter();

    useEffect(() => {
        toggleNav(false)
    }, [router.pathname])

    return (
        <div className={navStyles.nav}>
            <div className={navStyles.nav__container}>
                <div className={navStyles.nav__container__wordmark}>
                    byTheHorns( )
                </div>
                <div className={`${navStyles.nav__container__links} ${navOpen ? navStyles.nav__container__linksActive : ''}`}>
                    <ul>
                        <li style={navOpen ? { animation: `${navStyles.fadeAndSlideInFromRight} .6s ease forwards` } : {}}>
                            <Link href="/">home</Link>
                        </li>
                        <li style={navOpen ? { animation: `${navStyles.fadeAndSlideInFromRight} .7s ease forwards` } : {}}>
                            <Link href="/applicants">applicants</Link>
                        </li>
                        <li style={navOpen ? { animation: `${navStyles.fadeAndSlideInFromRight} .8s ease forwards` } : {}}>
                            <Link href="/about">about</Link>
                        </li>
                    </ul>
                </div>
                <div className={`${navStyles.nav__container__burger} ${navOpen ? navStyles.nav__container__burgerActive : ''}`}
                    onClick={() => toggleNav(!navOpen)}>
                    <div className={`${navOpen ? navStyles.nav__container__burger__lineOne : ''}`}></div>
                    <div className={`${navOpen ? navStyles.nav__container__burger__lineTwo : ''}`}></div>
                    <div className={`${navOpen ? navStyles.nav__container__burger__lineThree : ''}`}></div>
                </div>
            </div>
        </div>
    )
}