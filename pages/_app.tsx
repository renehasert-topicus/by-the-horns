import { AppProps } from 'next/app';
import React, { ReactElement } from 'react';
import LayoutComponent from '../components/Layout.component';
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../styles/globals.scss';
import '../styles/variables.scss';
import 'swiper/scss';

function App({ Component, pageProps }: AppProps): ReactElement {
    return (
        <LayoutComponent>
            <Component {...pageProps} />
        </LayoutComponent>
    );
}

export default App;