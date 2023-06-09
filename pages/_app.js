import '../styles/globals.css'
import * as React from 'react'
import NextApp from 'next/app'

import '@hackclub/theme/fonts/reg-bold.css'
import theme from '@hackclub/theme'
import { ThemeProvider } from 'theme-ui'
import Nav from '../components/nav'
import Navibar from '../components/navbar'
import Meta from '@hackclub/meta'
import Head from 'next/head'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
            <Meta
              as={Head}
              name="LinkScape"
              title="LinkScape"
            description="A non-profit organization which works for the future of open-source software"
            color="#ec3750"
            manifest="/site.webmanifest"
            />
        <Head>
          <script async defer data-website-id="6d581cea-17fa-4aa6-9c62-742bbb3f6198" src="https://analytics.linkscape.app/umami.js"></script>
        </Head>
        <Navibar />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
