import { ServiceSidebarListData, ServiceSidebarOtherData } from "@/data";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ServiceSidebar = () => {
  const router = useRouter();
  const [active, setActive] = useState(parseInt(router.asPath.substr(router.asPath.length - 1)));
  const t = useTranslations('Index')
  return (
    <div className="service_details_right">
      <h1 className="text-center">{t('navLinksData_Services')}</h1>
      <div className="service_details_sv_cnt text-center service_cool_head">
        <ul className="nav nav-tabs">
          {
            (active !== 1)
              ?
              <li>
                <Link href="/services/service1">
                  <div className="service_center_left">
                    <span>{t('SlideOneData_Service1')}</span>
                  </div>
                </Link>
              </li> : null
          }
          {
            (active !== 2)
              ?
              <li>
                <Link href="/services/service2">
                  <div className="service_center_left">
                    <span>{t('SlideOneData_Service2')}</span>
                  </div>
                </Link>
              </li> : null
          }
          {
            (active !== 3)
              ?
              <li>
                <Link href="/services/service3">
                  <div className="service_center_left">
                    <span>{t('SlideOneData_Service3')}</span>
                  </div>
                </Link>
              </li> : null
          }
          {
            (active !== 4)
              ?
              <li>
                <Link href="/services/service4">
                  <div className="service_center_left">
                    <span>{t('SlideOneData_Service4')}</span>
                  </div>
                </Link>
              </li> : null
          }
          
          {
            (active !== 6)
              ?
              <li>
                <Link href="/services/service6">
                  <div className="service_center_left">
                    <span>{t('SlideOneData_Service6')}</span>
                  </div>
                </Link>
              </li> : null
          }
          {
            (active !== 5)
              ?
              <li>
                <Link href="/services/service5">
                  <div className="service_center_left">
                    <span>{t('SlideOneData_Service5')}</span>
                  </div>
                </Link>
              </li> : null
          }
        </ul>
      </div>

    </div>
  );
};

export default ServiceSidebar;
