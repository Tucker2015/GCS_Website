import React, { useState } from 'react'
import styles from '../styles/Layout.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children }) {

    const [isOpen, setIsOpen] = useState(false)
    const openmenu = () => setIsOpen(!isOpen)

    return (
        <>
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
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    <a className={styles.navlogo}><img src="./logo.jpg">
                    </img> Global Cleaning Solutions</a>
                    <ul className={isOpen === false ? styles.navmenu : styles.navmenu + ' ' + styles.active}>
                        <Link href='/'>
                            <li className={styles.navitem}>
                                <a className={styles.navlink}>Home</a>
                            </li>
                        </Link>
                        <Link href='/services'>
                            <li className={styles.navitem}>
                                <a className={styles.navlink}>Services</a>
                            </li>
                        </Link>
                        <Link href='/contact'>
                            <li className={styles.navitem}>
                                <a className={styles.navlink}>Contact</a>
                            </li>
                        </Link>
                    </ul>
                    <button className={isOpen === false ? styles.hamburger : styles.hamburger + ' ' + styles.active}
                        onClick={openmenu}
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </nav>
            </header>
            <main>
                {children}

            </main>


        </>
    )

}