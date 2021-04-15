import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import React, { useState } from 'react'

export default function TopNavbar() {

    return (
        <>
            <style type="text/css">
                {`
        .navBG {
            background-color: black;
        }
        .navBrand {
            color: #7aa850 !important;
            font-size: 1.8em;
            font-family: "GothicRound";
        }
        @media (max-width: 785px) {
            .navBrand {
                font-size: 1.4em;
            } 
            .navBrand img {
            height:40px
            }
        }
        `}
            </style>
            <Navbar className="navBG" variant="dark" expand="lg">
                <Navbar.Brand className="navBrand" href="/">
                    <img
                        src="/logo.jpg"
                        width='auto'
                        height="70"
                        className="d-inline-block align-center"
                        alt="React Bootstrap logo"
                    />{' '}
    Global Cleaning Solutions</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto h5">
                        <Link href="/" passHref>
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                        <Link href="/services" passHref>
                            <Nav.Link>Services</Nav.Link>
                        </Link>
                        <Link href="/our_work" passHref>
                            <Nav.Link>Our Work</Nav.Link>
                        </Link>
                        <Link href="/about" passHref>
                            <Nav.Link>About Us</Nav.Link>
                        </Link>
                        <Link href="/contact" passHref>
                            <Nav.Link>Contact</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}