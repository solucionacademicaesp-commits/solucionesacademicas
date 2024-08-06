import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import Footer from "@/components/footer";
import BlogTwo from "@/components/blog-two";
import { useTranslations } from 'next-intl'

const Services = () => {
  const t = useTranslations('Index')
  return (
    <MenuContextProvider>
      <Layout PageTitle="Blog Page">
        <HeaderOne />
        <div className="spaceheader"></div>
        {/* <PageHeader title={t('navLinksData_Services')} name="Blog" /> */}
        <BlogTwo 
        
        />
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

export default Services;
