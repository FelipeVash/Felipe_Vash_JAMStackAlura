/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import GlobalStyle from '../src/theme/GlobalStyle';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Felipe Vash - Portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
          defer
        />
        {/* <!-- Primary Meta Tags --> */}
        <title>Felipe Vash || Dev</title>
        <meta name="title" content="Felipe Vash || Dev" />
        <meta name="description" content="Portfolio do desenvolvedor FrontEnd Felipe Vash." />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://felipevash.vercel.app/" />
        <meta property="og:title" content="Felipe Vash || Dev" />
        <meta property="og:description" content="Portfolio do desenvolvedor FrontEnd Felipe Vash." />
        <meta property="og:image" content="public/images/sitepreview.jpg" />
        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://felipevash.vercel.app/" />
        <meta property="twitter:title" content="Felipe Vash || Dev" />
        <meta property="twitter:description" content="Portfolio do desenvolvedor FrontEnd Felipe Vash." />
        <meta property="twitter:image" content="public/images/sitepreview.jpg" />

      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
