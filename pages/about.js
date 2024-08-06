import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";

import Footer from "@/components/footer";
import AboutFour from "@/components/about-four";

import AboutThree from "@/components/about-three";

const About = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="About Page">
        <HeaderOne/>
        <br/>
        <div className="spaceheader"></div>
        <AboutFour/>
        <AboutThree/>
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
export default About;
