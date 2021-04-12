import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>GLOBAL CLEANING SOLUTIONS</h1>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>About Us</h3>
                        <p>At Global Cleaning Solutions we offer a variety of services ranging from domestic cleans to commercial cleans. Please contact us and a member of our team will provide you with a free quote and any additional information you require.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Contact</h3>
                        <p>At Global Cleaning Solutions we offer a variety of services ranging from domestic cleans to commercial cleans. Please contact us and a member of our team will provide you with a free quote and any additional information you require.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
