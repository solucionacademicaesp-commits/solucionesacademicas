import Link from "@/components/link";
import React from "react";
import { useTranslations } from 'next-intl';

const CtaOne = () => {
  const t = useTranslations('Index');
  return (
    <section className="call_to_action">
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-sm-8 col-xs-12">
            <h1>{t('CallToActionOneData_Title')}</h1>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12 text-end cta_responsive_left">
            <Link href="/request" className="btn-gray">
              {t('navLinksData_Request')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaOne;
