import { ServiceOneData } from "@/data";
import Link from "@/components/link";
import React from "react";
import Img from "@/components/img";
import authentic from "@/images/services/authentic.webp";
import teacher from "@/images/services/teacher.webp";
import graduate from "@/images/services/graduate.webp";
import { useTranslations } from "next-intl";

const ServiceOne = () => {
  const { title, posts } = ServiceOneData;
  const t = useTranslations('Index');
  return (
    <section className="service_area section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="hero-section-title text-center">
              <h1>{t('ServiceOneData_Title')}</h1>
              <h3>{t('ServiceOneData_Subtitle')}</h3>
            </div>
          </div>


          <div className="col-lg-4 col-md-6">
            <div className="service_box">
              <div className="service_img">
                <Img src={authentic} alt="service 1" layout="responsive" />
              </div>
              <div className="service_details">
                <Link href="/services">
                  <h2>{t('ServiceOneData_Title1')} </h2>
                </Link>
                <p>{t('ServiceOneData_Text1')}</p>
                <Link href="/services" className="btn-yellow">
                  {t('ServiceOneData_Button1')}
                </Link>
              </div>
            </div>
          </div>


          <div className="col-lg-4 col-md-6">
            <div className="service_box">
              <div className="service_img">
                <Img src={teacher} alt="service 1" layout="responsive" />
              </div>
              <div className="service_details">
                <Link href="/faq">
                  <h2>{t('ServiceOneData_Title2')} </h2>
                  <br/>
                </Link>
                <p>{t('ServiceOneData_Text2')}</p>
                <Link href="/faq" className="btn-yellow">
                  {t('ServiceOneData_Button2')}
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="service_box">
              <div className="service_img">
                <Img src={graduate} alt="service 1" layout="responsive" />
              </div>
              <div className="service_details">
                <Link href="/request">
                  <h2>{t('ServiceOneData_Title3')} </h2>
                  <br/>
                </Link>
                <p>{t('ServiceOneData_Text3')}</p>
                <br/>
                <Link href="/request" className="btn-yellow">
                  {t('ServiceOneData_Button3')}
                </Link>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
