import React from "react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="fr">
        <Head title="Cdric_Art - Développeur Web React">
          <meta charSet="UTF-8" />
          <link
            rel="shortcut icon"
            type="image/png"
            sizes="16x16"
            href="/favicon.png"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Site de EVRARD Cédric. Développeur Web React"
          />
          <meta name="author" content="Cédric Evrard" />
          <meta name="publisher" content="Cédric Evrard" />
          <meta name="category" content="Création de site internet." />
          <meta property="og:type" content="siteweb" />
          <meta content="" property="og:url" />
          <meta
            property="og:title"
            content="Cdric_art | Développeur Web React"
          />
          <meta property="og:image" content="favicon.png" />
          <meta
            property="og:description"
            content="Développeur Web React à Paris. Voici mon portfolio et mon CV."
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
          <title>Cdric_Art - Développeur Web React</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
