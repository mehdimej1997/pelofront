import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navBar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Form from "../../components/form/Form";

function Contact() {
  return (
    <>
      <section className={`App text-gray-100 m-auto`}>
        <Navbar />
        <Form />
        <Footer />
      </section>
    </>
  );
}

export default Contact;
