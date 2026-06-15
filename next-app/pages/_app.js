import Head from 'next/head'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <Component {...pageProps} />
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  )
}
