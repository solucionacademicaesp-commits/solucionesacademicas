import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import ServiceSidebar from "./service-sidebar";
import Image from "next/image";
import Link from "next/link";

const ServiceDetails = ({
  imageDetail,
  postTitle,
  description,
  request,
  price
  }) => {
  return (
    <section className="service_details_area section_padding">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="service_details_left">
              <Image src={imageDetail} alt="Service Details Image" />
              <h1>{postTitle} {price}</h1>
              <p>
                {description}
              </p>
              
                <Link href="/request" passHref>
                <div  className="btn-yellow">{request}</div>
                </Link>

            </div>
          </Col>
          <Col lg={4}>
            <ServiceSidebar/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetails;
