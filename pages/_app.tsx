import type { AppProps } from "next/app";
import React from "react";
import { globalStyles } from "../styles/stitches.global";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Site de EVRARD Cédric. Développeur Web React"
        />
        <meta name="author" content="Cédric Evrard" />
        <meta name="publisher" content="Cédric Evrard" />
        <meta name="category" content="Création de site internet." />
        <meta property="og:type" content="siteweb" />
        <meta content="" property="og:url" />
        <meta property="og:title" content="Cdric_art | Développeur Web React" />
        <meta property="og:image" content="favicon.png" />
        <meta
          property="og:description"
          content="Développeur Web React à Paris. Voici mon portfolio et mon CV."
        />
        <title>Cdric_Art - Développeur Web React</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
