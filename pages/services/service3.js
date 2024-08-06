import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import Footer from "@/components/footer";
import ServiceDetails from "@/components/service-details";
import { useTranslations } from 'next-intl'

import service3 from "@/images/slider/service3.webp";
import SponsorOne from "@/components/sponsor-one";

const Service3 = () => {
  const t = useTranslations('Index')

  return (
    <MenuContextProvider>
      <Layout PageTitle={t('SlideOneData_Service3')}>

        <HeaderOne />
        <ServiceDetails
          imageDetail={service3}
          postTitle={t('SlideOneData_Service3')}
          description={t('Service3_Description')}
          request={t('navLinksData_Request')}
          price="ab 40 € pro Seite"
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
export default Service3;
