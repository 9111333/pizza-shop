import React from 'react'
import './ThreeLabels.css'
import PizzaHovers from '../PizzaHovers/PizzaHovers';
import { Container, Row, Col } from 'react-bootstrap';
import { Transition } from 'react-spring';

const ThreeLabels = () => {
    return (
        <>
            <div className="three-holder">
                <Container>
                    <Row>
                        <Col md='4' xs='8' className="text-center" id='threeid'>
                            <div className="t-holder" style={{ width: '100%'}} >
                                <PizzaHovers image1="/img/home_pizza_image_1.png" image2="./img/home_pizza_image_1_hover.png" />
                            </div>
                        </Col>
                        <Col md='4' xs='8' className="text-center"  id='threeid'>
                            <div className="t-holder" style={{ width: '100%' }}>
                                <PizzaHovers image1="/img/home_pizza_image_2.png" image2="./img/home_pizza_image_2_hover.png" style={{ width: '100%' }} />
                            </div>

                        </Col>
                        <Col md='4' xs='8' className="text-center"  id='threeid'>
                            <div className="t-holder" style={{ width: '100%' }}>
                                <PizzaHovers image1="/img/home_pizza_image_3.png" image2="./img/home_pizza_image_3_hover.png" style={{ width: '100%' }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ThreeLabels;



