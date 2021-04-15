import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaPhone, FaEnvelope } from 'react-icons/fa'
export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Global Cleaning Solutions</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/HWT-Gothic-Round.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main className={styles.main}>
        <img style={{ height: 200, borderRadius: 100 }} src="./logo.jpg" />
        <h1 className={styles.title}>
          GLOBAL CLEANING SOLUTIONS
        </h1>
        <div className="border border-2 text-center rounded-pill p-4 bg-dark text-light">
          <div className="h5"><FaPhone /> 07849 645139</div>
          <div className="h5"><FaEnvelope /> darren@globalcleaningsolutions.co.uk</div>
        </div>
        <div id={styles.soc}>
          <a href="https://www.facebook.com/global.cleaning.solutions1"><FaFacebookSquare className={styles.fbIcon} /></a>
          <a href="https://www.instagram.com/global.cleaning.solutions/"><FaInstagramSquare className={styles.igIcon} /></a>
          <a href="/"><FaTwitterSquare className={styles.twIcon} /></a>
        </div>
      </main>
    </div >
  )
}
