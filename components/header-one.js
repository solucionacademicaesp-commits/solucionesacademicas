import React, { Fragment, useContext, useEffect, useState } from "react";
import { Logo, NavLinksData, TopbarInfos, FooterBottomData } from "@/data";
import Link from "@/components/link";
import Img from "@/components/img";
import { useRouter } from "next/router";
import { MenuContext } from "@/context/menu-context";
import ChangeLanguaje from "./change-languaje";
import { useTranslations } from "next-intl";

const HeaderOne = () => {
  const t = useTranslations('Index');
  const router = useRouter();
  const [sticky, setSticky] = useState(false);
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <Fragment>
      {/* <header className="header_area">
        <div className="container">
          <div className="header_social">
            <ul className="hd_social_icons">
              {FooterBottomData.social.map(({ icon, url }, index) => (
                <li key={`header-social-${index}`}>
                  <a href={url}>
                    <i className={`fa ${icon}`}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="header_contact text-end">
            <ul className="hd_contact">
              <li >
                <i className="icon-placeholder"></i>{t('Header_Address')} 
                <a href="https://goo.gl/maps" > 12 sdfsdfas, Ssdfboa ret</a>
              </li>
              <li >
                <i className="icon-phone-call"></i> {t('Header_Call_Now')}
                <a href="tel:+55555" > +5 555-55-5555</a>
              </li>
              <li ></li>
            </ul>
          </div>
        </div>
      </header> */}

      <div
        className={`main_menu_area ${true === sticky
          ? " stricky stricky-fixed slideInDown animated"
          : " stricky slideIn animated"
          }`}
      >
        <div className="container">
          <div className="main_menu_area__left">
            <Link href="/">
              <Img src={Logo.dark} alt="Logo Do my homework" layout="fixed" />
            </Link>
            <span className="mobile-menu__toggler" onClick={handleMenuClick}>
              <i className="fa fa-bars"></i>
            </span>
          </div>
          <div className="main_menu_area__right">
            <nav className="main_menu_area__menu">
              <ul className="nav navbar-nav navigation-box">
                <li
                  className={router.pathname == "/" ? "active" : ""}
                >
                  <Link href={"/"}>{t('navLinksData_Home')}</Link>
                </li>
                <li
                  className={router.pathname == "/services" ? "active" : ""}
                >
                  <Link href={"/services"}>{t('navLinksData_Services')}</Link>
                </li>
                <li
                  className={router.pathname == "/contact" ? "active" : ""}
                >
                  <Link href={"/contact"}>{t('navLinksData_Contact')}</Link>
                </li>
                <li
                  className={router.pathname == "/contact" ? "active" : ""}
                >
                  <Link href={"/about"}>{t('Header_About')}</Link>
                </li>
                <li
                  className={router.pathname == "/faq" ? "active" : ""}
                >
                  <Link href={"/faq"}>{t('navLinksData_FAQ')}</Link>
                </li>
              </ul>
            </nav>
            {/* <Link href="/contact" className="btn-yellow">
              BOOK TODAY
            </Link> */}
            <Link href="/request" className="btn-yellow">
              {t('navLinksData_Request')}
            </Link>

          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderOne;
