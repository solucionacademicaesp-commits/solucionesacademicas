import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceShape from "@/images/shape/service-shape.png";
import team from "@/images/faq/encargar.webp";

import Link from "./link";
import Image from 'next/image'
import { AboutThreeData } from "@/data";
import { useTranslations } from 'next-intl';

const AboutFive = () => {
  const t = useTranslations('Index');
  return (
    <section className="about_area section_border section_padding">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="about_details about_gray responsive_no_pading">
              <div className="hero-title-with-shape">
                <h1><em>{t('AboutThreeData_Title')}</em></h1>
              </div>
              <ul className="listParr">


                <li>
                  <i className="fa fa-check-circle"></i> {t('AboutFiveData_subtitle1')}
                </li>


                <li>
                  <i className="fa fa-check-circle"></i> {t('AboutFiveData_subtitle2')}
                </li>

                <li>
                  <i className="fa fa-check-circle"></i> {t('AboutFiveData_subtitle3')}
                </li>
                <li>
                  <i className="fa fa-check-circle"></i> {t('AboutFiveData_subtitle4')}
                </li>


                <li>
                  <i className="fa fa-check-circle"></i> {t('AboutFiveData_subtitle5')}
                </li>

                <li>
                  <i className="fa fa-check-circle"></i> {t('AboutFiveData_subtitle6')}
                </li>

                <li>
                  <i className="fa fa-check-circle"></i> {t('AboutFiveData_subtitle7')}
                </li>
              </ul>
              <div className="about_gray_shape">
                <Image src={serviceShape} alt="about shape" layout="responsive" />
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="about_image about_style_2_img">
              <div className="about_clinica_img">
                <Image src={team} alt="about shape" layout="responsive" />

              </div>
              <div className="about_service_box_1">
                <h2>{t('AboutThreeData_Box1')}</h2>
              </div>
              <div className="about_service_box_1">
                <h2>{t('AboutThreeData_Box2')}</h2>
                <br />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutFive;
