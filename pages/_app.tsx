import { AppProps } from 'next/app'
import React from 'react';
import LayoutComponent from '../components/Layout.component';
import '../styles/globals.scss'
import '../styles/variables.scss'
import 'swiper/scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  )
}
