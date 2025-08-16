import React from "react";
import { FooterBottomData, FooterInfo, FooterWidgets, Logo } from "@/data";
import FooterShape from "@/images/shape/footer-shape.png";
import Img from "@/components/img";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Row } from "react-bootstrap";


const Footer = () => {
  const t = useTranslations('Index');
  return (
    <footer className="footer_area">
      
      <div className="footer_content section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="footer_textwidget textwidget">
                <h2>{t('Footer_Title')}</h2>
                <h4>{t('Footer_SubTitle')}</h4>
                <p>{t('Footer_Text')}</p>
                <div className="col-md-4 col-sm-6 copyright_social">
                <ul>
                  {FooterBottomData.social.map(({ icon, url }, index) => (
                    <div className="socialLinks"key={`footer-social-link-${index}`}>
                    <li >
                      <Link href={url}>
                        <i className={`fa ${icon}`}></i>
                      </Link>
                    </li>
                    </div>
                  ))}
                </ul>
              </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-3">
              <h2>{t("Footer_Links")}</h2>
              <ul className="footer_link">

                <li >
                  <Link href="/services">{t('navLinksData_Services')}</Link>
                </li>
                <li >
                  <Link href="/contact">{t('navLinksData_Contact')}</Link>
                </li>
                <li >
                  <Link href="/faq">{t('navLinksData_FAQ')}</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-3">
            <h2>{t("navLinksData_Services")}</h2>
              <ul className="footer_link ">
                <li >
                  <Link href="/services/service1">{t('SlideOneData_Service1')}</Link>
                </li>
                <li >
                  <Link href="/services/service2">{t('SlideOneData_Service2')}</Link>
                </li>
                <li >
                  <Link href="/services/service3">{t('SlideOneData_Service3')}</Link>
                </li>


              </ul>
            </div>
            <div className="col-md-2 col-sm-3">
              <br/>
              <ul className="footer_link">

                <li >
                  <Link href="/services/service4">{t('SlideOneData_Service4')}</Link>
                </li>
                <li >
                  <Link href="/services/service5">{t('SlideOneData_Service5').substring(0, 14)}</Link>
                </li>
                <li >
                  <Link href="/services/service6">{t('SlideOneData_Service6')}</Link>
                </li>

              </ul>
            </div>
          </div>
          <div className="copyright_area">
            <div className="row">
              <div className="col-md-8 col-sm-6 copyright_text">
                <p>
                  &copy; copyright {new Date().getFullYear()} by AndyMC
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
