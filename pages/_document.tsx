import React from "react";
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/x-icon" href="../public/favicon.png" />
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
