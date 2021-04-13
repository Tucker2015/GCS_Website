import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Service() {
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
                <h1 className={styles.title}>OUR SERVICES</h1>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>WHAT IS A BASIC CLEAN ?</h3>
                        <p>• Customers who already have a certain degree of cleanliness and organisation in their Homes/Businesses may opt for a basic clean.</p>
                        <br></br>
                        <p>• Therefore, regular customers prefer basic cleans on a regular basis.  Usually after an initial deep clean if required.</p>
                        <br></br>
                        <p>• A basic clean entails cleaning tasks that must be completed at least once per week in order to preserve cleanliness, prevent the accumulation of grime and bacteria, avoiding disorganisation, and keep the Home/Business clean and tidy.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>WHAT DOES A BASIC CLEAN INCLUDE ?</h3>
                        <p>This list is not exhaustive since each Home or Business has unique furniture, appliances, and other items.  This list aims to help distinguish between a basic and a deep clean.</p>
                        <br></br>
                        <p>• All floors vacuumed and / or mopped.</p>
                        <p>• General 'Tidy-up' - Organizing, removing rubbish, picking up out of place items etc.</p>
                        <p>• All surfaces wiped down / disinfected</p>
                        <p>• Disinfecting the bathroom and kitchen - sinks, mirrors, toilets, bathtub etc.</p>
                        <p>• All mid-level surfaces dusted abd wiped clean</p>
                        <p>• Wiping down all windowsills</p>
                        <p>• Disinfect electronics and remotes</p>
                    </div>
                    <div className={styles.card}>
                        <h3>WHAT IS A DEEP CLEAN ?</h3>
                        <p>• Deep cleans are often required prior to a tenant moving in or out (end of tenancy clean) or if the customer has not previously invested in a cleaning service and the Home/Business needs more than a basic clean</p>
                        <br></br>
                        <p>• We recommend a deep clean in the Home at least twice a year.  However, for a business a deep clean is likely to be required more frequently.</p>
                        <br></br>
                        <p>• It differs from a basic clean in that it removes the home's deep grime and dirt by covering areas that aren't covered by a basic clean.</p>
                    </div>
                </div>
            </main>
            <footer className={styles.footer}>
                <h5>© 2021, Global Cleaning Solutions</h5>
            </footer>
        </div>
    )
}
