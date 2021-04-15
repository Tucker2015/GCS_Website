import React, { useState } from 'react';
import Image from 'next/image'
import { CarouselView } from '../components';
import { SliderData } from '../components/Carousel/SliderData'
const OurWork = () => {


    return (

        <div className="container">
            <CarouselView slides={SliderData} />
        </div>
    )
};

export default OurWork;