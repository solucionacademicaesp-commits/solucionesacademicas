import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import bizum from "@/images/pay-method/bizum.png";
import mastercard from "@/images/pay-method/mastercard.jpg";
import wise from "@/images/pay-method/wise.png";
import PayPal from "@/images/pay-method/PayPal.png";
import stripe from "@/images/pay-method/stripe.png";
import visa from "@/images/pay-method/visa.png";
import Image from "next/image";

const SponsorOne = ({ extraClass }) => {
  const sponsorCarouselOptions = {
    spaceBetween: 100,
    slidesPerView: 5,
    autoplay: { delay: 3000 },
    loop: true,
    breakpoints: {
      0: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      375: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      575: {
        spaceBetween: 30,
        slidesPerView: 3
      },
      767: {
        spaceBetween: 50,
        slidesPerView: 4
      },
      991: {
        spaceBetween: 50,
        slidesPerView: 5
      },
      1199: {
        spaceBetween: 100,
        slidesPerView: 5
      }
    }
  };
  return (
    <div
      className={`clients_logo_area text-center section_padding_modified  ${extraClass}`}
    >
      <Container>
        <Swiper {...sponsorCarouselOptions} className="clients_logo ">
          <div className="swiper-wrapper">
            <SwiperSlide>
              <Image src={bizum} alt="bizum" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={mastercard} alt="mastercard" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={wise} alt="wise" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={PayPal} alt="PayPal" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={stripe} alt="stripe" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={visa} alt="visa" />
            </SwiperSlide>
          </div>
        </Swiper>
      </Container>
    </div>
  );
};

export default SponsorOne;
