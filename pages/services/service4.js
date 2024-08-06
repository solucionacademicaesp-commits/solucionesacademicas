import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import Footer from "@/components/footer";
import ServiceDetails from "@/components/service-details";
import { useTranslations } from 'next-intl'

import service4 from "@/images/slider/service4.webp";
import SponsorOne from "@/components/sponsor-one";

const Service4 = () => {
  const t = useTranslations('Index')

  return (
    <MenuContextProvider>
      <Layout PageTitle={t('SlideOneData_Service4')}>

        <HeaderOne />
        <ServiceDetails
          imageDetail={service4}
          postTitle={t('SlideOneData_Service4')}
          description={t('Service4_Description')}
          request={t('navLinksData_Request')}
          price="ab 49 € pro Seite"
        />
        <SponsorOne/>
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../../messages/index/${locale}.json`)
      },
    },
  }
}
export default Service4;
