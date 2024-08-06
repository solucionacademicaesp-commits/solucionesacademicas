import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import ContactThree from "@/components/contact-three";
import Footer from "@/components/footer";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations('Index');
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('navLinksData_Contact')}>
        <HeaderOne />
        {/* <PageHeader title={t('navLinksData_Contact')} name="Contact" /> */}
        <div className="spaceheader"></div>
      <br/>
        <ContactThree />
        <Footer />
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
export default Contact;
