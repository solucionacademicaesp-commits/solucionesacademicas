import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import Footer from "@/components/footer";
import ServiceDetails from "@/components/service-details";
import { useTranslations } from 'next-intl'

import service5 from "@/images/slider/service5.webp";
import SponsorOne from "@/components/sponsor-one";

const Service5 = () => {
  const t = useTranslations('Index')

  return (
    <MenuContextProvider>
      <Layout PageTitle={t('SlideOneData_Service5')}>

        <HeaderOne />
        <ServiceDetails
          imageDetail={service5}
          postTitle={t('SlideOneData_Service5')}
          description={t('Service5_Description')}
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
export default Service5;
