import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { CarouselView } from '../components';
import { SliderData } from "../components/Slider/SliderData";

const OurWork = () => {


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
                <h1 className={styles.title}>OUR WORK</h1>

                <CarouselView slides={SliderData} />
            </main>
        </div>
    )
};

export default OurWork;