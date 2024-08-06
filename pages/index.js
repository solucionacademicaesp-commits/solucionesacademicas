import React from "react";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import Footer from "@/components/footer";
import SliderOne from "@/components/slider-one";
import FeatureOne from "@/components/feature-one";
import AboutOne from "@/components/about-one";
import ServiceOne from "@/components/service-one";
import CtaOne from "@/components/cta-one";
import FunfactOne from "@/components/funfact-one";
import GalleryOne from "@/components/gallery-one";
import TestimonialsOne from "@/components/testimonials-one";
import SponsorOne from "@/components/sponsor-one";
import CtaTwo from "@/components/cta-two";
import BlogOne from "@/components/blog-one";
import ContactOne from "@/components/contact-one";
import { useTranslations } from 'next-intl'
import VideoOne from "@/components/video-one";
import AboutThree from "@/components/about-three";
import AboutFive from "@/components/about-five";

const HomeOne = () => {
  const t = useTranslations('Index')
  return (
    <MenuContextProvider>
      <Layout PageTitle={t('title')}>
        <HeaderOne />
        <SliderOne />
        <FeatureOne />
        <AboutOne />
        <AboutFive/>
        {/* <VideoOne/> */}
        <ServiceOne />
        <CtaOne />
        <TestimonialsOne />
        <FunfactOne />
        <SponsorOne/>
        {/* <GalleryOne /> */}
        {/* <SponsorOne /> */}
        {/* <CtaTwo /> */}
        {/* <BlogOne /> */}
        {/* <ContactOne /> */}
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default HomeOne;

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/index/${locale}.json`)
      },
    },
  }
}