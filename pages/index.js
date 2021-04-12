import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
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
