import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
        <div className="border border-2 text-center">
          <h5><i class="fas fa-phone-alt"></i> 07849 645139</h5>
          <h5><i class="fas fa-envelope"></i> darren@globalcleaningsolutions.co.uk</h5>
        </div>
        <div id={styles.soc}>
          <div className={styles.soc}><a href="https://www.facebook.com/global.cleaning.solutions1"><i className="fab fa-facebook-square"></i></a></div>
          <div className={styles.soc}><a href="https://www.instagram.com/global.cleaning.solutions/"><i className="fab fa-instagram-square"></i></a></div>
          <div className={styles.soc}><a href="/"><i className="fab fa-twitter-square"></i></a></div>
        </div>
      </main>
      <footer className={styles.footer}>
        <h5>© 2021, Global Cleaning Solutions</h5>
      </footer>
    </div >
  )
}
