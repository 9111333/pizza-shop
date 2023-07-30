import React from 'react'
import { useEffect } from 'react'
import './Header.css'
import $ from 'jquery'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {

    useEffect(() => {
        $(document).ready(() => {
            $(window).bind('scroll', () => {
                const gap = 50;
                if ($(window).scrollTop() > gap) {
                    $('header').addClass('active');
                    $('.logo').addClass('show')
                } else {
                    $('header').removeClass('active');
                    $('.logo').removeClass('show')
                }
            })
        })
    }, [])

    return (
        <>
            <header>
                <Container>
                    <Row>
                        <Col id='nav1'>
                            <div className="navigation">
                                <input type="checkbox" id="nav-checkbox" />
                                <label htmlFor="nav-checkbox" className='nav-toggle'>
                                    <img src="/img/open.png" alt="open menu" className='open' />
                                    <img src="/img/close.png" alt="close menu" className='close' />
                                </label>

                                <ul className="nav-menu">
                                    <li><Link to={'/'}>خانه</Link></li>
                                    <li><Link to={'/menu-p'}>منو</Link></li>
                                    <li><Link to={'/about-p'}>درباره ما</Link></li>
                                    <li><Link to={'/contact-p'}>تماس با ما</Link></li>
                                </ul>
                            </div>
                        </Col>
                        <Col>
                            <div className="logo">
                                <img src="/img/mainlogo.png" alt="main logo" className='main-logo' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>

        </>
    )
}



