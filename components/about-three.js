import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import serviceShape from "@/images/shape/service-shape.png";
import team from "@/images/team.webp";

import Link from "./link";
import Image from 'next/image'
import { AboutThreeData } from "@/data";
import { useTranslations } from 'next-intl';

const AboutThree = () => {
  const t = useTranslations('Index');
  const { blockTitle, summery, button, box } = AboutThreeData;
  return (
    <section className="about_area section_border section_padding">
      <Container>
        <Row>
          <Col lg={7}>
            <div className="about_details about_gray responsive_no_pading">
              <div className="hero-title-with-shape">
                <h1><em>{t('AboutThreeData_Title')}</em></h1>
              </div>
              <p className="parrAbout">{t('AboutFourData_Text')}</p>
              <ul className="listParr">
                
                
                <li>
                  <i className="fa fa-check-circle"></i> {t('AboutThreeData_subtitle2')}
                </li>
                <li>
                {t('AboutThreeData_text2')}
                </li>
             
                <li>
                  <i className="fa fa-check-circle"></i> {t('AboutThreeData_subtitle4')}
                </li>
                <li>
                {t('AboutThreeData_text4')}
                </li>
                <li>
                  <i className="fa fa-check-circle"></i> {t('AboutThreeData_subtitle5')}
                </li>
                <li>
                {t('AboutThreeData_text5')}
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
                <i className="icon-clock"></i>
                <h2>{t('AboutThreeData_Box1')}</h2>
              </div>
              <div className="about_service_box_1">
                <i className="icon-diploma"></i>
                <h2>{t('AboutThreeData_Box2')}</h2>
                <br/>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutThree;
