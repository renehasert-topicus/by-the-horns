import React from 'react'
import layoutStyles from '../styles/Layout.module.scss'
import Meta from './Meta'

export default function Layout({ children }) {
    return (
        <div>
            <Meta />
            <div className={layoutStyles.layout}>
                {children}
            </div>
        </div>
    )
}