import '../styles/globals.css'
import Head from "next/head";
import { Layout } from '../components/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/slider.css'
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>

        <meta name="viewport" content="width=device-width, initial-scale=1" />


      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
