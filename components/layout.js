import Head from 'next/head'
import Script from 'next/script'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>Layouts Example Miano</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}