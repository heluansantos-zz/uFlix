import React, { useContext } from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import { HomeContext } from '../context/HomeContext'

const Home: React.FC = () => {
  const { darkTheme } = useContext(HomeContext)
  return (
    <Container>
      <Head>
        <title>uFlix</title>
      </Head>
      <h1>uFlix</h1>
      <p>Sistema de webTv.</p>
    </Container>
  )
}

export default Home
