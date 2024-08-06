import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "@/components/blog-card";
import { BlogTwoData } from "@/data";
import { useTranslations } from 'next-intl'
import service1 from "@/images/slider/service1.webp";
import service2 from "@/images/slider/service2.webp";
import service3 from "@/images/slider/service3.webp";
import service4 from "@/images/slider/service4.webp";
import service5 from "@/images/slider/service5.webp";
import service6 from "@/images/slider/service6.webp";

const BlogTwo = () => {
  const t = useTranslations('Index')

  return (
    <section className="blog_share_area section_padding blog-page">
      <Container>
        <Row>
          <Col lg={4} md={6} sm={12} >
            <BlogCard image={service1} title={t('SlideOneData_Service1')} text={t('CardText_Service1')} buttonText={t('ServiceOneData_Button1')} url="/services/service1"/>
          </Col>
          <Col lg={4} md={6} sm={12} >
            <BlogCard image={service2} title={t('SlideOneData_Service2')} text={t('CardText_Service2')} buttonText={t('ServiceOneData_Button1')} url="/services/service2"/>
          </Col>
          <Col lg={4} md={6} sm={12} >
            <BlogCard image={service3} title={t('SlideOneData_Service3')} text={t('CardText_Service3')} buttonText={t('ServiceOneData_Button1')} url="/services/service3"/>
          </Col>
          <Col lg={4} md={6} sm={12} >
            <BlogCard image={service4} title={t('SlideOneData_Service4')} text={t('CardText_Service4')} buttonText={t('ServiceOneData_Button1')} url="/services/service4"/>
          </Col>
          <Col lg={4} md={6} sm={12} >
            <BlogCard image={service5} title={t('SlideOneData_Service5')} text={t('CardText_Service5')} buttonText={t('ServiceOneData_Button1')} url="/services/service5"/>
          </Col>
          <Col lg={4} md={6} sm={12} >
            <BlogCard image={service6} title={t('SlideOneData_Service6')} text={t('CardText_Service6')} buttonText={t('ServiceOneData_Button1')} url="/services/service6"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogTwo;
