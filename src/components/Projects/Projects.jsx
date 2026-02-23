"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Card from "../Card/Card";
import "./Projects.css";

function Projects() {
  return (
    <div id="projects">
      <h1 id="para">2+ YEARS EXPERIENCED IN PROJECTS</h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="slider"
      >
        <SwiperSlide>
          <Card title="VIRTUAL ASSISTANT" />
        </SwiperSlide>

        <SwiperSlide>
          <Card title="AI POWERED FITNESS WEBSITE" />
        </SwiperSlide>

        <SwiperSlide>
          <Card title="PORTFOLIO WEBSITE" />
        </SwiperSlide>

        <SwiperSlide>
          <Card title="E-COMMERCE APP" />
        </SwiperSlide>

        <SwiperSlide>
          <Card title="Second Brain" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Projects;
