import React, { useContext, Fragment, useRef } from "react";
import Link from "@/components/link";
import { FooterBottomData, NavLinksData } from "@/data";
import { MenuContext } from "@/context/menu-context";
import ChangeLanguaje from "./change-languaje";
import { useTranslations } from "next-intl";

const MobileMenu = () => {
  const t = useTranslations('Index');
  const { menuStatus, updateMenuStatus } = useContext(MenuContext);
  const menuEl = useRef(null);
  const handleMenuClick = (e) => {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };
  return (
    <div className="mobile-menu animated fadeInLeft">
      <div className="mobile-menu__overlay" onClick={handleMenuClick}></div>
      <div className="mobile-menu__inner">
        <div className="mobile-menu__top">
          <h1 className="mobile-menu__logo">
            <Link href="/">Wir schreiben für sie</Link>
          </h1>
          <a href="#" className="mobile-menu__close" onClick={handleMenuClick}>
            <i className="fa fa-times"></i>
          </a>
        </div>
        <nav className="mobile-menu__links" ref={menuEl}>
          <ul>

            <li>
              <Link href={"/"}>{t('navLinksData_Home')}</Link>
            </li>

            <li>
              <Link href={"/services"}>{t('navLinksData_Services')}</Link>
            </li>
            <li>
              <Link href={"/contact"}>{t('navLinksData_Contact')}</Link>
            </li>
            <li>
              <Link href={"/about"}>{t('AboutThreeData_Button')}</Link>
            </li>
            <li>
              <Link href={"/faq"}>{t('navLinksData_FAQ')}</Link>
            </li>

          </ul>
        </nav>
        <div className="mobile-menu__text">

          {t('Footer_SubTitle')}<br />
          {t('Footer_Text')}

        </div>
        <div className="mobile-menu__socials">
          {FooterBottomData.social.map(({ icon, url }, index) => {
            return <a key={index} href={url} className={`${icon}`}></a>;
          })}
        </div>
        <br />
        
        <Link href="/request" className="btn-yellow">
              {t('navLinksData_Request')}
            </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
