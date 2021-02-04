import React from 'react';
import { GithubProvider } from '../src/provider';

function MyApp({ Component, pageProps }) {
  return (
    <GithubProvider>
      <Component {...pageProps} />
    </GithubProvider>
  );
}

export default MyApp;
