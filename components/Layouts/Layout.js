import React, { useState } from 'react'
import styles from '../../styles/Layout.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children }) {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

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
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-3">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Global Cleaning Solutions</a>
                        <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                            <a className="nav-link text-info" href="/">Home</a>
                            <a className="nav-link text-info" href="/contact">Contact</a>
                            <a className="nav-link text-info" href="/services">Services</a>
                            <a className="nav-link text-info" href="/our_work">Our Work</a>

                        </div>
                    </div>
                </nav>
            </header>
            <main>

                {children}

            </main>


        </>
    )

}