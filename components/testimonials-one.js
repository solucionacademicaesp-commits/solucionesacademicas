import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { TestimonialOneData } from "@/data";
import Image from "next/image";
import avatar from "@/images/testimonial/avatar.webp";
import { useTranslations } from 'next-intl';

const TestimonialsOne = () => {
  const { title, posts } = TestimonialOneData;
  const t = useTranslations('Index');
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const testimonialsThumbOptions = {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 1400,
    autoplay: {
      delay: 5000
    }
  };
  const testimonialsOptions = {
    modules: [Autoplay, Thumbs, Navigation],
    speed: 1400,
    mousewheel: true,
    slidesPerView: 1,
    navigation: {
      nextEl: "#testi-slide-next",
      prevEl: "#testi-slide-prev"
    },
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="testimonial_area text-center section_padding">
      <h1 className="testimonial_heading_shape">{t('TestimonialOneData_Title')}</h1>
      <Container>
        <Swiper
          id="testimonials-two__thumb"
          onSwiper={setThumbsSwiper}
          {...testimonialsThumbOptions}
        >
          <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name1')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name2')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name3')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name4')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name5')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name6')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name7')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name8')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name9')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name10')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name11')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name12')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name13')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name14')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name15')} layout="responsive" />
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="testi-thumb-img">
                <Image src={avatar} alt={t('TestimonialOneData_Name16')} layout="responsive" />
              </div>
            </SwiperSlide>

          
        </Swiper>
        <Swiper
          className="testimonial_slider "
          id="testimonials-two__carousel"
          thumbs={{ swiper: thumbsSwiper }}
          {...testimonialsOptions}
        >
          
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content1')}</p>
              <h4>{t('TestimonialOneData_Name1')}</h4>
              <span>{t('TestimonialOneData_Date1')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content2')}</p>
              <h4>{t('TestimonialOneData_Name2')}</h4>
              <span>{t('TestimonialOneData_Date2')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content3')}</p>
              <h4>{t('TestimonialOneData_Name3')}</h4>
              <span>{t('TestimonialOneData_Date3')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content4')}</p>
              <h4>{t('TestimonialOneData_Name4')}</h4>
              <span>{t('TestimonialOneData_Date4')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content5')}</p>
              <h4>{t('TestimonialOneData_Name5')}</h4>
              <span>{t('TestimonialOneData_Date5')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content6')}</p>
              <h4>{t('TestimonialOneData_Name6')}</h4>
              <span>{t('TestimonialOneData_Date6')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content7')}</p>
              <h4>{t('TestimonialOneData_Name7')}</h4>
              <span>{t('TestimonialOneData_Date7')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content8')}</p>
              <h4>{t('TestimonialOneData_Name8')}</h4>
              <span>{t('TestimonialOneData_Date8')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content9')}</p>
              <h4>{t('TestimonialOneData_Name9')}</h4>
              <span>{t('TestimonialOneData_Date9')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content10')}</p>
              <h4>{t('TestimonialOneData_Name10')}</h4>
              <span>{t('TestimonialOneData_Date10')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content11')}</p>
              <h4>{t('TestimonialOneData_Name11')}</h4>
              <span>{t('TestimonialOneData_Date11')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content12')}</p>
              <h4>{t('TestimonialOneData_Name12')}</h4>
              <span>{t('TestimonialOneData_Date12')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content13')}</p>
              <h4>{t('TestimonialOneData_Name13')}</h4>
              <span>{t('TestimonialOneData_Date13')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content14')}</p>
              <h4>{t('TestimonialOneData_Name14')}</h4>
              <span>{t('TestimonialOneData_Date14')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content15')}</p>
              <h4>{t('TestimonialOneData_Name15')}</h4>
              <span>{t('TestimonialOneData_Date15')}</span>
            </SwiperSlide>
            <SwiperSlide className="testimonial_details">
              <p>{t('TestimonialOneData_Content16')}</p>
              <h4>{t('TestimonialOneData_Name16')}</h4>
              <span>{t('TestimonialOneData_Date16')}</span>
            </SwiperSlide>
         
          <div className="swiper-button-prev" id="testi-slide-prev">
            <i className="fa fa-angle-left"></i>
          </div>
          <div className="swiper-button-next" id="testi-slide-next">
            <i className="fa fa-angle-right"></i>
          </div>
        </Swiper>
      </Container>
    </section>
  );
};

export default TestimonialsOne;
