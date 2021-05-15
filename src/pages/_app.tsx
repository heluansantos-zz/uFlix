import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import HomeContextProvider from '../context/HomeContext'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <HomeContextProvider>
        <Component {...pageProps} />
      </HomeContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
