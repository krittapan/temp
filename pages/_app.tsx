import React from 'react';
import type { AppProps } from 'next/app'


// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/global.scss'
import 'reactjs-popup/dist/index.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
