/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable linebreak-style */
import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="robots" content="all" />
          <meta name="Description" content="Portfolio do desenvolvedor FrontEnd Felipe Vash." />
          <meta name="theme-color" content="#317EFB" />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
