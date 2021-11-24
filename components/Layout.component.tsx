import React from 'react'
import layoutStyles from '../styles/Layout.module.scss'
import MetaComponent from './Meta.component'

function LayoutComponent({ children }) {
    return (
        <div>
            <MetaComponent />
            <div className={layoutStyles.layout}>
                {children}
            </div>
        </div>
    )
}

export default LayoutComponent;