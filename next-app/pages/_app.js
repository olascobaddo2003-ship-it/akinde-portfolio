import Head from 'next/head'
import Script from 'next/script'
import '../public/styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  )
}
