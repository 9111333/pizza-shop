import React from 'react'
import { useSpring, animated ,} from 'react-spring'
import './MainLabel.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function MainLabel() {

    const springConfig = {duration: 700, easings: "ease"}
    const firstProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 , config: springConfig })
    const secondProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1500 , config: springConfig })
    const thirdProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1000 , config: springConfig })
    const fourthProps = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 2000 , config: springConfig })
    const fifthProps = useSpring({ from: { opacity: 0 , scale: 0}, to: { opacity: 1, scale :1 }, delay: 2500 , config: springConfig })

    return (
        <>
            <div className="main-label"></div>
            <div className="holder">
                <Container className='container' >
                    <Row className='row' id='cont-label'>
                        <Col className='col text-center'>
                            <animated.img src="img/slider_1.png" alt="pizza" className='first' style={firstProps} />
                            <animated.img src="img/slider_2.png" alt="sauce" className='second' style={secondProps} />
                            <animated.img src="img/slider_3.png" alt="coke" className='third' style={thirdProps} />
                            <animated.img src="img/slider_4.png" alt="paprica" className='fourth' style={fourthProps} />
                            <animated.img src="img/slider_5.png" alt="text" className='fifth' style={fifthProps} />
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}


