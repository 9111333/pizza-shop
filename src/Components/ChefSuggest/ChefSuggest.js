import React from 'react'
import { useEffect } from 'react'
import './ChefSuggest.css'
import { Container, Row, Col } from 'react-bootstrap'
import ThreePizza from '../ThreePizza/ThreePizza'
import { WOW } from 'wowjs';
import 'wowjs/css/libs/animate.css'

export default function ChefSuggest() {

    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);

    return (
        <>
            <div className="suggest">
                <Container className='con-sugg'>
                    <Row className='row-sugg'>
                        <Col className='text-center'>
                            <h2>پیشنهاد سرآشپز</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='4' xs='8' id='chefid' className='text-center'><ThreePizza name='Pizza Italiana' address='./img/home_pizza_box_1.png' /></Col>
                        <Col md='4' xs='8' id='chefid' className='text-center'><ThreePizza name='Pizza La Ruccoli' address='./img/home_pizza_box_2.png' /></Col>
                        <Col md='4' xs='8' id='chefid' className='text-center'><ThreePizza name='Pizza Pincate' address='./img/home_pizza_box_3.png' /></Col>
                    </Row>
                </Container>
            </div>


        </>
    )
}
