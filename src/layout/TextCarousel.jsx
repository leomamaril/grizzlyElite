import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { TEXT_CAROUSEL } from "../data";
import { Mousewheel, Pagination } from "swiper/modules";
import { Container, SubContainer } from "../components/ui/container";
export default function TextCarousel() {
  return (
    <section className="mb-5">
      <Container>
        <SubContainer>
        <div className="d-flex mt-5 d-md-none"/>
          <div className="d-none grizzly-eclipse-container d-md-flex">
            <div className="grizzly-eclipse-a" />
          </div>

          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={30}
            mousewheel={true}
            pagination={{ clickable: true }}
            modules={[Mousewheel, Pagination]}
            loop={true}
            className="text-carousel"
          >
            {TEXT_CAROUSEL.map((item, index) => (
              <SwiperSlide key={index} className="">
                <div className="text-start text-white">
                  <h2 className="font-xl font-bold ">{item.header}</h2>
                  <p className="mt-4 font-ctext w-75">{item.body}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </SubContainer>
      </Container>
    </section>
  );
}
