import React from "react";
import Link from "@/components/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade } from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import { SlideOneData } from "@/data";

import slideOneImage1 from "@/images/slider/slider-1.jpg";
import slideOneImage2 from "@/images/slider/slider-2.jpg";
import service1 from "@/images/slider/service1.webp";
import service2 from "@/images/slider/service2.webp";
import service3 from "@/images/slider/service3.webp";
import service4 from "@/images/slider/service4.webp";
import service5 from "@/images/slider/service5.webp";
import service6 from "@/images/slider/service6.webp";
import { useTranslations } from "next-intl";

SwiperCore.use([Autoplay, Navigation, EffectFade]);
const SliderOne = () => {
  const t = useTranslations('Index');
  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="main-slider header_slider_area ">
      <Swiper {...mainSlideOptions}>
            <SwiperSlide>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${service1.src})` }}
              ></div>

              <Container className="textSlider">
                <Row>
                  <Col lg="6">
                         <p className="main-slider__subtext slider-whiteback">
                      <span className="subtitle_number ">01</span>{" "}
                      {t('SlideOneData_Service')} 
                    </p>
                    
                    <h1 className="main-slider__title slider-whiteback">{t('SlideOneData_Service1')} </h1>
                    <div className="slide_button">
                      <Link href="/request" className="btn-yellow">
                      {t('navLinksData_Request')} 
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${service2.src})` }}
              ></div>

              <Container>
                <Row>
                  <Col lg="6">
                    <p className="main-slider__subtext slider-whiteback">
                      <span className="subtitle_number">02</span>{" "}
                      {t('SlideOneData_Service')} 
                    </p>
                    <h1 className="main-slider__title slider-whiteback">{t('SlideOneData_Service2')} </h1>
                    <div className="slide_button">
                      <Link href="/request" className="btn-yellow">
                      {t('navLinksData_Request')} 
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${service3.src})` }}
              ></div>

              <Container>
                <Row>
                  <Col lg="6">
                    <p className="main-slider__subtext slider-whiteback">
                      <span className="subtitle_number">03</span>{" "}
                      {t('SlideOneData_Service')} 
                    </p>
                    <h1 className="main-slider__title slider-whiteback">{t('SlideOneData_Service3')} </h1>
                    <div className="slide_button">
                      <Link href="/request" className="btn-yellow">
                      {t('navLinksData_Request')} 
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
            
            <SwiperSlide>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${service4.src})` }}
              ></div>

              <Container>
                <Row>
                  <Col lg="6">
                    <p className="main-slider__subtext slider-whiteback">
                      <span className="subtitle_number">04</span>{" "}
                      {t('SlideOneData_Service')} 
                    </p>
                    <h1 className="main-slider__title slider-whiteback">{t('SlideOneData_Service4')} </h1>
                    <div className="slide_button">
                      <Link href="/request" className="btn-yellow">
                      {t('navLinksData_Request')} 
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>

            <SwiperSlide>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${service5.src})` }}
              ></div>

              <Container>
                <Row>
                  <Col lg="6">
                    <p className="main-slider__subtext slider-whiteback">
                      <span className="subtitle_number">05</span>{" "}
                      {t('SlideOneData_Service')} 
                    </p>
                    <h1 className="main-slider__title slider-whiteback">{t('SlideOneData_Service5')} </h1>
                    <div className="slide_button">
                      <Link href="/request" className="btn-yellow">
                      {t('navLinksData_Request')} 
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>
            
            <SwiperSlide>
              <div
                className="image-layer"
                style={{ backgroundImage: `url(${service6.src})` }}
              ></div>

              <Container>
                <Row>
                  <Col lg="6">
                    <p className="main-slider__subtext slider-whiteback">
                      <span className="subtitle_number">06</span>{" "}
                      {t('SlideOneData_Service')} 
                    </p>
                    <h1 className="main-slider__title slider-whiteback">{t('SlideOneData_Service6')} </h1>
                    <div className="slide_button">
                      <Link href="/request" className="btn-yellow">
                      {t('navLinksData_Request')} 
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </SwiperSlide>

      </Swiper>
    </section>
  );
};

export default SliderOne;
