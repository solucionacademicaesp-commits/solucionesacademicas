import React, { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactVisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import Image from 'next/image'
import { FunfactOneData } from "@/data";
import shape_01 from "@/images/shape/service-color.png";
import shape_02 from "@/images/shape/service-color.png";
import shape_03 from "@/images/shape/service-color.png";
import { useTranslations } from 'next-intl';

const FunfactOne = () => {
  const countUpRef = useRef(null);
  const t = useTranslations('Index');


  const [counter, setCounter] = useState({
    startCounter: false
  });

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setCounter({ startCounter: true });
    }
  };

  return (
    <section className="counterup_area text-center section_padding_modified">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="hero-section-title text-center">
              <h1>{t('FunfactOneData_Title')}</h1>
            </div>
          </Col>
       
            <div className="col-lg-4 col-md-6" >
              <div className="counter_box">
                <div className="number_img_shape">
                  <Image src={shape_01} alt="Shape" />
                </div>
                <div className="counter">
                  <ReactVisibilitySensor
                    offset={{ top: 10 }}
                    delayedCall={true}
                    onChange={onVisibilityChange}
                  >
                    <CountUp
                      start={0}
                      end={counter.startCounter ? 1034 : 0}
                      duration={2}
                    />
                  </ReactVisibilitySensor>
                </div>
                <p>{t('FunfactOneData_Text1')}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" >
              <div className="counter_box">
                <div className="number_img_shape">
                  <Image src={shape_02} alt="Shape" />
                </div>
                <div className="counter">
                  <ReactVisibilitySensor
                    offset={{ top: 10 }}
                    delayedCall={true}
                    onChange={onVisibilityChange}
                  >
                    <CountUp
                      start={0}
                      end={counter.startCounter ? 1014 : 0}
                      duration={2}
                    />
                  </ReactVisibilitySensor>
                </div>
                <p>{t('FunfactOneData_Text2')}</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" >
              <div className="counter_box">
                <div className="number_img_shape">
                  <Image src={shape_03} alt="Shape" opacity= "0.2"/>
                </div>
                <div className="counter">
                  <ReactVisibilitySensor
                    offset={{ top: 10 }}
                    delayedCall={true}
                    onChange={onVisibilityChange}
                  >
                    <CountUp
                      start={0}
                      end={counter.startCounter ? 35 : 0}
                      duration={2}
                    />
                  </ReactVisibilitySensor>
                </div>
                <p>{t('FunfactOneData_Text3')}</p>
              </div>
            </div>
    
        </Row>
      </Container>
    </section>
  );
};

export default FunfactOne;
