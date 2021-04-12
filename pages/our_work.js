import React, { useState } from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styles from '../styles/Layout.module.css'

const OurWork = () => {
    const [value, setValue] = useState(0);

    const onChange = value => {
        setValue(value);
    }
    return (
        <div className={styles.container}>
            <div className={styles.main}></div>
            <Carousel
                plugins={['arrows']}
                value={value}
                onChange={onChange}
            >
                <img src="/logo.jpg" />
                <img src="/logo.jpg" />
                <img src="/logo.jpg" />
            </Carousel>
            {/* <Dots
                value={this.state.value}
                onChange={this.onChange}

            /> */}
        </div>
    )
};

export default OurWork;