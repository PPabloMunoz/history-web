import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
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
    </>
  )
}

export default MyApp
