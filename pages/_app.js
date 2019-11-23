import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import makeStore from '../store';

import { appWithTranslation } from '../i18n';

// import favicon from '../public/favicon.ico';

class NextApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <meta name="theme-color" content="#317EFB" />
          <link rel="manifest" href="manifest.json" />
          <link rel="icon" sizes="192x192" href="favicon.ico" />
          <link rel="apple-touch-icon" href="favicon.ico" />
          <title>NextJS, tailwind.css, Styled Components</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="Description"
            content="NextJS, tailwind.css, Styled Components | The best of all the worlds."
          />
          {/* <link rel="icon" sizes="192x192" href={favicon} /> */}
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}
export default withRedux(makeStore)(appWithTranslation(NextApp));
