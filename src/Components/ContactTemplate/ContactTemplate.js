import React from "react";
import "./ContactTemplate.css";
import { Container, Row, Col } from "react-bootstrap";

export default function ContactTemplate() {
  return (
    <>
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
        </div>
        <div class="second-flex">
          <button type="submit">ارسال</button>
        </div>
      </div>
    </>
  );
}
