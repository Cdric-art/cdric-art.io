import type { AppProps } from "next/app";
import React from "react";
import { globalStyles } from "../styles/stitches.global";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
