import Layout from '../components/Layout';
import '../styles/global.scss';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta name="viewport" content="viewport-fit=cover" />
          <title>Amauri Santos</title>
        </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
