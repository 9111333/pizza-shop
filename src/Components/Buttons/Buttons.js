import React from 'react'
import './Buttons.css'
import { Container, Row, Col } from 'react-bootstrap'

export default function Buttons() {
    return (
        <>
            <Container>
                <Row className='row'>
                    <Col className='B-col'>

                        <a href="#" className='B-a' id='btn-remv'>سالاد</a>
                        <a href="#" className='B-a'>غذای دریایی</a>
                        <a href="#" className='B-a'>غذای گیاهی</a>
                        <a href="#" className='B-a'>غذای گوشتی</a>
                        <a href="#" className='B-a' id='btn-remv'>دسر</a>

                    </Col>

                </Row>
            </Container>
        </>
    )
}
