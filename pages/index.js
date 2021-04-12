import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
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


      </main>
      <footer className={styles.footer}>
        <h3>© 2021, Global Cleaning Solutions</h3>
      </footer>
    </div>
  )
}
