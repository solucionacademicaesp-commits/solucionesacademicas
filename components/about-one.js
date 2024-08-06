import { AboutOneData } from "@/data";
import Link from "@/components/link";
import React from "react";
import { useTranslations } from "next-intl";

const AboutOne = () => {
  const t = useTranslations('Index');
  const { title, tagLine, content, button } = AboutOneData;
  return (
    <section className="about_area section_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about_image about-image__updated"></div>
          </div>
          <div className="col-md-6">
            <div className="about_details">
              <div className="hero-title-with-shape">
                <h4 className="heading_with_border">{t('AboutOneData_Tagline')}</h4>
                <h1>{t('AboutOneData_Title')}</h1>
              </div>
              <p>{t('AboutOneData_Content')}</p>
              {/* <Link href="/contact" className="btn-yellow">
              {t('AboutOneData_Button')}
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
