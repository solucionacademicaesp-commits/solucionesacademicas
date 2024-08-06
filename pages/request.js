import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import Footer from "@/components/footer";

import { useTranslations } from 'next-intl'
import ContactOne from "@/components/contact-one";
import SponsorOne from "@/components/sponsor-one";

const Request = () => {
  const t = useTranslations('Index')
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('navLinksData_Request')}>
        <HeaderOne/>
        {/* <PageHeader title={t('navLinksData_Request')} name="Request" /> */}
        {/* <SponsorOne /> */}
        <br></br>
        <div className="spaceheader"></div>
        
        <ContactOne/>
        <SponsorOne/>
        <Footer/>
        
      </Layout>
    </MenuContextProvider>
  );
};

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/index/${locale}.json`)
      },
    },
  }
}
export default Request;
