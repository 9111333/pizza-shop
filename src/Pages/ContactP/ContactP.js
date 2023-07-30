import React from "react";
import "./ContactP.css";
import { WOW } from "wowjs";
import "wowjs/css/libs/animate.css";
import { useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header";

export default function ContactP() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
      <div className="contact-holder">
        <div className="contact-header">
          <Header />
        </div>

        <div id="two-bgs">
          <div className="right-bg"></div>
          <div className="left-bg"></div>
          <div
            id="C-component"
            className="wow fadeIn"
            data-wow-duration="1.7s"
            data-wow-delay="0.5s"
          >
            <div className="main_contact-right">
              <div class="formwrapper">
                <form class="form">
                  <span>نام</span>
                  <span>نام خانوادگی</span>
                  <input type="text" id="" />
                  <input type="text" id="" />
                  <span>تلفن</span>
                  <span>ایمیل</span>
                  <input type="tel" id="" />
                  <input type="email" id="" />
                  <span>متن درخواست</span>
                  <textarea class="area"></textarea>
                </form>
                <form class="form1">
                  <span>نام</span>
                  <input type="text" id="" />
                  <span>نام خانوادگی</span>
                  <input type="text" id="" />
                  <span>تلفن</span>
                  <input type="tel" id="" />
                  <span>ایمیل</span>
                  <input type="email" id="" />
                  <span>متن درخواست</span>
                  <textarea class="area"></textarea>
                </form>
              </div>
              <div class="second-flex">
                <button type="submit">ارسال</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-footerr">
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
