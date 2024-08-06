import React, { useEffect, useState } from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import Footer from "@/components/footer";
import ServiceDetails from "@/components/service-details";
import { useTranslations } from 'next-intl'

import service6 from "@/images/slider/service6.webp";
import SponsorOne from "@/components/sponsor-one";
import TableServices from "@/components/table-services";

const Service6 = () => {
  const t = useTranslations('Index')

  return (
    <MenuContextProvider>
      <Layout PageTitle={t('SlideOneData_Service6')}>

        <HeaderOne />
        <ServiceDetails
          imageDetail={service6}
          postTitle={t('SlideOneData_Service6')}
          description={t('Service6_Description')}
          request={t('navLinksData_Request')}
          price="ab 25 € pro Seite"
        />
        <TableServices/>
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
export default Service6;
