import React, { useState } from 'react';
import Image from 'next/image'
import Head from 'next/head'
import { CarouselView } from '../components';
import { SliderData } from '../components/Carousel/SliderData'
import styles from '../styles/Home.module.css'
const OurWork = () => {


    return (

        <div className="container">
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
            <h1 className={styles.title}>
                Our Work
        </h1>
            <CarouselView slides={SliderData} />
        </div>
    )
};

export default OurWork;