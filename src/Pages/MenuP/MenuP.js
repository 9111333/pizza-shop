import React from "react";
import "./MenuP.css";
import Header from "../../Components/Header/Header";
import { Container, Row, Col } from "react-bootstrap";
import Gsap1 from "../../Components/Gsappp/Gsap1/Gsap1";
import Gsap2 from "../../Components/Gsappp/Gsap2/Gsap2";
import Gsap3 from "../../Components/Gsappp/Gsap3/Gsap3";
import Gsap4 from "../../Components/Gsappp/Gsap4/Gsap4";
import Gsap5 from "../../Components/Gsappp/Gsap5/Gsap5";
import Gsap6 from "../../Components/Gsappp/Gsap6/Gsap6";
import Gsap7 from "../../Components/Gsappp/Gsap7/Gsap7";
import Gsap8 from "../../Components/Gsappp/Gsap8/Gsap8";
import Gsap9 from "../../Components/Gsappp/Gsap9/Gsap9";
import Gsap10 from "../../Components/Gsappp/Gsap10/Gsap10";
import Gsap11 from "../../Components/Gsappp/Gsap11/Gsap11";
import Gsap12 from "../../Components/Gsappp/Gsap12/Gsap12";
import Gsap13 from "../../Components/Gsappp/Gsap13/Gsap13";
import Gsap14 from "../../Components/Gsappp/Gsap14/Gsap14";
import Gsap15 from "../../Components/Gsappp/Gsap15/Gsap15";
import { WOW } from "wowjs";
import "wowjs/css/libs/animate.css";
import { useEffect, useRef } from "react";

export default function ContactP() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <div className="menuP-holder">
        <Header />
        <div className="fifteen-parts">
          <Container>
            <Row className="gsap-menu-rows">
              <Col className='text-center gsap-col wow fadeIn' data-wow-duration='1s' data-wow-delay='0.5s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap1 />
                </div>
              </Col>
              <Col className='text-center gsap-col wow fadeIn' data-wow-duration='1s' data-wow-delay='0.1s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap2 />
                </div>
              </Col>
              <Col className='text-center gsap-col wow fadeIn' data-wow-duration='1s' data-wow-delay='0.7s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap3 />
                </div>
              </Col>
              <Col className="text-center gsap-col gsap-col wow fadeIn" data-wow-duration='1s' data-wow-delay='0.5s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap4 />
                </div>
              </Col>
              <Col className='text-center gsap-col gsap-col wow fadeIn' data-wow-duration='1s' data-wow-delay='1s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap5 />
                </div>
              </Col>
              <Col className='text-center gsap-col gsap-col wow fadeIn' data-wow-duration='1s' data-wow-delay='0.2s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap6 />
                </div>
              </Col>
              <Col className='text-center gsap-col gsap-col wow fadeIn' data-wow-duration='1s' data-wow-delay='0.5s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap7 />
                </div>
              </Col>
              <Col className='text-center gsap-col gsap-col wow fadeIn' data-wow-duration='1s' data-wow-delay='0.9s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap8 />
                </div>
              </Col>
              <Col className='text-center gsap-col gsap-col wow fadeIn' data-wow-duration='1s' data-wow-delay='0.2s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap9 />
                </div>
              </Col>
              <Col className="text-center gsap-col wow fadeIn" data-wow-duration='1s' data-wow-delay='0.6s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap10 />
                </div>
              </Col>
              <Col className='text-center gsap-col gsap-col wow fadeIn' data-wow-duration='1s' data-wow-delay='0.3s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap11 />
                </div>
              </Col>
              <Col className='text-center gsap-col gsap-col wow fadeIn' data-wow-duration='1s' data-wow-delay='1s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap12 />
                </div>
              </Col>
              <Col className='text-center gsap-col gsap-col wow fadeIn' data-wow-duration='1s' data-wow-delay='0.5s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap13 />
                </div>
              </Col>
              <Col className='text-center gsap-col gsap-col wow fadeIn' data-wow-duration='1s' data-wow-delay='0.5s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap14 />
                </div>
              </Col>
              <Col className='text-center gsap-col gsap-col wow fadeIn' data-wow-duration='1s' data-wow-delay='0.2s' md='4' sm='12'>
                <div className="gsap-child">
                  <Gsap15 />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="about-footer">
        <div className="dg-footer">
          <Container>
            <Row>
              <div className="developer">
                <p>Developed By Amir Sedaghat</p>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
