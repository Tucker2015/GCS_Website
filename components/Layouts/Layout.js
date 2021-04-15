import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { TopNavbar } from '../../components'

export default function Layout({ children }) {

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
            <TopNavbar />
            <main>
                {children}
            </main>
        </>
    )

}