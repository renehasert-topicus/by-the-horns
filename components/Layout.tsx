import layoutStyles from '../styles/Layout.module.scss'
import Nav from './Nav'

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            <div className={layoutStyles.layout}>
                <div className={layoutStyles.layout__container}>
                    {children}
                </div>
            </div>
        </div>
    )
}