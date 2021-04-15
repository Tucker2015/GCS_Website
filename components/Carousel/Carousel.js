import React, { useState } from 'react'
import { Container, Carousel, Modal, Button } from "react-bootstrap";
import Image from "next/image";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { render } from 'react-dom';


const CarouselView = ({ slides }) => {
    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (

        <section className="slider">
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
            <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
            {SliderData.map((slide, index) => {

                return (
                    <div
                        className={index === current ? 'slide active' : 'slide'} key={index}
                    >
                        {index === current && (
                            <>

                                <img src={slide.image} alt='Our work' className="image" onClick={handleShow} />
                                <h4 className="slider-text">{slide.text}</h4>


                                <Modal show={show} onHide={handleClose} size="lg"
                                    aria-labelledby="contained-modal-title-vcenter"
                                    centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>{slide.text}</Modal.Title>
                                    </Modal.Header>
                                    <img src={slide.image} className="image-modal" />
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                            </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
                        )}
                    </div>

                )
            })}
        </section>
    )
}

export default CarouselView;