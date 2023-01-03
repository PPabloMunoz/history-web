import '../styles/globals.css'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import StateContext from '../context/userContext'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Head>
        <title>Historia 2º BACH</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Historia 2º bach con cronologia, vocabulario y ejercicios para practicar'
        />
        <link rel='icon' href='/PM.svg' />
      </Head>

      <Component {...pageProps} />
      <Analytics />
    </StateContext>
  )
}

export default MyApp
