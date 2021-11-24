import React, { ReactNode } from 'react'
import pageStyles from '../styles/PageLayout.module.scss'

function PageLayoutComponent({ children, title }: { children: ReactNode, title: string }) {
    return (
        <div className={pageStyles.pageLayout}>
            <div className={pageStyles.pageLayout__container}>
                <div className={pageStyles.pageLayout__container__header}>
                    <div className={pageStyles.pageLayout__container__header__title}>
                        {title}
                    </div>
                </div>
                <div className={pageStyles.pageLayout__container__main}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default PageLayoutComponent

