import React from 'react'
import layoutStyles from '../styles/Layout.module.scss'
import Meta from './Meta'
import Nav from './Nav'

export default function Layout({ children }) {


    return (
        <div>
            <Meta />
            <Nav />
            <div className={layoutStyles.layout}>
                {children}
            </div>
        </div>
    )
}