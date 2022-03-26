import React, { useEffect, useState } from "react";
import Navbar from "../../components/navBar/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper";
import service from "../../service/imageApi";

import "swiper/css";
import "swiper/css";
import "swiper/css/effect-fade";
import "./Home.scss";
import Spinner from "../../components/UI/Spinner";

function Home({ isLoaded }) {
  const [slide, setSlide] = useState();

  useEffect(() => {
    console.log("test");
    service.getSlideImgs().then((res) => {
      isLoaded && setSlide(res.data.attributes.image_slider.data);
    });
  }, [isLoaded]);

  const renderSlide = (imgUrl, i) => {
    return (
      <SwiperSlide key={i}>
        <img className="h-full object-cover" src={`${imgUrl}`} />
      </SwiperSlide>
    );
  };

  return (
    <div className="App relative h-screen overflow-hidden m-auto ">
      <section
        className={`text-gray-100 h-full md:w-full sm:w-full`}
        style={{ backgroundColor: "rgb(23, 23, 23) " }}
      >
        <Navbar />
        {slide ? (
          <Swiper
            autoplay={{
              delay: 5000,
            }}
            effect={"fade"}
            modules={[EffectFade, Autoplay]}
            className="mySwiper"
          >
            {slide &&
              slide.map((item, i) => renderSlide(item.attributes.url, i))}
          </Swiper>
        ) : (
          <Spinner />
        )}
      </section>
    </div>
  );
}

export default Home;
