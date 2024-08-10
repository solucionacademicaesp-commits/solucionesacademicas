import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import Footer from "@/components/footer";
import ServiceDetails from "@/components/service-details";
import { useTranslations } from 'next-intl'

import service1 from "@/images/slider/service1.webp";
import SponsorOne from "@/components/sponsor-one";

const Service1 = () => {
  const t = useTranslations('Index')

  return (
    <MenuContextProvider>
      <Layout PageTitle={t('SlideOneData_Service1')}>

        <HeaderOne />
        <ServiceDetails
          imageDetail={service1}
          postTitle={t('SlideOneData_Service1')}
          description={t('Service1_Description')}
          request={t('navLinksData_Request')}
          price=""
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
export default Service1;
