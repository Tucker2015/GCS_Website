import React, { useState } from 'react';
import Image from 'next/image'
import { CarouselView } from '../components';
import { SliderData } from '../components/Carousel/SliderData'
import styles from '../styles/Home.module.css'
const OurWork = () => {


    return (

        <div className="container">
            <h1 className={styles.title}>
                Our Work
        </h1>
            <CarouselView slides={SliderData} />
        </div>
    )
};

export default OurWork;