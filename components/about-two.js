import { AboutTwoData } from "@/data";
import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cards from "@/images/faq/preguntar.webp";
import graphic from "@/images/faq/precio.webp";
import ok from "@/images/faq/encargar.webp";
import refund from "@/images/faq/reembolso.webp";
import team from "@/images/faq/profesor.webp";
import money from "@/images/faq/mediopago.webp";

const AboutTwo = () => {
  const t = useTranslations('Index');

  return (
    <section className="about_service_area section_padding">
      <Container>
        <Row >
          <Col lg={6}>
            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h1><i className="fa fa-check-circle"></i> {t('AboutTwo_Question1')}</h1>
              </div>
              <ul>
                <li >
                  {t('AboutTwo_Answer1')}
                </li>
              </ul>

            </div>
          </Col>
          <Col lg={6}>
            
            <div className="about_service_right">
              <div className="image-faq">
                <Image src={ok} alt="money" layout="responsive" />
              </div>
            </div>

          </Col>
        </Row>
        <br/>
        <Row className="copyright_area">
          <Col lg={6}>
          <div className="about_service_right">
              <div className="image-faq">
                <Image src={team} alt="money" layout="responsive" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h1><i className="fa fa-check-circle"></i> {t('AboutTwo_Question2')}</h1>
              </div>
              <ul>
                <li >
                  {t('AboutTwo_Answer2')}
                </li>
              </ul>

            </div>
          </Col>
        </Row>
        <br/>
        <Row className="copyright_area">
          <Col lg={6}>

            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h1><i className="fa fa-check-circle"></i> {t('AboutTwo_Question3')}</h1>
              </div>
              <ul>
                <li >
                  {t('AboutTwo_Answer3')}
                </li>
              </ul>

            </div>
          </Col>
          <Col lg={6}>

          <div className="about_service_right">
              <div className="image-faq">
                <Image src={cards} alt="money" layout="responsive" />
              </div>
            </div>
          </Col>
        </Row>
        <br/>
        <Row className="copyright_area">
          <Col lg={6}>
          <div className="about_service_right">
              <div className="image-faq">
                <Image src={money} alt="money" layout="responsive" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h1><i className="fa fa-check-circle"></i> {t('AboutTwo_Question4')}</h1>
              </div>
              <ul>
                <li >
                  {t('AboutTwo_Answer4')}
                </li>
              </ul>

            </div>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col lg={6}>
            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h1><i className="fa fa-check-circle"></i> {t('AboutTwo_Question5')}</h1>
              </div>
              <ul>
                <li >
                  {t('AboutTwo_Answer5')}
                </li>
              </ul>

            </div>
          </Col>
          <Col lg={6}>
              <div className="about_service_right">
              <div className="image-faq">
                <Image src={refund} alt="money" layout="responsive" />
              </div>
            </div>
          </Col>
        </Row>
        <br/>
        <Row className="copyright_area">
          <Col lg={6}>

          <div className="about_service_right">
              <div className="image-faq">
                <Image src={graphic} alt="money" layout="responsive" />
              </div>
            </div>
          </Col>
          <Col lg={6}>

            <div className="about_service_right">
              <div className="hero-title-with-shape">
                <h1><i className="fa fa-check-circle"></i> {t('AboutTwo_Question6')}</h1>
              </div>
              <ul>
                <li >
                  {t('AboutTwo_Answer6')}
                </li>
              </ul>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutTwo;
