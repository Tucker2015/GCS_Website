import React, { useState } from 'react'
import styles from '../../styles/Layout.module.css'
import Link from 'next/link'
import Head from 'next/head'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, } from 'react-bootstrap'
export default function Layout({ children }) {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <>
            <style type="text/css">
                {`
            .navBG {
                background-color: black;
                padding: 20px;
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
            }
            `}
            </style>
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

            <Navbar className="navBG" variant="dark" expand="lg">
                <Navbar.Brand className="navBrand" href="#home">Global Cleaning Solutions</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link href="/" passHref>
                            <Nav.Link >Home</Nav.Link>
                        </Link>
                        <Link href="/services" passHref>
                            <Nav.Link >Services</Nav.Link>
                        </Link>
                        <Link href="/our_work" passHref>
                            <Nav.Link>Our Work</Nav.Link>
                        </Link>
                        <Link href="/about" passHref>
                            <Nav.Link >About Us</Nav.Link>
                        </Link>
                        <Link href="/contact">
                            <Nav.Link >Contact</Nav.Link>
                        </Link>


                    </Nav>
                </Navbar.Collapse>


            </Navbar>

            <main>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
                {children}

            </main>


        </>
    )

}