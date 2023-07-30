import React from 'react'
import './ThreePizza.css'
import OrderBtn from '../OrderBtn/OrderBtn'
import { Container, Row, Col } from 'react-bootstrap'
import BtnO from '../BtnO/BtnO'
import { useEffect, useRef } from 'react';
import { WOW } from 'wowjs';
import 'wowjs/css/libs/animate.css'


export default function ThreePizza({ name, address }) {

    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);

    return (
        <>
            <div className="T-container">
                <Container>
                    <Row>
                        <Col className='text-center T-col'>
                            <div id="bounceIn" className='wow bounceIn' data-wow-duration='1s' data-wow-delay='0.5s'>
                                <div className="T-img">
                                    <img src={address} alt="" />
                                </div>
                                <div className="T-name"><h4>{name}</h4></div>
                                <div className="T-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quisquam!</div>
                                <BtnO />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
