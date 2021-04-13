import React, { useState } from 'react'
import styles from '../styles/Layout.module.css'
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
                            <a className="nav-link text-info" href="/contact">Support</a>
                            <a className="nav-link text-info" href="/login">Login</a>
                            <a href="/request-demo" className="btn btn-sm btn-info nav-link text-white" >Request demo</a>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
                {children}

            </main>


        </>
    )

}