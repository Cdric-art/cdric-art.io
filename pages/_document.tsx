import React from "react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="16x16"
            href="/favicon.png"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="crossOrigin"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=La+Belle+Aurore&family=Overpass:wght@400;600;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
