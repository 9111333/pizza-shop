import React from 'react'
import { useEffect } from 'react'
import './AboutP.css'
import Header from '../../Components/Header/Header'
import { Container, Row, Col } from 'react-bootstrap'
import {FaPizzaSlice} from "react-icons/fa";
import { WOW } from 'wowjs';
import 'wowjs/css/libs/animate.css'

export default function AboutP() {

    useEffect(() => {
        const wow = new WOW();
        wow.init();
    }, []);

    return (
        <>
            <div className="about-holder">
                <Header />
                <div className="two-parts">
                    <Container>
                        <Row>
                            <Col md='5' className='text-center wow fadeInRight' id='about-right' data-wow-duration='1.7s' data-wow-delay='0.7s'>
                                <div className="about-text">
                                    <h3>خوش آمدید !</h3>
                                    <p className='p-one'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
                                    <p className='p-two'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                                    <ul>
                                        <li><span><FaPizzaSlice/></span>سرو بهترین و با کیفیت ترین غذا ها</li>
                                        <li><span><FaPizzaSlice/></span>منوی متنوع با قیمت ارزان</li>
                                        <li><span><FaPizzaSlice/></span>سرویس دهی سریع</li>
                                        <li><span><FaPizzaSlice/></span>امکان سفارش آنلاین</li>
                                        <li><span><FaPizzaSlice/></span>رستوران با فضای دلنشین و دوستانه</li>
                                        <li><span><FaPizzaSlice/></span>یا کسب رضایت یا بازپرداخت پول</li>
                                        <li><span><FaPizzaSlice/></span>مکانی برای لذت بردن از گذران وقت با دوستان و خانواده</li>
                                        <li><span><FaPizzaSlice/></span>برگزاری جشن ها و مراسم های خصوصی</li>
                                        <li><span><FaPizzaSlice/></span>رعایت کامل اصول و ضوابط بهداشتی</li>
                                        <li><span><FaPizzaSlice/></span>سرویس دهی 24 ساعته</li>
                                        <li><span><FaPizzaSlice/></span>تخفیفات ویژه برای مشتریان ثابت</li>
                                        <li><span><FaPizzaSlice/></span>سرو غذاهای محلی متنوع</li>
                                        <li><span><FaPizzaSlice/></span>غذاهای گیاهی و وگان متنوع</li>
                                        <li><span><FaPizzaSlice/></span>محیطی دنج و آرام</li>
                                    </ul>
                                    <p className='p-three'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                </div>

                            </Col>
                            <Col md='7' className='text-center wow fadeInLeft' id='about-left' data-wow-duration='1.7s' data-wow-delay='0.7s'>
                                <div className="left-img">
                                    <img src="../../img/abouttt.jpg" alt="" />
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
    )
}
