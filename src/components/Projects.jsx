import React from "react";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  return (
    <section className="py-20 align-element" id="projects">
      <SectionTitle text="Web creation" />

      <div className="flex   gap-6 items-center py-16 justify-between">
        <div ref={swiperNavPrevRef}>
          <MdArrowBackIosNew className="h-10 w-10 shadow-md p-2 cursor-pointer hover:text-emerald-900" />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: swiperNavPrevRef.current,
            nextEl: swiperNavNextRef.current,
          }}
          slidesPerView={1}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}>
          {projects.map((project) => {
            return (
              <SwiperSlide key={project.id}>
                <ProjectCards {...project} />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div ref={swiperNavNextRef}>
          <MdArrowForwardIos className="h-10 w-10 shadow-md p-2 cursor-pointer hover:text-emerald-900" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
